"use client"
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Globe } from "lucide-react";

// Add this custom hook for intersection observer animations
function useInView(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// Add this custom hook for the counter animation (only for impact section)
function useCountAnimation(targetValue, duration = 3000) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value from string like "20+" or "5,000+"
    const numericValue = parseInt(targetValue.replace(/[^0-9]/g, ''));

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Use easeOutCubic for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutCubic * numericValue);

      setCurrentValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue, duration]);

  // Format the current value back to match the original format
  const formatValue = (value) => {
    if (targetValue.includes(',')) {
      return value.toLocaleString() + (targetValue.includes('+') ? '+' : '');
    }
    return value + (targetValue.includes('+') ? '+' : '') + (targetValue.includes('%') ? '%' : '');
  };

  return { currentValue: formatValue(currentValue), ref: elementRef };
}

// Static counter component for hero stats section
function StaticCounter({ value, label }) {
  return (
    <div className="relative group z-10">
      {/* Individual stat item */}
      <div className="relative hover:bg-gradient-to-b hover:from-[#17a6e0]/5 hover:to-[#40B7E4]/5 rounded-2xl p-4 transition-all duration-500 hover:scale-110 hover:shadow-lg group">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17a6e0]/10 to-[#40B7E4]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

        {/* Number with enhanced styling */}
        <div className="relative text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#17a6e0] to-[#40B7E4] group-hover:from-[#0d7fad] group-hover:to-[#17a6e0] transition-all duration-500 transform group-hover:scale-110">
          {value}
        </div>

        {/* Label with enhanced styling */}
        <div className="relative text-xs md:text-sm text-gray-600 mt-2 font-semibold group-hover:text-gray-800 transition-colors duration-500 leading-tight">
          {label}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#17a6e0] to-[#40B7E4] group-hover:w-8 transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
}

// Animated counter component (only for impact section)
function AnimatedCounter({ value, label, isWhiteText = false }) {
  const { currentValue, ref } = useCountAnimation(value, 3000);

  return (
    <div ref={ref} className="relative group z-10">
      {/* Individual stat item */}
      <div className="relative hover:bg-gradient-to-b hover:from-[#17a6e0]/5 hover:to-[#40B7E4]/5 rounded-2xl p-4 transition-all duration-500 hover:scale-110 hover:shadow-lg group">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17a6e0]/10 to-[#40B7E4]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

        {/* Number with enhanced styling */}
        <div className={`relative text-2xl md:text-3xl font-black transition-all duration-500 transform group-hover:scale-110 ${isWhiteText
          ? 'text-white'
          : 'text-transparent bg-clip-text bg-gradient-to-r from-[#17a6e0] to-[#40B7E4] group-hover:from-[#0d7fad] group-hover:to-[#17a6e0]'
          }`}>
          {currentValue}
        </div>

        {/* Label with enhanced styling */}
        <div className={`relative text-xs md:text-sm mt-2 font-semibold transition-colors duration-500 leading-tight ${isWhiteText
          ? 'text-white group-hover:text-white/90'
          : 'text-gray-600 group-hover:text-gray-800'
          }`}>
          {label}
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r transition-all duration-500 rounded-full group-hover:w-8 ${isWhiteText
          ? 'from-white to-white/80'
          : 'from-[#17a6e0] to-[#40B7E4]'
          }`}></div>
      </div>
    </div>
  );
}

function Card({ title, image, number, index = 0 }) {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br from-white via-blue-50 to-blue-100
        rounded-2xl shadow-md
        transition-all duration-700 hover:scale-105 hover:shadow-xl
        border border-blue-100
        px-5 py-6
        w-[270px] sm:w-[300px] md:w-[320px] lg:w-[340px]
        transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        hover:rotate-1 hover:-translate-y-2
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 relative rounded-xl overflow-hidden mb-4 shadow group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center text-base font-bold shadow-2xl border-2 border-white transition-all duration-300 hover:scale-110 hover:rotate-12">
          {number}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-[#17a6e0] mb-2 text-center transition-colors duration-300 hover:text-[#0d7fad]">{title}</h3>
      <div className="flex justify-center">
        <span className="inline-block bg-blue-100 text-black px-3 py-1.5 rounded-full text-xs font-semibold shadow transition-all duration-300 hover:bg-blue-200 hover:scale-105">
          Feature #{number}
        </span>
      </div>
    </div>
  );
}

const features = [
  {
    id: 1,
    title: "Real-Time Cardiac Insights",
    image: "/images/feature1.jpg",
  },
  {
    id: 2,
    title: "Integrated ECG + PCG",
    image: "/images/feature2.jpg",
  },
  {
    id: 3,
    title: "AI-Powered Heart Murmur Detection",
    image: "/images/feature3.jpeg",
  },
  {
    id: 4,
    title: "FDA Cleared, Clinician Trusted",
    image: "/images/feature4.jpg",
  },
  {
    id: 5,
    title: "Noise Cancellation & Smart Amplification",
    image: "/images/feature5.jpg",
  },
  {
    id: 6,
    title: "HD Steth App",
    image: "/images/feature6.png",
  },
];

function PopCTAForm({ open, onClose }) {
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

  const countryCodes = ["+91", "+1", "+44", "+86", "+81", "+61", "+49", "+33"];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      const phoneFormatted = `${formData.countryCode.replace('+', '')} ${formData.phone}`;
      formDataToSend.append('phone', phoneFormatted);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('phoneRaw', `${formData.countryCode} ${formData.phone}`);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFbu097uUKxDjRcGEZN_0BaGPwZncGPLnJWr98V2sbKJdXgQwPEAmeQxIhi_SH0Go75g/exec",
        {
          method: "POST",
          body: formDataToSend
        }
      );

      await response.text();
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: ""
      });
    } catch (err) {
      setError("Failed to submit form. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-100/50 max-w-md w-full mx-4 p-6 sm:p-8 relative animate-fadeInUp">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#17a6e0] mb-2 text-center">Get in Touch</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">We'd love to hear from you. Fill the form below!</p>
        {submitted ? (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-center">
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-center">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-base"
                placeholder="Full Name"
                disabled={isLoading}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-base"
                placeholder="Email"
                disabled={isLoading}
              />
              <div className="flex gap-2">
                <div className="flex items-center bg-blue-50 rounded-lg px-2 border border-gray-200">
                  <Globe className="text-blue-400 w-5 h-5 mr-1" />
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-transparent focus:outline-none py-1 pr-2 text-gray-700 text-base border-0"
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-base"
                  placeholder="Phone Number"
                  disabled={isLoading}
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="block w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-base resize-none"
                placeholder="Message"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full py-3 rounded-full text-white text-base font-semibold transition-all duration-300 shadow-lg ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#17a6e0] to-[#40B7E4] hover:from-[#0d7fad] hover:to-[#17a6e0] hover:shadow-xl"
                }`}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "In rural healthcare settings, this digital stethoscope bridges a critical gap. The diagnostic AI helps our primary care providers identify cardiac issues that would otherwise require specialist referrals.",
      name: "Dr. James Wilson, MD, MPH",
      title: "Global Health Initiative, Johns Hopkins University"
    },
    {
      quote: "The accuracy and real-time analysis capabilities of this device have significantly improved our diagnostic workflow. It's a game-changer for preventive cardiology.",
      name: "Dr. Sarah Chen, MD",
      title: "Director of Cardiology, Mayo Clinic"
    },
    {
      quote: "The integration of AI with traditional auscultation brings a new level of precision to primary care. It's an essential tool for modern healthcare practices.",
      name: "Dr. Michael Roberts, PhD",
      title: "Head of Medical Innovation, Stanford Medicine"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const topRightSvgRef = useRef(null);
  const bottomLeftSvgRef = useRef(null);

  // Intersection Observer hooks for different sections
  const [heroRef, heroVisible] = useInView(0.1);
  const [productRef, productVisible] = useInView(0.1);
  const [stethRef, stethVisible] = useInView(0.1);
  const [featuresRef, featuresVisible] = useInView(0.1);
  const [fdaRef, fdaVisible] = useInView(0.1);
  const [impactRef, impactVisible] = useInView(0.1);
  const [testimonialsRef, testimonialsVisible] = useInView(0.1);
  const [certificatesRef, certificatesVisible] = useInView(0.1);

  useEffect(() => {
    const svgs = [
      { svg: topRightSvgRef.current, container: topRightSvgRef.current?.parentElement },
      { svg: bottomLeftSvgRef.current, container: bottomLeftSvgRef.current?.parentElement },
    ];

    const handleMouseMove = (e, svg, container) => {
      if (!svg || !container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const maxMove = 15;
      const translateX = Math.max(-maxMove, Math.min(maxMove, -x * 0.03));
      const translateY = Math.max(-maxMove, Math.min(maxMove, -y * 0.03));

      svg.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const handleMouseLeave = (svg) => {
      if (svg) svg.style.transform = 'translate(0, 0)';
    };

    svgs.forEach(({ svg, container }) => {
      if (!svg || !container) return;
      const moveHandler = (e) => handleMouseMove(e, svg, container);
      container.addEventListener('mousemove', moveHandler);
      container.addEventListener('mouseleave', () => handleMouseLeave(svg));
      return () => {
        container.removeEventListener('mousemove', moveHandler);
        container.removeEventListener('mouseleave', () => handleMouseLeave(svg));
      };
    });
  }, []);

  // Pop CTA state and timer
  const [showPopCTA, setShowPopCTA] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowPopCTA(true), 9000); // 9 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0) skewY(0deg); }
          25% { transform: translateY(-8px) skewY(3deg); }
          50% { transform: translateY(0) skewY(0deg); }
          75% { transform: translateY(8px) skewY(-3deg); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .wave-animation {
          animation: wave 5s ease-in-out infinite;
          transform-origin: center;
          transition: transform 0.2s ease-out;
        }

        .filter-dark-gray {
          filter: url(#darkGrayFilter);
        }
      `}</style>

      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-b from-[#f0fcff] to-white pt-24 md:pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text */}
          <div className={`space-y-4 z-10 transition-all duration-1000 ${heroVisible ? 'animate-fadeInLeft' : 'opacity-0 translate-x-[-30px]'}`}>
            <div className="bg-[#17a6e0]/10 text-[#17a6e0] font-bold uppercase tracking-wider px-8 py-2 rounded-full inline-block text-sm md:text-base lg:text-3xl transition-all duration-300 hover:bg-[#17a6e0]/20 hover:scale-105">
              WORLD&apos;s FIRST
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI POWERED <span className="text-[#17a6e0] underline decoration-wavy decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-4">STETHOSCOPE</span>
            </h1>
            <p className="text-gray-600 text-lg transition-all duration-300 hover:text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Egestas cursus a consequat velit.
              Sapien purus porta mattis odio eu augue vitae faucibus.
            </p>
          </div>

          {/* Right Column: Image with Circles */}
          <div className={`relative h-[400px] md:h-[500px] w-full transition-all duration-1000 delay-300 ${heroVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-[30px]'}`}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              {/* Outer Circle */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-custom"
                style={{
                  background: 'radial-gradient(circle at center, #d2f1ff 0%, rgba(210, 241, 255, 0.3) 70%, transparent 100%)'
                }}
              />
              {/* Middle Circle */}
              <div
                className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full animate-pulse-custom"
                style={{
                  background: 'radial-gradient(circle at center, #86d0ff 0%, rgba(134, 208, 255, 0.3) 70%, transparent 100%)',
                  animationDelay: '0.5s'
                }}
              />
              {/* Inner Circle */}
              <div
                className="absolute w-[60%] h-[60%] top-[20%] left-[20%] rounded-full animate-pulse-custom"
                style={{
                  background: 'radial-gradient(circle at center, #30aaff 0%, rgba(48, 170, 255, 0.3) 70%, transparent 100%)',
                  animationDelay: '1s'
                }}
              />

              {/* Doctor Image - Static (removed animate-float) */}
              <div className="absolute w-[320px] h-[400px] bottom-0 left-[40%] -translate-x-1/2">
                <Image
                  src="/images/ladydoc.png"
                  alt="Healthcare Professional"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Static Numbers */}
        <div className={`-mt-14 md:-mt-19 w-full px-6 md:px-16 transition-all duration-1000 delay-500 ${heroVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#17a6e0]/20 via-[#40B7E4]/20 to-[#17a6e0]/20 rounded-3xl blur-xl"></div>

              {/* Main stats container */}
              <div className="relative grid grid-cols-2 md:grid-cols-4 bg-white/95 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl text-center py-8 px-6 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#17a6e0] via-[#40B7E4] to-[#17a6e0] p-[2px]">
                  <div className="h-full w-full rounded-3xl bg-white/95 backdrop-blur-2xl"></div>
                </div>

                {/* Top decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#17a6e0] to-transparent rounded-b-full"></div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#40B7E4] to-transparent rounded-full"></div>

                {/* Corner accent dots */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#17a6e0] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#40B7E4] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#40B7E4] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#17a6e0] rounded-full opacity-60 animate-pulse"></div>

                {/* Static Stats */}
                {[
                  ["20+", "Years of Experience"],
                  ["95%", "Patient Satisfaction"],
                  ["5,000+", "Patients Served"],
                  ["10+", "Medical Specialties"]
                ].map(([value, label], index) => (
                  <div key={index} className="relative">
                    {/* Vertical dividers with gradient effect */}
                    {index < 3 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#17a6e0]/30 to-transparent hidden md:block"></div>
                    )}
                    <StaticCounter value={value} label={label} />
                  </div>
                ))}

                {/* Bottom decorative wave */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#17a6e0]/20 via-[#40B7E4]/40 to-[#17a6e0]/20 rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section ref={productRef} className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${productVisible ? 'animate-fadeInLeft' : 'opacity-0 translate-x-[-30px]'}`}>
              <h2 className="text-4xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#17a6e0]">
                Visualize heart sounds and<br />ECG waveforms
              </h2>
              <p className="text-lg text-gray-600 transition-all duration-300 hover:text-gray-700">
                HD Medical is a global leader in the detection and management of cardiovascular disease (CVD). We are dedicated to enabling evidence-based patient diagnosis and treatment decisions to be made at the point-of-care instantaneously to improve outcomes and save lives. Medical professionals can leverage HD Steth&apos;s AI-enabled intelligence, phonocardiogram, and electrocardiogram in their single most important and prestigious device, the stethoscope.
              </p>
              <button
                className="inline-block px-8 py-3 bg-[#17a6e0] text-black rounded-lg hover:bg-[#17a6e0] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.location.href = '/product'}>
                Know More
              </button>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${productVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-[30px]'}`}>
              <div className="group">
                <Image
                  src="/images/landing-about.png"
                  alt="Doctor examining patient"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HD Steth Section */}
      <section ref={stethRef} className="relative bg-white py-12 overflow-hidden">
        {/* Main Content */}
        <div
          className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10 transition-all duration-1000 ${stethVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'
            }`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="transition-all duration-500 hover:scale-110">
              <Image
                src="/images/hd_stethlogo.png"
                alt="HD Steth Logo"
                width={300}
                height={90}
                className="mx-auto w-[180px] sm:w-[220px] md:w-[280px] lg:w-[300px]"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium sm:font-semibold transition-all duration-300 hover:text-gray-800 px-2 sm:px-4">
            HD Steth is an intelligent stethoscope with integrated EKG, offering real-time cardiac insights at the point-of-care. It utilizes patented noise cancellation and smart amplification for high-fidelity auscultation and enables real-time visualization of cardiac waveforms on a mobile app. This device also allows for data saving and sharing with specialists for remote diagnosis and second opinions.
          </p>

          {/* Divider */}
          <hr className="my-4 sm:my-6 border-gray-300 max-w-[90%] sm:max-w-3xl mx-auto transition-all duration-300 hover:border-[#17a6e0]" />

          {/* Button */}
          <button className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#40B7E4] text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 mt-3 sm:mt-4 hover:scale-105 hover:shadow-xl">
            Learn More
          </button>
        </div>

        {/* Side Images (Desktop only) */}
        <div
          className={`hidden lg:flex absolute left-0 top-0 h-full items-center z-0 transition-all duration-1000 delay-500 ${stethVisible ? 'translate-x-[-18%]' : 'translate-x-[-100%]'
            }`}
        >
          <Image
            src="/images/stethleft.png"
            alt="Left Device"
            width={300}
            height={500}
            className="object-contain animate-float"
            priority
          />
        </div>

        <div
          className={`hidden lg:flex absolute right-0 top-0 h-full items-center z-0 transition-all duration-1000 delay-700 ${stethVisible ? 'translate-x-[18%]' : 'translate-x-[100%]'
            }`}
        >
          <Image
            src="/images/stethright.png"
            alt="Right Device"
            width={300}
            height={500}
            className="object-contain animate-float"
            style={{ animationDelay: '1s' }}
            priority
          />
        </div>
      </section>


      {/* Features Section */}
      <section ref={featuresRef} className="bg-white py-10 px-4 relative overflow-hidden">
        {/* Desktop SVGs */}
        <div className="hidden md:block">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20 wave-animation z-0 md:w-1/3 md:h-1/3">
            <Image
              ref={topRightSvgRef}
              src="/images/lines.svg"
              alt="Top Right Wave Background"
              className="filter-dark-gray"
              width={1600}
              height={1600}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20 wave-animation z-0 md:w-1/4 md:h-1/4">
            <Image
              ref={bottomLeftSvgRef}
              src="/images/lines.svg"
              alt="Bottom Left Wave Background"
              className="filter-dark-gray"
              width={1200}
              height={1200}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-10 wave-animation z-0 rotate-45">
            <Image
              src="/images/lines.svg"
              alt="Center Wave"
              className="filter-dark-gray"
              width={1600}
              height={1600}
            />
          </div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-10 wave-animation z-0 rotate-3">
            <Image
              src="/images/lines.svg"
              alt="Top Left Large Wave"
              className="filter-dark-gray"
              width={1400}
              height={1400}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 wave-animation z-0 -rotate-6">
            <Image
              src="/images/lines.svg"
              alt="Bottom Right Large Wave"
              className="filter-dark-gray"
              width={1400}
              height={1400}
            />
          </div>
          <div className="absolute top-1/3 left-10 w-1/4 h-2/3 opacity-12 wave-animation z-0 rotate-90">
            <Image
              src="/images/lines.svg"
              alt="Vertical Left Wave"
              className="filter-dark-gray"
              width={900}
              height={1400}
            />
          </div>
          <div className="absolute bottom-1/3 right-10 w-1/4 h-2/3 opacity-12 wave-animation z-0 -rotate-90">
            <Image
              src="/images/lines.svg"
              alt="Vertical Right Wave"
              className="filter-dark-gray"
              width={900}
              height={1400}
            />
          </div>
        </div>
        {/* Mobile SVGs */}
        <div className="block md:hidden">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 opacity-20 wave-animation z-0">
            <Image
              src="/images/lines.svg"
              alt="Mobile Top Right Wave"
              className="filter-dark-gray"
              width={900}
              height={900}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 opacity-10 wave-animation z-0">
            <Image
              src="/images/lines.svg"
              alt="Mobile Bottom Left Wave"
              className="filter-dark-gray"
              width={900}
              height={900}
            />
          </div>
        </div>
        {/* SVG Filter for Dark Gray Fill */}
        <svg className="hidden">
          <defs>
            <filter id="darkGrayFilter">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.4196
                        0 0 0 0 0.4471
                        0 0 0 0 0.5020
                        0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-12 transition-all duration-1000 ${featuresVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            <span className="text-[#17a6e0] transition-all duration-300 hover:text-[#0d7fad]">REVOLUTIONIZING </span>
            <span className="text-orange-500 transition-all duration-300 hover:text-orange-600">CARDIAC CARE </span>
            <span className="text-[#17a6e0] transition-all duration-300 hover:text-[#0d7fad]">WITH AI</span>
          </h2>

          {/* Desktop layout */}
          <div className="hidden md:block space-y-16">
            <div className="flex justify-start gap-10 ml-4 md:ml-10 lg:ml-20">
              <Card {...features[0]} number="1" index={0} />
              <Card {...features[1]} number="2" index={1} />
            </div>

            <div className="flex justify-end gap-10 mr-4 md:mr-10 lg:mr-20">
              <Card {...features[2]} number="3" index={2} />
              <Card {...features[3]} number="4" index={3} />
            </div>

            <div className="flex justify-start gap-10 ml-4 md:ml-10 lg:ml-20">
              <Card {...features[4]} number="5" index={4} />
              <Card {...features[5]} number="6" index={5} />
            </div>
          </div>

          {/* Mobile layout: Cards one after another, centered, full width */}
          <div className="md:hidden flex flex-col items-center gap-8 mt-8 px-0">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="w-full max-w-xs sm:max-w-sm mx-auto flex justify-center"
              >
                <Card {...feature} number={idx + 1} index={idx} />
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-1000 delay-300 ${featuresVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            <button className="bg-[#17a6e0] hover:bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
              GET STARTED →
            </button>
          </div>
        </div>
      </section>

      {/* FDA Section */}
      <section ref={fdaRef} className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${fdaVisible ? 'animate-fadeInLeft' : 'opacity-0 translate-x-[-30px]'}`}>
              <div className="group">
                <Image
                  src="/images/fda_section_image.jpg"
                  alt="Doctor and Patient Image"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            </div>
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${fdaVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-[30px]'}`}>
              <h2 className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#17a6e0]">
                FDA cleared for three products classification codes in one device.
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
                  {[
                    ["DQD", "Electronic Stethoscope"],
                    ["DQC", "Phonocardiograph System"],
                    ["DPS", "Electrocardiograph & Cardiac monitor"]
                  ].map(([code, label], index) => (
                    <div key={code} className="text-center md:text-left flex-1 group">
                      <div className="text-2xl font-bold text-orange-500 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-600">{code}</div>
                      <div className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-800 text-lg text-center md:text-left transition-colors duration-300 hover:text-gray-600">
                  (including cardiotachometer and rate alarm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section with Animated Counters */}
      <section
        ref={impactRef}
        className="bg-[#0046BE] bg-cover bg-center bg-no-repeat py-12 overflow-hidden"
        style={{ backgroundImage: "url('/images/grid3.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className={`text-center mb-12 transition-all duration-1000 ${impactVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-300 hover:scale-105">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto transition-colors duration-300 hover:text-white">
              Real results from our advanced AI-powered stethoscope technology, making a
              difference in healthcare outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white/100">
            {[
              ["bi-people-fill", "100,000+", "Total Lives Screened"],
              ["bi-search-heart", "794", "Screened Abnormalities"],
              ["bi-heart-pulse-fill", "185", "Confirmed Abnormalities"],
              ["bi-hospital", "56", "For Treatment"]
            ].map(([icon, value, label], index) => (
              <div
                key={label}
                className={`
                  bg-[#0051D8]/90 rounded-lg p-8 flex flex-col items-center
                  transition-all duration-1000 hover:bg-[#0051D8] hover:scale-105 hover:shadow-xl
                  ${impactVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}
                  md:p-8
                  p-6
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-[#FF4B26] rounded-full p-4 mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 md:p-4 p-3 flex items-center justify-center">
                  <i className={`bi ${icon} text-2xl text-white md:text-2xl text-xl`}></i>
                </div>


                <div className="flex flex-col items-center justify-center w-full text-white text-2xl md:text-3xl font-black relative transition-all duration-500 group-hover:scale-110 text-center"

                  style={{
                    fontSize: 'clamp(2rem, 6vw, 2.25rem)'
                  }}
                >
                  <AnimatedCounter value={value} label={label} isWhiteText={true} />
                </div>
                <div
                  className={`
                    relative mt-2 font-semibold transition-colors duration-500 leading-tight
                    md:text-sm text-base text-white text-center flex items-center justify-center w-full
                  `}
                  style={{
                    fontSize: 'clamp(1rem, 4vw, 1.125rem)'
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials Section */}
      <section ref={testimonialsRef} className="bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20 py-16 relative overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-100 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-10 right-1/4 w-24 h-24 bg-blue-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-blue-150 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Enhanced floating medical icons - Made even darker */}
        <div className="absolute inset-0 opacity-35 pointer-events-none">
          <i className="bi bi-heart-pulse absolute top-16 left-16 text-3xl text-[#0a5a87] animate-bounce" style={{ animationDelay: '0.5s' }}></i>
          <i className="bi bi-activity absolute top-1/4 right-20 text-2xl text-[#1e7a9e] animate-bounce" style={{ animationDelay: '1.5s' }}></i>
          <i className="bi bi-clipboard2-pulse absolute bottom-1/4 left-12 text-xl text-[#0a5a87] animate-bounce" style={{ animationDelay: '2.5s' }}></i>
          <i className="bi bi-heart-fill absolute bottom-16 right-1/4 text-2xl text-[#1e7a9e] animate-bounce" style={{ animationDelay: '3.5s' }}></i>
          <i className="bi bi-plus-circle absolute top-1/3 left-1/5 text-lg text-[#0a5a87] animate-bounce" style={{ animationDelay: '4.5s' }}></i>
          <i className="bi bi-shield-plus absolute top-1/2 right-1/5 text-xl text-[#1e7a9e] animate-bounce" style={{ animationDelay: '5.5s' }}></i>

          {/* Additional blue medical icons - Made even darker */}
          <i className="bi bi-bandaid absolute top-20 right-1/3 text-lg text-[#0a5a87] animate-pulse" style={{ animationDelay: '1s' }}></i>
          <i className="bi bi-capsule absolute bottom-32 left-1/3 text-xl text-[#1e7a9e] animate-pulse" style={{ animationDelay: '2s' }}></i>
          <i className="bi bi-thermometer-half absolute top-1/3 right-12 text-lg text-[#0a5a87] animate-bounce" style={{ animationDelay: '3s' }}></i>
          <i className="bi bi-prescription2 absolute bottom-1/5 right-1/3 text-xl text-[#1e7a9e] animate-pulse" style={{ animationDelay: '4s' }}></i>
          <i className="bi bi-eyedropper absolute top-1/4 left-1/4 text-lg text-[#0a5a87] animate-bounce" style={{ animationDelay: '5s' }}></i>
          <i className="bi bi-lungs absolute bottom-1/3 right-16 text-2xl text-[#1e7a9e] animate-pulse" style={{ animationDelay: '6s' }}></i>
          <i className="bi bi-virus absolute top-40 left-1/3 text-lg text-[#0a5a87] animate-bounce" style={{ animationDelay: '7s' }}></i>
          <i className="bi bi-droplet-half absolute bottom-40 left-20 text-xl text-[#1e7a9e] animate-pulse" style={{ animationDelay: '8s' }}></i>
        </div>

        {/* Enhanced blue glow effect around section edges */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-[#17a6e0]/30 to-transparent shadow-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-[#40B7E4]/30 to-transparent shadow-lg"></div>

        {/* Enhanced side glow effects */}
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#17a6e0]/20 to-transparent shadow-lg"></div>
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-[#40B7E4]/20 to-transparent shadow-lg"></div>

        {/* Corner glow effects */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#17a6e0]/25 to-transparent rounded-br-full blur-xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#40B7E4]/25 to-transparent rounded-bl-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#17a6e0]/25 to-transparent rounded-tr-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#40B7E4]/25 to-transparent rounded-tl-full blur-xl"></div>

        {/* Enhanced Side decorative elements with stronger glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-transparent via-[#17a6e0]/40 to-transparent rounded-r-full shadow-lg"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-transparent via-[#40B7E4]/40 to-transparent rounded-l-full shadow-lg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          {/* Enhanced header section */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${testimonialsVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            {/* Medical badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-[#17a6e0] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200/50">
              <i className="bi bi-award text-lg"></i>
              <span>Trusted by Medical Professionals</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-[#17a6e0]">
              What Experts Say
            </h2>
            {/* Stats badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100/50 shadow-sm">
                <span className="text-[#17a6e0] font-bold">500+</span>
                <span className="text-gray-600 text-sm ml-1">Healthcare Partners</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100/50 shadow-sm">
                <span className="text-[#17a6e0] font-bold">98%</span>
                <span className="text-gray-600 text-sm ml-1">Satisfaction Rate</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100/50 shadow-sm">
                <span className="text-[#17a6e0] font-bold">50+</span>
                <span className="text-gray-600 text-sm ml-1">Countries</span>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel with enhanced styling */}
          <div className={`relative transition-all duration-1000 delay-300 ${testimonialsVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            {/* Enhanced Navigation Buttons - Changed to blue background with white text */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#17a6e0] backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-[#0d7fad] transition-all duration-300 hover:scale-110 border-2 border-blue-100/50 group"
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left text-xl sm:text-2xl text-white group-hover:text-white transition-colors duration-300"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#17a6e0] backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-[#0d7fad] transition-all duration-300 hover:scale-110 border-2 border-blue-100/50 group"
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right text-xl sm:text-2xl text-white group-hover:text-white transition-colors duration-300"></i>
            </button>

            <div className="overflow-hidden rounded-2xl w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: "100%",
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {testimonials.map((review, index) => (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 flex justify-center items-center px-4"
                  >
                    <div className="w-full max-w-xs sm:max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-xl relative min-h-[460px] sm:min-h-[400px] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group border border-blue-100/50 flex flex-col justify-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                      {/* Quote mark */}
                      <div className="absolute -top-6 right-8 text-6xl sm:text-8xl text-[#40B7E4]/20 transition-all duration-300 group-hover:text-[#40B7E4]/40 font-serif">
                        &quot;
                      </div>

                      {/* Rating stars */}
                      <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="bi bi-star-fill text-yellow-400 text-lg mx-0.5"></i>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
                        <div className="w-20 h-20 sm:w-32 sm:h-32 shrink-0 relative">
                          <Image
                            src="/images/profile.jpg"
                            alt="Medical Expert"
                            width={128}
                            height={128}
                            className="rounded-full object-cover w-full h-full transition-all duration-300 group-hover:scale-110 shadow-lg border-4 border-white"
                          />
                          {/* Verification badge */}
                          <div className="absolute -bottom-2 -right-2 bg-[#17a6e0] rounded-full p-1 border-2 border-white">
                            <i className="bi bi-patch-check-fill text-white text-sm"></i>
                          </div>
                        </div>
                        <div className="space-y-4 text-center sm:text-left flex-1">
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800 italic">
                            {review.quote}
                          </p>
                          <div className="border-l-4 border-[#17a6e0] pl-4">
                            <h4 className="font-bold text-gray-900 text-lg sm:text-xl transition-colors duration-300 group-hover:text-[#17a6e0]">
                              {review.name}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-500 transition-colors duration-300 group-hover:text-gray-600 font-medium">
                              {review.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>

            {/* Enhanced Dots - Changed to blue background */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#40B7E4]/30 hover:scale-125 ${currentSlide === index
                    ? 'bg-[#40B7E4] border-[#40B7E4] shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Medical Institution Logos - Static and Blue */}
          <div className="mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50">
              <p className="text-center text-gray-500 text-sm sm:text-base uppercase tracking-wider mb-8 font-semibold">
                Trusted by Leading Medical Institutions Worldwide
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center">
                {[
                  { icon: "bi-hospital", label: "Hospitals" },
                  { icon: "bi-heart-pulse", label: "Cardiology Centers" },
                  { icon: "bi-shield-plus", label: "Medical Schools" },
                  { icon: "bi-person-workspace", label: "Research Institutes" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <i className={`${item.icon} text-3xl sm:text-5xl text-[#17a6e0] mb-2`}></i>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certificates Section */}
      <section className="bg-[#14a8df] py-12 w-full">
        <div className="max-w-full px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            CERTIFICATES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-none mx-auto">
            {[
              { src: "/images/fda.png", alt: "FDA Cleared", text: "FDA CLEARED\n# K201299" },
              { src: "/images/iso.png", alt: "ISO Certification", text: "ISO\n13485: 2016" },
              { src: "/images/tn.png", alt: "TN Certification", text: "TN/M/MD/004806" },
              { src: "/images/iec.png", alt: "IEC Certification", text: "IEC\n60601-2-27" }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={120}
                    height={100}
                    className="mb-4 !transition-none !duration-0"
                  />
                </div>
                <p className="text-white font-semibold text-sm">
                  {cert.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < cert.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <Footer />
      <PopCTAForm open={showPopCTA} onClose={() => setShowPopCTA(false)} />
    </>
  );
}