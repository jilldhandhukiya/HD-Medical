"use client"
import Image from 'next/image';
import Header from "../components/Header";
import Footer from '../components/Footer';

const flags = {
  india: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/500px-Flag_of_India.svg.png",
  us: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/250px-Flag_of_the_United_States_%28Web_Colors%29.svg.png",
  uk: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  japan: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png",
  korea: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png",
  australia: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/250px-Flag_of_Australia_%28converted%29.svg.png",
};

// Card Component
function PersonCard({ person }) {
  return (
    <div className="w-full max-w-[340px] mx-auto bg-white border-[2px] border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-lg relative transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ boxSizing: 'border-box' }}>
      <div className="w-full aspect-[4/5] relative border-b-[2px] border-gray-200">
        <Image
          src={person.image}
          alt={`${person.name} - ${person.position}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL={person.blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="}
        />
        {/* Flags */}
        <div className="absolute top-2 right-2 flex gap-1 z-10">
          {person.flags
            .filter(flag => flags[flag]) // Only render if flag src exists
            .map((flag, idx) => (
              <Image
                key={idx}
                src={flags[flag]}
                alt={flag}
                width={18}
                height={13}
                className="rounded shadow border border-white"
                style={{ boxShadow: '0 0 2px #aaa' }}
              />
            ))}
        </div>
      </div>
      <div className="bg-sky-700 px-4 py-3 text-center">
        <h3 className="text-white text-xl font-bold leading-tight">{person.name}</h3>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 text-center">
        <p className="text-sky-700 text-base font-semibold">{person.position}</p>
        <p className="text-gray-600 text-sm mt-2">{person.description}</p>
      </div>
    </div>
  );
}

// Dummy Data
const leadership = [
  {
    name: "Sarah Chen",
    position: "Chief Executive Officer (CEO)",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Visionary leader driving innovation and growth. Passionate about healthcare transformation.",
    flags: ["us"]
  },
  {
    name: "Robert Kim",
    position: "Chief Operations Officer (COO)",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Expert in operational excellence and global strategy. Ensures seamless execution.",
    flags: ["us", "india"]
  },
  {
    name: "Thomas Bergstrom",
    position: "VP, Global Sales",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Sales strategist with a global perspective. Expanding markets worldwide.",
    flags: ["germany"]
  },
  {
    name: "Elena Rodriguez",
    position: "Director of Sustainability",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Champion for sustainable healthcare solutions. Advocates for green innovation.",
    flags: ["france"]
  }
];

// Replace the existing boardMembers array with this:

const boardMembers = [
  {
    name: "Arvind Thiagarajan",
    position: "Founder & CEO",
    image: "/images/board/member1.jpg",
    description: "Serial Entrepreneur & Successful ASX IPO",
    flags: ["india","us"]
  },
  {
    name: "Arjun Malhotra",
    position:" Board Member",
    image: "/images/board/member2.jpg",
    description: "Co-Founder of HCL & Headstrong",
    flags: ["us", "india"]
  },
  {
    name: "Vic Mahadevan",
    position: "Board Member",
    image: "/images/board/member3.jpg",
    description: "Successful Corporate Executive & Leader",
    flags: ["us"]
  },
  {
    name: "Murali Malayappan",
    position: "Board Member",
    image: "/images/board/member4.jpg",
    description: "Chairman & MD, Shriram Properties",
    flags: ["india"]
  },
  {
    name: "Investor & Board Observer",
    position: "ADI (NASDAQ)",
    image: "/images/board/member5.jpg",
    description: "Market Cap: US$ 80 Billion",
    flags: ["us"]
  },
  {
    name: "Riaz A. Karamali",
    position: "Legal Counsel",
    image: "/images/board/member6.jpg",
    description: "Pillsbury Silicon Valley & San Francisco",
    flags: ["us"]
  }
];

const medicalAdvisors = [
  {
    name: "Dr. Nelson Schiller",
    position: "MD, FACC, FRCP Professor of Medicine & Anesthesia",
    image: "/images/advisors/advisor1.jpg",
    flags: ["us"]
  },
  {
    name: "Dr. Douglas Johnston",
    position: "MD Thoracic and Cardiovascular Surgery",
    image: "/images/advisors/advisor2.jpg",
    flags: ["us"]
  },
  {
    name: "Dr. Thomas Krummel",
    position: "MD, FACS/FAPP Professor of Co-Director Stanford Byers Center for Bio-design",
    image: "/images/advisors/advisor3.jpg",
    flags: ["us"]
  },
  {
    name: "Dr. Wael Al Mahmeed",
    position: "MD Leading Cardiologist Owner of City Pharma, UAE",
    image: "/images/advisors/advisor4.jpg",
    flags: ["us", "india", "uk", "japan", "korea", "australia"]// idk konsa flag h iska
  },
  {
    name: "Dr. Raj E G",
    position: "RLeading Private Cardiologist Flint, Michigan Hurley Medical Center",
    image: "/images/advisors/advisor5.jpg",
    flags: ["us", "india"]
  },
  {
    name: "Dr. Thomas Krummel",
    position: "Chief Medical Advisor Memorial Care, Long Beach  Miller Children’s Hospital",
    image: "/images/advisors/advisor6.jpg",
    flags: ["us"]
  }
];

// Replace the existing majorInvestors array with this:

const majorInvestors = [
  {
    name: "Steve Killelea",
    position: "Chairman of Integrated Research",
    image: "/images/majorinvestor1.png",
    description: "Founder of Ascent Capital, specializing in healthcare technology investments with 20+ years experience.",
    flags: ["australia"]
  },
  {
    name: "Young Jin Kim",
    position: "Chairman & CEO of Handok Pharma",
    image: "/images/investors/investor2.jpg",
    description: "Former CEO of MedTech Ventures, leading investments in breakthrough medical technologies.",
    flags: ["korea"]
  },
  {
    name: "Suk Jin Kim",
    position: "Investor & Handok Pharma",
    image: "/images/investors/investor3.jpg",
    description: "Principal at HealthTech Innovation Fund, focused on AI-driven healthcare solutions.",
    flags: ["korea"]
  },
  {
    name: "A Balasubramanian",
    position: "MD, Aditya Birla Sun Life Asset Management",
    image: "/images/investors/investor4.jpg",
    description: "Board-certified cardiologist and active investor in medical device companies.",
    flags: ["india"]
  },
  {
    name: "Dr. Praveen Kollipara",
    position: "Leading Oncologist & AAPI Member Fort Wayne, Indiana",
    image: "/images/investors/investor5.jpg",
    description: "Managing Partner at Global Health Ventures, specializing in cross-border healthcare investments.",
    flags: ["us"]
  }
];

const businessAdvisors = [
  {
    name: "Dr. Prem Pillay",
    position: "Leading Neuro Surgeon Venture Capitalist",
    image: "/images/advisors/business1.jpg",
    flags: ["us"]
  },
  {
    name: "Dr. Jon Freudmam ",
    position: "Reimbursement Expert Ex-Kaiser & BlueShield",
    image: "/images/advisors/business2.jpg",
    flags: ["india", "us"]
  },
  {
    name: "Umesh Singh",
    position: "Finance Ex - IBM",
    image: "/images/advisors/business3.jpg",
    flags: ["us"]
  },
  {
    name: "Vivek Pendharkar",
    position: "Execution & Operations Ex - Intel",
    image: "/images/advisors/business4.jpg",
    flags: ["us", "korea"]
  },
  {
    name: "Rangarajan Raghavan",
    position: "India / Asia Sales Ex - HCL",
    image: "/images/advisors/business5.jpg",
    flags: ["us", "india"]
  },
  {
    name: "Jessica Richter",
    position: "Regulatory & Quality GM of Veranex",
    image: "/images/advisors/business6.jpg",
    flags: ["us"]
  },
  {
    name: "Ashley Moore",
    position: "PR & Media AM PR, Florida",
    image: "/images/advisors/business7.jpg",
    flags: ["uk"]
  },
  {
    name: "Kang Lim",
    position: "Patent Counsel",
    image: "/images/advisors/business8.jpg",
    flags: ["us"]
  },
  {
    name: "Kristi Furrer",
    position: "Marketing & Tradeshows Golden Impressions, Colorado",
    image: "/images/advisors/business9.jpg",
    flags: ["us"]
  }
];

const indiaTeam = [
  {
    name: "Ganesh Kumar B R",
    position: "General Manager R&D",
    image: "/images/team/india1.jpg",
    description: "Experience: 20+ years",
    flags: ["india"]
  },
  {
    name: "V Dinesh Kumar",
    position: "General Manager Admin / Finance",
    image: "/images/team/india2.jpg",
    description: "Experience: 25+ years ",
    flags: ["india"]
  },
  {
    name: "Senthil Kumar S",
    position: "Principal Architect Embedded Design",
    image: "/images/team/india3.jpg",
    description: "Experience 25+ Years",
    flags: ["india"]
  },
  {
    name: "Babu N",
    position: "Head of Design",
    image: "/images/team/india4.jpg",
    description: "Experience: 25+ years ",
    flags: ["india"]
  },
  {
    name: "Geetha V",
    position: "Senior Manager Materials & Manufacturing",
    image: "/images/team/india5.jpg",
    description: "Experience: 30+ years ",
    flags: ["india"]
  },
  {
    name: "Ravikumar K",
    position: "Senior Engineer Hardware & Service ",
    image: "/images/team/india6.jpg",
    description: "Experience: 25+ years",
    flags: ["india"]
  }
];

// Section Component
function Section({ title, people }) {
  // Responsive row splitting: max 4 per row, but avoid single card rows
  const rows = [];
  let i = 0;
  while (i < people.length) {
    const remaining = people.length - i;
    if (remaining === 1) {
      // If only one card left, move one from previous row if possible
      if (rows.length > 0 && rows[rows.length - 1].length > 2) {
        // Move one from previous row to make two in last row
        const moved = rows[rows.length - 1].pop();
        rows.push([moved, people[i]]);
      } else if (rows.length > 0) {
        // If previous row has only 2, just add to it
        rows[rows.length - 1].push(people[i]);
      } else {
        // If first row, just push single
        rows.push([people[i]]);
      }
      i += 1;
    } else if (remaining === 2) {
      rows.push([people[i], people[i + 1]]);
      i += 2;
    } else if (remaining === 3) {
      rows.push([people[i], people[i + 1], people[i + 2]]);
      i += 3;
    } else {
      rows.push([people[i], people[i + 1], people[i + 2], people[i + 3]]);
      i += 4;
    }
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
            className={`w-full flex flex-wrap justify-center gap-8`}
          >
            {row.map((person, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[260px] max-w-[340px] flex justify-center"
                style={{
                  flexBasis: `calc(${100 / Math.min(row.length, 4)}% - 2rem)`
                }}
              >
                <PersonCard person={person} />
              </div>
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
            ABOUT <span className="text-sky-500">US</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-2">
            <span className="font-bold text-black">HD medical</span> for decades has been focusing with single minded endeavour to deliver the best we can and achieving this has been possible due to the trust instilled by our customers in our service. Trust invoked through constant innovation and improvement of our services.
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
            src="/images/doctor3-aboutus.jpg"
            alt="Doctor 2"
            width={200}
            height={260}
            className="w-[260px] h-[320px] md:w-[260px] md:h-[320px] object-cover rounded-md shadow-md mb-4 md:mb-0"
            priority
          />
          <Image
            src="/images/doctor2-aboutus.jpg"
            alt="Doctor 3"
            width={200}
            height={260}
            className="w-[260px] h-[320px] md:w-[260px] md:h-[320px] object-cover rounded-md shadow-md mb-4 md:mb-8"
            priority
          />
        </div>
      </section>

      {/* Leadership Section */}
      <Section title="Our Leadership" people={leadership} />

      {/* Board Members Section */}
      <Section title="Board Members" people={boardMembers} />

      {/* Medical Advisors Section */}
      <Section title="Medical Advisors" people={medicalAdvisors} />

      {/* Our Current Major Investors Section */}
      <Section title="Our Current Major Investors" people={majorInvestors} />

      {/* Business Advisors & Strategists Section */}
      <Section title="Business Advisors & Strategists" people={businessAdvisors} />

      {/* India Team Members Section */}
      <Section title="India Team Members" people={indiaTeam} />

      {/* Footer Section */}
      <Footer />
    </>
  );
}