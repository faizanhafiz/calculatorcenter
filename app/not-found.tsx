"use client";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5 py-16 bg-gray-100 text-gray-800 overflow-x-hidden">
      {/* Realistic Calculator Background */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80')] bg-cover bg-center opacity-20 z-0"
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
          Oops! Looks like this calculation didn't add up. Let's get you back to
          crunching numbers!
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white text-base font-semibold rounded-full hover:scale-110 hover:shadow-lg transition-transform duration-200"
          role="button"
        >
          Return to CalculatorHub Home
        </a>
      </main>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-16 h-16 bg-blue-500/30 rounded-full absolute top-1/4 left-1/5 animate-float"></div>
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-[3.5rem] border-l-transparent border-r-transparent border-b-green-500 absolute top-3/5 right-1/6 rotate-45 animate-float animate-delay-100"></div>
        <div className="w-12 h-12 bg-blue-500/30 absolute top-2/5 right-1/4 rotate-45 animate-float animate-delay-200"></div>
      </div>

      {/* Inline Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(0.9);
          }
          50% {
            transform: translateY(-1rem) scale(0.95);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-delay-100 {
          animation-delay: 1s;
        }
        .animate-delay-200 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}