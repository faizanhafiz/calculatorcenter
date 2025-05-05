export const metadata = {
    title: 'Math Calculators - CalculatorHub',
    description: 'Access categorized math calculators including algebra, geometry, fractions, and more at CalculatorHub.',
    keywords: [
      'Math Calculator',
      'Algebra Calculator',
      'Geometry Calculator',
      'Fraction Calculator',
      'Percentage Calculator',
      'Area Calculator',
      'Equation Solver',
      'Scientific Calculator',
    ],
    openGraph: {
      title: 'Math Calculators - CalculatorHub',
      description: 'Explore a wide range of math tools grouped by category including algebra, geometry, and more.',
      url: 'https://calculatorhub.com/math',
      siteName: 'CalculatorHub',
      images: [
        {
          url: 'https://calculatorhub.com/og-images/math.png',
          width: 1200,
          height: 630,
          alt: 'Math Calculators on CalculatorHub',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Math Calculators - CalculatorHub',
      description: 'Solve equations, calculate percentages, fractions, and more with categorized math tools.',
      images: ['https://calculatorhub.com/og-images/math.png'],
    },
  }
  
  import Link from 'next/link'
  
  const MathCalculatorsPage =()=> {
    return (
      <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Heading */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">Math Calculators</h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">Use these tools for accurate and quick math calculations across different areas of mathematics.</p>
        </header>
  
        {/* Top Ad Placeholder */}
        <div className="w-full mb-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Top Banner)
          </div>
        </div>
  
        {/* Calculator Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Category 1: Algebra */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Algebra</h3>
            <ul className="space-y-2 text-purple-700">
              <li><Link href="/math/algebra" className="hover:underline">Algebra Calculator</Link></li>
              <li><Link href="/math/equation-solver" className="hover:underline">Equation Solver</Link></li>
              <li><Link href="/math/linear" className="hover:underline">Linear Equation Calculator</Link></li>
            </ul>
          </div>
  
          {/* Category 2: Geometry */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Geometry</h3>
            <ul className="space-y-2 text-blue-700">
              <li><Link href="/math/area" className="hover:underline">Area Calculator</Link></li>
              <li><Link href="/math/perimeter" className="hover:underline">Perimeter Calculator</Link></li>
              <li><Link href="/math/volume" className="hover:underline">Volume Calculator</Link></li>
            </ul>
          </div>
  
          {/* Category 3: Fractions & Percentage */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Fractions & Percentage</h3>
            <ul className="space-y-2 text-green-700">
              <li><Link href="/math/fractions" className="hover:underline">Fraction Calculator</Link></li>
              <li><Link href="/math/percentage" className="hover:underline">Percentage Calculator</Link></li>
              <li><Link href="/math/decimal" className="hover:underline">Decimal to Fraction</Link></li>
            </ul>
          </div>
        </section>
  
        {/* Bottom Ad Placeholder */}
        <div className="w-full mt-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Bottom Banner)
          </div>
        </div>
      </main>
    )
  }
  export default MathCalculatorsPage;
  