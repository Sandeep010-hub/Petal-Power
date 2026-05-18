'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-brand-cream text-primary-dark p-6 text-center">
      <h2 className="font-display font-black text-6xl md:text-8xl mb-6">Oops!</h2>
      <p className="text-lg md:text-xl font-light mb-10 max-w-lg">
        Something went wrong while rendering this page. We're working on getting it fixed.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-primary-dark text-pure-white px-8 py-4 rounded-full font-medium hover:bg-accent-green transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="bg-transparent border-2 border-primary-dark text-primary-dark px-8 py-4 rounded-full font-medium hover:bg-primary-dark hover:text-pure-white transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
