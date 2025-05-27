import React from 'react';

export default function SideAdSection() {
  return (
    <div className="hidden md:flex flex-col space-y-8 h-full"> {/* Added hidden and md:flex */}
      {/* Side Ad Unit 1 */}
      <div className="border border-gray-300 p-4 flex-grow flex items-center justify-center text-center bg-gray-50 text-gray-600 text-sm"> {/* Removed bg-white, rounded-lg, shadow-md, adjusted padding and text */}
        Google AdSense Display (Vertical)
      </div>
      {/* Side Ad Unit 2 */}
      <div className="border border-gray-300 p-4 flex-grow flex items-center justify-center text-center bg-gray-50 text-gray-600 text-sm"> {/* Removed bg-white, rounded-lg, shadow-md, adjusted padding and text */}
        Google AdSense Display (Vertical)
      </div>
    </div>
  );
}