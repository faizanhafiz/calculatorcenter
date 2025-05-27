import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Body Fat Calculator - Calculate Your Body Fat Percentage | Zenicalculator',
  description:
    'Use our free Body Fat Calculator to estimate your body fat percentage using methods like BMI, Navy, and tape. Understand your fitness level now.',
  keywords: [
    'Body Fat Calculator',
    'Body Fat Percentage',
    'Body Fat calculator for men and women',
    'Navy Body Fat Calculator',
  ],
  openGraph: {
    title: 'Body Fat Calculator - Zenicalculator',
    description: 'Quickly calculate your body fat percentage and understand your health better with our precise tool.',
    url: 'https://calculatorhub.com/fitness-health/body-fat',
    siteName: 'CalculatorHub',
    images: [
      {
        url: 'https://calculatorhub.com/og-images/body-fat.png',
        width: 1200,
        height: 630,
        alt: 'Body Fat Calculator on Zenicalculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Fat Calculator - Zenicalculator',
    description: 'Estimate your body fat percentage using our accurate and easy-to-use calculator.',
    images: ['https://calculatorhub.com/og-images/body-fat.png'],
  },
};

const BodyFatCalculator = dynamic(() => import('./BodyFatCalculator'), { ssr: true });

export default function Page() {
  return (
    <main className="pt-24  md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10">
      
      {/* Page Heading */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          Body Fat Calculator
        </h1>
        <p className="text-gray-700 text-base md:text-lg text-center md:text-left">
          Looking to understand your body fat percentage? You’re in the right place. This guide explains what body fat is, how it affects your health, and how to calculate it using simple tools like our free Body Fat Calculator.
         </p>
      </section>

      {/* Top Ad */}
      <div className="w-full">
        <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg" aria-label="Advertisement">
          Google Ad (Top Banner)
        </div>
      </div>

      {/* Calculator Section */}
      <div className="w-full">
        <BodyFatCalculator />
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
