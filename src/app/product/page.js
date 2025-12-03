'use client';
import React, { useEffect, useRef, useState } from "react";
import {
  Shield, Activity, Volume2, Cloud, Stethoscope, Smartphone, User, BatteryFull,
  Weight, ShieldCheck, ChevronDown, ChevronUp, Monitor, Globe, Zap, Leaf,
  Menu, X, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin,
  Heart, Users, Target, ArrowRight, Check, Filter
} from "lucide-react";
import Image from "next/image";

const PRIMARY_BLUE = '#101585'; // use this everywhere for blue accents
const PRIMARY_ORANGE = '#FA6404';

const advantages = [
  {
    icon: Shield,
    title: "Patented Noise Cancellation",
    description: "Isolate the truth. Hear subtle sounds in any environment with our advanced noise filtering technology.",
    delay: 0,
  },
  {
    icon: Activity,
    title: "Integrated ECG Leads",
    description: "Wireless, real-time cardiac insights with our seamlessly integrated ECG technology.",
    delay: 200,
  },
  {
    icon: Volume2,
    title: "Smart Amplification",
    description: "Bring the faintest sounds to life with intelligent sound enhancement technology.",
    delay: 400,
  },
  {
    icon: Cloud,
    title: "Data Management",
    description: "Record, save, share, print: comprehensive patient data at your fingertips.",
    delay: 600,
  },
];

