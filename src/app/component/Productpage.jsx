"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/products");
      const data = await res.json();

      const allProducts = Array.isArray(data)
        ? data
        : data.products || [];

      setProducts(
        allProducts.filter(
          (p) => (p.status || "Active") === "Active"
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // FILTER
  const filtered = useMemo(() => {
    return (products || [])
      .filter((p) => (p.status || "Active") === "Active")
      .filter((p) =>
        p.name?.toLowerCase().includes(search.toLowerCase())
      );
  }, [products, search]);

  // ADD TO CART
  const addToCart = async (product) => {
    try {
      await fetch("http://localhost:7000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          image: product.image,
          price: product.discountPrice || product.price,
        }),
      });

      toast.success("Added to cart successfully!");
    } catch (err) {
      toast.error("Failed to add to cart!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 mt-24">

      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          <h1 className="text-2xl font-bold text-[#FCB13A]">
            Products
          </h1>

          {/* SEARCH (HIDDEN ON MOBILE) */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="hidden sm:block border px-4 py-2 rounded-xl w-80 focus:outline-none focus:ring-2 focus:ring-[#FCB13A]"
          />
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {filtered.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={
                  p.image?.startsWith("http")
                    ? p.image
                    : `http://localhost:7000${p.image}`
                }
                alt={p.name}
                className="h-56 w-full object-cover object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">

              <h2 className="font-semibold text-lg text-gray-800">
                {p.name}
              </h2>

              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {p.description}
              </p>

              <p className="font-bold text-lg mt-3 text-black">
                ₹ {p.discountPrice || p.price}
              </p>

              {/* BUTTONS */}
              <div className="grid grid-cols-2 gap-3 mt-4">

                <button
                  onClick={() => addToCart(p)}
                  className="bg-black hover:bg-gray-800 text-white py-2 rounded-lg text-sm transition"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() =>
                    router.push(
                      `/buy?product=${encodeURIComponent(JSON.stringify({
                        _id: p._id,
                        name: p.name,
                        price: Number(p.discountPrice || p.price),
                        image: p.image,
                        qty: 1
                      }))}`
                    )
                  }
                  className="bg-[#FCB13A] hover:bg-yellow-500 text-black py-2 rounded-lg text-sm font-medium transition"
                >
                  Buy Now
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}