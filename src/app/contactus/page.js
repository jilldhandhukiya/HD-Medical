"use client";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const countryCodes = [
  "+1",   // USA, Canada
  "+7",   // Russia, Kazakhstan
  "+20",  // Egypt
  "+27",  // South Africa
  "+30",  // Greece
  "+31",  // Netherlands
  "+32",  // Belgium
  "+33",  // France
  "+34",  // Spain
  "+36",  // Hungary
  "+39",  // Italy
  "+40",  // Romania
  "+41",  // Switzerland
  "+43",  // Austria
  "+44",  // United Kingdom
  "+45",  // Denmark
  "+46",  // Sweden
  "+47",  // Norway
  "+48",  // Poland
  "+49",  // Germany
  "+51",  // Peru
  "+52",  // Mexico
  "+53",  // Cuba
  "+54",  // Argentina
  "+55",  // Brazil
  "+56",  // Chile
  "+57",  // Colombia
  "+58",  // Venezuela
  "+60",  // Malaysia
  "+61",  // Australia
  "+62",  // Indonesia
  "+63",  // Philippines
  "+64",  // New Zealand
  "+65",  // Singapore
  "+66",  // Thailand
  "+81",  // Japan
  "+82",  // South Korea
  "+84",  // Vietnam
  "+86",  // China
  "+90",  // Turkey
  "+91",  // India
  "+92",  // Pakistan
  "+93",  // Afghanistan
  "+94",  // Sri Lanka
  "+95",  // Myanmar
  "+98",  // Iran
  "+211", // South Sudan
  "+212", // Morocco
  "+213", // Algeria
  "+216", // Tunisia
  "+218", // Libya
  "+220", // Gambia
  "+221", // Senegal
  "+222", // Mauritania
  "+223", // Mali
  "+224", // Guinea
  "+225", // Ivory Coast
  "+226", // Burkina Faso
  "+227", // Niger
  "+228", // Togo
  "+229", // Benin
  "+230", // Mauritius
  "+231", // Liberia
  "+232", // Sierra Leone
  "+233", // Ghana
  "+234", // Nigeria
  "+235", // Chad
  "+236", // Central African Republic
  "+237", // Cameroon
  "+238", // Cape Verde
  "+239", // Sao Tome and Principe
  "+240", // Equatorial Guinea
  "+241", // Gabon
  "+242", // Republic of the Congo
  "+243", // Democratic Republic of the Congo
  "+244", // Angola
  "+245", // Guinea-Bissau
  "+246", // British Indian Ocean Territory
  "+248", // Seychelles
  "+249", // Sudan
  "+250", // Rwanda
  "+251", // Ethiopia
  "+252", // Somalia
  "+253", // Djibouti
  "+254", // Kenya
  "+255", // Tanzania
  "+256", // Uganda
  "+257", // Burundi
  "+258", // Mozambique
  "+260", // Zambia
  "+261", // Madagascar
  "+262", // Reunion, Mayotte
  "+263", // Zimbabwe
  "+264", // Namibia
  "+265", // Malawi
  "+266", // Lesotho
  "+267", // Botswana
  "+268", // Eswatini
  "+269", // Comoros
  "+290", // Saint Helena
  "+291", // Eritrea
  "+297", // Aruba
  "+298", // Faroe Islands
  "+299", // Greenland
  "+350", // Gibraltar
  "+351", // Portugal
  "+352", // Luxembourg
  "+353", // Ireland
  "+354", // Iceland
  "+355", // Albania
  "+356", // Malta
  "+357", // Cyprus
  "+358", // Finland
  "+359", // Bulgaria
  "+370", // Lithuania
  "+371", // Latvia
  "+372", // Estonia
  "+373", // Moldova
  "+374", // Armenia
  "+375", // Belarus
  "+376", // Andorra
  "+377", // Monaco
  "+378", // San Marino
  "+379", // Vatican City
  "+380", // Ukraine
  "+381", // Serbia
  "+382", // Montenegro
  "+383", // Kosovo
  "+385", // Croatia
  "+386", // Slovenia
  "+387", // Bosnia and Herzegovina
  "+389", // North Macedonia
  "+420", // Czech Republic
  "+421", // Slovakia
  "+423", // Liechtenstein
  "+500", // Falkland Islands
  "+501", // Belize
  "+502", // Guatemala
  "+503", // El Salvador
  "+504", // Honduras
  "+505", // Nicaragua
  "+506", // Costa Rica
  "+507", // Panama
  "+508", // Saint Pierre and Miquelon
  "+509", // Haiti
  "+590", // Guadeloupe, Saint Barthelemy, Saint Martin
  "+591", // Bolivia
  "+592", // Guyana
  "+593", // Ecuador
  "+594", // French Guiana
  "+595", // Paraguay
  "+596", // Martinique
  "+597", // Suriname
  "+598", // Uruguay
  "+599", // Caribbean Netherlands, Curacao, Sint Maarten
  "+670", // East Timor
  "+672", // Australian External Territories
  "+673", // Brunei
  "+674", // Nauru
  "+675", // Papua New Guinea
  "+676", // Tonga
  "+677", // Solomon Islands
  "+678", // Vanuatu
  "+679", // Fiji
  "+680", // Palau
  "+681", // Wallis and Futuna
  "+682", // Cook Islands
  "+683", // Niue
  "+685", // Samoa
  "+686", // Kiribati
  "+687", // New Caledonia
  "+688", // Tuvalu
  "+689", // French Polynesia
  "+690", // Tokelau
  "+691", // Micronesia
  "+692", // Marshall Islands
  "+850", // North Korea
  "+852", // Hong Kong
  "+853", // Macau
  "+855", // Cambodia
  "+856", // Laos
  "+880", // Bangladesh
  "+886", // Taiwan
  "+960", // Maldives
  "+961", // Lebanon
  "+962", // Jordan
  "+963", // Syria
  "+964", // Iraq
  "+965", // Kuwait
  "+966", // Saudi Arabia
  "+967", // Yemen
  "+968", // Oman
  "+970", // Palestine
  "+971", // United Arab Emirates
  "+972", // Israel
  "+973", // Bahrain
  "+974", // Qatar
  "+975", // Bhutan
  "+976", // Mongolia
  "+977", // Nepal
  "+992", // Tajikistan
  "+993", // Turkmenistan
  "+994", // Azerbaijan
  "+995", // Georgia
  "+996", // Kyrgyzstan
  "+998"  // Uzbekistan
];
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Refs for wave animations (expanded for more waves)
  const topRightSvgRef = useRef(null);
  const bottomLeftSvgRef = useRef(null);
  const topLeftSvgRef = useRef(null);
  const bottomRightSvgRef = useRef(null);
  const centerTopSvgRef = useRef(null);
  const centerBottomSvgRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setError("");
    setSubmitted(false);
    setIsLoading(true);

    const { fullName, email, phone, message } = formData;

    // Validation
    if (fullName.trim().length < 2) {
      setError("Full name must be at least 2 characters.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must be 7–15 digits.");
      setIsLoading(false);
      return;
    }

    if (message.trim().length < 4) {
      setError("Message must be at least 4 characters.");
      setIsLoading(false);
      return;
    }

    try {
      // Create form data for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      
      // Format phone number to prevent formula parsing issues
      const phoneFormatted = `${formData.countryCode.replace('+', '')} ${formData.phone}`;
      formDataToSend.append('phone', phoneFormatted);
      formDataToSend.append('message', formData.message);

      // Add a flag to indicate this is phone data (helps backend handle formatting)
      formDataToSend.append('phoneRaw', `${formData.countryCode} ${formData.phone}`);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFbu097uUKxDjRcGEZN_0BaGPwZncGPLnJWr98V2sbKJdXgQwPEAmeQxIhi_SH0Go75g/exec",
        {
          method: "POST",
          body: formDataToSend
        }
      );

      const result = await response.text();
      console.log('Response:', result);

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: ""
      });

    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to submit form. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  // Mouse tracking for wave animations (expanded for all waves)
  useEffect(() => {
    const svgs = [
      { svg: topRightSvgRef.current, container: topRightSvgRef.current?.parentElement },
      { svg: bottomLeftSvgRef.current, container: bottomLeftSvgRef.current?.parentElement },
      { svg: topLeftSvgRef.current, container: topLeftSvgRef.current?.parentElement },
      { svg: bottomRightSvgRef.current, container: bottomRightSvgRef.current?.parentElement },
      { svg: centerTopSvgRef.current, container: centerTopSvgRef.current?.parentElement },
      { svg: centerBottomSvgRef.current, container: centerBottomSvgRef.current?.parentElement },
    ];

    const handleMouseMove = (e, svg, container) => {
      if (!svg || !container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const maxMove = 15;
      const translateX = Math.max(-maxMove, Math.min(maxMove, -x * 0.03));
      const translateY = Math.max(-maxMove, Math.min(maxMove, -y * 0.03));

      svg.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const handleMouseLeave = (svg) => {
      if (svg) svg.style.transform = 'translate(0, 0)';
    };

    svgs.forEach(({ svg, container }) => {
      if (!svg || !container) return;
      const moveHandler = (e) => handleMouseMove(e, svg, container);
      container.addEventListener('mousemove', moveHandler);
      container.addEventListener('mouseleave', () => handleMouseLeave(svg));
      return () => {
        container.removeEventListener('mousemove', moveHandler);
        container.removeEventListener('mouseleave', () => handleMouseLeave(svg));
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">
      <Header />

      {/* Main Content Area with Waves - Only above footer */}
      <div className="relative overflow-hidden">
        {/* Wave Vector Background (contained within main content area) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right SVG Wave Vector - Original */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20 wave-animation z-0 md:w-1/3 md:h-1/3">
            <Image
              ref={topRightSvgRef}
              src="/images/lines.svg"
              alt="Top Right Wave Background"
              className="filter-dark-gray"
              width={1500}
              height={1500}
            />
          </div>

          {/* Bottom-left SVG Wave Vector - Original (moved up from bottom) */}
          <div className="absolute bottom-20 left-0 w-1/2 h-1/2 opacity-20 wave-animation z-0 md:w-1/3 md:h-1/3">
            <Image
              ref={bottomLeftSvgRef}
              src="/images/lines.svg"
              alt="Bottom Left Wave Background"
              className="filter-dark-gray"
              width={1500}
              height={1500}
            />
          </div>

          {/* Top-left SVG Wave Vector - New */}
          <div className="absolute top-0 left-0 w-2/5 h-2/5 opacity-15 wave-animation z-0 md:w-1/4 md:h-1/4">
            <Image
              ref={topLeftSvgRef}
              src="/images/lines.svg"
              alt="Top Left Wave Background"
              className="filter-dark-gray rotate-90"
              width={1200}
              height={1200}
            />
          </div>

          {/* Bottom-right SVG Wave Vector - New (moved up from bottom) */}
          <div className="absolute bottom-20 right-0 w-2/5 h-2/5 opacity-15 wave-animation z-0 md:w-1/4 md:h-1/4">
            <Image
              ref={bottomRightSvgRef}
              src="/images/lines.svg"
              alt="Bottom Right Wave Background"
              className="filter-dark-gray rotate-180"
              width={1200}
              height={1200}
            />
          </div>

          {/* Center-top SVG Wave Vector - New Big Wave */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/5 h-2/3 opacity-12 wave-animation z-0 md:w-2/5 md:h-1/2">
            <Image
              ref={centerTopSvgRef}
              src="/images/lines.svg"
              alt="Center Top Wave Background"
              className="filter-dark-gray rotate-45"
              width={1800}
              height={1800}
            />
          </div>

          {/* Center-bottom SVG Wave Vector - New Big Wave (moved up from bottom) */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-3/5 h-2/3 opacity-10 wave-animation z-0 md:w-2/5 md:h-1/2">
            <Image
              ref={centerBottomSvgRef}
              src="/images/lines.svg"
              alt="Center Bottom Wave Background"
              className="filter-dark-gray rotate-[135deg]"
              width={1800}
              height={1800}
            />
          </div>

          {/* Additional smaller decorative waves */}
          <div className="absolute top-1/4 right-1/4 w-1/6 h-1/6 opacity-8 wave-animation z-0">
            <Image
              src="/images/lines.svg"
              alt="Small Wave 1"
              className="filter-dark-gray rotate-[60deg]"
              width={400}
              height={400}
            />
          </div>

          <div className="absolute bottom-40 left-1/4 w-1/6 h-1/6 opacity-8 wave-animation z-0">
            <Image
              src="/images/lines.svg"
              alt="Small Wave 2"
              className="filter-dark-gray rotate-[120deg]"
              width={400}
              height={400}
            />
          </div>

          <div className="absolute top-1/2 right-1/6 w-1/8 h-1/8 opacity-6 wave-animation z-0">
            <Image
              src="/images/lines.svg"
              alt="Small Wave 3"
              className="filter-dark-gray rotate-[30deg]"
              width={300}
              height={300}
            />
          </div>

          <div className="absolute top-2/3 left-1/6 w-1/8 h-1/8 opacity-6 wave-animation z-0">
            <Image
              src="/images/lines.svg"
              alt="Small Wave 4"
              className="filter-dark-gray rotate-[210deg]"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* SVG Filter for Dark Gray Fill (same as landing page) */}
        <svg className="hidden">
          <defs>
            <filter id="darkGrayFilter">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.4196
                        0 0 0 0 0.4471
                        0 0 0 0 0.5020
                        0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>

        {/* CSS for wave animations (same as landing page) */}
        <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0) skewY(0deg); }
            25% { transform: translateY(-8px) skewY(3deg); }
            50% { transform: translateY(0) skewY(0deg); }
            75% { transform: translateY(8px) skewY(-3deg); }
          }

          .wave-animation {
            animation: wave 5s ease-in-out infinite;
            transform-origin: center;
            transition: transform 0.2s ease-out;
          }

          .filter-dark-gray {
            filter: url(#darkGrayFilter);
          }
        `}</style>

        <main className="relative z-10 pt-24 pb-12">
          {/* Header Section */}
          <div className="text-center mb-16 px-4">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us. We&apos;d love to hear from you.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12 relative overflow-hidden">
              {/* Form Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-900">Get In Touch</h2>
                
                {submitted && (
                  <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}
                
                {error && (
                  <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                    {error}
                  </div>
                )}

                <div className="space-y-8">
                  {/* Row 1: Full Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="block w-full pb-2 pt-4 text-gray-900 border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-500 focus:outline-none peer transition-all duration-200 text-lg"
                        required
                        placeholder=" "
                        disabled={isLoading}
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
                      >
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pb-2 pt-4 text-gray-900 border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-500 focus:outline-none peer transition-all duration-200 text-lg"
                        required
                        placeholder=" "
                        disabled={isLoading}
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
                      >
                        Email
                      </label>
                    </div>
                  </div>

                  {/* Row 2: Phone Number */}
                  <div className="relative">
                    <div className="flex items-end border-b-2 border-gray-200 focus-within:border-blue-500 transition-all duration-200">
                      <div className="flex items-center pb-2 pt-4">
                        <Globe className="text-gray-500 mr-3 w-5 h-5" />
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="bg-transparent focus:outline-none py-1 pr-3 text-gray-700 text-lg border-0"
                          disabled={isLoading}
                        >
                          {countryCodes.map((code) => (
                            <option key={code} value={code}>
                              {code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full pb-2 pt-4 text-gray-900 bg-transparent focus:outline-none ml-2 text-lg border-0"
                        required
                        placeholder=" "
                        disabled={isLoading}
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute text-gray-500 duration-300 transform top-3 z-10 origin-[0] text-lg ${
                          formData.phone ? 'scale-75 -translate-y-6' : 'scale-100 translate-y-0'
                        }`}
                        style={{ left: '120px' }}
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="block w-full pb-2 pt-4 text-gray-900 border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-500 focus:outline-none peer transition-all duration-200 text-lg resize-none"
                      required
                      placeholder=" "
                      disabled={isLoading}
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
                    >
                      Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`w-full py-4 rounded-full text-white text-lg font-medium transition-all duration-300 shadow-lg ${
                        isLoading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transform hover:-translate-y-1"
                      }`}
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer - Clean area without waves */}
      <Footer />
    </div>
  );
}
