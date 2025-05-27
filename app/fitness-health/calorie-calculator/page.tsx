import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StaticContent from './StaticContent';
 
export const metadata: Metadata = {
  title: 'Calorie Calculator - Calculate Your Daily Calorie Needs | Zenicalculator',
  description:
    'Use our free Calorie Calculator to determine your daily calorie needs based on your age, height, weight, gender, and activity level.',
    keywords: [
      'Calorie Calculator',
      'Calories',
      'Calorie calculator for women'
    ],
  openGraph: {
    title: 'Calorie Calculator - Zenicalculator',
    description: 'Easily calculate your daily calorie needs based on your age, height, weight, gender, and activity level.',
    url: 'https://zenicalculator.com/fitness-health/calorie-calculator',
    siteName: 'Zenicalculator',
    images: [
      {
        url: 'https://zenicalculator.com/og-images/calorie-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Calorie Calculator on Zenicalculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator - Zenicalculator',
    description: 'Determine your daily calorie needs based on your age, height, weight, gender, and activity level.',
    images: ['https://zenicalculator.com/og-images/calorie-calculator.png'],
  },
};

const CalorieCalculator = dynamic(() => import('./CalorieCalculator'), { ssr: true });


export default function Page() {
  return (
    <main className="pt-24  md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10">

     

      {/* Page Heading */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          Calorie Calculator
        </h1>
        <p className="text-gray-700 text-base md:text-lg text-center md:text-left">
Use this Calorie Calculator to estimate how many calories your body needs each day based on your height, weight, age, and activity level. It’s a simple way to understand your daily calorie needs and get helpful guidance for losing, maintaining, or gaining weight.</p>

      </section>


     {/* Top Ad */}
     <div className="w-full">
        <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg" aria-label="Advertisement">
          Google Ad (Top Banner)
        </div>
      </div>


      {/* Calculator Section */}
      <div className="w-full">
        <CalorieCalculator />
      </div>

      {/* Static SEO Content */}
      <StaticContent />

      {/* Bottom Ad */}
      <div className="w-full">
        <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg" aria-label="Advertisement">
          Google Ad (Bottom Banner)
        </div>
      </div>
    </main>
  );
}
