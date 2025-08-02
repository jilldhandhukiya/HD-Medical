import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 py-8 min-h-[calc(100vh-80px)] gap-8">
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
              <div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-gray-600 mt-1">Years of Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-gray-600 mt-1">Patient Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-gray-600 mt-1">Patients Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600 mt-1">Medical Specialties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
