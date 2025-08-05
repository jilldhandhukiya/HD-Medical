"use client"
import Image from 'next/image';
import { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';

const leadershipData = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Chief Executive Officer (CEO)",
    image:
      "https://static.wixstatic.com/media/c837a6_acd7e2e6bf8e494bae117621f149ecc0~mv2.jpg/v1/crop/x_2662,y_45,w_4328,h_4618/fill/w_521,h_555,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock_2152526235-edited.jpg"
  },
  {
    id: 2,
    name: "Robert Kim",
    title: "Chief Operations Officer (COO)",
    image:
      "https://static.wixstatic.com/media/c837a6_f48b5b5409d7409389337a2c34a6622d~mv2.jpg/v1/crop/x_1657,y_74,w_3040,h_3244/fill/w_521,h_555,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock_2437746943-edited.jpg"
  },
  {
    id: 3,
    name: "Thomas Bergstrom",
    title: "Vice President of Global Sales",
    image:
      "https://static.wixstatic.com/media/c837a6_70dc50f9a8224d00877e74aa39a21a84~mv2.jpg/v1/crop/x_910,y_0,w_3419,h_3648/fill/w_521,h_555,fp_0.50_0.26,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock_1437938108-edited.jpg"
  },
  {
    id: 4,
    name: "Michael Okonkwo",
    title: "Chief Financial Officer (CFO)",
    image:
      "https://static.wixstatic.com/media/c837a6_88c79ec6a33a4143b8fe15ccbb8e3d42~mv2.jpg/v1/crop/x_2282,y_151,w_3417,h_3646/fill/w_521,h_555,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock_2215172173-edited-2.jpg"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    title: "Director of Sustainability",
    image:
      "https://static.wixstatic.com/media/c837a6_13be6ac4f26e40bb85e7f8292bbb28f8~mv2.jpg/v1/crop/x_1441,y_289,w_2906,h_3100/fill/w_521,h_555,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock_1786194014-edited.jpg"
  }
];

const advisoryBoardData = [
  {
    id: 1,
    name: "Dr. Priya Menon",
    title: "Cardiology Advisor",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=500&facepad=2"
  },
  {
    id: 2,
    name: "Dr. James Lee",
    title: "Clinical Research Expert",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=500&facepad=2"
  },
  {
    id: 3,
    name: "Dr. Maria Gomez",
    title: "Medical Device Specialist",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=500&facepad=2"
  },
  {
    id: 4,
    name: "Dr. Ahmed Khan",
    title: "Healthcare Policy Advisor",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=500&facepad=2"
  }
];

const investorsMentorsData = [
  {
    id: 1,
    name: "Jessica Turner",
    title: "Lead Investor",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=500&facepad=2"
  },
  {
    id: 2,
    name: "David Patel",
    title: "Mentor & Advisor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=400&h=500&facepad=2"
  },
  {
    id: 3,
    name: "Linda Wu",
    title: "Investor",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=500&facepad=2"
  }
];

