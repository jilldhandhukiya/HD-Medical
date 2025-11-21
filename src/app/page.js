'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Play, 
  ArrowRight, 
  Menu, 
  X, 
  Activity, 
  HeartPulse, 
  FileText, 
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
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

// --- Color Constants for easy reference ---
// Primary Blue: #101585
// Primary Orange: #FA6404

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-transparent relative z-50 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-1 cursor-pointer">
        <span className="text-3xl font-bold text-[#101585] tracking-tighter">HD</span>
        <span className="text-2xl font-bold text-[#FA6404]">Medical</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="text-slate-600 hover:text-[#101585] font-medium transition-colors text-sm"
          >
            {item}
          </a>
        ))}
        <button className="bg-[#FA6404] hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-[#FA6404]/20 transition-all transform hover:-translate-y-0.5">
          Get Started
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t p-4 flex flex-col gap-4 md:hidden z-50">
           {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded">
              {item}
            </a>
          ))}
           <button className="bg-[#FA6404] text-white px-6 py-3 rounded-full font-semibold w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    { id: 0, text: "Unleash exceptional Auscultation" },
    { id: 1, text: "Visualize the Heart Sounds" },
    { id: 2, text: "Precise ECG" },
  ];

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
          <button className="flex items-center gap-2 bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#FA6404]/25 transition-transform hover:-translate-y-1">
            Explore Technology <ArrowRight size={18} />
          </button>
          <button className="flex items-center gap-2 bg-white hover:bg-blue-50 text-[#101585] border border-blue-200 px-8 py-4 rounded-lg font-bold transition-colors">
            <Play size={18} className="text-[#101585] fill-current" /> Watch Demo
          </button>
        </div>
      </div>

      <div className="relative flex justify-center items-center min-h-[400px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[80%] h-[85%] bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-white shadow-xl transform rotate-3 z-0"></div>
        <div className="relative w-[90%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-300 opacity-90 z-0"></div>
            <Image 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="HD Steth Device" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40"
                width={500}
                height={375}
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <Image 
                    src="https://cdn-icons-png.flaticon.com/512/1546/1546131.png" 
                    alt="Stethoscope Icon"
                    className="w-48 h-48 drop-shadow-2xl opacity-90"
                    fill
                />
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm z-30">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-xs font-bold text-slate-700">Active Monitoring</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
    const stats = [
        { icon: <CheckCircle2 size={24} />, value: "200,000+", label: "Lives Screened" },
        { icon: <TrendingUp size={24} />, value: "90%", label: "Sensitivity" },
        { icon: <Award size={24} />, value: "99%", label: "Specificity" },
    ];

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-white relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h4 className="text-[#FA6404] font-bold tracking-widest text-xs uppercase mb-3">Proven Excellence</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#101585] mb-4 max-w-3xl mx-auto">
                        Trusted by Healthcare <br/> Professionals <span className="text-[#FA6404]">Worldwide</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Our technology is validated through extensive clinical trials and real-world deployments
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-100 border border-slate-50 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-[#FA6404] text-white p-3 rounded-xl mb-6 shadow-md shadow-orange-200">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-[#101585] mb-2">{stat.value}</h3>
                            <p className="text-slate-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Validation Text */}
                <div className="text-center">
                    <p className="text-slate-600 font-medium">
                        Validated across <span className="text-[#101585] font-bold">50+ healthcare facilities</span> in <span className="text-[#FA6404] font-bold">20+ countries</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

const ProductDetailSection = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full w-fit">
                        <span className="text-[#FA6404]"><HeartPulse size={16} /></span>
                        <span className="text-[#FA6404] text-xs font-bold tracking-wide">Next-Generation Cardiac Intelligence</span>
                    </div>
                    
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#101585] mb-2">HD Steth</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-700">Reimagining Cardiac Assessment</h3>
                    </div>

                    <p className="text-slate-500 text-lg leading-relaxed">
                        The world&apos;s first intelligent stethoscope that combines precision auscultation, full EKG mapping, and AI-driven clinical insights in one elegant device.
                    </p>

                    <div className="flex gap-8 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-green-100 rounded-full">
                                <Check size={14} className="text-green-600" />
                            </div>
                            <span className="text-slate-700 font-semibold text-sm">FDA Cleared Class II</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="p-1 bg-green-100 rounded-full">
                                <Check size={14} className="text-green-600" />
                            </div>
                            <span className="text-slate-700 font-semibold text-sm">HIPAA Compliant</span>
                        </div>
                    </div>
                </div>

                {/* Right Image Composition */}
                <div className="relative group">
                     {/* Background decorative blob */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-orange-50 rounded-[2rem] transform rotate-2 -z-10"></div>
                    
                    {/* Main Image Frame */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                         <Image
                            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Doctor holding heart model" 
                            className="w-full h-full object-cover"
                            fill
                        />
                        {/* Overlay Gradient for text readability if needed */}
                        <div className="absolute inset-0 bg-[#101585]/10"></div>
                    </div>

                    {/* Floating Badge 1 - BPM */}
                    <div className="absolute top-12 left-0 md:-left-8 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow z-20">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Activity size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Live BPM</p>
                            <p className="text-xl font-bold text-[#101585]">72</p>
                        </div>
                    </div>

                    {/* Floating Badge 2 - AI Confidence */}
                    <div className="absolute bottom-12 right-0 md:-right-8 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20">
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase text-right">AI Confidence</p>
                            <p className="text-xl font-bold text-[#FA6404] text-right">94%</p>
                        </div>
                         <div className="p-2 bg-orange-50 text-[#FA6404] rounded-lg">
                            <Target size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VideoSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 relative bg-slate-50">
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

            <div className="relative w-full aspect-video bg-[#101585] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-24 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={32} fill="white" className="text-white ml-1" />
                    </div>
                    <p className="mt-6 text-white font-medium opacity-80">Click to watch full demo</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <div className="w-1/3 h-full bg-red-600"></div>
                </div>
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
                            Ready to Lead <br/>
                            <span className="text-[#FA6404]">the Future of <br/> Cardiac Care?</span>
                        </h2>
                        <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                            Join <span className="text-orange-400 font-bold">2,000+</span> cardiologists and clinicians transforming patient outcomes with AI-powered precision diagnostics.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                             <button className="bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#FA6404]/25 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                Request Live Demo <ArrowRight size={18} />
                            </button>
                             <button className="bg-transparent border border-blue-400 text-white hover:bg-blue-900/30 px-8 py-4 rounded-lg font-bold transition-colors">
                                Explore Clinical Evidence
                            </button>
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
        <div className="w-full bg-white pt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h3 className="text-center text-[#101585] font-extrabold text-xl md:text-2xl uppercase tracking-wider mb-12">
                    Certifications
                </h3>
            </div>
            
            <div className="w-full bg-[#101585] py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-80">
                    {/* FDA */}
                    <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="border-2 border-white text-white px-3 py-1 text-2xl font-serif font-bold">FDA</div>
                        <div className="text-white font-bold text-sm tracking-widest uppercase border-t border-white mt-1 pt-1 w-full text-center">Cleared</div>
                        <span className="text-slate-400 text-xs"># K201299</span>
                    </div>

                    {/* ISO */}
                    <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="text-white text-3xl font-black tracking-tighter">ISO</div>
                         <div className="w-full h-0.5 bg-white"></div>
                         <span className="text-slate-400 text-xs">13485: 2016</span>
                    </div>

                    {/* Seal Placeholder */}
                    <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity cursor-pointer">
                         <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white">
                            <Award size={32} />
                         </div>
                         <span className="text-slate-400 text-xs">TN/M/MD/004806</span>
                    </div>

                    {/* IEC */}
                    <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="text-white text-3xl font-bold">IEC</div>
                        <div className="w-12 h-1 bg-slate-500"></div>
                        <div className="w-12 h-1 bg-slate-500"></div>
                        <span className="text-slate-400 text-xs">60601-2-27</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- NEW SECTIONS from image_b8857b.png ---

const FDAClearanceSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image  
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Doctor using HD Steth on patient" 
            className="w-full h-full object-cover"
            fill
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101585] leading-tight">
            FDA cleared for three products classification codes in one device.
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            {/* Code 1 */}
            <div className="flex flex-col items-center">
              <span className="text-[#FA6404] text-3xl font-bold mb-2">DQD</span>
              <p className="text-slate-600 text-sm font-semibold">Electronic Stethoscope</p>
            </div>
            {/* Code 2 */}
            <div className="flex flex-col items-center">
              <span className="text-[#FA6404] text-3xl font-bold mb-2">DQC</span>
              <p className="text-slate-600 text-sm font-semibold">Phonocardiograph System</p>
            </div>
            {/* Code 3 */}
            <div className="flex flex-col items-center">
              <span className="text-[#FA6404] text-3xl font-bold mb-2">DPS</span>
              <p className="text-slate-600 text-sm font-semibold">Electrocardiograph & Cardiac monitor</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm italic text-center md:text-left">
            (including cardiotachometer and rate alarm)
          </p>
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
        <ProductDetailSection />
        <ClinicalExcellenceSection />
        <CTASection />
        <CertificationsBar />
        <FDAClearanceSection />
      </div>
    </div>
  );
};

export default App;