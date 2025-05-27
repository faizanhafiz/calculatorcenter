import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5 py-16 bg-gray-100 text-gray-800 overflow-x-hidden">
      {/* Logo */}
      <header className="absolute top-0 left-0 p-5">
        <Link href="/" aria-label="zenicalculator Home" className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m-3 0v10m-6-6h12m-6-6V3m0 18v-2m-8-2H3m18 0h-2M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
          </svg>
          <span className="text-2xl font-bold text-blue-500">
            Calculator<span className="text-red-500">.</span>Center
          </span>
        </Link>
      </header>

      {/* Realistic Calculator Background */}
      <div
        className="absolute inset-0 bg-[url('/images/calculator-img.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"
      ></div>

      {/* Gradient overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent z-0"></div>

      {/* Main Content */}
      <main
        className="flex flex-col items-center justify-center text-center max-w-4xl z-10 relative bg-white/80 backdrop-blur-sm p-12 rounded-xl shadow-xl"
        role="main"
        aria-label="404 error page"
      >
        <h1 className="text-5xl font-bold text-red-600 mb-4 md:text-6xl">
          404
          <span className="text-gray-800"> - Page Not Found</span>
        </h1>
        <p className="text-lg font-normal text-gray-600 mb-5 max-w-md">
          Oops! Looks like this calculation didn’t add up. Let’s get you back to
          crunching numbers!
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-full hover:scale-110 hover:shadow-lg transition-transform duration-200"
          role="button"
        >
          Home
        </Link>
      </main>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-16 h-16 bg-blue-500/30 rounded-full absolute top-1/4 left-1/5 animate-float"></div>
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-[3.5rem] border-l-transparent border-r-transparent border-b-green-500 absolute top-3/5 right-1/6 rotate-45 animate-float [animation-delay:1s]"></div>
        <div className="w-12 h-12 bg-blue-500/30 absolute top-2/5 right-1/4 rotate-45 animate-float [animation-delay:2s]"></div>
      </div>
    </div>
  );
}
