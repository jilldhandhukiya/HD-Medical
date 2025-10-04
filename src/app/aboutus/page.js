"use client"
import Image from 'next/image';
import Header from "../components/Header";
import Footer from '../components/Footer';

// const flags = {
//   india: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/500px-Flag_of_India.svg.png",
//   us: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/250px-Flag_of_the_United_States_%28Web_Colors%29.svg.png",
//   uk: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
//   japan: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png",
//   korea: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png",
//   australia: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/250px-Flag_of_Australia_%28converted%29.svg.png",
//   uae:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1920px-Flag_of_the_United_Arab_Emirates.svg.png"
// };

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
      <div className="bg-[#155dfc] px-4 py-3 text-center">
        <h3 className="text-white text-xl font-bold leading-tight">{person.name}</h3>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 text-center">
        <p className="text-[#155dfc] text-base font-semibold">{person.position}</p>
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
    description: "Visionary leader driving innovation and growth. Passionate about healthcare transformation.",
    flags: ["us",'india']
  },
  {
    name: "Eric Fronk",
    position: "CFO / COO",
    image: "/images/company/EricFronk.png",
    description: "Driving financial strategy and operational excellence to ensure sustainable growth and quality healthcare delivery.",
    flags: ["us"]
  },
  {
    name: "Venkat Raman",
    position: "Chief of Engineering & SVP, Manufacturing Ops",
    image: "/images/company/Venkat.png",
    description: "Leading engineering innovation and manufacturing excellence to deliver high-quality, scalable, and efficient solutions.",
    flags: ["us"]
  },
  {
    name: "Prasad Bal",
    position: "SVP, Partnerships & Product Management",
    image: "/images/company/Prasad.png",
    description: "Building strategic partnerships and driving product innovation to accelerate growth and deliver exceptional customer value.",
    flags: ["us"]
  },
  {
    name: "Ganesh Kumar B R",
    position: "VP of R&D",
    image: "/images/company/GaneshKumar.png",
    description: "Driving research and development initiatives to deliver innovative healthcare solutions.",
    flags: ["india"]
  }

];

// Replace the existing boardMembers array with this:

const boardMembers = [
  {
    name: "Arvind Thiagarajan",
    position: "Founder & CEO",
    image: "/images/company/Arvind.png",
    description: "Serial Entrepreneur & Successful ASX IPO",
    flags: ["india","us"]
  },
  {
    name: "Arjun Malhotra",
    position:" Board Member",
    image: "/images/company/Arjun-Malhotra.png",
    description: "Co-Founder of HCL & Headstrong",
    flags: ["us", "india"]
  },
  {
    name: "Guru Gurushankar",
    position: "Board Member",
    image: "/images/company/GuruShankar.png",
    description: "Successful Corporate Executive & Leader",
    flags: ["us"]
  },
  {
    name: "Riaz A. Karamali",
    position: "Legal Counsel",
    image: "/images/company/Riaz A Karamali.png",
    description: "Pillsbury Silicon Valley & San Francisco",
    flags: ["us"]
  },
  {
    name: "Investor & Board Observer",
    position: "ADI (NASDAQ)",
    image: "/images/company/AnalogDevices.png",
    description: "Market Cap: US$ 80 Billion",
    flags: ["us"]
  }
  
];

