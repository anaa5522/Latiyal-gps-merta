"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiMapPin, FiCreditCard } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

export default function Buy() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");

  useEffect(() => {
    const singleProduct = searchParams.get("product");
    const cartProducts = searchParams.get("cart");

    if (singleProduct) {
      setProducts([JSON.parse(singleProduct)]);
    } else if (cartProducts) {
      setProducts(JSON.parse(cartProducts));
    }
  }, [searchParams]);

  const subtotal = products.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.qty || 1),
    0
  );

  const total = Number(subtotal);

  // COD ORDER
  const placeCODOrder = async (token) => {
    const res = await fetch("http://localhost:7000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        customerName: name,
        email,
        phone,
        city,
        address,
        paymentMethod: "COD",
        products: products.map((p) => ({
          productId: p._id,
          name: p.name,
          price: p.price,
          qty: p.qty || 1,
          image: p.image || "",
        })),
        totalAmount: total,
      }),
    });

    return await res.json();
  };

  // RAZORPAY
  const payWithRazorpay = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(total) }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error("Payment order failed");
        return;
      }

      const options = {
        key: "rzp_live_T5RTmJ9Q5gOYbN",
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,

        handler: async function (response) {
          toast.success("Payment Successful");

          const token = localStorage.getItem("token");

          await fetch("http://localhost:7000/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              customerName: name,
              email,
              phone,
              city,
              address,
              paymentMethod: "UPI",
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              products: products.map((p) => ({
                productId: p._id,
                name: p.name,
                price: p.price,
                qty: p.qty || 1,
                image: p.image || "",
              })),
              totalAmount: total,
            }),
          });

          router.push("/account");
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      toast.error("Payment Failed");
    }
  };

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Login required");
      router.push("/login");
      return;
    }

    

    if (payment === "UPI") {
      await payWithRazorpay();
    }
  };

  return (
    
<div className="min-h-screen bg-[#F6F2EA] py-24 px-4">

  <Script src="https://checkout.razorpay.com/v1/checkout.js" />

  <ToastContainer />

  <div className="max-w-7xl mx-auto">

    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold text-[#FCB13A]">
        Secure Checkout
      </h1>
      <p className="text-slate-500 mt-2">
        Complete your order details and proceed to payment
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2">

        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-[#FCB13A] mb-6">
            Customer Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <input
              className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="w-full border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />

          </div>

          <textarea
            className="w-full border border-slate-300 rounded-xl p-4 mt-4 outline-none focus:ring-2 focus:ring-yellow-500"
            rows="5"
            placeholder="Complete Address"
            onChange={(e) => setAddress(e.target.value)}
          />

        </div>

        {/* PAYMENT */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 mt-6">

          <h2 className="text-2xl font-bold text-[#FCB13A] mb-5">
            Payment Method
          </h2>

          <label className="flex items-center justify-between border-2 border-green-500 bg-green-50 rounded-2xl p-5 cursor-pointer">

            <div>
              <h3 className="font-semibold text-lg">
                UPI / Razorpay
              </h3>

              <p className="text-sm text-slate-500">
                Pay securely using UPI, Cards, Net Banking & Wallets
              </p>
            </div>

            <input
              type="radio"
              checked={payment === "UPI"}
              onChange={() => setPayment("UPI")}
              className="w-5 h-5 "
            />

          </label>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 sticky top-24">

          <h2 className="text-2xl font-bold text-[#FCB13A] mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-slate-600 mb-3">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between text-slate-600 mb-3">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">
              Free
            </span>
          </div>

          <div className="border-t pt-4 mt-4">

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-[#FCB13A] hover:bg-black transition-all duration-300 text-white font-semibold py-4 rounded-2xl"
          >
            Pay ₹{total}
          </button>

          <p className="text-center text-sm text-slate-500 mt-4">
            Secure payment powered by Razorpay
          </p>

        </div>

      </div>

    </div>

  </div>

</div>


  );
}