import { Geist } from "next/font/google";
import "./globals.css";
import Header from './components/Header';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "HD Medical",
  description: "Compassionate care, exceptional results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body className={`${geist.className} m-0 p-0 font-sans bg-white`}>
        <div className="relative w-full min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#22394d] via-[#5e768d] to-[#e5eaee]"></div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