const AdvantagesSection = React.forwardRef((props, ref) => {
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
              setVisibleModules((prev) => {
                if (!prev.includes(index)) return [...prev, index];
                return prev;
              });
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
    <section
      ref={(node) => {
        sectionRef.current = node;
        if (ref) {
          if (typeof ref === 'function') ref(node);
          else ref.current = node;
        }
      }}
      className="py-20 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            The HD Steth Advantage
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
                className={`group relative bg-white rounded-2xl p-6 border border-slate-200 shadow transition-all duration-500 transform ${isModuleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${advantage.delay}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mb-6 transition-transform duration-300">
                    <Icon className="h-8 w-8" style={{ color: PRIMARY_BLUE }} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{advantage.title}</h3>
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
});

AdvantagesSection.displayName = 'AdvantagesSection';

function SpecCard({ icon, title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white mr-3" style={{ background: PRIMARY_BLUE }}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-2">{children}</div>
    </div>
  );
}

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
            <div className="rounded-full w-32 h-32 flex items-center justify-center mb-4" style={{ backgroundColor: PRIMARY_BLUE }}>
              <Stethoscope className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Chest Piece</div>
            <div className="text-gray-500 text-lg">Place on patient</div>
          </div>
          {/* Mobile App */}
          <div className="flex flex-col items-center flex-1">
            <div className="rounded-full w-32 h-32 flex items-center justify-center mb-4" style={{ backgroundColor: PRIMARY_BLUE }}>
              <Smartphone className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Mobile App</div>
            <div className="text-gray-500 text-lg">Visualize data</div>
          </div>
          {/* Cloud */}
          <div className="flex flex-col items-center flex-1">
            <div className="rounded-full w-32 h-32 flex items-center justify-center mb-4" style={{ backgroundColor: PRIMARY_BLUE }}>
              <Cloud className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Cloud</div>
            <div className="text-gray-500 text-lg">Process & analyze</div>
          </div>
          {/* Doctor */}
          <div className="flex flex-col items-center flex-1">
            <div className="rounded-full w-32 h-32 flex items-center justify-center mb-4" style={{ backgroundColor: PRIMARY_BLUE }}>
              <User className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Doctor</div>
            <div className="text-gray-500 text-lg">Review & diagnose</div>
          </div>
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
    { icon: BatteryFull, label: "8-Hour Continuous Operation", value: "8 Hours", color: "from-green-400 to-emerald-500" },
    { icon: Weight, label: "Lightweight Design", value: "230g", color: "from-blue-400 to-cyan-500" },
    { icon: Smartphone, label: "Mobile App Support", value: "iOS/Android", color: "from-purple-400 to-pink-500" },
    { icon: ShieldCheck, label: "FDA Cleared", value: "Certified", color: "from-orange-400 to-red-500" },
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
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-semibold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Precision Engineered. Reliably Built.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {keySpecs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div key={idx} className={`bg-white shadow-md rounded-xl p-6 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className={`mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-r ${spec.color} flex items-center justify-center`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{spec.label}</h3>
                <p className="text-2xl font-bold mt-1 text-gray-900">{spec.value}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mb-4">
          <button onClick={() => setExpandedSpecs(!expandedSpecs)} className="flex items-center justify-center gap-2 text-base font-medium px-6 py-3 rounded-full border border-gray-300 shadow-sm bg-white hover:bg-gray-100 transition">
            View All Specifications
            {expandedSpecs ? <ChevronUp className="w-5 h-5 text-gray-700" /> : <ChevronDown className="w-5 h-5 text-gray-700" />}
          </button>
        </div>

        <div className={`transition-all duration-500 ${expandedSpecs ? "opacity-100 mt-8" : "opacity-0 h-0 overflow-hidden"}`}>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {fullSpecifications.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white shadow rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.specs.map((spec, specIndex) => {
                    let icon = null;
                    if (spec.label.toLowerCase().includes("weight")) icon = <Weight className="w-5 h-5 text-primary mr-2" />;
                    if (spec.label.toLowerCase().includes("battery")) icon = <BatteryFull className="w-5 h-5 text-green-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("connectivity")) icon = <Cloud className="w-5 h-5 text-cyan-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("display") || spec.label.toLowerCase().includes("waveform")) icon = <Monitor className="w-5 h-5 text-purple-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("noise")) icon = <Volume2 className="w-5 h-5 text-orange-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("amplification") || spec.label.toLowerCase().includes("sound")) icon = <Zap className="w-5 h-5 text-yellow-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("lead") || spec.label.toLowerCase().includes("ecg")) icon = <Activity className="w-5 h-5 text-red-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("mobile")) icon = <Smartphone className="w-5 h-5" style={{ color: PRIMARY_BLUE, marginRight: 8 }} />;
                    if (spec.label.toLowerCase().includes("cloud")) icon = <Cloud className="w-5 h-5 text-cyan-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("integration") || spec.label.toLowerCase().includes("emr") || spec.label.toLowerCase().includes("ehr")) icon = <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" />;
                    if (spec.label.toLowerCase().includes("export")) icon = <Globe className="w-5 h-5 text-blue-400 mr-2" />;
                    if (spec.label.toLowerCase().includes("frequency")) icon = <Leaf className="w-5 h-5 text-green-400 mr-2" />;
                    if (spec.label.toLowerCase().includes("sampling")) icon = <Monitor className="w-5 h-5 text-purple-400 mr-2" />;
                    return (
                      <div key={specIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="flex items-center text-gray-700">{icon}{spec.label}</span>
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

const AboutHero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-slate-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Medical Team Working"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101585]/90 via-[#101585]/70 to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FA6404]/20 border border-[#FA6404]/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Heart size={16} className="text-[#FA6404] fill-[#FA6404]" />
            <span className="text-orange-100 text-xs font-bold uppercase tracking-wider">Our Commitment</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            We Work to <br />
            <span className="text-[#FA6404]">Save Lives</span>
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl drop-shadow-md">
            Driven by a passion for innovation and a dedication to patient care, we are redefining the boundaries of cardiac diagnostics.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#FA6404]/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
              Read Our Story <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FA6404]/10 rounded-full blur-2xl"></div>
            <h2 className="text-4xl font-bold" style={{ color: PRIMARY_BLUE }} >
              Empowering Clinicians with Precision
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              At HD Medical, we believe that every heartbeat tells a story. Our mission is to provide healthcare professionals with the clearest, most accurate cardiac data possible, enabling early detection and better patient outcomes.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              Founded by a team of scientists and cardiologists, we have spent over a decade perfecting the art of digital auscultation and ECG integration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <Users size={32} className="text-[#101585] mx-auto mb-4" />
              <h3 className="text-3xl font-bold" style={{ color: PRIMARY_ORANGE }} >100+</h3>
              <p className="text-slate-600 font-medium text-sm">Team Members</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl text-center">
              <Globe size={32} className="text-[#FA6404] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#101585] mb-1">20+</h3>
              <p className="text-slate-600 font-medium text-sm">Countries</p>
            </div>
            <div className="bg-white border border-slate-100 shadow-lg p-6 rounded-2xl text-center col-span-2">
              <Target size={32} className="text-[#101585] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#101585] mb-1">200K+</h3>
              <p className="text-slate-600 font-medium text-sm">Screenings Performed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function ProductHero() {
  const primaryBlue = PRIMARY_BLUE;
  const primaryOrange = PRIMARY_ORANGE;

  const features = [
    "Enables effective screening",
    "Save time, cost and saves lives",
    "Improve patient outcomes",
    "For Pediatricians and neo-natal",
    "Detect CHD, hear fetal HS",
    "Support prior to patient reaching hospital",
    "Critical for urgent care situations",
    "Easy to use on seniors",
    "Ideal for post-op patients",
    "Enables clear lung sound detection"
  ];

  // prepare items array (place this inside ProductHero, before the JSX return)
  const intelligentItems = [
    {
      icon: Stethoscope,
      title: "Integrated ECG",
      text: "HD Steth is the third‑generation solution from HD Medical — the first intelligent stethoscope with integrated triple‑electrode ECG."
    },
    {
      icon: Zap,
      title: "Patented Audio Tech",
      text: "Leverages patented noise cancellation and smart amplification for high‑fidelity auscultation."
    },
    {
      icon: Heart,
      title: "Accurate Evaluation",
      text: "Provides accurate cardiac evaluation which helps clinicians diagnose more effectively."
    },
    {
      icon: Users,
      title: "Build Patient Trust",
      text: "Enables evidence‑based care to build patient trust and improve retention through objective data."
    },
    {
      icon: Target,
      title: "Optimize Care Delivery",
      text: "Optimizes clinicians' time, reduces costs, increases efficiency and improves patient outcomes — ultimately saving lives."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold" style={{ color: PRIMARY_BLUE, lineHeight: 1.1 }}>HD Steth™ <br /> INSTANT CARDIAC INSIGHTS  <span className="text-[#FA6404] font-bold tracking-wider uppercase "> ANYTIME.</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">
              Experience the next generation of cardiac auscultation with HD Steth&apos;s intelligent technology.
            </p>
            <button onClick={() => window.location.href = '/resource'} className="bg-[#FA6404] hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition-all transform hover:-translate-y-0.5">
              Learn More
            </button>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl">
            <Image src="/images/fda_section_image.jpg" alt="Doctor using HD Steth" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Controls / Central Image */}
      <section className="w-full bg-white px-4 py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
          

          <div className="relative w-full flex justify-center">
            <div className="w-full max-w-4xl md:max-w-6xl lg:max-w-[1300px]">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/hd-controls.png"
                  alt="HD Steth Device with Labels"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1300px"
                  priority
                />
              </div>
              <button onClick={() => window.location.href = '/resource'} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-sm shadow-lg transition-all hover:-translate-y-0.5">
                Known More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Listening Modes & Signal Processing */}
      <section className="w-full py-10 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: primaryOrange }}>Key Listening Modes & Signal Processing</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">Carefully designed audio processing and listening modes to maximise clinical fidelity.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primaryBlue }}>
                  <Image
                    src="/icons/product/7-bestin-audio-qlipty-w.png"
                    alt="Smart amplification icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Smart amplification</h4>
                  <p className="text-sm text-gray-600 mt-2">Delivers best in class clarity of Heart sounds. Smart amplification is better than high amplification.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primaryBlue }}>
                  <Image
                    src="/icons/product/noise-cancelation-w.png"
                    alt="Active noise cancellation icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Active Noise cancellation</h4>
                  <p className="text-sm text-gray-600 mt-2">Blocks ambient noise to provide superior listening experience, so you can focus on vital body sounds.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primaryBlue }}>
                  <Image
                    src="/icons/product/3-crystlclear-hs-w.png"
                    alt="Advanced filtering icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Advanced filtering</h4>
                  <p className="text-sm text-gray-600 mt-2">Two precise filtering modes. Bell for lower frequency sounds (HS/Murmur). Dia for higher frequency sounds (bowel).</p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primaryBlue }}>
                  <Image
                    src="/icons/product/4-smart-amplification-exp-auscltatn-w.png"
                    alt="Pulmonary icon"
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Pulmonary</h4>
                  <p className="text-sm text-gray-600 mt-2">Dedicated listening mode to capture the full spectrum of Lung sounds. Toggling between modes is a simple press of a button.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HD Steth - Intelligent Solution (Corrected Section) */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY_ORANGE }}>
              HD Steth: Intelligent Solution for Cardiac Care
            </h3>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: PRIMARY_BLUE }}></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {intelligentItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm" style={{ backgroundColor: PRIMARY_BLUE }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h4>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional product boxes (Battery, Ergonomic, App, Electrodes) */}
      <section className="w-full py-6 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: PRIMARY_BLUE }}>
                  <Image src="/icons/product/b5-battery-life-w.png" alt="Battery Life" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">Battery Life</h4>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2 ml-16">
                Rechargeable Li‑ion battery that provides up to 5 days of use on a single charge.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: PRIMARY_BLUE }}>
                  <Image src="/icons/product/b8-3intgrted-leads-w.png" alt="Ergonomic Form Factor" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">Ergonomic Form Factor</h4>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2 ml-16">
                Traditional stethoscope look and feel. Full control panel can be managed with one hand.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: PRIMARY_BLUE }}>
                  <Image src="/icons/product/6-Femilr-steth-frm-fctr-w.png" alt="Customised App" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">Customised App</h4>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2 ml-16">
                Bluetooth enabled App which displays heart sound and ECG waveforms and has integrated data management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: PRIMARY_BLUE }}>
                  <Image src="/icons/product/1-Intl-steth-ekg-leads-w.png" alt="Three Integrated Electrodes" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">Three Integrated Electrodes</h4>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2 ml-16">
                Three gold plated electrodes around the chest piece, which provides superior conductivity for better signal acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: EHR Integration*/}
      <section className="py-20 px-6 md:px-12 lg:px-20 w-full" style={{ backgroundColor: PRIMARY_BLUE }}>
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#ffffff' }}>
            EHR Integration Support
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed text-center max-w-5xl mb-12 font-medium" style={{ color: '#ffffff' }}>
            HD Steth App has an open APK that can be integrated into providers&apos; EHR systems. It enables critical cardiac data to be seamlessly transferred into EHRs.
          </p>

          <button
            className="px-10 py-4 rounded-lg text-lg font-bold tracking-wide transition-transform hover:scale-105 shadow-lg border-2"
            style={{ backgroundColor: '#FA6404', color: '#ffffff', borderColor: `${PRIMARY_ORANGE}` }}
          >
            KNOW MORE
          </button>
        </div>
      </section>

      {/* Centered App Showcase */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-[#FA6404] bg-[#FA6404]/10">HD Steth Bluetooth enabled APP</span>

            <div className="max-w-4xl">
              <h3 className="text-lg md:text-xl font-semibold text-gray-600">SEE WHAT YOU HEAR</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-4" style={{ color: PRIMARY_BLUE }}>
                SEE WHAT YOU COULD NOT HEAR
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                HD Steth uses a custom App that runs on smartphones and tablets. It connects via Bluetooth and simultaneously displays HS waveforms and single‑lead ECG — empowering faster, evidence‑based decisions.
              </p>
            </div>

            {/* Centered device / app image */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl bg-white p-6" style={{ border: `1px solid rgba(16,21,133,0.04)` }}>
                <div className="mx-auto max-w-[920px]">
                  <Image
                    src="/images/hd-steth-app.png"
                    alt="HD Steth App screenshot"
                    width={1200}
                    height={700}
                    className="mx-auto object-contain rounded-lg"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: PRIMARY_BLUE }} />
                    <span>Live HS + ECG</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-2">
                    <span>Bluetooth • Real‑time</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-2">
                    <span>Save • Share • Export</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content card below image */}
            <div className="w-full max-w-3xl mx-auto mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: PRIMARY_BLUE }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Complements the Device</h4>
                  <p className="text-sm text-gray-600">HD Steth App mirrors most functionality of the device and extends portability for clinicians.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: PRIMARY_BLUE }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">HS + ECG Together</h4>
                  <p className="text-sm text-gray-600">Simultaneous HS and ECG waveforms provide validation and speed up clinical diagnosis.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: PRIMARY_BLUE }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Wireless Transmission</h4>
                  <p className="text-sm text-gray-600">Real‑time Bluetooth streaming to phones/tablets for instant review.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="px-12 py-3 rounded-full text-white font-bold shadow-xl transform hover:scale-105 transition"
                style={{ background: `linear-gradient(90deg, ${PRIMARY_ORANGE}, #ff7a2f)` }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* App Screens & Details */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: PRIMARY_BLUE }}>
            App Screens & Details
          </h2>

          {/* Row 1: Boxes 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center min-h-[360px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PRIMARY_BLUE }}>Simultaneous visualization</h3>

              <div className="mx-auto w-full max-w-[520px] h-[200px] bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/1stbox.png"
                  alt="Simultaneous visualization"
                  width={920}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-auto">
                PCG and ECG shown together for immediate correlation. Record, freeze and snapshot the live display.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center min-h-[360px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PRIMARY_BLUE }}>Positions & Postures</h3>

              <div className="mx-auto w-full max-w-[520px] h-[200px] bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/2ndbox.jpg"
                  alt="Positions and postures"
                  width={920}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-auto">
                Label chest location and patient posture when saving recordings for clear documentation.
              </p>
            </div>
          </div>

          {/* Row 2: Boxes 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center min-h-[360px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PRIMARY_BLUE }}>Review after Recording</h3>

              <div className="mx-auto w-full max-w-[520px] h-[200px] bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/3rdbox.png"
                  alt="Review after recording"
                  width={920}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-auto">
                View static waveform images, save snapshots and annotate for later review.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center min-h-[360px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PRIMARY_BLUE }}>Save & History</h3>

              <div className="mx-auto w-full max-w-[520px] h-[200px] bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/4thbox.jpg"
                  alt="Save history"
                  width={920}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-auto">
                Store recordings in-app and access full history for each patient.
              </p>
            </div>
          </div>

          {/* Row 3: Boxes 5 & 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center min-h-[360px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PRIMARY_BLUE }}>Share</h3>

              <div className="mx-auto w-full max-w-[520px] h-[200px] bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/5thbox.png"
                  alt="Share recordings"
                  width={920}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-auto">
                Share recorded sessions securely with colleagues for consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center min-h-[360px] flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: PRIMARY_BLUE }}>Replay</h3>

              <div className="mx-auto w-full max-w-[520px] h-[200px] bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/6thbox.png"
                  alt="Replay saved sessions"
                  width={920}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-auto">
                Replay saved recordings anytime for review, teaching or second opinions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Ideal Solution */}
      <section className="py-20 px-6 md:px-12 lg:px-20 w-full" style={{ backgroundColor: primaryBlue }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">HD Steth – The Ideal Solution for All Clinicians</h2>
          <h3 className="text-white text-2xl md:text-3xl font-semibold text-center mb-16 opacity-90">Screen. Monitor. Help Diagnose.</h3>

          <div className="flex flex-wrap justify-center gap-6 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-6 rounded-xl shadow-xl border-2 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] transition-transform hover:-translate-y-1" style={{ backgroundColor: 'white', borderColor: primaryOrange }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-5" style={{ backgroundColor: primaryOrange }}>
                  <Check className="text-white w-7 h-7" strokeWidth={3} />
                </div>

                <p className="text-lg md:text-xl font-semibold leading-tight" style={{ color: primaryBlue }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-16 px-12 py-4 rounded-lg text-xl font-bold shadow-xl transition-all hover:bg-gray-100 hover:shadow-2xl" style={{ backgroundColor: 'white', color: primaryBlue }}
            onClick={() => window.location.href = '/resource'}>
            Get HD Steth Now
          </button>
        </div>
      </section>

    </>
  );
}