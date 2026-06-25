"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [step, setStep] = useState("register");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      setError("");
      setSuccess("");

      if (!form.name || !form.email || !form.password) {
        return setError("All fields are required");
      }

      if (form.password !== form.confirmPassword) {
        return setError("Passwords do not match");
      }

      setLoading(true);

      await axios.post("http://localhost:7000/api/user/register", {
        name: form.name.trim(),
        email: form.email.toLowerCase().trim(),
        password: form.password,
      });

      setSuccess("OTP sent to your email 📩");
      setStep("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setError("");
      setSuccess("");
      setLoading(true);

      const res = await axios.post(
        "http://localhost:7000/api/user/verify-otp",
        {
          email: form.email.toLowerCase().trim(),
          otp: String(otp),
        }
      );

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      setSuccess("Account Verified 🎉");
      setStep("done");

      setTimeout(() => {
        router.push("/account");
      }, 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" py-8 px-4 flex justify-center py-30 bg-[#F6F2EA]">
      <div className="w-full max-w-4xl  rounded-[25px] overflow-hidden shadow-lg flex flex-col md:flex-row">

        {/* Left Side */}
        <div className="hidden md:flex md:w-[50%] bg-white items-center justify-center ">
          <img
            src="/9d90a8376e66fb64c982c317a3779529.jpg"
            alt="Register"
            className=" w-auto object-contain object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[55%] flex items-center bg-yellow-500 justify-center p-6 md:p-8">
          <div className="w-full max-w-[300px]">

            <div className="text-center ">
             

              <p className="text-black mb-7 text-2xl font-medium">
                Welcome !
              </p>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-3 text-center">
                {error}
              </p>
            )}

            {success && (
              <p className="text-green-600 text-sm mb-3 text-center">
                {success}
              </p>
            )}

            {step === "register" && (
              <>
                <input
                  name="name"
                  placeholder="Name"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-3 bg-white border border-black"
                  onChange={handleChange}
                />

                <input
                  name="email"
                  placeholder="Email"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-3 bg-white border border-black"
                  onChange={handleChange}
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-3 bg-white border border-black"
                  onChange={handleChange}
                />

                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-5 bg-white border border-black"
                  onChange={handleChange}
                />

                <button
                  onClick={handleRegister}
                  disabled={loading}
                  className="w-full h-10 rounded-full bg-black shadow-lg text-white font-semibold"
                >
                  {loading ? "Sending OTP..." : "Register"}
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <p className="text-center text-sm mb-4">
                  OTP sent to <b>{form.email}</b>
                </p>

                <input
                  placeholder="Enter OTP"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-5 bg-white"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  onClick={verifyOtp}
                  disabled={loading}
                  className="w-full h-10 rounded-full bg-white shadow-lg text-[#1a1470] font-semibold"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </>
            )}

            {step === "done" && (
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">
                  Account Verified ✔
                </h3>
                <p className="text-sm mt-2">Redirecting...</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}