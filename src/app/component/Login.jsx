"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [step, setStep] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      setSuccess("");
      setLoading(true);

      const res = await axios.post(
        "http://localhost:7000/api/user/login",
        {
          email: email.toLowerCase().trim(),
          password: password.trim(),
        }
      );

      if (res.data?.message === "Please verify your email first") {
        setStep("otp");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setSuccess("Login Successful 🎉");

      setTimeout(() => {
        router.push("/account");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setError("");
      setSuccess("");
      setLoading(true);

      await axios.post("http://localhost:7000/api/user/verify-otp", {
        email,
        otp,
      });

      setSuccess("Verified 🎉 Now Login Again");
      setStep("login");
    } catch (err) {
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#eef0f5] min-h-screen flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-4xl bg-white rounded-[25px] overflow-hidden shadow-lg flex flex-col md:flex-row">

        {/* Left Side */}
        <div className="hidden md:block md:w-[45%] bg-[#1a1470] overflow-hidden">
          <img
            src="/ac0ec0d8b895d58cd1d064f7f9a29fff.jpg"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[55%] flex items-center bg-[#FCB13A] justify-center p-6 md:p-8">
          <div className="w-full max-w-[320px]">

            {/* Logo */}
            <div className="text-center mb-8">
              

              <p className="text-white text-2xl font-semibold">
                Welcome Back !
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

            {/* LOGIN */}
            {step === "login" && (
              <>
                <input
                  placeholder="Email"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-4 bg-white border border-black"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-6 bg-white border border-black"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full h-10 rounded-full bg-black shadow-lg text-white font-semibold hover:scale-[1.02] transition"
                >
                  {loading ? "Logging..." : "Login"}
                </button>
              </>
            )}

            {/* OTP */}
            {step === "otp" && (
              <>
                <p className="text-center text-sm mb-4">
                  Verify OTP sent to
                  <br />
                  <span className="font-semibold">{email}</span>
                </p>

                <input
                  placeholder="Enter OTP"
                  className="w-full h-10 px-4 rounded-full shadow-md outline-none mb-5 bg-white"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  onClick={verifyOtp}
                  disabled={loading}
                  className="w-full h-10 rounded-full bg-black shadow-lg text-white font-semibold hover:scale-[1.02] transition"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}