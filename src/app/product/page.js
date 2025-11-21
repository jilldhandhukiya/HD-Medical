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
    Menu, 
  X, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Users,
  Target,
  ArrowRight,
  Check
} from "lucide-react";
import Image from "next/image";


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
    <section
      ref={(node) => {
        sectionRef.current = node;
        if (ref) {
          if (typeof ref === 'function') {
            ref(node);
          } else {
            ref.current = node;
          }
        }
      }}
      className="py-20 relative overflow-hidden bg-white"
    >
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
});

AdvantagesSection.displayName = 'AdvantagesSection';

function SpecCard({ icon, title, children, className = "" }) {
  return (
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
            <div className="bg-[#155dfc] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <Stethoscope className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Chest Piece</div>
            <div className="text-gray-500 text-lg">Place on patient</div>
          </div>
          {/* Mobile App */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#155dfc] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <Smartphone className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Mobile App</div>
            <div className="text-gray-500 text-lg">Visualize data</div>
          </div>
          {/* Cloud */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#155dfc] rounded-full w-32 h-32 flex items-center justify-center mb-4">
              <Cloud className="text-white w-16 h-16" />
            </div>
            <div className="text-2xl font-bold mb-1">Cloud</div>
            <div className="text-gray-500 text-lg">Process & analyze</div>
          </div>
          {/* Doctor */}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#155dfc] rounded-full w-32 h-32 flex items-center justify-center mb-4">
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

const AboutHero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Medical Team Working" 
          className="w-full h-full object-cover"
          fill
        />
        {/* Gradient Overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101585]/90 via-[#101585]/70 to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
        <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#FA6404]/20 border border-[#FA6404]/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Heart size={16} className="text-[#FA6404] fill-[#FA6404]" />
                <span className="text-orange-100 text-xs font-bold uppercase tracking-wider">Our Commitment</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                We Work to <br/>
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
                        <h2 className="text-4xl font-bold text-[#101585] mb-6 relative z-10">
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
                            <h3 className="text-3xl font-bold text-[#FA6404] mb-1">100+</h3>
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
  // Add ref for the advantages section
  const advantagesRef = useRef(null);
  const primaryBlue = '#101585';
  const primaryOrange = '#FA6404';

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

  // Add scroll function
  const scrollToAdvantages = () => {
    advantagesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-white via-blue-50/50 to-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <span className="text-[#FA6404] font-bold tracking-wider uppercase text-sm md:text-base mb-4">
              INSTANT CARDIAC INSIGHTS. ANYTIME.
            </span>
            <h1 className="text-[#101585] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HD Steth – The Intelligent Stethoscope
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">
              Experience the next generation of cardiac auscultation with HD Steth&apos;s intelligent technology.
            </p>
            <button
              onClick={scrollToAdvantages}
              className="bg-[#FA6404] hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Doctor using HD Steth"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Controls Section */}
       <section>
        <section className="w-full bg-white px-4 py-12">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
            {/* Heading Image */}
            <div className="mb-8">
              <Image
                src="/images/hd-steth-controls-heading.png"
                alt="HD Steth Controls"
                width={600}
                height={250}
                className="mx-auto w-auto h-auto max-w-full"
              />
            </div>

            {/* Central Stethoscope + Tablet Image */}
            <div className="relative">
              <Image
                src="/images/hd-steth-controls-main.png"
                alt="HD Steth Device with Labels"
                width={900}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </section>


      <div className="font-sans antialiased w-full overflow-x-hidden">
      
      {/* SECTION 1: EHR Integration */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{ color: primaryBlue }}
          >
            Seamless EHR Integration
          </h2>
          
          <p 
            className="text-xl md:text-2xl leading-relaxed text-center max-w-5xl mb-12 font-medium"
            style={{ color: primaryBlue }}
          >
            HD Steth App has an open APK that can be integrated into providers&apos; EHR systems. 
            It enables critical cardiac data to be seamlessly transferred into EHRs. 
            This allows multiple clinicians to access the latest patient data in real time 
            thereby improving both clinical efficiency and patient outcomes.
          </p>

          <button 
            className="px-10 py-4 rounded-lg text-lg font-bold tracking-wide transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: primaryBlue, color: 'white' }}
          >
            KNOW MORE
          </button>
        </div>
      </section>

      {/* SECTION 2: Ideal Solution */}
      <section 
        className="py-20 px-6 md:px-12 lg:px-20 w-full"
        style={{ backgroundColor: primaryBlue }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Headings */}
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            HD Steth – The Ideal Solution for All Clinicians
          </h2>
          <h3 className="text-white text-2xl md:text-3xl font-semibold text-center mb-16 opacity-90">
            Screen. Monitor. Help Diagnose.
          </h3>

          {/* Feature Grid 
              Using flex-wrap justify-center to ensure the last row items 
              (if uneven) are centered, matching the visual style.
          */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center p-6 rounded-xl shadow-xl border-2 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] transition-transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'white', // Inner box white as requested
                  borderColor: primaryOrange 
                }}
              >
                {/* Icon Circle */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-5"
                  style={{ backgroundColor: primaryOrange }}
                >
                  <Check className="text-white w-7 h-7" strokeWidth={3} />
                </div>

                {/* Text */}
                <p 
                  className="text-lg md:text-xl font-semibold leading-tight"
                  style={{ color: primaryBlue }} // Text blue as requested
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <button 
            className="mt-16 px-12 py-4 rounded-lg text-xl font-bold shadow-xl transition-all hover:bg-gray-100 hover:shadow-2xl"
            style={{ backgroundColor: 'white', color: primaryBlue }}
          >
            Get HD Steth Now
          </button>

        </div>
      </section>

    </div>
      
      {/* Features Section - Add ref here */}
      {/* <AdvantagesSection ref={advantagesRef} /> */}

      {/* How It Works Section */}
      {/* <HowItWorksSection /> */}

      {/* <TechnicalExcellenceSection /> */}

      {/* <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Activity className="absolute top-20 right-20 w-8 h-8 text-[#17a6e0] animate-pulse" />
          <Activity className="absolute bottom-32 left-16 w-6 h-6 text-[#17a6e0] animate-pulse" style={{ animationDelay: '1s' }} />
          <Activity className="absolute top-1/3 left-1/3 w-4 h-4 text-[#17a6e0] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Compliant. Durable. Ready for the Field.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

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
      </section> */}

      {/* <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 flex items-center gap-3">
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

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 flex items-center gap-3">
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

          <p className="text-xs text-gray-400 mt-6 text-center">
            * Data/results based on HD Medical internal testing and validation
          </p>
        </div>
      </section> */}

      {/* Download HD Steth App Section */}
      {/* <section className="bg-[#155dfc] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download HD Steth App
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Get the companion app for your HD Steth device
          </p>
          
          <a
            href="https://drive.google.com/file/d/10C7PK_3UN5E_P-7PxM9s3p3U094TE_0q/view?usp=sharing"
            className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Download for Android
          </a>
        </div>
      </section> */}

      {/* Resources & Documentation Section */}
      {/* <section className="bg-gray-50 py-16 px-4">
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
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#155dfc]/10 p-6">
                <div className="w-14 h-14 bg-[#155dfc] rounded-2xl flex items-center justify-center mb-4">
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#155dfc] text-white font-medium px-4 py-2 rounded-lg transition-colors"
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

            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#155dfc]/10 p-6">
                <div className="w-14 h-14 bg-[#155dfc] rounded-2xl flex items-center justify-center mb-4">
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#155dfc] text-white font-medium px-4 py-2 rounded-lg transition-colors"
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

            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#155dfc]/10 p-6">
                <div className="w-14 h-14 bg-[#155dfc] rounded-2xl flex items-center justify-center mb-4">
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#155dfc] text-white font-medium px-4 py-2 rounded-lg transition-colors"
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

            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#155dfc]/10 p-6">
                <div className="w-14 h-14 bg-[#155dfc] rounded-2xl flex items-center justify-center mb-4">
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#155dfc] text-white font-medium px-4 py-2 rounded-lg transition-colors"
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

            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-[#155dfc]/10 p-6">
                <div className="w-14 h-14 bg-[#155dfc] rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clinical Report</h3>
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
                    href="/docs/Clinical-Report.pdf"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#155dfc] text-white font-medium px-4 py-2 rounded-lg transition-colors"
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


          <div className="flex justify-center mt-12">
            <button
              onClick={() => {
                // Direct download of pre-made zip file
                const link = document.createElement('a');
                link.href = "/docs/HDSteth-All-Docs.zip";
                link.download = "HDSteth-All-Docs.zip";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#155dfc] hover:bg-[#155dfc] text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download All Documents
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            All documents are available in PDF format. For additional resources, please contact our support team.
          </p>
        </div>
      </section> */}

    </>
  );
}