'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  ArrowRight,
  Activity,
  HeartPulse,
  CheckCircle2,
  TrendingUp,
  Award,
  Check,
  Target,
  Stethoscope,
  Monitor,
  Waves,
  ShieldCheck,
  Zap,
  Heart,
  Headphones,
} from 'lucide-react';

const IntelligentSolutionsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      id: 1,
      iconName: "ekgleadsseth",
      title: "Integrated EKG",
      desc: "Intelligent stethoscope with integrated EKG electrodes.",
      position: "left"
    },
    {
      id: 2,
      iconName: "2-realtime-cardc-p2c-b",
      title: "Cardiac Insights",
      desc: "Real-time cardiac insights at the point-of-care.",
      position: "left"
    },
    {
      id: 3,
      iconName: "4-smart-amplification-exp-auscltatn-b",
      title: "Auscultation Excellence",
      desc: "Smart amplification for exceptional auscultation.",
      position: "left"
    },
    {
      id: 7, // Moved 4th item to bottom of left column
      iconName: "b2-noise-cancel-b",
      title: "Noise Cancellation",
      desc: "Patented noise cancellation technology.",
      position: "left"
    },
    {
      id: 4,
      iconName: "5-presin-enginrd-b",
      title: "Precision Engineering",
      desc: "Engineered with Precision.",
      position: "right"
    },
    {
      id: 5,
      iconName: "6-Femilr-steth-frm-fctr-b",
      title: "Familiar Form Factor",
      desc: "Familiar Stethoscope form factor.",
      position: "right"
    },
    {
      id: 6,
      iconName: "7-bestin-audio-qlipty-b",
      title: "Superior Audio Quality",
      desc: "Best in class audio for crystal clear Heart sounds.",
      position: "right"
    }
  ];

  return (
    <section className="relative w-full h-[85vh] min-h-[800px] bg-white overflow-hidden flex flex-col items-center py-8">

      {/* --- 1. Background Subtle Grid --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(#101585 0.5px, transparent 0.5px), radial-gradient(#101585 0.5px, #ffffff 0.5px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* --- 2. Section Header (More Compact to save space) --- */}
      <div className="relative z-10 text-center mb-6 shrink-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#101585] tracking-tight">
          Intelligent <span className="text-[#FA6404]">Architecture</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2 font-medium uppercase tracking-widest">
          The Anatomy of Advanced Care
        </p>
      </div>

      {/* --- 3. Main Content Layout --- */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-between px-4 md:px-8 z-10">

        {/* LEFT COLUMN (4 Items) - Wider width for better text fit */}
        <div className="flex flex-col justify-between h-full py-4 w-[30%] items-end">
          {features.filter(f => f.position === 'left').map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredIndex(feature.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group flex flex-col items-end text-right cursor-pointer transition-all duration-300 ${hoveredIndex === feature.id ? 'scale-105 translate-x-2' : 'opacity-90 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <h3 className={`font-bold text-xl md:text-2xl transition-colors leading-tight ${hoveredIndex === feature.id ? 'text-[#FA6404]' : 'text-[#101585]'}`}>
                  {feature.title}
                </h3>
                {/* Bigger Icon Container */}
                <div className={`w-18 h-18 rounded-full flex items-center justify-center shadow-md transition-all duration-300 shrink-0 ${hoveredIndex === feature.id ? 'bg-[#FA6404] scale-110' : 'bg-white border-2 border-slate-100'}`}>
                  <Image
                    src={`/icons/homepage/${feature.iconName}.png`}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className={`object-contain transition-opacity duration-200 ${hoveredIndex === feature.id ? 'brightness-0 invert' : ''}`}
                  />
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-500 font-medium max-w-[280px] leading-snug">
                {feature.desc}
              </p>
              {/* Active Line Indicator */}
              <div className={`h-[2px] bg-gradient-to-l from-[#FA6404] to-transparent mt-2 transition-all duration-300 ${hoveredIndex === feature.id ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>
          ))}
        </div>

        {/* CENTER DEVICE (Compact Width to give space to sides) */}
        <div className="relative w-[30%] flex justify-center items-center h-full">
          {/* Rings - Slightly smaller to not overlap text */}
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border border-slate-100 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] border border-dashed border-blue-100 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent top-1/2 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>

          <div className="relative w-48 h-48 md:w-60 md:h-60 bg-white rounded-full shadow-[0_20px_60px_-15px_rgba(16,21,133,0.25)] flex items-center justify-center z-20 border-[6px] border-slate-50">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-[#101585] to-blue-900 rounded-full shadow-inner flex items-center justify-center relative overflow-hidden">
              {/* Heartbeat Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-30 text-[#FA6404] opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 H 40 L 45 5 L 50 15 L 55 5 L 60 10 H 100"
                    stroke="currentColor" strokeWidth="2" fill="none"
                    className="animate-[dash_2s_linear_infinite]"
                    strokeDasharray="100" strokeDashoffset="100">
                    <animate attributeName="stroke-dashoffset" from="100" to="-100" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (3 Items) - Spaced evenly to match height */}
        <div className="flex flex-col justify-evenly h-full py-8 w-[30%] items-start">
          {features.filter(f => f.position === 'right').map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredIndex(feature.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group flex flex-col items-start text-left cursor-pointer transition-all duration-300 ${hoveredIndex === feature.id ? 'scale-105 -translate-x-2' : 'opacity-90 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-4 mb-2 flex-row-reverse">
                <h3 className={`font-bold text-xl md:text-2xl transition-colors leading-tight ${hoveredIndex === feature.id ? 'text-[#FA6404]' : 'text-[#101585]'}`}>
                  {feature.title}
                </h3>
                <div className={`w-18 h-18 rounded-full flex items-center justify-center shadow-md transition-all duration-300 shrink-0 ${hoveredIndex === feature.id ? 'bg-[#FA6404] scale-110' : 'bg-white border-2 border-slate-100'}`}>
                  <Image
                    src={`/icons/homepage/${feature.iconName}.png`}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className={`object-contain transition-opacity duration-200 ${hoveredIndex === feature.id ? 'brightness-0 invert' : ''}`}
                  />
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-500 font-medium max-w-[280px] leading-snug pl-1">
                {feature.desc}
              </p>
              <div className={`h-[2px] bg-gradient-to-r from-[#FA6404] to-transparent mt-2 transition-all duration-300 ${hoveredIndex === feature.id ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full flex justify-center mt-8">
        <Link
          href="/product"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold shadow-lg transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: '#fa6404' }}
          aria-label="Learn more about product"
        >
          Learn More
          <ArrowRight size={16} />
        </Link>
      </div>
      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    { id: 0, text: "Unleash exceptional Auscultation" },
    { id: 1, text: "Visualize the Heart Sounds" },
    { id: 2, text: "Precise ECG" },
  ];

  const scrollToVideo = () => {
    const el = document.getElementById('videoSection');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full pt-8 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 w-fit">
          <span className="text-[#FA6404]"><Activity size={16} /></span>
          <span className="text-[#101585] text-xs font-bold uppercase tracking-wide">Next-Gen Cardiac Technology</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#101585] leading-[1.1]">
          Transform <br />
          Cardiac Care with <br />
          <span className="text-[#FA6404] relative">
            HD Steth
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FA6404] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        <div className="flex flex-col gap-6 pl-2 relative">
          <div className="absolute left-0 top-2 bottom-2 w-1 bg-slate-100 rounded-full"></div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative pl-8 cursor-pointer group"
              onMouseEnter={() => setActiveFeature(index)}
            >
              {activeFeature === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FA6404] rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(250,100,4,0.5)]"></div>
              )}
              <span className={`text-lg font-medium transition-colors duration-300 ${activeFeature === index ? 'text-[#101585] font-semibold' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/product" className="flex items-center gap-2 bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#FA6404]/25 transition-transform hover:-translate-y-1">
            Explore Technology <ArrowRight size={18} />
          </Link>

          <button onClick={scrollToVideo} className="flex items-center gap-2 bg-white hover:bg-blue-50 text-[#101585] border border-blue-200 px-8 py-4 rounded-lg font-bold transition-colors">
            <Play size={18} className="text-[#101585] fill-current" /> Watch Demo
          </button>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <Image
          src="/images/herosection.png"
          alt="HD Steth Device"
          width={600}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  const stats = [
    { icon: <CheckCircle2 size={20} />, value: "200,000+", label: "Lives Screened" },
    { icon: <TrendingUp size={20} />, value: "90%", label: "Sensitivity" },
    { icon: <Award size={20} />, value: "99%", label: "Specificity" },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background: Subtle Medical Cross Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#101585 1px, transparent 1px), linear-gradient(90deg, #101585 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#FA6404] font-bold tracking-widest text-xs uppercase mb-3">Proven Excellence</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#101585] mb-4 max-w-3xl mx-auto">
            Trusted by Healthcare <br /> Professionals <span className="text-[#FA6404]">Worldwide</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our technology is validated through extensive clinical trials and real-world deployments
          </p>
        </div>

        {/* Small Circular Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group cursor-default">

              {/* 1. Container Size (Smaller: w-44 h-44) */}
              <div className="w-44 h-44 rounded-full border border-slate-100 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center relative z-10">

                {/* 2. The Rotating Orbital Ring (Same Border Animation) */}
                <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]">
                  {/* Active Dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FA6404] rounded-full shadow-[0_0_10px_#FA6404]"></div>
                  {/* Trail */}
                  <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent border-t-[#FA6404]/30 border-r-[#FA6404]/10 rotate-45"></div>
                </div>

                {/* 3. Inner Static Ring */}
                <div className="absolute inset-3 rounded-full border border-slate-50 shadow-inner"></div>

                {/* 4. Compact Content */}
                <div className="flex flex-col items-center justify-center relative z-20 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="mb-2 text-slate-300 group-hover:text-[#FA6404] transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#101585] tracking-tight mb-0.5">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </div>

              {/* 5. Floor Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-3 bg-black/5 rounded-[100%] blur-md group-hover:w-32 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Validation Text */}
        <div className="text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
            <p className="text-slate-600 text-sm font-medium">
              Validated across <span className="text-[#101585] font-bold">50+ healthcare facilities</span> in <span className="text-[#FA6404] font-bold">20+ countries</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductDetailSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#101585] relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FA6404] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full w-fit shadow-sm">
              <span className="text-[#FA6404]"><HeartPulse size={16} /></span>
              <span className="text-blue-100 text-xs font-bold tracking-wide uppercase">Next-Generation Cardiac Intelligence</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">HD Steth</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-200/80">Reimagining Cardiac Assessment</h3>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              The world&apos;s first intelligent stethoscope that combines precision auscultation, full EKG mapping, and AI-driven clinical insights in one elegant device.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-3 bg-[#0d1160] border border-white/10 px-4 py-2 rounded-lg">
                <div className="p-1 bg-green-500/20 rounded-full">
                  <Check size={14} className="text-green-400" />
                </div>
                <span className="text-white font-semibold text-sm">FDA Cleared Class II</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0d1160] border border-white/10 px-4 py-2 rounded-lg">
                <div className="p-1 bg-green-500/20 rounded-full">
                  <Check size={14} className="text-green-400" />
                </div>
                <span className="text-white font-semibold text-sm">HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative group">
            {/* Background decorative blob - Adjusted for dark theme */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#FA6404] to-blue-600 rounded-[2rem] opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[5/5]">
              <Image
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Doctor holding heart model"
                className="w-full object-cover opacity-90"
                fill
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101585]/80 to-transparent"></div>
            </div>

            {/* Floating Badge 1 - BPM (Kept White for Contrast) */}
            <div className="absolute top-12 left-0 md:-left-8 bg-white p-5 rounded-xl shadow-xl shadow-black/20 flex items-center gap-3 animate-bounce-slow z-20 border-l-4 border-[#101585]">
              <div className="p-2 bg-blue-50 text-[#101585] rounded-lg">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Live BPM</p>
                <p className="text-xl font-bold text-[#101585]">72</p>
              </div>
            </div>

            {/* Floating Badge 2 - AI Confidence (Kept White for Contrast) */}
            <div className="absolute bottom-12 right-0 md:-right-8 bg-white p-5 rounded-xl shadow-xl shadow-black/20 flex items-center gap-3 z-20 border-r-4 border-[#FA6404]">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase text-right">AI Confidence</p>
                <p className="text-xl font-bold text-[#FA6404] text-right">94%</p>
              </div>
              <div className="p-2 bg-orange-50 text-[#FA6404] rounded-lg">
                <Target size={20} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="videoSection" className="w-full py-20 px-6 md:px-12 relative bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full mb-6">
          <div className="w-2 h-2 bg-[#FA6404] rounded-full"></div>
          <span className="text-[#101585] text-xs font-bold uppercase tracking-wide">Live Demonstration</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#101585] mb-4">
          Instant cardiac insights. <span className="text-[#FA6404]">Anytime.</span>
        </h2>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
          Experience the future of cardiac diagnostics with real-time insights delivered at the point of care.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -top-8 -left-8 w-24 h-24 border-t-4 border-l-4 border-blue-200 rounded-tl-3xl hidden md:block"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-4 border-r-4 border-orange-300 rounded-br-3xl hidden md:block"></div>

        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/a1i9AGoZdUY"
            title="HD Steth Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

const ClinicalExcellenceSection = () => {
  const features = [
    {
      icon: <Stethoscope size={28} className="text-white" />,
      title: "Dual-Mode Auscultation",
      desc: "Digital + Analog with real-time amplification",
      isOpen: true // Just for the icon background visual hint
    },
    {
      icon: <Monitor size={28} className="text-white" />,
      title: "Integrated 12-Lead EKG",
      desc: "Full cardiac mapping in 30 seconds",
      isOpen: false
    },
    {
      icon: <Waves size={28} className="text-white" />,
      title: "AI Sound Analysis",
      desc: "Detects murmurs, S3/S4, and arrhythmias",
      isOpen: false
    },
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      title: "Clinical Decision Support",
      desc: "Evidence-based recommendations at point-of-care",
      isOpen: false
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
            Engineered for Clinical Excellence
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Every component designed with input from cardiologists at leading academic medical centers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
              {/* Top fade for hover effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#FA6404] transition-colors"></div>

              <div className="mb-6">
                <div className="bg-[#FA6404] w-14 h-14 rounded-lg flex items-center justify-center shadow-md shadow-orange-200">
                  {item.icon}
                </div>
              </div>

              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-[#101585] text-lg leading-tight pr-4">{item.title}</h3>
                {/* Chevron equivalent */}
                <div className="text-slate-300 group-hover:text-[#FA6404] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CTASection = () => {
  const stats = [
    { icon: <Target size={20} className="text-blue-600" />, val: "98.7%", label: "AI Diagnostic Accuracy", sub: "bg-blue-50" },
    { icon: <Zap size={20} className="text-[#FA6404]" />, val: "47s", label: "Avg. Exam Duration", sub: "bg-orange-50" },
    { icon: <Heart size={20} className="text-red-500" />, val: "2,000+", label: "Active Clinicians", sub: "bg-red-50" },
    { icon: <Headphones size={20} className="text-indigo-500" />, val: "24/7", label: "Dedicated Support", sub: "bg-indigo-50" },
  ];

  return (
    <section className="w-full py-10 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto bg-[#101585] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FA6404]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Lead <br />
              <span className="text-[#FA6404]">the Future of <br /> Cardiac Care?</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-md leading-relaxed">
              Join <span className="text-orange-400 font-bold">2,000+</span> cardiologists and clinicians transforming patient outcomes with AI-powered precision diagnostics.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contactus"
                className="bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#FA6404]/25 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                aria-label="Contact us"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-xl">
                <div className={`w-12 h-12 rounded-full ${stat.sub} flex items-center justify-center mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.val.includes('%') || stat.val.includes('s') ? (
                    <span>
                      {stat.val.replace(/[%s]/g, '')}
                      <span className={`text-xl ml-0.5 ${idx === 1 ? 'text-[#FA6404]' : 'text-[#FA6404]'}`}>
                        {stat.val.match(/[%s]/)[0]}
                      </span>
                    </span>
                  ) : (
                    stat.val
                  )}
                </div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CertificationsBar = () => {
  return (
      <section className="bg-[#101585] py-12 w-full">
        <div className="max-w-full px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            CERTIFICATES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center justify-items-center max-w-none mx-auto">
            {[
              { src: "/images/fda.png", alt: "FDA Cleared", text: "FDA CLEARED\n# K201299", pdf:"/docs/FDA-K201299.pdf" },
              { src: "/images/iso.png", alt: "ISO Certification", text: "ISO\n13485: 2016", pdf:"/docs/ISO13485-Certificate.pdf" },
              { src: "/images/tn.png", alt: "TN Certification", text: "TN/M/MD/004806" }
              ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={120}
                    height={100}
                    className="mb-4 !transition-none !duration-0"
                    onClick={() => window.open(cert.pdf, '_blank')}
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

  );
}

const FDAClearanceSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Image (Fixed Layout) */}
        <div className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
          <Image
            src="/images/Patient-Doc.png" // Replace with your actual image path
            alt="Doctor using HD Steth on patient"
            className="object-cover"
            fill
          />
        </div>

        {/* Right: Content (Styled exactly like the reference image) */}
        <div className="space-y-10">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#101585] leading-tight">
            FDA cleared for the three products classification codes in one device.
          </h2>

          {/* Classification Codes Grid */}
          <div className="grid grid-cols-3 items-start">
            
            {/* Code 1: DQD */}
            <div className="flex flex-col items-center px-2 border-r-2 border-[#FA6404]">
              <div className="bg-[#FA6404] text-white text-xl md:text-2xl font-bold py-1.5 px-6 rounded-full mb-4 shadow-sm">
                DQD
              </div>
              <p className="text-slate-900 font-bold text-sm md:text-lg text-center leading-tight">
                Electronic Stethoscope
              </p>
            </div>

            {/* Code 2: DQC */}
            <div className="flex flex-col items-center px-2 border-r-2 border-[#FA6404]">
              <div className="bg-[#FA6404] text-white text-xl md:text-2xl font-bold py-1.5 px-6 rounded-full mb-4 shadow-sm">
                DQC
              </div>
              <p className="text-slate-900 font-bold text-sm md:text-lg text-center leading-tight">
                Phonocardiograph System
              </p>
            </div>

            {/* Code 3: DPS */}
            <div className="flex flex-col items-center px-2">
              <div className="bg-[#FA6404] text-white text-xl md:text-2xl font-bold py-1.5 px-6 rounded-full mb-4 shadow-sm">
                DPS
              </div>
              <p className="text-slate-900 font-bold text-sm md:text-lg text-center leading-tight">
                Electrocardiograph & Cardiac monitor
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <style jsx global>{`
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>

      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.4]"
        style={{
          backgroundImage: `
                linear-gradient(to right, #eff6ff 1px, transparent 1px),
                linear-gradient(to bottom, #eff6ff 1px, transparent 1px)
             `,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <VideoSection />
        <TrustedBySection />
        <IntelligentSolutionsSection />
        <ProductDetailSection />
        <ClinicalExcellenceSection />
        <CertificationsBar />
        <FDAClearanceSection />
        <CTASection />
      </div>
    </div>
  );
};

export default App;