import Link from 'next/link'
import Calculator from '@/components/Calculator'
import 'katex/dist/katex.min.css';

export default function Home() {
    return (
        <main className="pt-24 px-4 md:px-8 lg:px-16">
          {/* Upper Section - Simple Calculator */}
           <Calculator/> 
          
    
          {/* Lower Section - Categories */}
          <section className="max-w-6xl mx-auto">
             
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Finance */}
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Finance</h3>
                <ul className="space-y-2">
                  <li><Link href="/finance/loan" className="text-blue-700 hover:underline">Loan Calculator</Link></li>
                  <li><Link href="/finance/interest" className="text-blue-700 hover:underline">Interest Calculator</Link></li>
                </ul>
              </div>
    
              {/* Fitness & Health */}
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-green-600 mb-2">Fitness & Health</h3>
                <ul className="space-y-2">
                  <li><Link href="/fitness-health/bmi-calculator" className="text-green-700 hover:underline">BMI Calculator</Link></li>
                  <li><Link href="/fitness-health/calorie-calculator" className="text-green-700 hover:underline">Calories Calculator</Link></li>
                </ul>
              </div>
    
              {/* Math */}
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Math</h3>
                <ul className="space-y-2">
                  <li><Link href="/math/fractions" className="text-purple-700 hover:underline">Fraction Calculator</Link></li>
                  <li><Link href="/math/algebra" className="text-purple-700 hover:underline">Algebra Calculator</Link></li>
                </ul>
              </div>
    
              {/* Other */}
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">Other</h3>
                <ul className="space-y-2">
                  <li><Link href="/other/date" className="text-yellow-700 hover:underline">Date Calculator</Link></li>
                  <li><Link href="/other/age" className="text-yellow-700 hover:underline">Age Calculator</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      )
}
