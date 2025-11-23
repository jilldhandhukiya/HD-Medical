'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Play,
    Menu,
    X,
    HeartPulse,
    FileText,
    Smartphone,
    BookOpen,
    LayoutTemplate,
    Award,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    AlertCircle,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Download,
    ExternalLink,
    Disc,
    Cable,
    Battery,
    Headphones,
    PlugZap,
    Speaker,
    ChevronDown,
    ChevronUp,
    Package,
    Box,
    Activity,
    Quote,
    Headset
} from 'lucide-react';

const ResourcesHero = () => {
  // place the provided image in public/images/resources-hero-bg.jpg (or update the path below)
  const backgroundImageUrl = "/images/Resources-Top-Banner2.png";

  return (
    <section
      className="w-full py-28 px-8 md:px-12 overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
              <div className="w-16 h-1 bg-[#FA6404] mb-6"></div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  HD Steth <br/>
                  <span className="text-[#FA6404]">Resources</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                  Revolutionizing auscultation with cutting-edge technology and unparalleled precision. Access all your essential guides and tools here.
              </p>
          </div>
      </div>
    </section>
  );
};

const EssentialResourcesSection = () => {
    const resources = [
        {
            icon: <Play size={28} fill="currentColor" />,
            title: "Quick Start Guide",
            desc: "Step-by-step setup in under 5 minutes",
            action: "Download PDF",
            type: "pdf",
            file: "/docs/HDSteth-Quick Start Guide-FB-27July2024.pdf" 
        },
        {
            icon: <Smartphone size={28} />,
            title: "Mobile App",
            desc: "iOS & Android companion app",
            type: "mobile-app",
        },
        {
            icon: <FileText size={28} />,
            title: "Raipur Report",
            desc: "Clinical performance data",
            action: "View Datasheet",
            type: "link",
            file: "/docs/Raipur Report--FB-27July2024.pdf"
        },
        {
            icon: <LayoutTemplate size={28} />,
            title: "Product Brochure",
            desc: "Overview & key benefits",
            action: "Download",
            type: "pdf",
            file: "/docs/HDSteth-Product Brochure-FB-27July2024.pdf"
        },
        {
            icon: <HeartPulse size={28} />,
            title: "Product Data - India Sheet",
            desc: "India Product Data Overview",
            action: "View",
            type: "link",
            file: "/docs/Product-Data-India-Sheet-FB-27July2024.pdf"
        },
    ];

    return (
        <section className="w-full py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    {/* ... (Header remains the same) ... */}
                </div>

                {/* 1. CHANGED: Grid -> Flex, added wrap and justify-center */}
                <div className="flex flex-wrap justify-center gap-8">
                    {resources.map((item, idx) => (
                        <div 
                            key={idx} 
                            /* 2. ADDED: Width calculations to mimic Grid columns 
                               - w-full (Mobile: 1 per row)
                               - md:w-[calc(50%-1rem)] (Tablet: 2 per row minus half the gap)
                               - lg:w-[calc(33.33%-1.5rem)] (Desktop: 3 per row minus the gap distribution)
                            */
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-white rounded-2xl p-8 shadow-lg shadow-slate-100 border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
                        >

                            <div className="w-16 h-16 rounded-full bg-[#FA6404] text-white flex items-center justify-center mb-6 shadow-md shadow-orange-200 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#101585] mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm mb-8">{item.desc}</p>

                            {item.type === 'mobile-app' ? (
                                <div className="mt-auto flex flex-col gap-3 w-full items-center">
                                    <a 
                                        href="/app/hdsteth.apk" 
                                        download="hdsteth.apk"
                                        className="text-[#FA6404] font-bold text-sm hover:text-[#101585] transition-colors flex items-center gap-2"
                                    >
                                        Download Android <Download size={14} />
                                    </a>
                                    <a 
                                        href="https://apps.apple.com/in/app/hd-steth/id1565203803" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[#FA6404] font-bold text-sm hover:text-[#101585] transition-colors flex items-center gap-2"
                                    >
                                        Download iOS <ExternalLink size={14} />
                                    </a>
                                </div>
                            ) : (
                                <a 
                                    href={item.file}
                                    download={item.type === 'pdf'} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto text-[#FA6404] font-bold text-sm hover:text-[#101585] transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    {item.action}
                                    {item.type === 'pdf' ? <Download size={14} /> : <ExternalLink size={14} />}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const CareMaintenanceSection = () => {
    return (
        <section className="w-full pb-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-16 lg:p-20">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">Care & Maintenance</h2>
                    <p className="text-slate-500">Keep your HD Steth performing at its best with proper care</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Daily Cleaning Card */}
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-50 rounded-lg">
                                <ShieldCheck className="text-[#FA6404]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#101585]">Daily Cleaning</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Clean chest piece after each patient use",
                                "Use alcohol wipes for diaphragm",
                                "Gentle dry cloth for device body",
                                "Store in a cool, dry place"
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Important Warnings Card */}
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <AlertTriangle className="text-red-500" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#101585]">Important Warnings</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Never immerse in water or liquids",
                                "Avoid extreme temperatures",
                                "Use only approved accessories",
                                "Do not use abrasive cleaners"
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                    <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};


const AccessoriesSection = () => {
    const accessories = [
        { icon: <Disc size={32} />, name: "HD Diaphragm", part: "Part # HD00-001", desc: "Enhanced acoustic transmission" },
        { icon: <Cable size={32} />, name: "USB Cable", part: "Part # HD00-002", desc: "1m Micro USB to USB-A" },
        { icon: <Battery size={32} />, name: "Li-Ion Battery", part: "Part # HD00-003", desc: "700mAh, 3.7V" },
        { icon: <Headphones size={32} />, name: "Soft Eartips", part: "Part # HD00-004", desc: "Comfortable silicone design" },
        { icon: <PlugZap size={32} />, name: "AC Charger", part: "Part # HD00-005", desc: "100-240V, 5V/1A Output" },
        { icon: <Speaker size={32} />, name: "HD Speaker", part: "Part # HD00-006", desc: "Active replay device" },
    ];

    return (
        <section className="w-full py-2 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Text */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">Accessories</h2>
                    <p className="text-slate-500">Enhance your HD Steth experience with genuine parts</p>
                </div>

               <div className="flex flex-col md:flex-row gap-6 mb-12 max-w-6xl mx-auto">
    {/* Left Image */}
    <div className="w-full md:w-1/2 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200 group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <Image 
            src="/images/HDS-Inside-Box.png" 
            alt="Device Left View" 
            className="w-full h-full group-hover:scale-105 transition-transform duration-700"
            fill
        />
    </div>

    {/* Right Image */}
    {/* <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200 group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <Image 
            src="/images/In the Box.png" 
            alt="Device Right View" 
            className="w-full h-full group-hover:scale-105 transition-transform duration-700"
            fill
        />
    </div> */}
</div>
            
                {/* Accessories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {accessories.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow border border-transparent hover:border-slate-50 group">
                            <div className="w-20 h-20 rounded-full bg-[#FA6404] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#FA6404]/20 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-[#101585] font-bold text-lg mb-1">{item.name}</h4>
                            <p className="text-xs text-slate-400 font-medium mb-2">{item.part}</p>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Warning Banner */}
                <div className="bg-yellow-50 border-l-4 border-[#FA6404] p-4 rounded-r-lg flex items-start gap-3 max-w-4xl mx-auto">
                    <AlertCircle size={20} className="text-[#FA6404] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 font-medium">
                        Always use HD Medical authorized accessories for optimal performance and warranty coverage.
                    </p>
                </div>
            </div>
        </section>
    );
};


const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                className="w-full flex justify-between items-center py-6 text-left hover:text-[#FA6404] transition-colors group"
                onClick={onClick}
            >
                <span className={`font-bold text-lg pr-8 ${isOpen ? 'text-[#FA6404]' : 'text-[#101585]'}`}>
                    {question}
                </span>
                {isOpen ? <ChevronUp className="text-[#FA6404] shrink-0" /> : <ChevronDown className="text-slate-400 group-hover:text-[#FA6404] shrink-0" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <div className="text-slate-500 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            q: "Why use an electronic stethoscope?",
            a: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Exceptional sound quality</li>
                    <li>Enhanced frequency range</li>
                    <li>Smart Ambient noise reduction</li>
                    <li>Record and replay capabilities</li>
                    <li>Visual display in app</li>
                    <li>Sharing Records for Specialist consultation</li>
                    <li>Ability to save in EHR</li>
                </ul>
            )
        },
        {
            q: "Can HD Steth be used as a manual Stethoscope without the Battery?",
            a: "No, even the Audio is digitized, so a battery is needed for operations."
        },
        {
            q: "What type of battery does the HD Steth use?",
            a: "HD Steth uses Panasonic Lithium ion 18650 battery."
        },
        {
            q: "How long does the battery last?",
            a: "It lasts for about 8 hours of continuous usage. Normally, HD Steth is used only intermittently, so may last 3-5 days on a full charge."
        },
        {
            q: "How long does it take to charge the battery?",
            a: "4-5 hours."
        },
        {
            q: "Can HD Steth be used while it is being charged?",
            a: "No."
        },
        {
            q: "What kind of cable is used for charging?",
            a: "A standard USB Micro B cable."
        },
        {
            q: "What is BT range?",
            a: "BT range is 10 meters if there are no obstructions. For ideal results, it is recommended that the smart device be within 1.5 meters of the HD Steth."
        },
        {
            q: "What is the turnaround time for HD Medical Group support to get back to us?",
            a: "1 business day."
        },
        {
            q: "Where can you access the training video links?",
            a: (
                <span>
                    From the HD Medical Group YouTube channel,<br />
                    <a href="https://www.youtube.com/channel/UCiCF-U82vogdogFuClswdBg" target="_blank" rel="noopener noreferrer" className="text-[#FA6404] hover:underline break-all">
                        https://www.youtube.com/channel/UCiCF-U82vogdogFuClswdBg
                    </a>
                </span>
            )
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500">Get answers to common questions about your HD Steth</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-50 px-8">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhatsInTheBoxAndWhySection = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-slate-50/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                {/* Left: What's in the Box */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#101585] mb-8">What&apos;s in the Box</h3>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Stethoscope size={18} />, text: "HD Steth Device" },
                                { icon: <Cable size={18} />, text: "Micro USB Cable" },
                                { icon: <PlugZap size={18} />, text: "USB Charger" },
                                { icon: <BookOpen size={18} />, text: "Quick Start Guide" },
                                { icon: <Headphones size={18} />, text: "Spare Ear Plugs (1 Set)" },
                                { icon: <Speaker size={18} />, text: "HD Speaker" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                    <div className="text-[#FA6404]">{item.icon}</div>
                                    <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Why HD Steth? */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#101585] mb-8">Why HD Steth?</h3>
                    <div className="space-y-6">
                        {[
                            {
                                icon: <Headphones size={24} />,
                                title: "Crystal Clear Audio",
                                desc: "Advanced noise cancellation delivers pristine heart and lung sounds."
                            },
                            {
                                icon: <Activity size={24} />,
                                title: "Smart Integration",
                                desc: "Seamlessly record, visualize, and share via mobile app."
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "Medical Grade",
                                desc: "FDA approved, durable design with global certifications."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start group">
                                <div className="w-12 h-12 rounded-full bg-[#FA6404] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#FA6404]/20">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-[#101585] font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

// Helper icon for Stethoscope since it wasn't imported in earlier snippet if distinct from Headset
const Stethoscope = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 4c0 4 2 6 6 6s6-2 6-6V2" />
        <path d="M15 16a4 4 0 0 0-4-4h-2" />
        <path d="M8 15v1" />
        <path d="M15 20a4 4 0 1 0 4-4" />
    </svg>
);

const TestimonialsSection = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">Trusted by Professionals</h2>
                    <p className="text-slate-500">Hear from doctors who rely on HD Steth</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            name: "Dr. Sarah Chen",
                            role: "Cardiologist",
                            quote: "The audio clarity is unmatched. I can finally hear subtle murmurs that traditional stethoscopes miss.",
                            initials: "SC",
                            color: "bg-[#FA6404]"
                        },
                        {
                            name: "Dr. Raj Patel",
                            role: "General Physician",
                            quote: "Recording and sharing with specialists has dramatically improved patient outcomes in my practice.",
                            initials: "RP",
                            color: "bg-[#FA6404]"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-50 flex gap-4 hover:-translate-y-1 transition-transform">
                            <div className="shrink-0">
                                <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-lg`}>
                                    {item.initials}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[#101585] font-bold text-lg">{item.name}</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mb-4">{item.role}</p>
                                <p className="text-slate-600 italic leading-relaxed relative">
                                    <span className="text-4xl text-slate-200 absolute -top-4 -left-2 font-serif">&quot;</span>
                                    {item.quote}&quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const NeedAssistanceSection = () => {
    return (
        <section className="w-full px-6 md:px-12 pb-12 bg-white">
            <div className="max-w-7xl mx-auto bg-[#101585] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-800/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#FA6404] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#FA6404]/30">
                        <Headset size={32} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Assistance?</h2>
                    <p className="text-blue-200 max-w-2xl mx-auto mb-10 text-lg">
                        Our expert support team is here to help. Get responses within 1 business day.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg font-bold transition-colors shadow-lg flex items-center gap-2">
                            <Mail size={18} /> Email Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">

            <div className="relative z-10">
                <br />
                <br />
                <ResourcesHero />
                <EssentialResourcesSection />
                <CareMaintenanceSection />
                <AccessoriesSection />
                <FAQSection />
                <WhatsInTheBoxAndWhySection />
                <TestimonialsSection />
                <NeedAssistanceSection />
            </div>

        </div>
    );
};

export default ResourcesPage;