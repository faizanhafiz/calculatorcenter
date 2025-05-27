import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StaticContent from './StaticContent';
import WaistHipCalculator from './WaistHipCalculator'

export const metadata: Metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index | Zenicalculator',
  description:
    'Use our free BMI Calculator to determine your Body Mass Index. Understand your health status based on your weight and height.',
    keywords: [
      'BMI Calculator',
      'BMI',
      'Bmi calculator for women'
    ],
  openGraph: {
    title: 'BMI Calculator - Zenicalculator',
    description: 'Easily calculate your BMI and assess your weight category with our accurate tool.',
    url: 'https://calculatorhub.com/fitness-health/bmi',
    siteName: 'CalculatorHub',
    images: [
      {
        url: 'https://calculatorhub.com/og-images/bmi.png',
        width: 1200,
        height: 630,
        alt: 'BMI Calculator on CalculatorHub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator - CalculatorHub',
    description: 'Determine your Body Mass Index using height and weight. Accurate and fast.',
    images: ['https://Zenicalculator.com/og-images/bmi.png'],
  },
};

// const WaistHipCalculator = dynamic(() => import('./WaistHipCalculator'), { ssr: true });

export default function Page() {
  return (
    <main className="pt-24  md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10">

     

      {/* Page Heading */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          Body Type Calculator
        </h1>
        <p className="text-gray-700 text-base md:text-lg text-center md:text-left">
   Use this Body Type Calculator for women to quickly identify your natural body shape—banana, apple, pear, ectomorph or hourglass. Based on your bust, waist, and hip measureme
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
        <WaistHipCalculator />
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
