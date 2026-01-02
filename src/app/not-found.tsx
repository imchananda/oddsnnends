import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="font-display font-bold text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 font-medium rounded-xl bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark hover:opacity-90 transition-all duration-200"
        >
          Go Home
        </Link>
        <Link
          href="/products"
          className="px-6 py-3 font-medium rounded-xl border-2 border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary-light dark:hover:border-primary-dark transition-all duration-200"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
