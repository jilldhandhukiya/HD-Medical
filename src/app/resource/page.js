'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Play,
    HeartPulse,
    FileText,
    Smartphone,
    BookOpen,
    LayoutTemplate,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    AlertCircle,
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
} from 'lucide-react';

const ResourcesHero = () => {
    // place the provided image in public/images/resources-hero-bg.jpg (or update the path below)
    const backgroundImageUrl = "/images/Resources.jpg";

    return (
        <section className="w-full py-12 md:py-24 bg-white flex items-center justify-center">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 space-y-6">
                        {/* <div className="w-16 h-1 bg-[#FA6404] mb-2"></div> */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0E1C3C] leading-tight">
                            HD Steth<span className="text-[0.6em] align-super">™</span> <br />
                            <span className="text-[#FA6404]">Resources</span>
                        </h1>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
                        <Image
                            src={backgroundImageUrl}
                            alt="HD Steth Resources"
                            fill
                            className="object-contain md:object-cover rounded-xl"
                            priority
                        />
                    </div>
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
        <section className="w-full py-12 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Essential Resources Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {resources.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-white rounded-2xl p-8 shadow-lg shadow-slate-100 border-3 border-[#FA6404] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
                       >
                             <div className="w-16 h-16 rounded-full bg-[#FA6404] text-white flex items-center justify-center mb-6 shadow-md shadow-orange-200 group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>

                             <h3 className="text-xl font-bold text-[#0E1C3C] mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm mb-8">{item.desc}</p>

                            {item.type === 'mobile-app' ? (
                                <div className="mt-auto flex flex-col gap-3 w-full items-center">
                                    <a
                                        href="/app/hdsteth.apk"
                                        download="hdsteth.apk"
                                        className="text-[#FA6404] font-bold text-sm hover:text-[#0E1C3C] transition-colors flex items-center gap-2"
                                    >
                                        Download Android <Download size={14} />
                                    </a>
                                    <a
                                        href="https://apps.apple.com/in/app/hd-steth/id1565203803"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#FA6404] font-bold text-sm hover:text-[#0E1C3C] transition-colors flex items-center gap-2"
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
                                    className="mt-auto text-[#FA6404] font-bold text-sm hover:text-[#0E1C3C] transition-colors flex items-center gap-2 cursor-pointer"
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
        <section className="w-full pb-15 px-6 md:px-12 bg-[#0E1C3C]">
            <div className="max-w-7xl mx-auto p-8 md:p-16 lg:p-20">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Care & Maintenance</h2>
                    <p className="text-slate-200">Keep your HD Steth performing at its best with proper care</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Daily Cleaning Card */}
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-50 rounded-lg">
                                <ShieldCheck className="text-[#FA6404]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0E1C3C]">Daily Cleaning</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Clean chest piece after each patient use",
                                "Use alcohol wipes for diaphragm",
                                "Gentle dry cloth for device body",
                                "Store in a cool, dry place"
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-s text-slate-600">
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
                            <h3 className="text-xl font-bold text-[#0E1C3C]">Important Warnings</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Never immerse in water or liquids",
                                "Avoid extreme temperatures",
                                "Use only approved accessories",
                                "Do not use abrasive cleaners"
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-s text-slate-600">
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
                <div className="text-center py-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#0E1C3C] mb-4">Accessories</h1>
                    <p className="text-slate-500">Enhance your HD Steth experience with genuine parts</p>
                </div>

                <div className="flex justify-center mb-12 max-w-7xl mx-auto">
                    {/* Centre Image */}
                    <div className="w-full max-w-6xl aspect-[11/12] md:aspect-[16/10] relative rounded-2xl overflow-hidden">
                        <Image
                            src="/images/Accessories.jpg"
                            alt="Device Centre View"
                            className="object-contain p-0 md:p-2 group-hover:scale-105 transition-transform duration-700"
                            fill
                            sizes="(max-width: 768px) 100vw, 1500px"
                        />
                    </div>

                </div>

                {/* Accessories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {accessories.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center bg-[#0E1C3C] p-6 rounded-xl shadow-lg border-t-[6px] border-[#FA6404] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-20 h-20 rounded-full bg-[#FA6404] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#FA6404]/20 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-white font-bold text-lg mb-1">{item.name}</h4>
                            <p className="text-xs text-slate-400 font-medium mb-2">{item.part}</p>
                            <p className="text-sm text-slate-300">{item.desc}</p>
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
                <span className={`font-bold text-lg pr-8 ${isOpen ? 'text-[#FA6404]' : 'text-[#0E1C3C]'}`}>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C3C] mb-4">Frequently Asked Questions</h2>
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

const WhatsInTheBoxSection = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-[#0E1C3C]">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What&apos;s in the Box</h3>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { icon: <Stethoscope size={25} />, text: "HD Steth Device" },
                            { icon: <Cable size={25} />, text: "Micro USB Cable" },
                            { icon: <PlugZap size={25} />, text: "USB Charger" },
                            { icon: <BookOpen size={25} />, text: "Quick Start Guide" },
                            { icon: <Headphones size={25} />, text: "Spare Ear Plugs (1 Set)" },
                            { icon: <Speaker size={25} />, text: "HD Speaker" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                <div className="text-[#FA6404]">{item.icon}</div>
                                <span className="text-slate-700 font-bold text-sm">{item.text}</span>
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
    const testimonials = [
        {
            name: "Dr. Nelson B. Schiller",
            role: "MD | FACC, FRCP Professor of Medicine & Anesthesia",
            quote: "HD Steth has applied digital science to produce superior auscultatory experience with suppression of extraneous noise for true fidelity of heart transient and coupled this technology with an ECG. As an academic cardiologist, I am assured that new observations of fundamental importance will emerge from this exciting technology.",
            initials: "NS",
            color: "bg-[#FA6404]"
        },
        {
            name: "Dr. Douglas Johnston",
            role: "MD | Chief of Cardiac Surgery, Fellow: Cleveland Clinic",
            quote: "HD Steth is transforming the way medicine is practiced at the point of care setting by enhancing the patient experience, saving time and costs while improving outcomes.",
            initials: "DJ",
            color: "bg-[#FA6404]"
        },
        {
            name: "Dr. Thomas Krummel",
            role: "MD | FACS, FAAP | Professor of Surgery, Stanford Byers Center for Biodesign",
            quote: "HD Steth makes it simple to tag my high risk pediatric patients and screen for murmurs quickly and accurately at the point-of-care enhancing treatment. It moves the point of care from my office to anywhere.",
            initials: "TK",
            color: "bg-[#FA6404]"
        },
        {
            name: "Dr. Ethiraj G. Raj",
            role: "MD | FACC, FSCAI, FASNC | Cardiovascular Disease Specialist, Flint, Michigan",
            quote: "The quality and intensity of heart sounds are phenomenal on HD Steth and it delivers the most impressive sound quality advancements in my last 40 years of stethoscope use. It is truly a giant leap forward in technology.",
            initials: "ER",
            color: "bg-[#FA6404]"
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C3C] mb-4">Trusted by Professionals</h2>
                    <p className="text-slate-500">Hear from doctors who rely on HD Steth</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="p-8 rounded-2xl border border-[#FA6404] shadow-lg shadow-slate-50 flex gap-4 hover:-translate-y-1 transition-transform">
                            <div className="shrink-0">
                                <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-lg`}>
                                    {item.initials}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[#0E1C3C] font-bold text-lg">{item.name}</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wide mb-4">{item.role}</p>
                                <p className="text-slate-600 italic leading-relaxed relative">
                                    <span className="text-4xl text-slate-200 absolute -top-4 -left-2 font-serif">&quot;</span>
                                    {item.quote}
                                    <span className="text-4xl text-slate-200 absolute font-serif"> &quot;</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">

            <div className="relative z-10">
                <ResourcesHero />
                <EssentialResourcesSection />
                <CareMaintenanceSection />
                <AccessoriesSection />
                <FAQSection />
                <WhatsInTheBoxSection />
                {/* <TestimonialsSection /> */}
            </div>

        </div>
    );
};

export default ResourcesPage;