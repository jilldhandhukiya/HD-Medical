"use client";
import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const countryCodes = ["+91", "+1", "+44", "+86", "+81", "+61", "+49", "+33"];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const svgRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setError("");
    setSubmitted(false);
    setIsLoading(true);

    const { fullName, email, phone, message } = formData;

    // Validation
    if (fullName.trim().length < 2) {
      setError("Full name must be at least 2 characters.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must be 7–15 digits.");
      setIsLoading(false);
      return;
    }

    if (message.trim().length < 4) {
      setError("Message must be at least 4 characters.");
      setIsLoading(false);
      return;
    }

    try {
      // Create form data for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      // Format phone without + symbol to prevent formula issues
      formDataToSend.append('phone', `${formData.countryCode.replace('+', '')} ${formData.phone}`);
      formDataToSend.append('message', formData.message);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFbu097uUKxDjRcGEZN_0BaGPwZncGPLnJWr98V2sbKJdXgQwPEAmeQxIhi_SH0Go75g/exec",
        {
          method: "POST",
          body: formDataToSend
        }
      );

      const result = await response.text();
      console.log('Response:', result);

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: ""
      });
      
      console.log("Form submitted successfully to Google Sheets");

    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to submit form. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const svg = svgRef.current;
    const container = svg?.parentElement;

    if (!svg || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const maxMove = 15;
      const translateX = Math.max(-maxMove, Math.min(maxMove, -x * 0.03));
      const translateY = Math.max(-maxMove, Math.min(maxMove, -y * 0.03));

      svg.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const handleMouseLeave = () => {
      svg.style.transform = "translate(0, 0)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex-1 relative px-4 py-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />

          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isLoading}
          />

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
