"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">😅</div>
      <h1 className="font-display font-bold text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
        Something Went Wrong
      </h1>
      <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 max-w-md">
        We encountered an unexpected error. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 font-medium rounded-xl bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark hover:opacity-90 transition-all duration-200"
      >
        Try Again
      </button>
    </div>
  );
}