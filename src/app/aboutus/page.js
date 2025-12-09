"use client"
import Image from 'next/image';

const PRIMARY_BLUE = '#101585';
const PRIMARY_ORANGE = '#FA6404';

const leadership = [
  {
    name: "Arvind Thiagarajan",
    position: "Founder, CEO & Chief Inventor",
    image: "/images/company/Arvind.png",
    description: "Visionary leader driving innovation and growth. Passionate about healthcare transformation."
  },
  {
    name: "Eric Fronk",
    position: "CFO / COO",
    image: "/images/company/EricFronk.png",
    description: "Driving financial strategy and operational excellence to ensure sustainable growth and quality healthcare delivery."
  },
  {
    name: "Venkat Raman",
    position: "Chief of Engineering & SVP, Manufacturing Ops",
    image: "/images/company/Venkat.png",
    description: "Leading engineering innovation and manufacturing excellence to deliver high-quality, scalable, and efficient solutions."
  },
  {
    name: "Prasad Bal",
    position: "SVP, Partnerships & Product Management",
    image: "/images/company/Prasad.png",
    description: "Building strategic partnerships and driving product innovation to accelerate growth and deliver exceptional customer value."
  },
  {
    name: "Ganesh Kumar B R",
    position: "Director - India operations",
    image: "/images/company/GaneshKumar.png",
    description: "Driving research and development initiatives to deliver innovative healthcare solutions."
  }
];

const boardMembers = [
  {
    name: "Arvind Thiagarajan",
    position: "Founder & CEO",
    image: "/images/company/Arvind.png",
    description: "Serial Entrepreneur & Successful ASX IPO"
  },
  {
    name: "Arjun Malhotra",
    position: " Board Member",
    image: "/images/company/Arjun-Malhotra.png",
    description: "Co-Founder of HCL & Headstrong"
  },
  {
    name: "Riaz A. Karamali",
    position: "Legal Counsel",
    image: "/images/company/Riaz A Karamali.png",
    description: "Pillsbury Silicon Valley & San Francisco"
  },
   {
    name: "Dr. Guru Gurushankar",
    position: "Strategic Advisor",
    image: "/images/company/GuruShankar.png",
    description: "Successful Healthcare Executive & Leader Ex-Philips, AWS, Cardinal, J&J, GE Healthcare"
  },
  {
    name: "Investor & Board Observer",
    position: "ADI (NASDAQ)",
    image: "/images/company/AnalogDevices.png",
    description: "Market Cap: US$ 80 Billion"
  }
];

const medicalAdvisors = [
  {
    name: "Dr. Nelson Schiller",
    position: "MD, FACC, FRCP Professor of Medicine & Anesthesia",
    image: "/images/company/Dr Nelson.png"
  },
  {
    name: "Dr Douglas R Johnston",
    position: "MD, Chief of Cardiac Surgery, \n Fellow: Cleveland Clinic",
    image: "/images/company/Dr Dougles.png"
  },
  {
    name: "Dr. Thomas Krummel",
    position: "MD, FACS/FAPP Professor of Co-Director Stanford Byers Center for Bio-design",
    image: "/images/company/Dr Thomas.png"
  },
  {
    name: "Dr. Wael Al Mahmeed",
    position: "MD Leading Cardiologist Owner of City Pharma, UAE",
    image: "/images/company/Dr Wael.png"
  },
  {
    name: "Dr. Ethiraj G. Raj",
    position: "MD, FACC, FSCAI, FASNC, Cardiologist, Hurley Medical Center, Michigan",
    image: "/images/company/Dr Raj.png"
  }
];

