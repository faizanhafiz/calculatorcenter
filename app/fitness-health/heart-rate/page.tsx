import { Metadata } from 'next';
import HeartRateStaticContent from './HeartRateStaticContent'; // Adjust path if needed
import AdsSection from '@/components/TopAd';
import SideAdSection from '@/components/SideAdSection'; // Import the SideAdSection for desktop sidebar
import CurrentHeartRateCalculator from './CurrentHeartRateCalculator';

export const metadata: Metadata = {
  title: 'Heart Rate Calculator - Optimize Your Workouts | Zenicalculator',
  description: 'Calculate your maximum heart rate and target heart rate zones for moderate and vigorous intensity workouts. Improve your fitness and cardiovascular health.',
  keywords: [
    'abnormal heartbeat',
    'Heart Rate Calculator',
    'Target Heart Rate',
    'Max Heart Rate',
    'Fitness Zones',
    'Cardio Health',
    'Workout Zones',
    
  ],
  openGraph: {
    title: 'Heart Rate Calculator - Zenicalculator ',
    description: 'Calculate your maximum heart rate and target heart rate zones for moderate and vigorous intensity workouts.',
    url: 'https://zenicalculator.com/fitness-health/heart-rate-calculator', // Update URL
    siteName: 'zenicalculator',
    images: [
      {
        url: 'http://test.com', // Placeholder image URL
        width: 1200,
        height: 630,
        alt: 'Heart Rate Calculator on Zenicalculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heart Rate Calculator - Zenicalculator',
    description: 'Calculate your daily macronutrient needs based on your weight, height, age, activity level, and fitness goals.',
    images: ['https://zenicalculator.com/og-images/heart-rate-calculator.png'], // Placeholder image URL
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24 md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10 font-inter"> {/* Changed bg-gray-100 to bg-white */}
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Heart Rate Calculator
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Calculate your optimal heart rate zones for effective workouts.
        </p>
      </section>

      {/* Main content and Ads container */}
      {/* This container sets up the two-column layout for medium/large screens (md:flex-row) */}
      {/* On mobile (default), it stacks content vertically (flex-col). */}
      <div className="w-full flex flex-col md:flex-row md:space-x-8">

        {/* Left Column: Main Blog Post Content Area */}
        {/* Takes full width on mobile, 3/4 width on desktop. */}
        <div className="w-full md:w-3/4 p-8 space-y-10">
          {/* Heart Rate Calculator */}
          <CurrentHeartRateCalculator />
          {/* Static Content (Introduction and Explanation) */}
          <HeartRateStaticContent />

          {/* Mobile Ad Section 1: Visible on mobile, hidden on medium screens and up */}
          {/* These ads appear inline with content on small screens */}
          <div className="block md:hidden mt-8 mb-8">
            <AdsSection />
          </div>

         
        </div>

        {/* Right Column: Desktop Ads Sidebar */}
        {/* This column is hidden on mobile screens and only visible on medium/large screens. */}
        {/* On desktop, it takes 1/4 width and is placed on the right (md:order-last). */}
        <div className="hidden md:block w-full md:w-1/4 mb-8 md:mb-0 md:order-last">
          <SideAdSection /> {/* Contains the two vertical ad units */}
        </div>
      </div>
    </main>
  );
}

