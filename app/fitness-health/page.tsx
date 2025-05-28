export const metadata = {
    title: 'Fitness & Health Calculators - CalculatorHub',
    description: 'Discover categorized fitness and health calculators including BMI, calorie needs, body fat, and more at CalculatorHub.',
    keywords: [
      'BMI Calculator',
      'Fitness Calculator',
      'Health Calculator',
      'Calorie Calculator',
      'Body Fat Calculator',
      'Heart Rate Calculator',
      'BMR Calculator',
      'Macro Calculator',
      'TDEE Calculator',
    ],
    openGraph: {
      title: 'Fitness & Health Calculators - CalculatorHub',
      description: 'Easily access a wide range of fitness and health calculators by category.',
      url: 'https://calculatorhub.com/fitness-health',
      siteName: 'CalculatorHub',
      images: [
        {
          url: 'https://calculatorhub.com/og-images/fitness-health.png',
          width: 1200,
          height: 630,
          alt: 'Fitness & Health Calculators on CalculatorHub',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Fitness & Health Calculators - CalculatorHub',
      description: 'Categorized calculators for BMI, calories, heart health, and more.',
      images: ['https://calculatorhub.com/og-images/fitness-health.png'],
    },
  }
  
  import Link from 'next/link'
  
  export default function FitnessHealthCalculatorsPage() {
    return (
      <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Page Heading */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">Fitness & Health Calculators</h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">Explore tools to help you monitor and improve your physical health and fitness goals.</p>
        </header>
  
        {/* Top Google Ad Placeholder */}
        <div className="w-full mb-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Top Banner)
          </div>
        </div>
  
        {/* Calculator Categories Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Category 1: Body Measurements */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Body Measurements</h3>
            <ul className="space-y-2 text-green-700">
              <li><Link href="/fitness-health/bmi-calculator" className="hover:underline">BMI Calculator</Link></li>
              <li><Link href="/fitness-health/body-fat-calculator" className="hover:underline">Body Fat Calculator</Link></li>
              <li><Link href="/fitness-health/body-type-calculator" className="hover:underline">Waist-to-Hip Ratio Calculator</Link></li>
            </ul>
          </div>
  
          {/* Category 2: Nutrition */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Nutrition</h3>
            <ul className="space-y-2 text-orange-700">
              <li><Link href="/fitness-health/calorie-calculator" className="hover:underline">Calories Calculator</Link></li>
              <li><Link href="/fitness-health/macro-calculator" className="hover:underline">Macronutrient Calculator</Link></li>
              <li><Link href="/fitness-health/tdee" className="hover:underline">TDEE Calculator</Link></li>
            </ul>
          </div>
  
          {/* Category 3: Fitness & Recovery */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Fitness & Recovery</h3>
            <ul className="space-y-2 text-purple-700">
              <li><Link href="/fitness-health/bmr-calculator" className="hover:underline">BMR Calculator</Link></li>
              <li><Link href="/fitness-health/heart-rate" className="hover:underline">Heart Rate Calculator</Link></li>
              <li><Link href="/fitness-health/target-heart-rates" className="hover:underline">Target Heart Rate Calculator</Link></li>
            </ul>
          </div>
        </section>
  
        {/* Bottom Google Ad Placeholder */}
        <div className="w-full mt-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Bottom Banner)
          </div>
        </div>
      </main>
    )
  }
  