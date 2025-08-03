"use client";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const countryCodes = ["+91", "+1", "+44", "+86", "+81", "+61", "+49", "+33"];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    address: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const svgRef = useRef(null);

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

    const { fullName, email, phone, address } = formData;

    if (fullName.trim().length < 2) {
      setError("Full name must be at least 2 characters.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must be 7–15 digits.");
      return;
    }

    if (address.trim().length < 5) {
      setError("Address must be at least 5 characters.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        address: ""
      });
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Form submission error:", err);
    }
  };

  useEffect(() => {
    const svg = svgRef.current;
    const container = svg?.parentElement;

    if (!svg || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate translation, limited to ±15px
      const maxMove = 15;
      const translateX = Math.max(-maxMove, Math.min(maxMove, -x * 0.03));
      const translateY = Math.max(-maxMove, Math.min(maxMove, -y * 0.03));

      svg.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };

    const handleMouseLeave = () => {
      svg.style.transform = 'translate(0, 0)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex-1 relative">
        {/* SVG Background with Wave Animation */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full opacity-20 wave-animation z-0"
          preserveAspectRatio="xMidYMid meet"
          viewBox="19.802 23.202 160.239 153.51"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <style>{`
            .wave-animation {
              animation: wave 5s ease-in-out infinite;
              transform-origin: center;
              transition: transform 0.2s ease-out;
            }
            @keyframes wave {
              0%, 100% { transform: translateY(0) skewY(0deg); }
              25% { transform: translateY(-8px) skewY(3deg); }
              50% { transform: translateY(0) skewY(0deg); }
              75% { transform: translateY(8px) skewY(-3deg); }
            }
          `}</style>
          <g>
            <path d="m28.925 176.712-.392-.311c.05-.062 5.065-6.313 15.346-11.646 9.478-4.917 25.508-10.046 48.053-6.563 20.113 3.105 38.841-3.632 51.385-18.489 12.389-14.673 16.14-34.363 10.036-52.673-6.589-19.768.068-34.859 6.813-44.038 7.3-9.936 16.279-15.273 16.369-15.326l.254.432c-.09.052-8.992 5.348-16.231 15.205-6.669 9.081-13.25 24.013-6.73 43.569 6.159 18.476 2.373 38.347-10.128 53.153-12.659 14.994-31.556 21.799-51.844 18.661-22.397-3.461-38.314 1.625-47.722 6.5-10.195 5.283-15.159 11.464-15.209 11.526" fill="#6B7280" data-color="1"></path>
            <path d="m28.623 176.673-.414-.279c.027-.041 2.81-4.114 8.787-8.631 5.509-4.162 14.947-9.573 28.621-11.713 7.352-1.15 15.411-1.113 23.954.116 19.077 2.754 36.944-2.771 49.021-15.163 13.929-14.294 18.614-34.624 12.855-55.778-.361-1.33-.736-2.76-1.025-4.197-3.708-18.423 3.651-32.024 10.479-40.189 7.39-8.839 15.77-13.388 15.854-13.433l.236.441c-.083.044-8.391 4.556-15.718 13.325-6.75 8.079-14.027 21.535-10.36 39.757.286 1.423.658 2.843 1.018 4.165 5.807 21.329 1.076 41.835-12.98 56.259-12.189 12.508-30.218 18.085-49.45 15.308-8.495-1.22-16.503-1.26-23.806-.116-13.559 2.121-22.916 7.48-28.377 11.604-5.921 4.466-8.668 8.484-8.695 8.524" fill="#6B7280" data-color="1"></path>
            <path d="m28.32 176.634-.436-.246c.024-.042 2.427-4.241 7.972-9.005 5.11-4.39 14.018-10.183 27.437-12.848 7.152-1.422 15.199-1.554 23.917-.395 19.927 2.675 37.431-2.559 49.287-14.734 13.604-13.973 17.993-32.81 13.046-55.986l-.105-.49c-.273-1.272-.532-2.475-.72-3.698-2.818-18.453 5.016-31.634 12.084-39.442 7.652-8.452 16.086-12.602 16.17-12.643l.219.449c-.084.041-8.443 4.156-16.029 12.542-6.99 7.726-14.737 20.767-11.949 39.018.186 1.209.442 2.404.714 3.67l.105.49c4.985 23.351.552 42.34-13.177 56.44-11.969 12.292-29.624 17.577-49.711 14.881-8.664-1.152-16.656-1.021-23.752.389-13.312 2.645-22.144 8.386-27.208 12.737-5.481 4.707-7.841 8.83-7.864 8.871" fill="#6B7280" data-color="1"></path>
            <path d="m28.016 176.592-.454-.209c.079-.172 8.208-17.269 33.408-23.362 6.97-1.686 15.004-1.99 23.878-.905 20.506 2.539 38.104-2.538 49.553-14.305 13.312-13.686 17.271-30.492 13.235-56.195q-.088-.561-.181-1.116c-.165-1.006-.336-2.045-.442-3.064-1.929-18.482 6.38-31.243 13.69-38.694 7.914-8.065 16.401-11.816 16.486-11.854l.199.459c-.084.036-8.495 3.756-16.341 11.758-7.229 7.372-15.446 19.998-13.537 38.278.104 1.006.267 1.992.438 3.036q.093.556.182 1.119c4.062 25.877.062 42.811-13.371 56.622-11.561 11.882-29.305 17.014-49.973 14.452-8.812-1.075-16.787-.775-23.7.896-13.039 3.153-21.335 9.261-26 13.83-5.054 4.95-7.051 9.212-7.07 9.254" fill="#6B7280" data-color="1"></path>
            <path d="m27.71 176.549-.47-.17c.064-.178 6.698-17.805 31.405-24.872 6.797-1.944 14.819-2.423 23.84-1.417 27.042 3.066 42.017-5.852 49.818-13.875 14.529-14.95 15.926-32.003 13.428-56.404q-.072-.684-.151-1.362c-.107-.921-.218-1.873-.271-2.811-1.04-18.511 7.744-30.852 15.297-37.945 8.176-7.68 16.716-11.031 16.802-11.064l.18.467c-.084.032-8.547 3.356-16.652 10.975-7.469 7.019-16.155 19.229-15.126 37.541.052.922.161 1.866.268 2.78q.081.68.153 1.369c2.513 24.549 1.099 41.713-13.566 56.803-7.88 8.104-22.986 17.117-50.233 14.023-8.957-.998-16.913-.524-23.646 1.401-24.452 6.993-31.013 24.386-31.076 24.561" fill="#6B7280" data-color="1"></path>
            <path d="m27.403 176.505-.482-.129c.049-.183 5.187-18.358 29.402-26.383 6.641-2.2 14.65-2.848 23.801-1.93 22.331 2.303 39.182-2.224 50.083-13.444 15.629-16.095 14.786-33.09 13.62-56.612-.024-.502-.059-1.003-.093-1.502-.059-.872-.12-1.773-.128-2.664-.151-18.54 9.107-30.461 16.901-37.197 8.438-7.292 17.032-10.245 17.118-10.274l.16.475c-.085.028-8.6 2.956-16.965 10.19-7.708 6.666-16.865 18.462-16.715 36.803.008.875.068 1.77.127 2.634.034.503.068 1.006.094 1.511 1.172 23.648 2.02 40.735-13.761 56.985-11.014 11.337-28.004 15.907-50.493 13.595-9.081-.912-17.02-.271-23.593 1.906-23.962 7.94-29.027 25.856-29.076 26.036" fill="#6B7280" data-color="1"></path>
            <path d="m27.094 176.463-.492-.089c.034-.188 3.673-18.928 27.398-27.894 6.488-2.452 14.48-3.273 23.763-2.442 23.287 2.154 39.757-2.106 50.349-13.016 14.079-14.51 13.985-28.342 13.843-49.279a871 871 0 0 1-.029-7.541c.001-.519-.01-1.037-.021-1.555a44 44 0 0 1-.001-2.604c.737-18.568 10.472-30.069 18.508-36.448 8.7-6.906 17.347-9.459 17.434-9.484l.139.48c-.085.024-8.651 2.557-17.276 9.407-7.947 6.312-17.574 17.693-18.304 36.064-.034.856-.017 1.729.001 2.574.011.521.021 1.043.021 1.564-.004 2.612.013 5.121.029 7.537.144 21.062.238 34.976-13.983 49.631-10.703 11.025-27.306 15.331-50.754 13.166-9.203-.823-17.124-.013-23.541 2.411-23.45 8.864-27.051 27.332-27.084 27.518" fill="#6B7280" data-color="1"></path>
            <path d="m26.783 176.419-.498-.049c.019-.193 2.153-19.512 25.391-29.403 6.434-2.738 14.196-3.706 23.724-2.954 16.568 1.354 37.296 1.144 50.615-12.586 13.028-13.437 13.252-25.38 13.592-43.459.08-4.262.163-8.669.415-13.569.027-.525.042-1.052.057-1.579.023-.841.048-1.71.123-2.571 1.625-18.598 11.834-29.679 20.112-35.7 8.963-6.519 17.663-8.673 17.75-8.694l.117.486c-.086.021-8.704 2.157-17.589 8.624-8.187 5.959-18.284 16.926-19.893 35.327a43 43 0 0 0-.121 2.542c-.015.532-.03 1.062-.057 1.591-.252 4.893-.335 9.295-.415 13.553-.342 18.198-.567 30.22-13.732 43.798-13.466 13.881-34.336 14.1-51.015 12.736-9.45-.745-17.131.209-23.488 2.917-22.967 9.774-25.069 28.799-25.088 28.99" fill="#6B7280" data-color="1"></path>
            <path d="m26.471 176.376-.5-.01c.004-.199.628-20.109 23.383-30.911 6.295-2.988 14.041-4.127 23.686-3.468 19 1.344 38.315.803 50.88-12.157 12.27-12.663 12.62-23.233 13.151-39.232.176-5.272.374-11.248 1.05-18.003.053-.526.094-1.056.135-1.588.063-.835.13-1.698.245-2.556 2.515-18.626 13.198-29.287 21.718-34.95 9.226-6.133 17.979-7.888 18.066-7.904l.096.49c-.087.018-8.757 1.758-17.9 7.841-8.428 5.606-18.995 16.158-21.483 34.59-.113.844-.18 1.699-.243 2.527a70 70 0 0 1-.135 1.601c-.675 6.737-.873 12.704-1.048 17.969-.535 16.115-.889 26.763-13.292 39.563-12.708 13.107-32.156 13.66-51.274 12.308-9.554-.646-17.221.472-23.436 3.421-22.48 10.67-23.096 30.272-23.099 30.469" fill="#6B7280" data-color="1"></path>
            <path d="M25.658 176.361c-.003-.051-.263-5.235 2.238-11.785 2.306-6.04 7.498-14.522 19.135-20.634 6.159-3.233 13.893-4.531 23.646-3.98 19.818 1.187 38.644 1.179 51.146-11.728 11.698-12.081 12.075-21.604 12.646-36.018.243-6.138.52-13.094 1.75-21.425.075-.51.14-1.023.204-1.54.106-.849.217-1.725.376-2.598 3.402-18.654 14.561-28.895 23.321-34.2 9.488-5.746 18.295-7.102 18.382-7.114l.074.494c-.088.013-8.81 1.358-18.213 7.058-8.667 5.253-19.705 15.39-23.072 33.853a46 46 0 0 0-.372 2.569c-.065.521-.13 1.038-.206 1.551-1.227 8.306-1.502 15.247-1.744 21.372-.556 14.007-.957 24.127-12.787 36.346-12.651 13.06-31.595 13.07-51.535 11.88-9.655-.553-17.307.733-23.384 3.924-11.488 6.032-16.615 14.394-18.892 20.347-2.469 6.454-2.218 11.551-2.215 11.602z" fill="#6B7280" data-color="1"></path>
            <path d="M25.346 176.356c-.007-.053-.652-5.39 1.41-12.2 1.902-6.283 6.561-15.152 17.954-21.726 6.028-3.478 13.748-4.941 23.606-4.494 19.003.928 38.651 1.883 51.412-11.299 11.256-11.634 11.622-20.805 12.128-33.498.27-6.769.576-14.439 2.463-24.15.097-.496.185-.998.272-1.504.15-.856.306-1.743.508-2.627 4.292-18.683 15.925-28.503 24.927-33.451 9.75-5.359 18.61-6.314 18.698-6.324l.051.498c-.088.009-8.862.958-18.524 6.273-8.907 4.9-20.415 14.622-24.664 33.115a51 51 0 0 0-.502 2.603c-.09.508-.178 1.013-.275 1.513-1.879 9.674-2.185 17.324-2.453 24.074-.511 12.805-.88 22.056-12.269 33.826-12.919 13.345-32.681 12.383-51.795 11.451-9.758-.454-17.39.999-23.333 4.428-11.242 6.485-15.84 15.225-17.718 21.414-2.037 6.714-1.406 11.963-1.399 12.016z" fill="#6B7280" data-color="1"></path>
            <path d="M25.034 176.35c-.042-.219-3.996-21.974 17.354-35.431 5.98-3.769 13.465-5.353 23.566-5.008q1.739.067 3.486.138c17.761.723 36.122 1.469 48.191-11.007 10.91-11.283 11.208-19.757 11.619-31.485.254-7.231.542-15.429 3.168-26.369q.165-.697.324-1.408c.198-.885.404-1.8.657-2.716 5.18-18.711 17.286-28.111 26.53-32.702 10.012-4.973 18.925-5.528 19.014-5.534l.028.5c-.089.005-8.915.559-18.838 5.491-9.146 4.546-21.125 13.854-26.252 32.378a56 56 0 0 0-.652 2.693q-.159.714-.325 1.415c-2.614 10.891-2.901 19.062-3.154 26.27-.415 11.84-.716 20.394-11.76 31.815-12.225 12.637-30.704 11.887-48.57 11.159q-1.748-.072-3.484-.138c-9.993-.359-17.39 1.218-23.281 4.932-21.053 13.27-17.171 34.696-17.129 34.911z" fill="#6B7280" data-color="1"></path>
            <path d="M24.724 176.341c-.058-.225-5.556-22.611 15.342-36.933 5.854-4.012 13.335-5.764 23.525-5.522 2.07.055 4.159.133 6.254.212 16.788.631 34.148 1.286 45.689-10.652 10.638-11.008 10.844-18.912 11.128-29.852.187-7.199.42-16.159 3.854-28.208q.177-.628.353-1.269c.255-.928.518-1.887.829-2.85 6.068-18.738 18.649-27.719 28.135-31.952 10.274-4.585 19.239-4.742 19.329-4.743l.006.5c-.089.001-8.967.159-19.149 4.708-9.386 4.193-21.836 13.087-27.844 31.642-.309.952-.57 1.905-.823 2.828q-.175.643-.354 1.272c-3.417 11.988-3.64 20.54-3.835 28.085-.288 11.052-.495 19.038-11.269 30.186-11.696 12.099-29.169 11.439-46.067 10.805-2.093-.079-4.18-.158-6.248-.212-10.086-.244-17.468 1.485-23.231 5.435-20.602 14.119-15.197 36.175-15.14 36.396z" fill="#6B7280" data-color="1"></path>
            <path d="M24.415 176.331c-.074-.231-7.126-23.256 13.331-38.435 5.729-4.25 13.186-6.163 23.485-6.036 2.796.041 5.687.151 8.482.259 16.028.611 32.602 1.246 43.727-10.27 10.424-10.792 10.521-18.226 10.657-28.514.099-7.438.221-16.693 4.521-29.751l.326-1.002a78 78 0 0 1 1.057-3.11c6.955-18.767 20.01-27.326 29.737-31.202 10.534-4.199 19.552-3.956 19.644-3.953l-.016.5c-.093.001-9.021-.241-19.462 3.925-9.626 3.84-22.547 12.318-29.435 30.904a79 79 0 0 0-1.05 3.091l-.327 1.004c-4.276 12.984-4.398 22.198-4.496 29.602-.138 10.403-.236 17.919-10.798 28.854-11.28 11.674-27.968 11.039-44.105 10.421-2.792-.106-5.68-.217-8.471-.258-10.173-.132-17.544 1.757-23.18 5.938-20.164 14.961-13.225 37.652-13.152 37.88z" fill="#6B7280" data-color="1"></path>
            <path d="M24.105 176.32c-.089-.237-8.707-23.906 11.319-39.935 5.582-4.468 12.991-6.551 23.308-6.551h.136c3.384.011 6.906.156 10.312.298 15.421.64 31.37 1.3 42.163-9.88 10.257-10.625 10.237-17.666 10.21-27.411-.021-7.609-.048-17.079 5.166-31.057l.165-.444a96 96 0 0 1 1.418-3.662c7.843-18.795 21.372-26.935 31.341-30.453 10.796-3.811 19.868-3.172 19.96-3.162l-.039.498c-.089-.007-9.071-.641-19.774 3.143-9.866 3.486-23.258 11.551-31.026 30.168a95 95 0 0 0-1.41 3.643l-.165.444c-5.183 13.893-5.156 23.312-5.135 30.881.027 9.863.048 16.989-10.351 27.761-10.948 11.341-27.012 10.677-42.543 10.031-3.401-.141-6.918-.286-10.292-.297h-.143c-10.331 0-17.424 1.988-22.987 6.441C16 152.574 24.485 175.91 24.573 176.145z" fill="#6B7280" data-color="1"></path>
            <path d="M23.796 176.308c-.105-.243-10.296-24.558 9.308-41.433 5.562-4.787 12.779-6.966 23.402-7.064 3.871-.036 7.928.155 11.852.338 14.929.696 30.366 1.415 40.889-9.491 10.129-10.499 9.983-17.211 9.781-26.501-.168-7.73-.377-17.352 5.791-32.171.532-1.28 1.117-2.663 1.784-4.101 8.73-18.822 22.733-26.542 32.943-29.704 11.058-3.423 20.181-2.382 20.274-2.371l-.061.496c-.088-.01-9.126-1.039-20.086 2.359-10.106 3.134-23.969 10.783-32.618 29.431a111 111 0 0 0-1.776 4.081c-6.126 14.723-5.919 24.285-5.752 31.969.196 9.057.353 16.21-9.922 26.859-10.68 11.068-26.231 10.344-41.271 9.644-3.917-.182-7.966-.372-11.824-.338-10.497.098-17.615 2.239-23.081 6.943-19.329 16.638-9.278 40.615-9.175 40.855z" fill="#6B7280" data-color="1"></path>
            <path d="M23.487 176.295c-.121-.25-11.897-25.213 7.297-42.931 9.359-8.64 22.551-7.938 36.519-7.193 14.525.771 29.546 1.573 39.849-9.11 10.034-10.406 9.742-17.176 9.373-25.746-.369-8.544-.827-19.177 8.38-37.223 9.618-18.852 24.095-26.15 34.546-28.954 11.322-3.038 20.501-1.596 20.59-1.582l-.08.494c-.09-.015-9.178-1.438-20.4 1.576-10.347 2.779-24.68 10.015-34.21 28.692-9.147 17.93-8.692 28.489-8.326 36.974.375 8.69.671 15.555-9.513 26.116-10.46 10.848-25.599 10.041-40.234 9.262-13.856-.736-26.947-1.435-36.153 7.062-18.917 17.463-7.305 42.099-7.186 42.345z" fill="#6B7280" data-color="1"></path>
          </g>
        </svg>
        <div className="relative z-10">
          <div className="text-center py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900">Contact Us</h1>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl font-normal text-gray-800">
                Get in touch with us. We&apos;d love to hear from you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-medium mb-6 text-gray-900">Get In Touch</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-sm sm:text-base">
                  Thank you for your message. We&apos;ll get back to you soon!
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-sm sm:text-base">{error}</div>
              )}
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="block w-full pb-1 pt-3 text-gray-900 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none peer transition-all duration-200 text-sm sm:text-base"
                      required
                      placeholder=" "
                    />
                    <label
                      htmlFor="fullName"
                      className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Full Name
                    </label>
                  </div>
                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pb-1 pt-3 text-gray-900 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none peer transition-all duration-200 text-sm sm:text-base"
                      required
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Email
                    </label>
                  </div>
                  {/* Phone Number with Country Code */}
                  <div className="relative">
                    <div className="flex items-center border-b border-gray-300">
                      <div className="flex items-center">
                        <Globe className="text-gray-500 mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="bg-transparent focus:outline-none py-1 pr-2 text-gray-700 transition-all duration-200 text-sm sm:text-base"
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
                        className="block w-full pb-1 pt-3 text-gray-900 bg-transparent focus:outline-none ml-2 transition-all duration-200 text-sm sm:text-base"
                        required
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="block w-full pb-1 pt-3 text-gray-900 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none peer transition-all duration-200 text-sm sm:text-base"
                      required
                      placeholder=" "
                    />
                    <label
                      htmlFor="address"
                      className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Address
                    </label>
                  </div>
                </div>
                {/* Submit Button */}
                <div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md text-sm sm:text-base"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}