"use client";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-border-light dark:border-border-dark rounded-full" />
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-light dark:border-t-primary-dark rounded-full animate-spin" />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-text-muted-light dark:text-text-muted-dark font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}