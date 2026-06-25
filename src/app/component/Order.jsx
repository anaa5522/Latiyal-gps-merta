"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH ORDERS
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/orders");

      if (res.data.success) {
        setOrders(res.data.orders || []);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.log("Order fetch error:", err);
      setOrders([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // STATUS COLOR
  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Processing":
        return "bg-blue-100 text-blue-600";
      case "Pending":
        return "bg-orange-100 text-orange-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>

        {/* EMPTY STATE */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
            No Orders Found
          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >

                {/* HEADER */}
                <div className="flex flex-col md:flex-row justify-between gap-5 border-b pb-5">

                  <div>
                    <h2 className="font-bold text-xl">
                      {order.customerName}
                    </h2>
                    <p className="text-gray-500">{order.phone}</p>
                    <p className="text-gray-500">{order.email}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">Order Date</p>
                    <p className="text-gray-500">
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

                </div>

                {/* PRODUCTS */}
                <div className="mt-6 space-y-4">

                  {(order.products || []).map((product, i) => (
                    <div
                      key={product.productId || product._id || i}
                      className="flex justify-between items-center border rounded-2xl p-4"
                    >

                      <div>
                        <h3 className="font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-500">
                          Qty: {product.qty || 1}
                        </p>
                      </div>

                      <div className="font-bold">
                        ₹{product.price}
                      </div>

                    </div>
                  ))}

                </div>

                {/* FOOTER */}
                <div className="mt-6 flex flex-col md:flex-row justify-between gap-5">

                  <div>
                    <p>
                      <span className="font-semibold">Payment:</span>{" "}
                      {order.paymentMethod}
                    </p>

                    <p>
                      <span className="font-semibold">Total:</span>{" "}
                      ₹{order.totalAmount}
                    </p>
                  </div>

                  <div>
                    <span
                      className={`px-5 py-2 rounded-full font-semibold ${statusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}