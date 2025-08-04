"use client"
import Image from "next/image";
import Header from "./components/Header";
import { useState } from 'react';
import Footer from "./components/Footer";

function Card({ title, image, number }) {
  return (
    <div className="
      bg-gradient-to-br from-white via-blue-50 to-blue-100
      rounded-2xl shadow-md
      transition-transform duration-300 hover:scale-105
      border border-blue-100
      px-5 py-6
      w-[270px] sm:w-[300px] md:w-[320px] lg:w-[340px]
    ">
      <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 relative rounded-xl overflow-hidden mb-4 shadow">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center text-base font-bold shadow border-2 border-white">
          {number}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">{title}</h3>
      <div className="flex justify-center">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow">
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

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0fcff] to-white pt-2 md:pt-4 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text */}
          <div className="space-y-4 z-10">
            <div className="bg-[#17a6e0]/10 text-[#17a6e0] font-bold uppercase tracking-wider px-8 py-2 rounded-full inline-block text-sm md:text-base lg:text-3xl">
              WORLD&apos;s FIRST
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI POWERED <span className="text-[#17a6e0]">STETHOSCOPE</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur. Egestas cursus a consequat velit.
              Sapien purus porta mattis odio eu augue vitae faucibus.
            </p>
          </div>

          {/* Right Column: Image with Circles */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              {/* Outer Circle */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, #d2f1ff 0%, rgba(210, 241, 255, 0.3) 70%, transparent 100%)'
                }}
              />
              {/* Middle Circle */}
              <div 
                className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, #86d0ff 0%, rgba(134, 208, 255, 0.3) 70%, transparent 100%)'
                }}
              />
              {/* Inner Circle */}
              <div 
                className="absolute w-[60%] h-[60%] top-[20%] left-[20%] rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, #30aaff 0%, rgba(48, 170, 255, 0.3) 70%, transparent 100%)'
                }}
              />

              {/* Doctor Image */}
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
      

        {/* Stats Section - Positioned much closer to content */}
        <div className="-mt-14 md:-mt-19 w-full px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#17a6e0]/20 via-[#40B7E4]/20 to-[#17a6e0]/20 rounded-3xl blur-xl"></div>
              
              {/* Main stats container */}
              <div className="relative grid grid-cols-2 md:grid-cols-4 bg-white/95 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl text-center py-8 px-6 overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#17a6e0] via-[#40B7E4] to-[#17a6e0] p-[2px]">
                  <div className="h-full w-full rounded-3xl bg-white/95 backdrop-blur-2xl"></div>
                </div>
                
                {/* Top decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#17a6e0] to-transparent rounded-b-full"></div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#40B7E4] to-transparent rounded-full"></div>
                
                {/* Corner accent dots */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#17a6e0] rounded-full opacity-60"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#40B7E4] rounded-full opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#40B7E4] rounded-full opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#17a6e0] rounded-full opacity-60"></div>
                
                {[
                  ["20+", "Years of Experience"],
                  ["95%", "Patient Satisfaction"],
                  ["5,000+", "Patients Served"],
                  ["10+", "Medical Specialties"]
                ].map(([value, label], index) => (
                  <div key={index} className="relative group z-10">
                    {/* Vertical dividers with gradient effect */}
                    {index < 3 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#17a6e0]/30 to-transparent hidden md:block"></div>
                    )}
                    
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
                ))}
                
                {/* Bottom decorative wave */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#17a6e0]/20 via-[#40B7E4]/40 to-[#17a6e0]/20 rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section - Reduced top padding */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Visualize heart sounds and<br />ECG waveforms
              </h2>
              <p className="text-lg text-gray-600">
                HD Medical is a global leader in the detection and management of cardiovascular disease (CVD). We are dedicated to enabling evidence-based patient diagnosis and treatment decisions to be made at the point-of-care instantaneously to improve outcomes and save lives. Medical professionals can leverage HD Steth&apos;s AI-enabled intelligence, phonocardiogram, and electrocardiogram in their single most important and prestigious device, the stethoscope.
              </p>
              <button
                className="inline-block px-8 py-3 bg-blue-300 text-black rounded-lg hover:bg-blue-400 transition-colors"
                onClick={() => window.location.href = '/product'}>
                Know More
              </button>
            </div>
            <div>
              <Image
                src="/images/landing-about.png"
                alt="Doctor examining patient"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HD Steth Section */}
      <section className="relative bg-white py-12 overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/hd_stethlogo.png"
              alt="HD Steth Logo"
              width={300}
              height={90}
              className="mx-auto"
            />
          </div>
          <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-semibold">
            HD Steth an intelligent stethoscope with integrated EKG, offering real-time cardiac insights at the point-of-care. It utilizes patented noise cancellation and smart amplification for high-fidelity auscultation and enables real-time visualization of cardiac waveforms on a mobile app. This device also allows for data saving and sharing with specialists for remote diagnosis and second opinions.
          </p>
          <hr className="my-6 border-gray-300 max-w-3xl mx-auto" />
          <button className="inline-block px-10 py-4 bg-[#40B7E4] text-white text-2xl font-semibold rounded-full hover:opacity-90 transition-opacity mt-4">
            Learn More
          </button>
        </div>

        {/* Side Images with "from outside" effect */}
        <div className="hidden lg:block absolute left-0 top-0 h-full -translate-x-[18%] z-0 flex items-center">
          <Image
            src="/images/stethleft.png"
            alt="Left Device"
            width={420}
            height={700}
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden lg:block absolute right-0 top-0 h-full translate-x-[18%] z-0 flex items-center">
          <Image
            src="/images/stethright.png"
            alt="Right Device"
            width={420}
            height={700}
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
            <span className="text-blue-600">REVOLUTIONIZING </span>
            <span className="text-orange-500">CARDIAC CARE </span>
            <span className="text-blue-600">WITH AI</span>
          </h2>

          {/* Desktop layout */}
          <div className="hidden md:block space-y-16">
            {/* Row 1: Left-aligned */}
            <div className="flex justify-start gap-10 ml-4 md:ml-10 lg:ml-20">
              <Card {...features[0]} number="1" />
              <Card {...features[1]} number="2" />
            </div>

            {/* Row 2: Right-aligned */}
            <div className="flex justify-end gap-10 mr-4 md:mr-10 lg:mr-20">
              <Card {...features[2]} number="3" />
              <Card {...features[3]} number="4" />
            </div>

            {/* Row 3: Left-aligned */}
            <div className="flex justify-start gap-10 ml-4 md:ml-10 lg:ml-20">
              <Card {...features[4]} number="5" />
              <Card {...features[5]} number="6" />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col gap-6 mt-8 px-2">
            {features.map((feature, idx) => (
              <div key={idx} className="w-full max-w-[95vw] mx-auto px-2">
                <Card {...feature} number={idx + 1} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition">
              GET STARTED →
            </button>
          </div>
        </div>
      </section>

      {/* FDA Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/girl_doc.png"
                alt="Doctor and child"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                FDA cleared for three products classification codes in one device.
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
                  {[
                    ["DQD", "Electronic Stethoscope"],
                    ["DQC", "Phonocardiograph"],
                    ["DPS", "Electrocardiograph & Cardiac monitor"]
                  ].map(([code, label]) => (
                    <div key={code} className="text-center md:text-left flex-1">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{code}</div>
                      <div className="text-lg font-semibold text-gray-900">{label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-800 text-lg text-center md:text-left">
                  (including cardiotachometer and rate alarm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        className="bg-[#0046BE] bg-cover bg-center bg-no-repeat py-12 overflow-hidden"
        style={{ backgroundImage: "url('/images/grid3.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Real results from our advanced AI-powered stethoscope technology, making a
              difference in healthcare outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["bi-people-fill", "100000+", "Total Lives Screened"],
              ["bi-search-heart", "794", "Screened Abnormalities"],
              ["bi-heart-pulse-fill", "185", "Confirmed Abnormalities"],
              ["bi-hospital", "56", "For Treatment"]
            ].map(([icon, value, label]) => (
              <div key={label} className="bg-[#0051D8]/90 rounded-lg p-8 flex flex-col items-center">
                <div className="bg-[#FF4B26] rounded-full p-4 mb-4">
                  <i className={`bi ${icon} text-2xl text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{value}</div>
                <div className="text-white/80 text-center">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Experts Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered digital stethoscopes are transforming cardiac diagnostics
              and patient care across the medical community.
            </p>
          </div>

          {/* Testimonials Container */}
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
            >
              <i className="bi bi-chevron-left text-2xl text-gray-600"></i>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
            >
              <i className="bi bi-chevron-right text-2xl text-gray-600"></i>
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((review, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg relative">
                      <div className="absolute -top-4 right-8 text-6xl text-[#40B7E4]/20">&quot;</div>

                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-32 h-32 shrink-0">
                          <Image
                            src="/images/profile.jpg"
                            alt="Medical Expert"
                            width={128}
                            height={128}
                            className="rounded-full"
                          />
                        </div>

                        <div className="space-y-4">
                          <p className="text-lg text-gray-600">
                            {review.quote}
                          </p>
                          <div>
                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-500">{review.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-[#40B7E4]' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-5">
            <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
              TRUSTED BY LEADING MEDICAL INSTITUTIONS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="bi bi-hospital text-4xl text-gray-400"></i>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="bi bi-heart-pulse text-4xl text-gray-400"></i>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="bi bi-shield-plus text-4xl text-gray-400"></i>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="bi bi-person-workspace text-4xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-[#0060aa] py-12 w-full">
        <div className="max-w-full px-4 sm:px-6 md:px-12 lg:px-24 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            CERTIFICATES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-none mx-auto">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/fda.png"
                alt="FDA Cleared"
                width={120}
                height={100}
                className="mb-4"
              />
              <p className="text-white font-semibold text-sm">
                FDA CLEARED<br />
                # K201299
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/iso.png"
                alt="ISO Certification"
                width={120}
                height={100}
                className="mb-4"
              />
              <p className="text-white font-semibold text-sm">
                ISO<br />
                13485: 2016
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/tn.png"
                alt="TN Certification"
                width={120}
                height={100}
                className="mb-4"
              />
              <p className="text-white font-semibold text-sm">
                TN/M/MD/004806
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/iec.png"
                alt="IEC Certification"
                width={120}
                height={100}
                className="mb-4"
              />
              <p className="text-white font-semibold text-sm">
                IEC<br />
                60601-2-27
              </p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Footer Section */}
      <Footer />
    </>
  );
}