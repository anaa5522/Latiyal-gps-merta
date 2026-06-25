"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Account() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setUser(null);
  setOrders([]);
};

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:7000/api/orders/my-orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

 const fetchAccount = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const res = await axios.get(
      "http://localhost:7000/api/account/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setUser(res.data.user);
    await fetchOrders();

  } catch (err) {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setOrders([]);

  } finally {
    setLoading(false);
  }
};

  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500 text-white";

      case "Processing":
        return "bg-blue-500 text-white";

      case "Pending":
        return "bg-yellow-500 text-white";

      case "Cancelled":
        return "bg-red-500 text-white";

      default:
        return "bg-gray-500 text-white";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold animate-pulse">
            Loading Account...
          </h2>
        </div>
      </div>
    );
  }

 const isLoggedIn =
  typeof window !== "undefined" &&
  !!localStorage.getItem("token") &&
  user;

if (!isLoggedIn) {
  return (
    <div className="min-h-screen bg-[#F6F2EA] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">

        <div className="text-6xl text-[#FCB13A] mb-5">
          👤
        </div>

        <h2 className="text-3xl font-bold mb-3">
          Welcome
        </h2>

        <p className="text-gray-500 mb-8">
          Login or create an account to view
          your profile and orders.
        </p>

        <div className="flex gap-4">

          <a
            href="/login"
            className="flex-1 bg-black text-white py-3 rounded-xl font-semibold text-center"
          >
            Login
          </a>

          <a
            href="/register"
            className="flex-1 border border-black py-3 rounded-xl font-semibold text-center"
          >
            Register
          </a>

        </div>

      </div>
    </div>
  );
}

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">
              ⚠
            </span>
          </div>

          <h2 className="text-xl font-bold text-red-600 mb-2">
            Error
          </h2>

          <p className="text-gray-600">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 pt-28">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

  <div>
    <h1 className="text-4xl font-bold text-gray-900">
      My Account
    </h1>

    <p className="text-gray-500 mt-2">
      View your profile information and
      order history
    </p>
  </div>

  <button
    onClick={handleLogout}
    className="bg-[#FCB13A] text-white px-5 py-3 rounded-xl font-semibold"
  >
    Logout
  </button>

</div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-black/80  text-white h-32"></div>

          <div className="px-6 pb-6">
            <div className="-mt-12 flex flex-col md:flex-row md:items-center gap-5">

              <div className="w-24 h-24 rounded-full bg-[#FCB13A] border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-black">
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold lg:text-white text-black mb-10">
                  {user?.name}
                </h2>

                <p className="text-gray-500">
                 {user?.email}
                </p>
              </div>

              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
                Active Account
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

              <div className="bg-black/80  rounded-2xl p-5 border">
                <p className="text-white text-sm">
                  Total Orders
                </p>

                <h3 className="text-white text-3xl font-bold mt-2">
                  {orders.length}
                </h3>
              </div>

              <div className="bg-black/80  rounded-2xl p-5 border">
                <p className="text-white text-sm">
                  User ID
                </p>

                <p className="text-white font-medium text-sm break-all mt-2">
                   {user?.email}
                 
                </p>
              </div>

              <div className="bg-black/80 rounded-2xl p-5 border">
                <p className="text-white text-sm">
                  Account Type
                </p>

                <h3 className="text-white text-2xl font-bold mt-2">
                  Customer
                </h3>
              </div>

            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className="mt-10">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              My Orders
            </h2>

            <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
              {orders.length} Orders
            </span>
          </div>

          {orders.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">
                📦
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                No Orders Yet
              </h3>

              <p className="text-gray-500 mt-2">
                Your orders will appear here
                once you make a purchase.
              </p>
            </div>
          ) : (
            <div className="space-y-6">

              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-black/80 text-white rounded-3xl p-6 shadow-md border border-gray-200"
                >

                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row justify-between gap-5 border-b pb-5">

                    <div>
                      <h2 className="font-bold text-xl">
                        {order.customerName}
                      </h2>

                      <p className="">
                        {order.phone}
                      </p>

                      <p className="">
                        {order.email}
                      </p>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="font-semibold">
                        Order Date
                      </p>

                      <p className="text-gray-500">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>

                  </div>

                  {/* Products */}
                  <div className="bg-whit  mt-5 space-y-3">
                    {order.products?.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border rounded-2xl p-4"
                      >
                        <div className="flex items-center gap-4">

                          <img
                            src={
                              product.image?.startsWith("http")
                                ? product.image
                                : `http://localhost:7000${product.image}`
                            }
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-xl border"
                          />

                          <div>
                            <h3 className="font-semibold text-lg">
                              {product.name}
                            </h3>

                            <p className="text-gray-500">
                              Qty : {product.qty}
                            </p>

                            <p className="font-bold text-blue-600">
                              ₹{product.price}
                            </p>
                          </div>

                        </div>

                        <div className="text-right">
                          <p className="font-bold text-xl">
                            ₹{product.price * product.qty}
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">

                    <div>
                      <p>
                        <span className="font-semibold">
                          Payment:
                        </span>{" "}
                        {order.paymentMethod}
                      </p>

                      <p className="mt-1 text-2xl font-bold">
                        ₹{order.totalAmount}
                      </p>
                    </div>

                    <span
                      className={`px-5 py-2 rounded-full font-semibold ${statusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}