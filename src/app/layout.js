import { Geist } from "next/font/google";
import "./globals.css";

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
            {children}
      </body>
    </html>
  );
}
