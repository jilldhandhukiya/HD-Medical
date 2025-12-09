'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  X,
  Play,
} from 'lucide-react';

const MailingListPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-[800px] bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-lg">
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-20 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-[40%] relative bg-white flex items-center justify-center p-4 md:p-0">
          <div className="relative w-full h-48 md:h-full min-h-[200px]">
            <Image
              src="/images/Device-F-B.png"
              alt="HD Steth Devices"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-1 uppercase tracking-tight leading-none">
            JOIN OUR MAILING LIST
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-6 font-medium">
            Sign Up for exclusive updates
          </p>

          <form className="w-full flex flex-col sm:flex-row gap-3 items-center" onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
            <input
              type="email"
              placeholder="enter your email address"
              className="w-full bg-[#e0e0e0] text-gray-800 px-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm placeholder:text-gray-500"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#F58220] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

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
    },
    {
      id: 7,
      iconName: "b2-noise-cancel-b",
      title: "Noise Cancellation",
      desc: "Patented noise cancellation technology.",
      position: "center"
    }
  ];

  const leftFeatures = features.filter(f => f.position === 'left');
  const rightFeatures = features.filter(f => f.position === 'right');
  const centerFeature = features.find(f => f.position === 'center');

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center py-12 lg:py-20">

      {/* --- 1. Background Subtle Grid --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(#101585 0.5px, transparent 0.5px), radial-gradient(#101585 0.5px, #ffffff 0.5px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* --- 2. Section Header --- */}
      <div className="relative z-10 text-center mb-8 md:mb-12 lg:mb-16 shrink-0 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101585] tracking-tight">
          HD Steth - Intelligent solution for Cardiac Care
        </h2>

      </div>

      <section className="w-full relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden mb-8 lg:mb-0">
        <Image
          src="/images/HDSteth-parts-2.png" // Replace with your actual image path
          alt="Full Section Image"
          fill
          className="object-contain object-center"
          priority
        />
      </section>

      {/* --- 3. Main Content Layout --- */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0 justify-between py-4 lg:py-6 items-center lg:items-end order-2 lg:order-1 h-auto lg:h-[600px]">
            {leftFeatures.map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredIndex(feature.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex flex-col items-center lg:items-end text-center lg:text-right cursor-pointer transition-all duration-300 ${hoveredIndex === feature.id ? 'scale-105 lg:translate-x-2' : 'opacity-90 hover:opacity-100'}`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 mb-2">
                  <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl transition-colors leading-tight order-2 lg:order-1 ${hoveredIndex === feature.id ? 'text-[#FA6404]' : 'text-[#101585]'}`}>
                    {feature.title}
                  </h3>
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md transition-all duration-300 shrink-0 order-1 lg:order-2 ${hoveredIndex === feature.id ? 'bg-[#FA6404] scale-110' : 'bg-white border-2 border-slate-100'}`}>
                    <Image
                      src={`/icons/homepage/${feature.iconName}.png`}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className={`w-8 h-8 sm:w-10 sm:h-10 object-contain transition-opacity duration-200 ${hoveredIndex === feature.id ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-500 font-medium max-w-[260px] sm:max-w-[280px] leading-snug">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER DEVICE */}
          <div className="relative flex justify-center items-center h-[250px] sm:h-[300px] lg:h-[500px] order-1 lg:order-2 my-4 lg:my-0">
            <Image
              src="/images/Device-display-button.jpg" // Replace with your actual image path
              alt="HD Steth Device"
              width={360} // Adjust width to match the circle size (w-60 is 240px at md)
              height={360} // Adjust height to match
              className="w-auto h-full max-h-[250px] sm:max-h-[300px] lg:max-h-[400px] object-contain" // Maintain aspect ratio and size, made a little bigger
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0 justify-between py-4 lg:py-6 items-center lg:items-start order-3 lg:order-3 h-auto lg:h-[600px]">
            {rightFeatures.map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredIndex(feature.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer transition-all duration-300 ${hoveredIndex === feature.id ? 'scale-105 lg:-translate-x-2' : 'opacity-90 hover:opacity-100'}`}
              >
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-3 lg:gap-4 mb-2">
                  <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl transition-colors leading-tight ${hoveredIndex === feature.id ? 'text-[#FA6404]' : 'text-[#101585]'}`}>
                    {feature.title}
                  </h3>
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md transition-all duration-300 shrink-0 ${hoveredIndex === feature.id ? 'bg-[#FA6404] scale-110' : 'bg-white border-2 border-slate-100'}`}>
                    <Image
                      src={`/icons/homepage/${feature.iconName}.png`}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className={`w-8 h-8 sm:w-10 sm:h-10 object-contain transition-opacity duration-200 ${hoveredIndex === feature.id ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-500 font-medium max-w-[260px] sm:max-w-[280px] leading-snug lg:pl-1">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER BOTTOM ITEM */}
        <div className="flex justify-center mt-12 lg:-mt-16 relative z-20">
          <div
            onMouseEnter={() => setHoveredIndex(centerFeature.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${hoveredIndex === centerFeature.id ? 'scale-105 -translate-y-2' : 'opacity-90 hover:opacity-100'}`}
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md transition-all duration-300 shrink-0 mb-3 ${hoveredIndex === centerFeature.id ? 'bg-[#FA6404] scale-110' : 'bg-white border-2 border-slate-100'}`}>
              <Image
                src={`/icons/homepage/${centerFeature.iconName}.png`}
                alt={centerFeature.title}
                width={32}
                height={32}
                className={`w-8 h-8 sm:w-10 sm:h-10 object-contain transition-opacity duration-200 ${hoveredIndex === centerFeature.id ? 'brightness-0 invert' : ''}`}
              />
            </div>
            <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl transition-colors leading-tight mb-1 ${hoveredIndex === centerFeature.id ? 'text-[#FA6404]' : 'text-[#101585]'}`}>
              {centerFeature.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-[260px] sm:max-w-[280px] leading-snug">
              {centerFeature.desc}
            </p>
          </div>
        </div>

      </div>

      <div className="relative z-10 w-full flex justify-center mt-12 lg:mt-16 mb-8 lg:mb-0">
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
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { id: 0, text: "Unleash exceptional Auscultation" },
    { id: 1, text: "Visualize the Heart Sounds" },
    { id: 2, text: "Precise ECG" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative w-full pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
      
      {/* Text Content Column */}
      <div className="space-y-8 md:space-y-10 flex flex-col items-center lg:items-start order-1">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#101585] leading-tight lg:leading-[1.1] text-center lg:text-left">
          Transform <br className="hidden lg:block" />
          Cardiac <br className="hidden lg:block" />
          Care with <br className="hidden lg:block" />
          <span>HD Steth<span className="text-[0.5em] align-super">™</span></span>
        </h1>

        {/* Features List - Centered block on mobile, Left on Desktop */}
        <div className="w-full max-w-[320px] sm:max-w-md lg:max-w-none">
          <div className="flex flex-col gap-5 md:gap-6 pl-4 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-2 bottom-2 w-1 bg-slate-100 rounded-full"></div>
            
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative pl-6 md:pl-8 cursor-pointer group text-left"
                onMouseEnter={() => setActiveFeature(index)}
              >
                {activeFeature === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FA6404] rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(250,100,4,0.5)]"></div>
                )}
                <span className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-300 ${activeFeature === index ? 'text-[#101585] font-semibold' : 'text-slate-400 group-hover:text-slate-600'}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="relative flex justify-center items-center w-full order-2 mt-8 lg:mt-0">
        {/* Responsive Container for Image */}
        <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]">
          <Image
            src="/images/herosection.png"
            alt="HD Steth Device"
            fill
            className="object-contain drop-shadow-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

// const TrustedBySection = () => {
//   const stats = [
//     { icon: <CheckCircle2 size={32} />, value: "300k+", label: "Total Screened" },
//     { icon: <TrendingUp size={32} />, value: "1500+", label: "Detected Abnormalities" },
//     { icon: <Award size={32} />, value: "600+", label: "Surgeries Completed" },
//   ];

//   return (
//     <section className="w-full py-24 px-6 md:px-12 bg-white relative overflow-hidden">
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#101585 1px, transparent 1px), linear-gradient(90deg, #101585 1px, transparent 1px)`,
//           backgroundSize: '40px 40px'
//         }}
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <h4 className="text-[#FA6404] font-bold tracking-widest text-xs uppercase mb-3">Proven Excellence</h4>
//           <h2 className="text-3xl md:text-5xl font-bold text-[#101585] mb-4 max-w-3xl mx-auto">
//             Trusted by Healthcare <br /> Professionals <span className="text-[#FA6404]">Worldwide</span>
//           </h2>
//           <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
//             Our technology is validated through extensive clinical trials and real-world deployments.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-16">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-col items-center">

//               <div className="w-56 h-56 rounded-full bg-white border-[3px] border-[#FA6404] outline outline-2 outline-[#FA6404] shadow-xl flex flex-col items-center justify-center p-4 z-10 hover:transform hover:-translate-y-1 transition-transform duration-300">

//                 <div className="text-[#FA6404] mb-3 bg-orange-50 p-3 rounded-full">
//                   {stat.icon}
//                 </div>

//                 <h3 className="text-5xl font-extrabold text-[#101585] tracking-tight mb-1">
//                   {stat.value}
//                 </h3>

//                 <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-wider">
//                   {stat.label}
//                 </p>
//               </div>

//               <div className="w-40 h-4 bg-black/5 rounded-[100%] blur-md mt-4"></div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center">
//           <div className="inline-block px-8 py-3 rounded-full bg-slate-50 border border-slate-200">
//             <p className="text-slate-700 text-base font-semibold">
//               Validated across <span className="text-[#101585] font-bold">50+ healthcare facilities</span> in <span className="text-[#FA6404] font-bold">20+ countries</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const ProductDetailSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#101585] relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h4 className="text-[#FA6404] font-bold text-2xl md:text-xl tracking-wide">
              Next-Generation Cardiac Intelligence
            </h4>

            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">HD Steth</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Reimagining Cardiac Assessment</h3>
            </div>

            <p className="text-white text-lg leading-relaxed max-w-xl opacity-90">
              The world&apos;s first intelligent stethoscope that combines precision auscultation, full EKG mapping.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#fdf6ba]">
              <Image
                src="/images/diagnosis.jpg"
                alt="Doctor holding heart model"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="videoSection" className="w-full py-20 px-6 md:px-12 relative bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#101585] mb-4">
          Instant cardiac insights. <span className="text-[#FA6404]">Anytime.</span>
        </h2>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
          Experience the future of cardiac diagnostics with real-time insights delivered at the point of care.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group mb-8">
          <a 
            href="https://www.youtube.com/watch?v=a1i9AGoZdUY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full relative"
          >
            <Image
              src="/images/Youtube-Banner.jpg" // Replace with your actual image path
              alt="HD Steth Demo"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </a>
        </div>

        <a 
            href="https://www.youtube.com/watch?v=a1i9AGoZdUY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white border border-slate-200 px-8 py-3 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
        >
            <Play size={24} className="text-[#FA6404] fill-[#FA6404] group-hover:scale-110 transition-transform" />
            <span className="text-[#101585] font-bold text-lg">
                Watch on Youtube
            </span>
        </a>
      </div>
    </section>
  );
}

// const ClinicalExcellenceSection = () => {
//   const features = [
//     {
//       icon: <Stethoscope size={28} className="text-white" />,
//       title: "Dual-Mode Auscultation",
//       desc: "Digital + Analog with real-time amplification",
//       isOpen: true // Just for the icon background visual hint
//     },
//     {
//       icon: <Monitor size={28} className="text-white" />,
//       title: "Integrated 12-Lead EKG",
//       desc: "Full cardiac mapping in 30 seconds",
//       isOpen: false
//     },
//     {
//       icon: <Waves size={28} className="text-white" />,
//       title: "AI Sound Analysis",
//       desc: "Detects murmurs, S3/S4, and arrhythmias",
//       isOpen: false
//     },
//     {
//       icon: <ShieldCheck size={28} className="text-white" />,
//       title: "Clinical Decision Support",
//       desc: "Evidence-based recommendations at point-of-care",
//       isOpen: false
//     }
//   ];

//   return (
//     <section className="w-full py-20 px-6 md:px-12 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
//             Engineered for Clinical Excellence
//           </h2>
//           <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
//             Every component designed with input from cardiologists at leading academic medical centers
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((item, idx) => (
//             <div key={idx} className="bg-white border border-slate-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
//               {/* Top fade for hover effect */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#FA6404] transition-colors"></div>

//               <div className="mb-6">
//                 <div className="bg-[#FA6404] w-14 h-14 rounded-lg flex items-center justify-center shadow-md shadow-orange-200">
//                   {item.icon}
//                 </div>
//               </div>

//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="font-bold text-[#101585] text-lg leading-tight pr-4">{item.title}</h3>
//                 {/* Chevron equivalent */}
//                 <div className="text-slate-300 group-hover:text-[#FA6404] transition-colors">
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="6 9 12 15 18 9"></polyline>
//                   </svg>
//                 </div>
//               </div>

//               <p className="text-slate-500 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const CTASection = () => {
//   const stats = [
//     { icon: <Target size={20} className="text-blue-600" />, val: "98.7%", label: "AI Diagnostic Accuracy", sub: "bg-blue-50" },
//     { icon: <Zap size={20} className="text-[#FA6404]" />, val: "47s", label: "Avg. Exam Duration", sub: "bg-orange-50" },
//     { icon: <Heart size={20} className="text-red-500" />, val: "2,000+", label: "Active Clinicians", sub: "bg-red-50" },
//     { icon: <Headphones size={20} className="text-indigo-500" />, val: "24/7", label: "Dedicated Support", sub: "bg-indigo-50" },
//   ];

//   return (
//     <section className="w-full py-10 px-6 md:px-12 bg-white">
//       <div className="max-w-7xl mx-auto bg-[#101585] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FA6404]/10 rounded-full blur-[80px] pointer-events-none"></div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//               Ready to Lead <br />
//               <span className="text-[#FA6404]">the Future of <br /> Cardiac Care?</span>
//             </h2>
//             <p className="text-slate-300 text-lg max-w-md leading-relaxed">
//               Join <span className="text-orange-400 font-bold">2,000+</span> cardiologists and clinicians transforming patient outcomes with AI-powered precision diagnostics.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <Link
//                 href="/contactus"
//                 className="bg-[#FA6404] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#FA6404]/25 transition-all transform hover:-translate-y-1 flex items-center gap-2"
//                 aria-label="Contact us"
//               >
//                 Contact Us <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {stats.map((stat, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-xl">
//                 <div className={`w-12 h-12 rounded-full ${stat.sub} flex items-center justify-center mb-4`}>
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 mb-1">
//                   {stat.val.includes('.')  ? (
//                     <span>
//                       {stat.val.replace(/[%s]/g, '')}
//                       <span className={`text-xl ml-0.5 ${idx === 1 ? 'text-[#000000]' : 'text-[#000000]'}`}>
//                         {stat.val.match(/[%s]/)[0]}
//                       </span>
//                     </span>
//                   ) : (
//                     stat.val
//                   )}
//                 </div>
//                 <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const CertificationsBar = () => {
  return (
    <section className="bg-[#101585] py-12 w-full">
      <div className="max-w-full px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          CERTIFICATES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8 items-center justify-items-center max-w-none mx-auto">
          {[
            { src: "/images/fda.png", alt: "FDA Cleared", text: "FDA CLEARED\n# K201299", pdf: "/docs/FDA-K201299.pdf" },
            { src: "/images/iso.png", alt: "ISO Certification", text: "ISO\n13485: 2016", pdf: "/docs/ISO13485-Certificate.pdf" },
            { src: "/images/tn.png", alt: "TN Certification", text: "TN/M/MD/004806", pdf: "/docs/TN-Certificate.pdf" },
            { src: "/images/iec.png", alt: "CE Certification", text: "60601-2-27", pdf: "/docs/CE-Certificate.pdf" }
          ].map((cert, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={120}
                  height={100}
                  className="mb-3 !transition-none !duration-0"
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
            FDA cleared (Class II) for the three product classification codes in one device.
          </h2>

          {/* Classification Codes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-8 sm:gap-0">

            {/* Code 1: DQD */}
            <div className="flex flex-col items-center px-2 justify-center border-b-2 sm:border-b-0 sm:border-r-2 border-[#FA6404] pb-8 sm:pb-0">
              <div className="bg-[#FA6404] text-white text-xl md:text-2xl font-bold py-1.5 px-6 rounded-full mb-4 shadow-sm">
                DQD
              </div>
              <p className="text-slate-900 font-bold text-sm md:text-lg text-center leading-tight">
                Electronic Stethoscope
              </p>
            </div>

            {/* Code 2: DQC */}
            <div className="flex flex-col items-center px-2 justify-center border-b-2 sm:border-b-0 sm:border-r-2 border-[#FA6404] pb-8 sm:pb-0">
              <div className="bg-[#FA6404] text-white text-xl md:text-2xl font-bold py-1.5 px-6 rounded-full mb-4 shadow-sm">
                DQC
              </div>
              <p className="text-slate-900 font-bold text-sm md:text-lg text-center leading-tight">
                Phonocardiograph System
              </p>
            </div>

            {/* Code 3: DPS */}
            <div className="flex flex-col items-center px-2 justify-center">
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
        <MailingListPopup />
        <HeroSection />
        <VideoSection />
        {/* <TrustedBySection /> */}
        <IntelligentSolutionsSection />
        {/* <ProductDetailSection /> */}
        {/* <ClinicalExcellenceSection /> */}
        <FDAClearanceSection />
        <CertificationsBar />
      </div>
    </div>
  );
};

export default App;