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

const boardMembers = Array.from({ length: 6 }).map((_, i) => ({
  name: `Board Member ${i + 1}`,
  position: "Board Member",
  image: `https://randomuser.me/api/portraits/men/${10 + i}.jpg`,
  description: "Experienced professional guiding company strategy and governance.",
  flags: i % 2 === 0 ? ["us"] : ["india"]
}));

const medicalAdvisors = Array.from({ length: 6 }).map((_, i) => ({
  name: `Medical Advisor ${i + 1}`,
  position: "Medical Advisor",
  image: `https://randomuser.me/api/portraits/women/${20 + i}.jpg`,
  description: "Expert in medical research and clinical practice. Provides valuable insights.",
  flags: i % 3 === 0 ? ["us", "india"] : ["uk"]
}));

const majorInvestors = Array.from({ length: 5 }).map((_, i) => ({
  name: `Investor ${i + 1}`,
  position: "Major Investor",
  image: `https://randomuser.me/api/portraits/men/${30 + i}.jpg`,
  description: "Supporting innovation and growth through strategic investments.",
  flags: ["us"]
}));

const businessAdvisors = Array.from({ length: 9 }).map((_, i) => ({
  name: `Advisor ${i + 1}`,
  position: "Business Advisor & Strategist",
  image: `https://randomuser.me/api/portraits/women/${40 + i}.jpg`,
  description: "Guiding business strategy and market expansion.",
  flags: i % 2 === 0 ? ["india"] : ["us"]
}));

const indiaTeam = Array.from({ length: 6 }).map((_, i) => ({
  name: `India Team Member ${i + 1}`,
  position: "India Team",
  image: `https://randomuser.me/api/portraits/men/${50 + i}.jpg`,
  description: "Dedicated team member driving success in India.",
  flags: ["india"]
}));

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