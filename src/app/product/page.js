'use client';
import React, { useEffect, useRef, useState } from "react";
import {
  Shield, Activity, Volume2, Cloud, Stethoscope, Smartphone, User, BatteryFull,
  Weight,
  ShieldCheck,
  ChevronDown, ChevronUp, Monitor,
  Globe,
  Zap,
  Leaf,
  Info
} from "lucide-react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const advantages = [
  {
    icon: Shield,
    title: "Patented Noise Cancellation",
    description: "Isolate the truth. Hear subtle sounds in any environment with our advanced noise filtering technology.",
    color: "from-green-500 to-emerald-500",
    delay: 0,
  },
  {
    icon: Activity,
    title: "Integrated ECG Leads",
    description: "Wireless, real-time cardiac insights with our seamlessly integrated ECG technology.",
    color: "from-cyan-500 to-blue-500",
    delay: 200,
  },
  {
    icon: Volume2,
    title: "Smart Amplification",
    description: "Bring the faintest sounds to life with intelligent sound enhancement technology.",
    color: "from-orange-500 to-red-500",
    delay: 400,
  },
  {
    icon: Cloud,
    title: "Data Management",
    description: "Record, save, share, print: comprehensive patient data at your fingertips.",
    color: "from-purple-500 to-pink-500",
    delay: 600,
  },
];

function AdvantagesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleModules, setVisibleModules] = useState([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          advantages.forEach((_, index) => {
            setTimeout(() => {
              setVisibleModules((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (

    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            The HD Steth Advantage
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            Engineered for Clarity, Designed for Life. Unrivaled Clarity. Unprecedented Impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const isModuleVisible = visibleModules.includes(index);
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 border border-slate-200 shadow hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isModuleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${advantage.delay}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-sky-600 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SpecCard = ({ icon, title, children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 ${className}`}>
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 space-y-2">
      {children}
    </div>
  </div>
);

function HowItWorksSection() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="text-xl text-gray-600 mb-12">
          A simple, streamlined workflow for enhanced cardiac diagnostics
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Chest Piece */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#17a6e0] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <Stethoscope className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Chest Piece</div>
            <div className="text-gray-500 text-lg">Place on patient</div>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center">
            <span className="text-orange-500 text-4xl mx-2">&#8594;</span>
          </div>
          {/* Mobile App */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#17a6e0] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <Smartphone className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Mobile App</div>
            <div className="text-gray-500 text-lg">Visualize data</div>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center">
            <span className="text-orange-500 text-4xl mx-2">&#8594;</span>
          </div>
          {/* Cloud */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#17a6e0] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <Cloud className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Cloud</div>
            <div className="text-gray-500 text-lg">Process & analyze</div>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center">
            <span className="text-orange-500 text-4xl mx-2">&#8594;</span>
          </div>
          {/* Doctor */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#17a6e0] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <User className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Doctor</div>
            <div className="text-gray-500 text-lg">Review & diagnose</div>
          </div>
        </div>
        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-8">
          <span className="text-orange-500 text-3xl">&#8594;</span>
          <span className="text-orange-500 text-3xl">&#8594;</span>
          <span className="text-orange-500 text-3xl">&#8594;</span>
        </div>
      </div>
    </section>
  );
}

function TechnicalExcellenceSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSpecs, setExpandedSpecs] = useState(false);

  const keySpecs = [
    {
      icon: BatteryFull,
      label: "8-Hour Continuous Operation",
      value: "8 Hours",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Weight,
      label: "Lightweight Design",
      value: "230g",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Smartphone,
      label: "Mobile App Support",
      value: "iOS/Android",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: ShieldCheck,
      label: "FDA Cleared",
      value: "Certified",
      color: "from-orange-400 to-red-500"
    },
  ];

  const fullSpecifications = [
    {
      category: "Device Specifications", specs: [
        { label: "Weight", value: "230 grams (Approx)" },
        { label: "Battery Life", value: "8-hour continuous operation" },
        { label: "Connectivity", value: "Bluetooth 5.0, Wi-Fi" },
        { label: "Display", value: "OLED touchscreen" }
      ]
    },
    {
      category: "Audio Performance", specs: [
        { label: "Frequency Response", value: "20 Hz - 20 kHz" },
        { label: "Noise Cancellation", value: "Patented active noise cancellation" },
        { label: "Amplification", value: "Smart amplification up to 40x" },
        { label: "Sound Quality", value: "Hi-Fi audio recording" }
      ]
    },
    {
      category: "ECG Capabilities", specs: [
        { label: "Lead Configuration", value: "3-lead ECG integrated" },
        { label: "Sampling Rate", value: "500 Hz" },
        { label: "Recording Duration", value: "Continuous monitoring" },
        { label: "Waveform Display", value: "Real-time visualization" }
      ]
    },
    {
      category: "Compatibility", specs: [
        { label: "Mobile Apps", value: "iOS 12+, Android 8+" },
        { label: "Cloud Platform", value: "HD Medical Cloud" },
        { label: "Export Formats", value: "PDF, WAV, XML" },
        { label: "Integration", value: "EMR/EHR compatible" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            Precision Engineered. Reliably Built.
          </h2>
        </div>
        {/* Key Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {keySpecs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className={`bg-white shadow-md rounded-xl p-6 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <div className={`mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-r ${spec.color} flex items-center justify-center`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{spec.label}</h3>
                <p className="text-2xl font-bold mt-1 text-gray-900">{spec.value}</p>
              </div>
            );
          })}
        </div>
        {/* View All Specifications Button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setExpandedSpecs(!expandedSpecs)}
            className="flex items-center justify-center gap-2 text-base font-medium px-6 py-3 rounded-full border border-gray-300 shadow-sm bg-white hover:bg-gray-100 transition"
          >
            View All Specifications
            {expandedSpecs ? (
              <ChevronUp className="w-5 h-5 text-gray-700" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
        {/* Expandable Specifications */}
        <div className={`transition-all duration-500 ${expandedSpecs ? "opacity-100 mt-8" : "opacity-0 h-0 overflow-hidden"}`}>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {fullSpecifications.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white shadow rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.specs.map((spec, specIndex) => {
                    // Icon mapping for classic, clean look
                    let icon = null;
                    if (spec.label.toLowerCase().includes("weight")) icon = <Weight className="w-5 h-5 text-blue-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("battery")) icon = <BatteryFull className="w-5 h-5 text-green-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("connectivity")) icon = <Cloud className="w-5 h-5 text-cyan-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("display") || spec.label.toLowerCase().includes("waveform")) icon = <Monitor className="w-5 h-5 text-purple-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("noise")) icon = <Volume2 className="w-5 h-5 text-orange-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("amplification") || spec.label.toLowerCase().includes("sound")) icon = <Zap className="w-5 h-5 text-yellow-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("lead") || spec.label.toLowerCase().includes("ecg")) icon = <Activity className="w-5 h-5 text-red-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("mobile")) icon = <Smartphone className="w-5 h-5 text-sky-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("cloud")) icon = <Cloud className="w-5 h-5 text-cyan-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("integration") || spec.label.toLowerCase().includes("emr") || spec.label.toLowerCase().includes("ehr")) icon = <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("export")) icon = <Globe className="w-5 h-5 text-blue-400 mr-2" />;
                    if (spec.label.toLowerCase().includes("frequency")) icon = <Leaf className="w-5 h-5 text-green-400 mr-2" />;
                    if (spec.label.toLowerCase().includes("sampling")) icon = <Monitor className="w-5 h-5 text-purple-400 mr-2" />;
                    return (
                      <div key={specIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="flex items-center text-gray-700">
                          {icon}
                          {spec.label}
                        </span>
                        <span className="text-gray-900 font-semibold">{spec.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductHero() {
  return (
    <>
      <Header />
      <br />
      {/* Hero Section */}
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center">
            {/* Product Logo */}
            <Image
              src="/images/hd-steth-logo.png"
              alt="HD Steth Logo"
              width={220}
              height={60}
              className="mb-4"
              priority
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              The Future of Cardiac Care is Here
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
              <span className="font-semibold text-black">AI-Powered Stethoscope with Integrated ECG.</span> Unveiling the Unseen, Redefining Diagnosis.
            </p>
            <button className="bg-[#17a6e0] text-white rounded-full px-8 py-4 text-lg font-medium shadow hover:bg-gray-900 transition">
              Know More
            </button>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/images/stethoscope.png"
              alt="HD Stethoscope"
              width={340}
              height={340}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="w-full bg-white px-4 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* Left big card */}
          <div className="bg-[#17a6e0] rounded-[32px] flex items-center justify-center min-h-[200px] h-full p-6">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-snug break-words">
              Our Commitment to Care
            </h2>
          </div>

          {/* Right side grid */}
          <div className="flex flex-col justify-between h-full">
            {/* Top card - Innovation */}
            <div className="bg-[#17a6e0] rounded-[32px] flex items-center justify-between px-6 sm:px-8 py-6 w-full min-h-[100px] mb-4">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Innovation</span>
              <Image src="/icons/innovation.svg" alt="Innovation Icon" width={64} height={64} className="w-12 sm:w-14 md:w-16 h-auto" />
            </div>

            {/* Bottom row - Quality & Trust */}
            <div className="flex flex-col sm:flex-row gap-1">
              {/* Quality */}
              <div className="bg-[#17a6e0] rounded-[32px] flex items-center justify-between px-6 sm:px-8 py-6 w-full min-h-[100px]">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Quality</span>
                <Image src="/icons/quality.svg" alt="Quality Icon" width={64} height={64} className="w-12 sm:w-14 md:w-16 h-auto" />
              </div>

              {/* Trust */}
              <div className="bg-[#17a6e0] rounded-[32px] flex items-center justify-between px-6 sm:px-8 py-6 w-full min-h-[100px]">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Trust</span>
                <Image src="/icons/trust.svg" alt="Trust Icon" width={64} height={64} className="w-12 sm:w-14 md:w-16 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AdvantagesSection />

      <section>
        <section className="w-full bg-white px-4 py-12">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
            {/* Heading Image */}
            <div className="mb-8">
              <Image
                src="/images/hd-steth-controls-heading.png" // Replace with your actual path
                alt="HD Steth Controls"
                width={600}
                height={250}
                className="mx-auto w-auto h-auto max-w-full"
              />
            </div>

            {/* Central Stethoscope + Tablet Image */}
            <div className="relative w-full max-w-6xl">
              <Image
                src="/images/hd-steth-controls-main.png" // Replace with your actual path
                alt="HD Steth Device with Labels"
                width={1700}
                height={1500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </section>


      {/* How It Works Section */}
      <HowItWorksSection />

      <TechnicalExcellenceSection />

      <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Activity className="absolute top-20 right-20 w-8 h-8 text-[#17a6e0] animate-pulse" />
          <Activity className="absolute bottom-32 left-16 w-6 h-6 text-[#17a6e0] animate-pulse" style={{ animationDelay: '1s' }} />
          <Activity className="absolute top-1/3 left-1/3 w-4 h-4 text-[#17a6e0] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Compliant. Durable. Ready for the Field.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Specification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SpecCard icon={<Monitor className="w-5 h-5" />} title="Display">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">Graphic OLED</p>
                  <p className="text-sm">64 × 48, Blue on Black</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Size</p>
                  <p className="text-sm">18.5mm × 18.1mm</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Operating Temp</p>
                  <p className="text-sm">-40°C</p>
                </div>
              </div>
            </SpecCard>

            <SpecCard icon={<Zap className="w-5 h-5" />} title="Electrical">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">Battery</p>
                  <p className="text-sm">Rechargeable Li-Ion 18650</p>
                  <p className="text-sm">3400mAh, 3.7V</p>
                  <p className="text-sm text-blue-600 font-medium">8 hours continuous operation</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Charger</p>
                  <p className="text-sm">Input: 100-240V AC, 50/60 Hz</p>
                  <p className="text-sm">Output: 5.0V DC, 2000 mA</p>
                </div>
              </div>
            </SpecCard>

            <SpecCard icon={<Leaf className="w-5 h-5" />} title="Environmental">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">Operating Temp</p>
                  <p className="text-sm">5°C to 47°C</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Storage Temp</p>
                  <p className="text-sm">-10°C to +60°C</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Humidity</p>
                  <p className="text-sm">20% to 80%</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Weight</p>
                  <p className="text-sm">230g (approx., including battery)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dimensions</p>
                  <p className="text-sm">Length: 740mm</p>
                  <p className="text-sm">Chest Piece: 56mm × 43mm</p>
                </div>
              </div>
            </SpecCard>
          </div>

          {/* Compliance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecCard icon={<Shield className="w-5 h-5" />} title="Compliance & Protection">
              <div className="space-y-2">
                <p><span className="font-semibold">Atmospheric Pressure:</span> 101.3 kPa to 79.4 kPa</p>
                <p><span className="font-semibold">Emission Compliance:</span> EN55011, CISPR 11, Group 1 Class A</p>
                <p><span className="font-semibold">Electrical Shock Protection:</span> Type BF</p>
                <p><span className="font-semibold">Enclosure Protection:</span> IPX1</p>
                <p><span className="font-semibold">Biocompatibility:</span> ANSI/AAMI/ISO 10993</p>
              </div>
            </SpecCard>

            <SpecCard icon={<Globe className="w-5 h-5" />} title="International Standards">
              <p className="mb-4 text-gray-700">
                Our digital stethoscope meets rigorous international standards for medical devices,
                ensuring safety, reliability, and electromagnetic compatibility across global markets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">IEC 60601-1</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">EN 55011</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">EN 61000</span>
              </div>
            </SpecCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Heart Murmur Detection */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 flex items-center gap-3">
                {/* Lucide HeartPulse Icon */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                  <Activity className="w-5 h-5 text-blue-700" />
                </span>
                <h3 className="text-lg font-semibold text-blue-700">
                  Heart Murmur Detection
                </h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-gray-800">97.79%</p>
                  <p className="text-sm text-gray-500">Sensitivity</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">95.38%</p>
                  <p className="text-sm text-gray-500">Specificity</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                Our AI algorithm identifies and classifies heart murmurs with
                precision that rivals experienced cardiologists.
              </p>

              <div className="flex items-center text-blue-700 text-xs bg-blue-50 rounded-md px-3 py-2 w-fit">
                <Info className="w-4 h-4 mr-2" />
                Validated through clinical trials with over 10,000 patient recordings
              </div>
            </div>

            {/* ECG Analysis */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 flex items-center gap-3">
                {/* Lucide MonitorHeart Icon */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                  <Activity className="w-5 h-5 text-blue-700" />
                </span>
                <h3 className="text-lg font-semibold text-blue-700">
                  ECG Analysis
                </h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-gray-800">89.83%</p>
                  <p className="text-sm text-gray-500">Sensitivity</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">98.10%</p>
                  <p className="text-sm text-gray-500">Specificity</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                Automatically detects arrhythmias and other ECG abnormalities with high accuracy and reliability.
              </p>

              <div className="flex items-center text-blue-700 text-xs bg-blue-50 rounded-md px-3 py-2 w-fit">
                <Info className="w-4 h-4 mr-2" />
                Algorithm trained on diverse patient populations for consistent performance
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Data/results based on HD Medical internal testing and validation
          </p>
        </div>
      </section>

      {/* Resources & Documentation Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access important documents and technical resources for the HD Steth device
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HD Steth User Manual */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#17a6e0]/10 p-6">
                <div className="w-14 h-14 bg-[#17a6e0] rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HD Steth User Manual</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide for setup, operation, and maintenance of your HD Steth device
                </p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 5.2 MB</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/docs/HDSteth-User-Manual.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                    View
                  </a>
                  <a
                    href="/docs/HDSteth-User-Manual.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#17a6e0] hover:bg-[#1493c7] text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 17V3"></path>
                      <path d="m6 11 6 6 6-6"></path>
                      <path d="M19 21H5"></path>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* HD Steth App User Manual */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#17a6e0]/10 p-6">
                <div className="w-14 h-14 bg-[#17a6e0] rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HD Steth App Manual</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide for using the mobile application with your HD Steth device
                </p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 1.8 MB</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/docs/HDSteth-App-User-Manual.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                    View
                  </a>
                  <a
                    href="/docs/HDSteth-App-User-Manual.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#17a6e0] hover:bg-[#1493c7] text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 17V3"></path>
                      <path d="m6 11 6 6 6-6"></path>
                      <path d="M19 21H5"></path>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Product Brochure */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#17a6e0]/10 p-6">
                <div className="w-14 h-14 bg-[#17a6e0] rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HD Steth Product Brochure</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete overview of features, specifications and clinical applications
                </p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 3.4 MB</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/docs/HDSteth-Product-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                    View
                  </a>
                  <a
                    href="/docs/HDSteth-Product-Brochure.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#17a6e0] hover:bg-[#1493c7] text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 17V3"></path>
                      <path d="m6 11 6 6 6-6"></path>
                      <path d="M19 21H5"></path>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Product Data India Sheet */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#17a6e0]/10 p-6">
                <div className="w-14 h-14 bg-[#17a6e0] rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Product Data India Sheet</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Detailed information specific to the Indian market and clinical validation data
                </p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 4.7 MB</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/docs/Product-Data-India-Sheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                    View
                  </a>
                  <a
                    href="/docs/Product-Data-India-Sheet.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#17a6e0] hover:bg-[#1493c7] text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 17V3"></path>
                      <path d="m6 11 6 6 6-6"></path>
                      <path d="M19 21H5"></path>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Raipur Report */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#17a6e0]/10 p-6">
                <div className="w-14 h-14 bg-[#17a6e0] rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Raipur Report</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Clinical evaluation study conducted at AIIMS Raipur with patient outcomes data
                </p>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 2.9 MB</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/docs/Raipur-Report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                    View
                  </a>
                  <a
                    href="/docs/Raipur-Report.pdf"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#17a6e0] hover:bg-[#1493c7] text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 17V3"></path>
                      <path d="m6 11 6 6 6-6"></path>
                      <path d="M19 21H5"></path>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Download All Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => {
                // Direct download of pre-made zip file
                const link = document.createElement('a');
                link.href = "/docs/HDSteth-Documents.zip";
                link.download = "HDSteth-Documents.zip";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#17a6e0] hover:bg-[#1493c7] text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download All Documents
            </button>
          </div>

          {/* Optional Note */}
          <p className="text-center text-gray-500 text-sm mt-8">
            All documents are available in PDF format. For additional resources, please contact our support team.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}