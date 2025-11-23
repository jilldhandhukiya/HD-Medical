"use client"
import Image from 'next/image';

const PRIMARY_BLUE = '#101585';
const PRIMARY_ORANGE = '#FA6404';

// New Team Layout Component
const TeamGroup = ({ title, members }) => (
  <div className="mb-24 last:mb-0 w-full">
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: PRIMARY_BLUE }}>{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 justify-items-center max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      {members.map((member, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-[240px] group">
          {/* Circular Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-gray-100 relative shadow-md border-4 border-white group-hover:border-orange-100 transition-all duration-300">
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
          
          {/* Name */}
          <h4 className="text-xl font-bold mb-2 leading-tight" style={{ color: PRIMARY_ORANGE }}>
            {member.name}
          </h4>
          
          {/* Role */}
          <p className="text-sm font-bold mb-3 min-h-[2.5rem] flex items-start justify-center leading-tight" style={{ color: PRIMARY_BLUE }}>
            {member.position}
          </p>
          
          {/* Bio/Description */}
          {member.description && (
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              {member.description}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

// Dummy Data
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
    position: "VP of R&D",
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
    position:" Board Member",
    image: "/images/company/Arjun-Malhotra.png",
    description: "Co-Founder of HCL & Headstrong"
  },
  {
    name: "Guru Gurushankar",
    position: "Board Member",
    image: "/images/company/GuruShankar.png",
    description: "Successful Corporate Executive & Leader"
  },
  {
    name: "Riaz A. Karamali",
    position: "Legal Counsel",
    image: "/images/company/Riaz A Karamali.png",
    description: "Pillsbury Silicon Valley & San Francisco"
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
    name: "Dr Douglas R Johnston,",
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
    name: "Dr. Raj E G",
    position: "MD, FACC, FSCAI, FASNC, Cardiologist, Hurley Medical Center, Michigan",
    image: "/images/company/Dr Raj.png"
  }
];

// Section Component
function Section({ title, people }) {
  // Split people array into rows of 3
  const rows = [];
  for (let i = 0; i < people.length; i += 3) {
    rows.push(people.slice(i, i + 3));
  }

  return (
    <section className="bg-white w-full px-2 py-12 md:px-8 lg:px-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-wide">
          {title}
        </h1>
      </div>
      <div className="w-full flex flex-col gap-8 items-center">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="w-full flex flex-wrap justify-center gap-8"
          >
            {row.map((person, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[260px] max-w-[350px] flex justify-center"
                style={{
                  flexBasis: "calc(33.333% - 2rem)"
                }}
              >
                <PersonCard person={person} />
              </div>
            ))}
            {/* Fill empty spots for alignment if last row has < 3 cards */}
            {row.length < 3 &&
              Array.from({ length: 3 - row.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="flex-1 min-w-[260px] max-w-[340px] flex justify-center invisible"
                  style={{
                    flexBasis: "calc(33.333% - 2rem)"
                  }}
                />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <>
      <br />
      <br />
      {/* Hero Section with Banner */}
<section className="w-full relative h-screen md:h-[87vh] overflow-hidden flex items-center justify-center">        {/* Background Image */}
        {/* Background Image */}
        <Image
          src="/images/About-Top.png" 
          alt="We Work to Save Lives Banner"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center px-4 leading-tight">
            We Work to Save Lives
          </h1>
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
        <section className="mt-16 w-full">
          <div className="max-w-6xl mx-auto px-4">
            <Image
              src="/images/Vision-Mission.png"
              alt="Vision and Mission"
              width={1400}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
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