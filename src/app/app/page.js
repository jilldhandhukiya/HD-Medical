"use client"
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Custom hook for intersection observer animations
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

export default function DownloadApp() {
  // Wave vector refs
  const topRightSvgRef = useRef(null);
  const bottomLeftSvgRef = useRef(null);
  const centerSvgRef = useRef(null);
  const heroTopLeftRef = useRef(null);
  const heroBottomRightRef = useRef(null);
  const faqRef = useRef(null);

  // Intersection Observer hooks
  const [heroRef, heroVisible] = useInView(0.1);
  const [featuresRef, featuresVisible] = useInView(0.1);
  const [downloadRef, downloadVisible] = useInView(0.1);

  // Wave mouse tracking effects
  useEffect(() => {
    const allWaves = [
      { svg: topRightSvgRef.current, container: topRightSvgRef.current?.parentElement },
      { svg: bottomLeftSvgRef.current, container: bottomLeftSvgRef.current?.parentElement },
      { svg: centerSvgRef.current, container: centerSvgRef.current?.parentElement },
      { svg: heroTopLeftRef.current, container: heroTopLeftRef.current?.parentElement },
      { svg: heroBottomRightRef.current, container: heroBottomRightRef.current?.parentElement },
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

    allWaves.forEach(({ svg, container }) => {
      if (!svg || !container) return;
      const moveHandler = (e) => handleMouseMove(e, svg, container);
      container.addEventListener('mousemove', moveHandler);
      container.addEventListener('mouseleave', () => handleMouseLeave(svg));
    });

    return () => {
      allWaves.forEach(({ svg, container }) => {
        if (!svg || !container) return;
        container.removeEventListener('mousemove', () => {});
        container.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Handle download button click
  const handleDownload = () => {
    const driveLink = "https://drive.google.com/file/d/10C7PK_3UN5E_P-7PxM9s3p3U094TE_0q/view?usp=sharing"
    window.open(driveLink, '_blank');
  };

  // iOS App Store download
  const handleDownloadIOS = () => {
    const iosLink = "https://apps.apple.com/in/app/hd-steth/id1565203803";
    window.open(iosLink, '_blank');
  };

  // Scroll to FAQs section
  const scrollToFaq = () => faqRef.current?.scrollIntoView({ behavior: 'smooth' });

  // Accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  // FAQs data
  const faqs = [
    {
      q: "Why use an electronic stethoscope?",
      a: (
        <ul className="list-disc pl-6 text-gray-700">
          <li>Exceptional sound quality</li>
          <li>Enhanced frequency range</li>
          <li>Smart ambient noise reduction</li>
          <li>Record and replay capabilities</li>
          <li>Visual display in app</li>
          <li>Sharing records for specialist consultation</li>
          <li>Ability to save in EHR</li>
        </ul>
      )
    },
    {
      q: "Can HD Steth be used as a manual stethoscope without the battery?",
      a: <p className="text-gray-700">No, even the audio is digitized, so a battery is needed for operations.</p>
    },
    {
      q: "What type of battery does the HD Steth use?",
      a: <p className="text-gray-700">Panasonic Lithium-ion 18650 battery.</p>
    },
    {
      q: "How long does the battery last?",
      a: (
        <p className="text-gray-700">
          About 8 hours of continuous usage. Normally, HD Steth is used only intermittently, so it may last 3–5 days on a full charge.
        </p>
      )
    },
    {
      q: "How long does it take to charge the battery?",
      a: <p className="text-gray-700">4–5 hours.</p>
    },
    {
      q: "Can HD Steth be used while it is being charged?",
      a: <p className="text-gray-700">No.</p>
    },
    {
      q: "What kind of cable is used for charging?",
      a: <p className="text-gray-700">A standard USB Micro‑B cable.</p>
    },
    {
      q: "What is the BT range?",
      a: (
        <p className="text-gray-700">
          10 meters if there are no obstructions. For ideal results, keep the smart device within 1.5 meters of the HD Steth.
        </p>
      )
    },
    {
      q: "What is the turnaround time for HD Medical Group support to get back to us?",
      a: <p className="text-gray-700">1 business day.</p>
    },
    {
      q: "Where can you access the training video links?",
      a: (
        <p className="text-gray-700">
          From the HD Medical Group YouTube channel:{' '}
          <a
            href="https://www.youtube.com/channel/UCiCF-U82vogdogFuClswdBg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#17a6e0] hover:underline"
          >
            https://www.youtube.com/channel/UCiCF-U82vogdogFuClswdBg
          </a>
        </p>
      )
    }
  ];

  return (
    <>
      {/* Global Styles */}
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

      {/* SVG Filter */}
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

      {/* Header */}
      <Header />

      {/* Hero Section - Added more top padding */}
      <section ref={heroRef} className="bg-gradient-to-b from-[#f0fcff] to-white pt-32 md:pt-36 pb-16 relative overflow-hidden">
        {/* Hero Wave Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-1/4 h-1/4 opacity-8 wave-animation z-0">
            <Image
              ref={heroTopLeftRef}
              src="/images/lines.svg"
              alt="Hero Top Left Wave"
              className="filter-dark-gray rotate-45"
              width={800}
              height={800}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-10 wave-animation z-0">
            <Image
              ref={heroBottomRightRef}
              src="/images/lines.svg"
              alt="Hero Bottom Right Wave"
              className="filter-dark-gray rotate-225"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center relative z-10">
          <div className={`space-y-6 transition-all duration-1000 ${heroVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            {/* Badge
            <div className="inline-flex items-center gap-2 bg-[#17a6e0]/10 text-[#17a6e0] px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="bi bi-download text-lg"></i>
              <span>GET THE APP</span>
            </div> */}

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Download <span className="text-[#155dfc] underline-offset-4">HD Steth App</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of cardiac diagnosis with our AI-powered mobile application
            </p>

            {/* App Logo */}
            {/* <div className="flex justify-center my-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-[#17a6e0] to-[#40B7E4] rounded-3xl shadow-2xl p-4">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <Image
                      src="/images/hd_stethlogo.png"
                      alt="HD Steth App Icon"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>


      {/* Download Section */}
      <section ref={downloadRef} className="bg-gradient-to-b from-[#155dfc] to-[#386de0] py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative z-10">
          <div className={`transition-all duration-1000 ${downloadVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Download the HD Steth app and revolutionize your cardiac diagnostic workflow
              </p>

              {/* Platform Cards WITH buttons inside */}
              <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 mb-8">
                {/* Android Card */}
                <div className="flex-1 bg-white/2 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-4 justify-center">
                    <i className="bi bi-android2 text-4xl text-white"></i>
                    <div className="text-left">
                      <p className="text-white/80 text-sm">Available for</p>
                      <p className="text-white text-xl font-bold">Android</p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50"
                    >
                      <i className="bi bi-android2 text-lg"></i>
                      <span>Download Now</span>
                    </button>
                  </div>
                </div>

                {/* iOS Card */}
                <div className="flex-1 bg-white/2 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-4 justify-center">
                    <i className="bi bi-apple text-4xl text-white"></i>
                    <div className="text-left">
                      <p className="text-white/80 text-sm">Available for</p>
                      <p className="text-white text-xl font-bold">iOS</p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleDownloadIOS}
                      className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50"
                    >
                      <i className="bi bi-apple text-lg"></i>
                      <span>Download Now</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* App Info */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
                <div>
                  <i className="bi bi-shield-check text-2xl mb-2"></i>
                  <p className="text-sm">Secure & Trusted</p>
                </div>
                <div>
                  <i className="bi bi-download text-2xl mb-2"></i>
                  <p className="text-sm">Free Download</p>
                </div>
                <div>
                  <i className="bi bi-star-fill text-2xl mb-2"></i>
                  <p className="text-sm">Medical Grade</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            {/* <div className="mt-12 text-white/80">
              <h3 className="text-lg font-semibold mb-4">System Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p><strong>Android Version:</strong> 7.0 or higher</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p><strong>Storage:</strong> 50 MB available space</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section ref={featuresRef} className="bg-white py-16 relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-15 wave-animation z-0">
            <Image
              ref={topRightSvgRef}
              src="/images/lines.svg"
              alt="Top Right Wave"
              className="filter-dark-gray"
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-15 wave-animation z-0">
            <Image
              ref={bottomLeftSvgRef}
              src="/images/lines.svg"
              alt="Bottom Left Wave"
              className="filter-dark-gray"
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-5 wave-animation z-0">
            <Image
              ref={centerSvgRef}
              src="/images/lines.svg"
              alt="Center Wave"
              className="filter-dark-gray rotate-45"
              width={1400}
              height={1400}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${featuresVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#155dfc]">POWERFUL FEATURES</span> IN YOUR POCKET
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access advanced cardiac diagnostic tools anywhere, anytime with our mobile application
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "bi-heart-pulse",
                title: "Real-Time Analysis",
                description: "Get instant cardiac insights with AI-powered diagnostics at your fingertips"
              },
              {
                icon: "bi-phone",
                title: "Mobile Convenience",
                description: "Seamlessly connect your HD Steth device with your Android smartphone"
              },
              {
                icon: "bi-cloud-upload",
                title: "Cloud Sync",
                description: "Securely store and share patient data with healthcare professionals"
              },
              {
                icon: "bi-graph-up",
                title: "Visual Waveforms",
                description: "View high-fidelity ECG and PCG waveforms in real-time visualization"
              },
              {
                icon: "bi-shield-check",
                title: "FDA Cleared",
                description: "Trusted medical-grade technology approved for clinical use"
              },
              {
                icon: "bi-people",
                title: "Patient Management",
                description: "Organize and track patient records with comprehensive data management"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`
                  bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100
                  transition-all duration-700 hover:scale-105 hover:shadow-xl hover:-translate-y-2
                  ${featuresVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#155dfc] to-[#155dfc] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help you get the most out of your HD Steth app
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Make FAQ card clickable to scroll to FAQs section */}
            <div
              className="bg-blue-50 rounded-xl p-6 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors duration-300"
              onClick={scrollToFaq}
            >
              <i className="bi bi-question-circle text-3xl text-[#155dfc] mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm mb-3">Find answers to common questions</p>
              <span className="inline-flex items-center gap-2 text-[#155dfc] font-medium hover:underline text-sm">
                <i className="bi bi-arrow-right"></i>
                View FAQs
              </span>
            </div>
            <div 
              className="bg-blue-50 rounded-xl p-6 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors duration-300"
              onClick={() => window.location.href = 'mailto:service@hdmedicalgroup.com'}
            >
              <i className="bi bi-envelope text-3xl text-[#155dfc] mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service and Support</h3>
              <p className="text-gray-600 text-sm mb-3">Contact our technical support team</p>
              <span className="inline-flex items-center gap-2 text-[#155dfc] font-medium hover:underline text-sm">
                service@hdmedicalgroup.com
              </span>
            </div>
            <div 
              className="bg-blue-50 rounded-xl p-6 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors duration-300"
              onClick={() => window.open('/docs/HDSteth-App-User-Manual.pdf', '_blank')}
            >
              <i className="bi bi-book text-3xl text-[#155dfc] mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Guide</h3>
              <p className="text-gray-600 text-sm mb-3">Learn how to use the app effectively</p>
              <span className="inline-flex items-center gap-2 text-[#155dfc] font-medium hover:underline text-sm">
                <i className="bi bi-download"></i>
                Download User Manual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section (new) */}
      <section ref={faqRef} className="bg-white py-16 border-t border-gray-100" id="faqs">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-colors ${
                    open ? 'border-[#17a6e0]/60 bg-blue-50/40' : 'border-gray-200 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left p-4 md:p-5"
                  >
                    <span className="font-semibold text-gray-900">{item.q}</span>
                    <i
                      className={`bi bi-chevron-down text-[#17a6e0] transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5 overflow-hidden">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}