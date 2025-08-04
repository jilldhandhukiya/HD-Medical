// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">Sorry, we couldn’t find that page.</p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
