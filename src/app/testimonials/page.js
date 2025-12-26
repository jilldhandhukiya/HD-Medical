'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const PRIMARY_BLUE = '#0E1C3C';

const testimonials = [
  {
    id: 1,
    name: "Dr. Nelson B.Schiller MD, FACC, FRCP",
    position: "Professor of Medicine & Anesthesia, University of California, San Francisco",
    image: "/images/company/Dr Nelson.png",
    testimonial: "HD Steth has applied digital science to produce superior auscultatory experience with suppression of extraneous noise for true fidelity of heart transient and coupled this technology with an ECG. As an academic cardiologist,I am assured that new observations of fundamental importance will emerge from this exciting technology.",
  },
  {
    id: 2,
    name: "Dr. Douglas Johnston MD",
    position: "Thoracic and Cardiovascular Surgery, Northwestern Medicine",
    image: "/images/company/Dr Dougles.png",
    testimonial: "HD Steth is transforming the way medicine is practiced at the point of care setting by enhancing the patient experience, saving time and costs while improving outcomes."
  },
  {
    id: 3,
    name: "Dr. Thomas Krummel MD, FACS, FAAP",
    position: "Professor of Surgery and Co-Director Stanford Byers center for Biodesign",
    image: "/images/company/Dr Thomas.png",
    testimonial: "As a primary care physician, I needed a reliable tool for cardiac assessments. HD Medical's stethoscope with smart amplification has become an indispensable part of my practice.",
  },
  {
    id: 4,
    name: "Ethiraj Raj MD, FACC, FSCAI, FASNC",
    position: "Cardiovascular Disease Specialist Flint, Michigan",
    image: "/images/company/Dr Raj.png",
    testimonial: "The quality and intensity of heart sounds are phenomenal on HD Steth and it delivers the most impressive sound quality advancements in my last 40 years of stethoscope use. It is truly a giant leap forward in technology."
  },
];



const mediaCoverage = [
  {
    outlet: "CNET",
    quote: "The Most Important Health Tech of CES",
    logo: "/media/cnet.png",
    url: "https://www.cnet.com"
  },
  {
    outlet: "MobiHealthNews",
    quote: "The devices, software and health tech Headlines of CES",
    logo: "/media/mobihealthnews.png",
    url: "https://www.mobihealthnews.com"
  },
  {
    outlet: "GearBrain",
    quote: "The Best of CES: Tech that will shape our life this year",
    logo: "/media/gearbrain.png",
    url: "https://www.gearbrain.com"
  },
  {
    outlet: "Wired",
    quote: "A Cardiac monitoring device that can track 7 biometrics at HOME",
    logo: "/media/wired.png",
    url: "https://www.wired.com"
  },
  {
    outlet: "Reviewed",
    quote: "These Devices Allow You to Take Detailed Heart Readings At Home – But Should You?",
    logo: "/media/reviewed.png",
    url: "https://www.reviewed.com"
  },
  {
    outlet: "TechRepublic",
    quote: "New device listens to heart, measures ECG remotely",
    logo: "/media/techrepublic.png",
    url: "https://www.techrepublic.com"
  },
  {
    outlet: "HealthTech Insider",
    quote: "CES 2021: Small Remote Monitor Records Vitals and Sounds",
    logo: "/media/healthtechinsider.png",
    url: "https://www.healthtechinsider.com"
  },
  {
    outlet: "TrendHunter",
    quote: "HD Medical's Revolutionary Device Made its Debut at CES",
    logo: "/media/trendhunter.png",
    url: "https://www.trendhunter.com"
  },
  {
    outlet: "RidePlay",
    quote: "Exciting Highlights for All-Digital CES",
    logo: "/media/rideplay.png",
    url: "https://www.rideplay.com"
  },
  {
    outlet: "iTWire",
    quote: "CES Health Tech Gamut that Deserves our Undivided Attention",
    logo: "/media/itwire.png",
    url: "https://www.itwire.com"
  },
  {
    outlet: "MUO",
    quote: "This Is the First Health Tracker to Monitor 7 Different Biometrics",
    logo: "/media/muo.png",
    url: "https://www.makeuseof.com"
  },
  {
    outlet: "ARCHYDE",
    quote: "Health and Wellness Trends: CES Featured Products and Solutions",
    logo: "/media/archyde.png",
    url: "https://www.archyde.com"
  },
  {
    outlet: "Into Tomorrow",
    quote: "At Home Cardiac Care from HD Medical",
    logo: "/media/intotomorrow.png",
    url: "https://www.intotomorrow.com"
  },
  {
    outlet: "Electronics 360",
    quote: "CES: A new year ushers in new healthcare tech",
    logo: "/media/elec360.png",
    url: "https://www.electronics360.globalspec.com"
  },
  {
    outlet: "Fierce Healthcare",
    quote: "At all-virtual CES, the spotlight is on touchless tech, robot companions — and smart bathrooms",
    logo: "/media/fiercehealthcare.png",
    url: "https://www.fiercehealthcare.com"
  }
];

const publications = [
  {
    id: 1,
    name: "Dr. Nelson B.Schiller MD, FACC, FRCP",
    position: "Professor of Medicine & Anesthesia, University of California, San Francisco",
    image: "/images/company/Dr Nelson.png",
    quote: "HD Medical is transforming the way medicine is practiced at the point-of-care setting by enhancing the patient experience, saving time and costs while improving outcomes.",
    publicationImages: [
      "/images/asepublication.png",
    ],
    journals: "International Journal of Cardiology (IJC) & American Society of Echocardiography (ASE)"
  }
];

const PremiumTestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative h-full">
      {/* Premium Card with Elegant Design */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 md:p-10 h-full flex flex-col">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-12 h-1 bg-[#0E1C3C] rounded-r-full"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Star Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Quote - Flexible height */}
          <div className="mb-8 flex-grow">
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              &ldquo;{testimonial.testimonial}&rdquo;
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-6 mt-auto"></div>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#0E1C3C] shadow-md">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=${PRIMARY_BLUE.slice(1)}&color=fff&size=256`;
                  }}
                />
              </div>
            </div>

            {/* Name & Position */}
            <div className="flex-grow min-w-0">
              <h4 className="text-gray-900 font-semibold text-sm truncate">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 text-xs mt-0.5 leading-tight line-clamp-2">
                {testimonial.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`relative transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>

      {/* Main Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

        {/* Left: Profile Image Section - Plain Background */}
        <div className="md:w-2/5 bg-[#0E1C3C] p-12 flex flex-col items-center justify-center relative overflow-visible">
          <div className="absolute top-6 left-6 z-0">
            <Quote size={50} className="text-white opacity-40" />
          </div>

          {/* 3D Profile Image Container */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            {/* Main Image with 3D Effect */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Shadow layers for 3D depth */}
              <div className="absolute inset-0 rounded-full bg-[#0E1C3C] opacity-20 blur-xl transform translate-y-4"></div>
              <div className="absolute inset-0 rounded-full bg-[#0E1C3C] opacity-30 blur-lg transform translate-y-2"></div>

              {/* Main image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=${PRIMARY_BLUE.slice(1)}&color=fff&size=256`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Testimonial Content - Plain Background */}
        <div className="md:w-3/5 p-10 bg-white flex flex-col justify-center">

          {/* Testimonial Quote */}
          <div className="mb-8">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
              &ldquo;{testimonial.testimonial}&rdquo;
            </p>
          </div>

          {/* Doctor Info */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 text-xl mb-2">
              {testimonial.name}
            </h4>
            <p className="text-[#0E1C3C] font-semibold text-sm leading-snug">
              {testimonial.position}
            </p>
            {testimonial.location && (
              <p className="text-gray-400 text-xs uppercase tracking-wider font-medium mt-2">
                {testimonial.location}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const MediaCoverageSection = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Global Media Recognition
          </h2>
          <div className="w-24 h-1.5 bg-[#0E1C3C] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HD Medical has garnered significant attention from the world&apos;s leading tech and healthcare publications,
            highlighting our commitment to cardiovascular innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaCoverage.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0E1C3C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Logo Container */}
              <div className="h-24 flex items-center justify-center mb-6 cursor-pointer" onClick={() => window.open(item.url, '_blank')}>
                {item.logo ? (
                  <div className="relative w-48 h-16">
                    <Image
                      src={item.logo}
                      alt={`${item.outlet} logo`}
                      fill
                      className="object-contain transition-transform duration-500 lg:group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <span className="text-xl font-black text-gray-400 uppercase tracking-tighter">
                    {item.outlet}
                  </span>
                )}
              </div>

              {/* Quote */}
              <div className="flex-grow">
                <p className="text-gray-800 text-base font-medium leading-relaxed text-center italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Outlet Name Footer */}
              <div className="mt-6 pt-4 border-t border-gray-50 text-center">
                <span className="text-[#0E1C3C] font-bold text-[10px] uppercase tracking-[0.2em]">
                  {item.outlet}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PublicationsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Publications & <span className="text-[#0E1C3C]">Research</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#0E1C3C] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our innovations are backed by rigorous research published in leading medical journals worldwide.
          </p>
        </div>

        {publications.map((publication, index) => (
          <div key={publication.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row">

              {/* Left Section: Profile & Quote */}
              <div className="lg:w-2/5 p-8 md:p-12 flex flex-col items-center justify-center">

                {/* Profile Image with 3D effect */}
                <div className="mb-8">
                  <div className="relative w-40 h-40 md:w-48 md:h-48">
                   
                    {/* Main Image with orange border accent */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 rounded-full border-4 border-orange-400"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                        <Image
                          src={publication.image}
                          alt={publication.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {publication.name}
                  </h3>
                  <p className="text-[#0E1C3C] font-semibold text-sm">
                    {publication.position}
                  </p>
                </div>

                {/* Quote */}
                <div className="relative">
                  <p className="text-gray-700 text-base italic leading-relaxed px-4">
                    &ldquo;{publication.quote}&rdquo;
                  </p>
                </div>

                {/* Orange accent line */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mt-8 rounded-full"></div>
              </div>

              {/* Right Section: Publications */}
              <div className="lg:w-3/5 p-8 md:p-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                  {publication.publicationImages.map((imgSrc, idx) => (
                    <div key={idx} className="group relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#0E1C3C] transition-all duration-300 shadow-md hover:shadow-xl">
                      <div className="relative w-full aspect-[5/4]">
                        <Image
                          src={imgSrc}
                          alt={`Publication ${idx + 1}`}
                          fill
                          className="object-fit group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext fill="%23999" x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="18"%3EPublication Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Journal Information */}
                <div className="text-center pt-6 border-t-2 border-gray-100">
                  <p className="text-gray-600 font-small text-sm leading-relaxed">
                    Publications on <span className="text-[#0E1C3C] font-bold">{publication.journals}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Testimonials Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Medical <span className="text-[#0E1C3C]">Professionals</span> Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Premium Testimonial Section */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#e8f5f9] rounded-full">
                <div className="w-2 h-2 bg-[#0E1C3C] rounded-full"></div>
                <span className="text-[#0E1C3C] font-semibold text-xs uppercase tracking-wider">Distinguished Endorsements</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Medical Excellence <span className="text-[#0E1C3C]">Recognized</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
              {testimonials.map((testimonial) => (
                <PremiumTestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MediaCoverageSection />

      <PublicationsSection />

    </div>
  );
}