// Card overlay height is fixed for all cards for consistent appearance.
function LeaderCard({ leader }) {
  return (
    <div className="w-full max-w-xs mx-auto bg-white border-[2px] border-gray-400 rounded-md overflow-hidden flex flex-col" style={{ boxSizing: 'border-box' }}>
      <div className="w-full aspect-[4/5] relative border-b-[2px] border-gray-400">
        <Image
          src={leader.image}
          alt={`${leader.name} - ${leader.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="bg-gray-800 px-4 py-3">
        <h3 className="text-white text-2xl font-bold leading-tight">{leader.name}</h3>
      </div>
      <div className="px-4 py-3 border-t border-gray-400">
        <p className="text-gray-700 text-base">{leader.title}</p>
      </div>
    </div>
  );
}

// FAQ Data
const faqData = [
  {
    question: "What is an FAQ section?",
    answer:
      'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
  },
  {
    question: "Why do FAQs matter?",
    answer:
      "FAQs help visitors find answers quickly, reduce support requests, and build trust by providing transparent information.",
  },
  {
    question: "Where can I add my FAQs?",
    answer:
      "You can add FAQs anywhere on your site where visitors may have questions, such as product pages, contact pages, or a dedicated FAQ section.",
  },
];

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white w-full px-0 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-center text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-wide">
          Frequently asked questions
        </h1>
        {/* Single Tab */}
        <div className="flex gap-8 mb-8 px-4 md:px-0">
          <button className="text-sky-600 font-semibold border-b-2 border-sky-600 pb-2 cursor-default" disabled>
            General
          </button>
        </div>
        <div className="w-full mx-auto">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b border-blue-100">
              <button
                className={`w-full text-left py-6 px-4 flex justify-between items-center focus:outline-none transition-colors ${
                  openIndex === idx ? "font-semibold text-sky-600 bg-blue-50" : "text-gray-900"
                }`}
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-xl md:text-2xl">{faq.question}</span>
                <span
                  className={`ml-2 text-2xl transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96 py-4 px-4 bg-blue-50" : "max-h-0"
                }`}
              >
                {openIndex === idx && (
                  <p className="text-gray-700 text-lg">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
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
  );
}

export default function AboutUs() {
  return (
    <>
    <Header />  
    <br />
    <br />
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section
        className="w-full bg-white px-2 py-8 md:px-10 lg:px-32"
        aria-labelledby="about-us-heading"
      >
    
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-0 lg:justify-between max-w-6xl mx-auto">
          <div className="w-full lg:w-1/3 flex-shrink-0 mb-4 lg:mb-0 flex items-center justify-center lg:justify-start">
            <span className="text-sky-500 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight text-center lg:text-left">
              Our Vision
            </span>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <h2 className="text-sky-500 text-base sm:text-lg font-semibold mb-2 text-center lg:text-left">
              What Sets Us Apart
            </h2>
            <p className="text-[1rem] sm:text-base text-gray-800 text-center lg:text-left">
              This is a space to share more about the business: who&apos;s behind
              it, what it does and what this site has to offer. It&apos;s an
              opportunity to tell the story behind the business or describe a
              special service or product it offers. You can use this section to
              share the company history or
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex items-center">
            <p className="text-[1rem] sm:text-base text-gray-800 text-center lg:text-left">
              highlight a particular feature that sets it apart from competitors.
              Let the writing speak for itself. Keep a consistent tone and voice
              throughout the website to stay true to the brand image and give
              visitors a taste of the company&apos;s values and personality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white w-full px-4 py-10 md:px-8 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-[48px] overflow-hidden shadow-lg w-full max-w-md relative">
            <Image
              src="https://static.wixstatic.com/media/11062b_35dd5ca259d74a8392cee0e294d361a7~mv2.jpeg/v1/fill/w_860,h_471,fp_0.59_0.30,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Doctor.jpeg"
              alt="Doctor checking patient health"
              width={400}
              height={320}
              className="object-cover w-full h-64 md:h-80"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-sky-500 text-5xl md:text-6xl font-bold mb-4 font-serif leading-tight">
            Our Mission
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-6">
            <p className="text-base text-gray-800 flex-1">
              This is the space to introduce visitors to the business or brand.
              Briefly explain who&apos;s behind it, what it does and what makes it unique.
              Share its core values and what this site has to offer.
            </p>
            <p className="text-base text-gray-800 flex-1">
              This is the space to introduce visitors to the business or brand.
              Briefly explain who&apos;s behind it, what it does and what makes it unique.
              Share its core values and what this site has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white w-full px-4 py-16 md:px-8 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-wide">
            Our Leadership
          </h1>
        </div>
        <div className="hidden md:block max-w-[1100px] mx-auto">
          <div className="flex justify-between mb-12 gap-6">
            {leadershipData.slice(0, 3).map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
          <div className="flex justify-center gap-[8%]">
            {leadershipData.slice(3, 5).map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-8 items-center">
          {leadershipData.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </section>

      {/* Medical Advisory Board Members Section */}
      <section className="bg-white w-full px-4 py-16 md:px-8 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-wide">
            Medical Advisory Board Members
          </h1>
        </div>
        <div className="hidden md:block max-w-[900px] mx-auto">
          <div className="flex justify-between gap-6">
            {advisoryBoardData.map((member) => (
              <LeaderCard key={member.id} leader={member} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-8 items-center">
          {advisoryBoardData.map((member) => (
            <LeaderCard key={member.id} leader={member} />
          ))}
        </div>
      </section>

      {/* Investors & Mentors Section */}
      <section className="bg-white w-full px-4 py-16 md:px-8 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-wide">
            Investors & Mentors
          </h1>
        </div>
        <div className="hidden md:block max-w-[700px] mx-auto">
          <div className="flex justify-between gap-6">
            {investorsMentorsData.map((person) => (
              <LeaderCard key={person.id} leader={person} />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-8 items-center">
          {investorsMentorsData.map((person) => (
            <LeaderCard key={person.id} leader={person} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
}