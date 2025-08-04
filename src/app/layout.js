import { Geist } from "next/font/google";
import "./globals.css"; 

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: 'HD Medical Group',
  description: 'AI‑powered cardiovascular diagnostics and detection at the point of care.',
  openGraph: {
    title: 'HD Medical Group',
    description: 'Global leader in AI-enabled cardiovascular health innovation.',
    url: 'https://hdmedicalgroup.com',
    siteName: 'HD Medical Group',
    images: [
      {
        url: 'https://hdmedicalgroup.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'HD Medical Group image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HD Medical Group',
    description: 'Next-gen cardiovascular diagnostics & AI-powered health tech.',
    images: ['https://hdmedicalgroup.com/images/logo.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body className={`${geist.className} font-sans bg-white overflow-x-hidden`}>
            {children}
      </body>
    </html>
  );
}