// New Team Layout Component
const TeamGroup = ({ title, members, gridCols = "lg:grid-cols-5" }) => (
  <div className="mb-24 last:mb-0 w-full">
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: PRIMARY_BLUE }}>{title}</h3>
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-x-4 gap-y-12 justify-items-center max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8`}>
      {members.map((member, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-[260px] w-full group">
          {/* Circular Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 bg-gray-100 relative shadow-md border-4 border-white group-hover:border-orange-100 transition-all duration-300 shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // Fallback for missing images
              onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#e5e7eb'; }}
            />
          </div>

          {/* Name - Fixed Height Container for Alignment on Desktop */}
          {/* Using items-end on desktop to minimize visual gap between Name and Position */}
          <div className="w-full h-auto md:h-[3.5rem] flex items-center md:items-end justify-center mb-1">
            <h4 className="text-lg md:text-xl font-bold leading-tight" style={{ color: PRIMARY_ORANGE }}>
              {member.name}
            </h4>
          </div>

          {/* Role - Fixed Height Container for Alignment on Desktop */}
          <div className="w-full h-auto md:h-[4.5rem] flex items-start justify-center mb-1">
            <p className="text-sm font-bold leading-tight px-2" style={{ color: PRIMARY_BLUE }}>
              {member.position}
            </p>
          </div>

          {/* Bio/Description - Fixed Height on Desktop */}
          {member.description && (
            <div className="w-full h-auto md:h-[4rem] flex items-start justify-center">
              <p className="text-xs text-gray-800 leading-relaxed font-medium">
                {member.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-white flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#101585] leading-tight">
                We Work to <br className="hidden lg:block" />
                Save Lives
              </h1>
            </div>

            {/* Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
              <Image
                src="/images/About-Top.jpg"
                alt="We Work to Save Lives"
                fill
                className="object-contain md:object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about-details" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-50 rounded-full">
            <svg className="w-6 h-6 text-[#101585]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About HD Medical</h2>
          <div className="w-24 h-1 bg-[#101585] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            <span className="font-semibold text-[#101585]">HD Medical</span> is a global leader in the detection and management of cardiovascular disease.
            We create clinically validated devices and software that put powerful diagnostic tools into the
            hands of clinicians — delivering fast, reliable, evidence-based information at the point of care.
            Our solutions are designed to improve outcomes, streamline workflows and help save lives.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10 items-center">

            {/* Left: Vision (Aligns Right towards image on Desktop) */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 order-1">
              <h3 className="text-3xl md:text-5xl font-bold text-[#101585]">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed max-w-lg font-medium text-lg md:text-xl">
                To be a global leader in innovative,
                high-precision medical devices that
                empower healthcare professionals
                and improve patient outcomes through
                advanced technology, uncompromising
                quality and continuous innovation.
              </p>
            </div>

            {/* Center: Image Graphic */}
            <div className="flex justify-center items-center order-2 py-8 lg:py-0">
              <div className="relative w-[200px] h-[380px] md:w-[240px] md:h-[480px]">
                <Image
                  src="/images/VM_pages-to-jpg-0001.jpg" // Replace this with your cut-out center graphic
                  alt="Vision and Mission Graphic"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Mission (Aligns Left away from image on Desktop) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-3">
              <h3 className="text-3xl md:text-5xl font-bold text-[#FA6404]">Our Mission</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed max-w-lg font-medium text-lg md:text-xl">
                <p>
                  At HD Medical, we are dedicated to designing,
                  developing, manufacturing and delivering
                  innovative healthcare technology. We strive to
                  exceed customer expectations by maintaining
                  the highest quality standards, adhering to
                  global regulatory requirements and fostering a
                  culture of innovation, integrity and service.
                </p>
                <p>
                  Through our commitment to excellence, we aim
                  to make healthcare more accurate, accessible and
                  efficient worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white w-full">
        <TeamGroup title="Our Leadership" members={leadership} />
        <div className="w-full h-px bg-gray-100 my-16 max-w-4xl mx-auto"></div>
        <TeamGroup title="Board Members" members={boardMembers} />
        <div className="w-full h-px bg-gray-100 my-16 max-w-4xl mx-auto"></div>
        <TeamGroup title="Medical Advisors" members={medicalAdvisors} />
      </section>
    </> 
  );
}