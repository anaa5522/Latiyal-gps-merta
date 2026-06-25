"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const API_URL = "http://localhost:7000/api/cart";

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // GET CART
  const getCart = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const updateQty = async (id, type) => {
    try {
      await fetch(`http://localhost:7000/api/cart/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });

      setCartItems((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                qty:
                  type === "inc"
                    ? item.qty + 1
                    : item.qty > 1
                    ? item.qty - 1
                    : 1,
              }
            : item
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:7000/api/cart/${id}`, {
        method: "DELETE",
      });

      setCartItems((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    router.push(
      `/buy?cart=${encodeURIComponent(JSON.stringify(cartItems))}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-6 px-3 sm:py-10 sm:px-4 mt-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#FCB13A]">
            🛒 My Cart
          </h1>

          <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
            {cartItems.length} Items
          </span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading cart...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-4">

              {cartItems.length === 0 ? (
                <div className="bg-white p-10 text-center rounded-2xl shadow">
                  <div className="text-5xl mb-3">🛒</div>
                  <h2 className="text-xl font-bold">Your cart is empty</h2>
                  <p className="text-gray-500 mt-1">
                    Add some products to continue shopping
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white p-4 sm:p-5 rounded-2xl shadow-md flex flex-col sm:flex-row gap-4 hover:shadow-lg transition"
                  >

                    {/* IMAGE */}
                    <img
                      src={
                        item.image?.startsWith("http")
                          ? item.image
                          : `http://localhost:7000${item.image}`
                      }
                      className="w-full sm:w-28 h-40 sm:h-28 object-cover rounded-xl "
                    />

                    {/* DETAILS */}
                    <div className="flex-1">

                      <h2 className="font-semibold text-lg">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        ₹ {item.price}
                      </p>

                      {/* QTY */}
                      <div className="flex items-center gap-3 mt-4">

                        <button
                          onClick={() => updateQty(item._id, "dec")}
                          className="w-9 h-9 rounded-full border hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="font-bold text-lg">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => updateQty(item._id, "inc")}
                          className="w-9 h-9 rounded-full border hover:bg-gray-100"
                        >
                          +
                        </button>

                      </div>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 font-semibold hover:text-red-700 sm:self-center"
                    >
                      Remove
                    </button>

                  </div>
                ))
              )}

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white p-6 rounded-2xl shadow-lg h-fit lg:sticky lg:top-20">

              <h2 className="text-xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="space-y-3 text-gray-600">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹ {subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold text-black">
                  <span>Total</span>
                  <span>₹ {subtotal}</span>
                </div>

              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-[#FCB13A] hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition"
              >
                Proceed to Buy
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                Secure checkout powered by your system
              </p>

            </div>

          </div>
        )}

      </div>
      <ToastContainer />
    </div>
  );
}