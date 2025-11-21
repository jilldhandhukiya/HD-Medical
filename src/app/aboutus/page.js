"use client"
import Image from 'next/image';

// Card Component
function PersonCard({ person }) {
  return (
    <div className="w-full max-w-[360px] mx-auto bg-white border-[2px] border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-lg relative transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ boxSizing: 'border-box' }}>
      <div className="w-full aspect-[4/4] relative border-b-[2px] border-gray-200 bg-gray-100">
        <Image
          src={person.image}
          alt={`${person.name} - ${person.position}`}
          fill
          className="w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL={person.blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="}
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="bg-[#101585] px-4 py-3 text-center">
        <h3 className="text-white text-xl font-bold leading-tight">{person.name}</h3>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 text-center">
        <p className="text-[#101585] text-base font-semibold">{person.position}</p>
        <p className="text-gray-600 text-sm mt-2">{person.description}</p>
      </div>
    </div>
  );
}

// Dummy Data
const leadership = [
  {
    name: "Arvind Thiagarajan",
    position: "Founder, CEO & Chief Inventor",
    image: "/images/company/Arvind.png",
    description: "Visionary leaderrr driving innovation and growth. Passionate about healthcare transformation."
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

// // Replace the existing majorInvestors array with this:

// const majorInvestors = [
//   {
//     name: "Steve Killelea",
//     position: "Chairman of Integrated Research",
//     image: "/images/company/Steve Killelea.jpeg",
//     description: "Founder of Ascent Capital, specializing in healthcare technology investments with 20+ years experience.",
//     flags: ["australia"]
//   },
//   {
//     name: "Young Jin Kim",
//     position: "Chairman & CEO of Handok Pharma",
//     image: "/images/company/Young Jin Kim.jpg",
//     description: "Former CEO of MedTech Ventures, leading investments in breakthrough medical technologies.",
//     flags: ["korea"]
//   },
//   {
//     name: "Suk Jin Kim",
//     position: "Investor & Handok Pharma",
//     image: "/images/company/Suk Jin Kim.jpg",
//     description: "Principal at HealthTech Innovation Fund, focused on AI-driven healthcare solutions.",
//     flags: ["korea"]
//   },
//   {
//     name: "A Balasubramanian",
//     position: "MD, Aditya Birla Sun Life Asset Management",
//     image: "/images/company/A_Balasubramanian.jpeg",
//     description: "Board-certified cardiologist and active investor in medical device companies.",
//     flags: ["india"]
//   },
//   {
//     name: "Dr. Praveen Kollipara",
//     position: "Leading Oncologist & AAPI Member Fort Wayne, Indiana",
//     image: "/images/investors/investor5.jpg",
//     description: "Managing Partner at Global Health Ventures, specializing in cross-border healthcare investments.",
//     flags: ["us"]
//   }
// ];

// const businessAdvisors = [
//   {
//     name: "Dr. Prem Pillay",
//     position: "Leading Neuro Surgeon Venture Capitalist",
//     image: "/images/company/Dr. Prem Pillay.jpg",
//     flags: ["us"]
//   },
//   {
//     name: "Dr. Jon Freudmam ",
//     position: "Reimbursement Expert Ex-Kaiser & BlueShield",
//     image: "/images/company/Dr. Jon Freudmam.jpeg",
//     flags: ["india", "us"]
//   },
//   {
//     name: "Umesh Singh",
//     position: "Finance Ex - IBM",
//     image: "/images/company/Umesh Singh.jpg",
//     flags: ["us"]
//   },
//   {
//     name: "Vivek Pendharkar",
//     position: "Execution & Operations Ex - Intel",
//     image: "/images/company/Vivek Pendharkar.webp",
//     flags: ["us", "korea"]
//   },
//   {
//     name: "Rangarajan Raghavan",
//     position: "India / Asia Sales Ex - HCL",
//     image: "/images/advisors/business5.jpg",
//     flags: ["us", "india"]
//   },
//   {
//     name: "Jessica Richter",
//     position: "Regulatory & Quality GM of Veranex",
//     image: "/images/company/Jessica Richter.jpeg",
//     flags: ["us"]
//   },
//   {
//     name: "Ashley Moore",
//     position: "PR & Media AM PR, Florida",
//     image: "/images/company/Ashley_Moore.avif",
//     flags: ["uk"]
//   },
//   {
//     name: "Kang Lim",
//     position: "Patent Counsel",
//     image: "/images/company/Kang Lim.webp",
//     flags: ["us"]
//   },
//   {
//     name: "Kristi Furrer",
//     position: "Marketing & Tradeshows Golden Impressions, Colorado",
//     image: "/images/advisors/business9.jpg",
//     flags: ["us"]
//   }
// ];

// const indiaTeam = [
//   {
//     name: "Ganesh Kumar B R",
//     position: "General Manager R&D",
//     image: "/images/company/Ganesh.png",
//     description: "Experience: 20+ years",
//     flags: ["india"]
//   },
//   {
//     name: "V Dinesh Kumar",
//     position: "General Manager Admin / Finance",
//     image: "/images/team/india2.jpg",
//     description: "Experience: 25+ years ",
//     flags: ["india"]
//   },
//   {
//     name: "Senthil Kumar S",
//     position: "Principal Architect Embedded Design",
//     image: "/images/company/Senthil.jpg",
//     description: "Experience 25+ Years",
//     flags: ["india"]
//   },
//   {
//     name: "Babu N",
//     position: "Head of Design",
//     image: "/images/team/india4.jpg",
//     description: "Experience: 25+ years ",
//     flags: ["india"]
//   },
//   {
//     name: "Geetha V",
//     position: "Senior Manager Materials & Manufacturing",
//     image: "/images/company/Geetha.jpeg",
//     description: "Experience: 30+ years ",
//     flags: ["india"]
//   },
//   {
//     name: "Ravikumar K",
//     position: "Senior Engineer Hardware & Service ",
//     image: "/images/team/india6.jpg",
//     description: "Experience: 25+ years",
//     flags: ["india"]
//   }
// ];

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
          src="/images/Heart-with-ECG.png" 
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
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <div className="w-20 h-1 bg-[#101585] mx-auto mt-4 rounded-full"></div>
          </div>
        </section>

      {/* Leadership Section */}
      <Section title="Our Leadership" people={leadership} />

      {/* Board Members Section */}
      <Section title="Board Members" people={boardMembers} />

      {/* Medical Advisors Section */}
      <Section title="Medical Advisors" people={medicalAdvisors} />
    </>
  );
}