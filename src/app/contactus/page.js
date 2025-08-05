"use client";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
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
      
      // Format phone number to prevent formula parsing issues
      // Remove the + symbol and format as text to prevent Google Sheets formula errors
      const phoneFormatted = `${formData.countryCode.replace('+', '')} ${formData.phone}`;
      formDataToSend.append('phone', phoneFormatted);
      formDataToSend.append('message', formData.message);

      // Add a flag to indicate this is phone data (helps backend handle formatting)
      formDataToSend.append('phoneRaw', `${formData.countryCode} ${formData.phone}`);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <Header />

      {/* Background Wave Patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0,50 Q 50,0 100,50 T 200,50 L 200,0 L 0,0 Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0,50 Q 50,0 100,50 T 200,50 L 200,0 L 0,0 Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main className="relative z-10 pt-24 pb-12">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We&apos;d love to hear from you.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-900">Get In Touch</h2>
            
            {submitted && (
              <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}
            
            {error && (
              <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                {error}
              </div>
            )}

            <div className="space-y-8">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full pb-2 pt-4 text-gray-900 border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-500 focus:outline-none peer transition-all duration-200 text-lg"
                    required
                    placeholder=" "
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pb-2 pt-4 text-gray-900 border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-500 focus:outline-none peer transition-all duration-200 text-lg"
                    required
                    placeholder=" "
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
                  >
                    Email
                  </label>
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="relative">
                <div className="flex items-end border-b-2 border-gray-200 focus-within:border-blue-500 transition-all duration-200">
                  <div className="flex items-center pb-2 pt-4">
                    <Globe className="text-gray-500 mr-3 w-5 h-5" />
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-transparent focus:outline-none py-1 pr-3 text-gray-700 text-lg border-0"
                      disabled={isLoading}
                    >
                      {countryCodes.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pb-2 pt-4 text-gray-900 bg-transparent focus:outline-none ml-2 text-lg border-0"
                    required
                    placeholder=" "
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute text-gray-500 duration-300 transform top-3 z-10 origin-[0] text-lg ${
                      formData.phone ? 'scale-75 -translate-y-6' : 'scale-100 translate-y-0'
                    }`}
                    style={{ left: '120px' }}
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full pb-2 pt-4 text-gray-900 border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-500 focus:outline-none peer transition-all duration-200 text-lg resize-none"
                  required
                  placeholder=" "
                  disabled={isLoading}
                />
                <label
                  htmlFor="message"
                  className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full py-4 rounded-full text-white text-lg font-medium transition-all duration-300 shadow-lg ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1"
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