const medicalAdvisors = [
  {
    name: "Dr. Nelson Schiller",
    position: "MD, FACC, FRCP Professor of Medicine & Anesthesia",
    image: "/images/company/Dr Nelson.png",
    flags: ["us"]
  },
  {
    name: "Dr. Douglas Johnston",
    position: "MD, Chief of Cardiac Surgery,Fellow: Cleveland Clinic",
    image: "/images/company/Dr Douglesx.png",
    flags: ["us"]
  },
  {
    name: "Dr. Thomas Krummel",
    position: "MD, FACS/FAPP Professor of Co-Director Stanford Byers Center for Bio-design",
    image: "/images/company/Dr Thomas.png",
    flags: ["us"]
  },
  {
    name: "Dr. Wael Al Mahmeed",
    position: "MD Leading Cardiologist Owner of City Pharma, UAE",
    image: "/images/company/Dr Wael.png",
    flags: ["uae"]
  },
  {
    name: "Dr. Raj E G",
    position: "MD, FACC, FSCAI, FASNC, Cardiologist, Hurley Medical Center, Michigan",
    image: "/images/company/Dr Raj.png",
    flags: ["us", "india"]
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
      <Header />
      <br />
      <br />
      {/* Hero Section */}
      <section className="w-full bg-white pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            ABOUT <span className="text-[#155dfc]">US</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-2">
            <span className="font-bold text-black">HD Medical</span> for decades has been focusing with single minded endeavour to deliver the best we can and achieving this has been possible due to the trust instilled by our customers in our service. Trust invoked through constant innovation and improvement of our services.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <Image
            src="/images/doctor1-aboutus.jpg"
            alt="Doctor 1"
            width={200}
            height={260}
            className="w-[260px] h-[320px] md:w-[260px] md:h-[320px] object-cover rounded-md shadow-md mb-4 md:mb-8"
            priority
          />
          <Image
            src="/images/doctor2-aboutus.jpg"
            alt="Doctor 2"
            width={200}
            height={260}
            className="w-[260px] h-[320px] md:w-[260px] md:h-[320px] object-cover rounded-md shadow-md mb-4 md:mb-0"
            priority
          />
          <Image
            src="/images/doctor3-aboutus.jpg"
            alt="Doctor 3"
            width={200}
            height={260}
            className="w-[260px] h-[320px] md:w-[260px] md:h-[320px] object-cover rounded-md shadow-md mb-4 md:mb-8"
            priority
          />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full bg-white px-4 py-12 md:px-10 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-16">
          {/* Vision */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <span className="text-[#155dfc] text-3xl md:text-5xl  font-bold leading-tight text-center md:text-left">
                Our Vision
              </span>
            </div>
            <div className="w-full md:w-2/3 flex items-center justify-center md:justify-start">
              <p className="text-base md:text-lg text-gray-800 font-medium text-center md:text-left">
                To be a global leader in innovative, high-precision Medical devices that empower healthcare professionals and improve patient outcomes through advanced technology, uncompromising quality and continuous innovation.
              </p>
            </div>
          </div>
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
              <div className="rounded-[32px] overflow-hidden shadow-lg w-full max-w-xs md:max-w-md">
                <Image
                  src="/images/vision_section.png"
                  alt="Doctor checking patient health"
                  width={400}
                  height={400}
                  className="object-fit w-full h-48 md:h-64"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h2 className="text-[#155dfc] text-2xl md:text-5xl font-bold mb-3 leading-tight text-center md:text-left">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-800 font-medium mb-2 text-center md:text-left">
                At HD Medical, we are dedicated to designing, developing, manufacturing and delivering innovative healthcare technology. We strive to exceed customer expectations by maintaining the highest quality standards, adhering to global regulatory requirements and fostering a culture of innovation, integrity and service.
              </p>
              <p className="text-base md:text-lg text-gray-800 font-medium text-center md:text-left">
                Through our commitment to excellence, we aim to make healthcare more accurate, accessible and efficient worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <Section title="Our Leadership" people={leadership} />

      {/* Board Members Section */}
      <Section title="Board Members" people={boardMembers} />

      {/* Medical Advisors Section */}
      <Section title="Medical Advisors" people={medicalAdvisors} />

      {/* Our Current Major Investors Section */}
      {/* <Section title="Our Current Major Investors" people={majorInvestors} /> */}

      {/* Business Advisors & Strategists Section */}
      {/* <Section title="Business Advisors & Strategists" people={businessAdvisors} /> */}

      {/* India Team Members Section */}
      {/* <Section title="India Team Members" people={indiaTeam} /> */}

      {/* Footer Section */}
      <Footer />
    </>
  );
}