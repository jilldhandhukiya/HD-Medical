"use client"
import Image from "next/image";
import Header from "@/app/components/Header";
import { useState } from 'react';

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
      <section className="z-10 bg-gradient-to-r from-[#22394d] via-[#5e768d] to-[#e5eaee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 py-8 min-h-[calc(100vh-80px)] gap-8">
          <div className="text-white space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Compassionate care,<br /> exceptional results.
            </h1>
            <p className="text-lg text-white/80">
              We provide world-class healthcare, tailored with compassion and cutting-edge expertise to help you live better.
            </p>
            <div className="pt-4">
              <button className="flex items-center space-x-3 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                <i className="bi bi-play-circle-fill text-xl"></i>
                <span>Book Online with Expert</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center w-full h-full">
            <div className="relative w-full max-w-[650px]">
              <Image
                src="/images/doc.png"
                alt="Doctor with Family"
                width={650}
                height={433}
                className="rounded-2xl w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[580px]">
                <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-2xl px-10 py-6 shadow-xl text-gray-800 grid grid-cols-4 gap-6 text-center">
                  {[
                    ["20+", "Years of Experience"],
                    ["95%", "Patient Satisfaction"],
                    ["5,000+", "Patients Served"],
                    ["10+", "Medical Specialties"]
                  ].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-2xl font-bold text-primary">{num}</div>
                      <div className="text-sm text-gray-600 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Visualize heart sounds and<br />ECG waveforms
              </h2>
              <p className="text-lg text-gray-600">
                HD Medical is a global leader in the detection and management of cardiovascular disease (CVD). We are dedicated to enabling evidence-based patient diagnosis and treatment decisions to be made at the point-of-care instantaneously to improve outcomes and save lives. Medical professionals can leverage HD Steth's AI-enabled intelligence, phonocardiogram, and electrocardiogram in their single most important and prestigious device, the stethoscope.
              </p>
              <button className="inline-block px-8 py-3 bg-black text-white rounded-lg">
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
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="flex justify-center mb-12">
            <Image 
              src="/images/hd_stethlogo.png" 
              alt="HD Steth Logo" 
              width={300} 
              height={90}
              className="mx-auto"
            />
          </div>
          <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            HD Steth is an intelligent stethoscope with integrated EKG, offering real-time cardiac insights at the point-of-care. It utilizes patented noise cancellation and smart amplification for high-fidelity auscultation and enables real-time visualization of cardiac waveforms on a mobile app.
          </p>
          <button className="inline-block px-10 py-4 bg-[#40B7E4] text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity mt-8">
            Learn More
          </button>
        </div>

        {/* Side Images with Better Positioning */}
        <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-0">
          <Image 
            src="/images/stethleft.png" 
            alt="Left Device" 
            width={300} 
            height={400} 
            className="object-contain rotate-[-20deg] translate-x-[-15%]"
            priority
          />
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
          <Image 
            src="/images/stethright.png" 
            alt="Right Device" 
            width={300} 
            height={1000} 
            className="object-contain rotate-[20deg] translate-x-[15%]"
            priority
          />
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#40B7E4]">REVOLUTIONIZING</span>{' '}
              <span className="text-[#FF6B35]">CARDIAC CARE</span><br />
              <span className="text-[#40B7E4]">WITH AI</span>
            </h2>
          </header>

          {/* Modified grid layout - 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Real-Time Cardiac Insights",
                image: "/images/feature1.jpg",
                number: "1"
              },
              {
                title: "Integrated ECG + PPG",
                image: "/images/feature2.png",
                number: "2"
              },
              {
                title: "AI-Powered Heart Murmur Detection",
                image: "/images/feature3.jpeg",
                number: "3"
              },
              {
                title: "FDA Cleared, Clinician Trusted",
                image: "/images/feature4.jpg",
                number: "4"
              },
              {
                title: "Noise Cancellation & Smart Amplification",
                image: "/images/feature5.jpg",
                number: "5"
              },
              {
                title: "HD Steth App",
                image: "/images/feature6.png",
                number: "6"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={281}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#40B7E4] text-white font-bold">
                      {feature.number}
                    </span>
                    <span className="text-white font-semibold">
                      {feature.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-[#40B7E4] text-white text-lg font-semibold rounded-lg hover:bg-[#40B7E4]/90 transition-colors">
              GET STARTED →
            </button>
          </div>
        </div>
      </section>

      {/* FDA Section */}
      <section className="bg-white py-20">
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
        className="bg-[#0046BE] bg-cover bg-center bg-no-repeat py-20 overflow-hidden"
        style={{ backgroundImage: "url('/images/grid3.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
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
                      <div className="absolute -top-4 right-8 text-6xl text-[#40B7E4]/20">"</div>
                      
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#40B7E4]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-20">
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
          {/* Certificates Section */}
      <section className="bg-[#0057B8] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            CERTIFICATES
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
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

        </div>
      </section>
    </>
  );
}
