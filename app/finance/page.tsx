export const metadata = {
  title: 'Financial Calculators - CalculatorHub',
  description: 'Explore categorized financial calculators including loan, interest, investment, and more at CalculatorHub.',
  keywords: [
    'Financial Calculator',
    'Loan Calculator',
    'Interest Calculator',
    'Investment Calculator',
    'EMI Calculator',
    'Mortgage Calculator',
    'Compound Interest Calculator',
    'Retirement Calculator',
  ],
  openGraph: {
    title: 'Financial Calculators - CalculatorHub',
    description: 'Easily access a wide range of financial calculators by category.',
    url: 'https://calculatorhub.com/finance',
    siteName: 'CalculatorHub',
    images: [
      {
        url: 'https://calculatorhub.com/og-images/finance.png',
        width: 1200,
        height: 630,
        alt: 'Financial Calculators on CalculatorHub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Calculators - CalculatorHub',
    description: 'Categorized calculators for loans, interest, investments, and more.',
    images: ['https://calculatorhub.com/og-images/finance.png'],
  },
}

  
  import Link from 'next/link'
  
  export default function FinancialCalculatorsPage() {
    return (
      <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Page Heading */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Financial Calculators</h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">Choose from various categories of financial calculators to help manage your finances.</p>
        </header>
  
        {/* Top Google Ad Placeholder */}
        <div className="w-full mb-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Top Banner)
          </div>
        </div>
  
        {/* Calculator Categories Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Example Category 1 */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Loans</h3>
            <ul className="space-y-2 text-blue-700">
              <li><Link href="/finance/loan" className="hover:underline">Loan Calculator</Link></li>
              <li><Link href="/finance/emi" className="hover:underline">EMI Calculator</Link></li>
              <li><Link href="/finance/mortgage" className="hover:underline">Mortgage Calculator</Link></li>
            </ul>
          </div>
  
          {/* Example Category 2 */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Interest</h3>
            <ul className="space-y-2 text-green-700">
              <li><Link href="/finance/interest" className="hover:underline">Simple Interest Calculator</Link></li>
              <li><Link href="/finance/compound" className="hover:underline">Compound Interest Calculator</Link></li>
            </ul>
          </div>
  
          {/* Example Category 3 */}
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Investments</h3>
            <ul className="space-y-2 text-purple-700">
              <li><Link href="/finance/retirement" className="hover:underline">Retirement Calculator</Link></li>
              <li><Link href="/finance/future-value" className="hover:underline">Future Value Calculator</Link></li>
              <li><Link href="/finance/sip" className="hover:underline">SIP Calculator</Link></li>
            </ul>
          </div>
  
          {/* Add more categories similarly */}
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
  