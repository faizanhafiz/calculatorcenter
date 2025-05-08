export const metadata = {
    title: 'Other Calculators - CalculatorHub',
    description: 'Discover a wide collection of utility calculators covering time, construction, conversion, electronics, weather, and more at CalculatorHub.',
    keywords: [
      'Other Calculators',
      'Time Calculator',
      'Date Calculator',
      'BTU Calculator',
      'Concrete Calculator',
      'Height Calculator',
      'Voltage Drop Calculator',
      'IP Subnet Calculator',
      'GPA Calculator',
      'Sleep Calculator',
      'Fuel Cost Calculator',
      'Love Calculator',
    ],
    openGraph: {
      title: 'Other Calculators - CalculatorHub',
      description: 'Access useful tools like Date & Time, Construction, Electronics, Weather, and Transportation calculators.',
      url: 'https://calculatorhub.com/other',
      siteName: 'CalculatorHub',
      images: [
        {
          url: 'https://calculatorhub.com/og-images/other.png',
          width: 1200,
          height: 630,
          alt: 'Other Calculators on CalculatorHub',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Other Calculators - CalculatorHub',
      description: 'Wide range of utility calculators including date, construction, conversion, weather, and more.',
      images: ['https://calculatorhub.com/og-images/other.png'],
    },
  }
  
  import Link from 'next/link'
  
  const  OtherCalculatorsPage =()=> {
    return (
      <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Heading */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-700">Other Calculators</h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">Discover diverse tools for daily tasks and technical needs across various categories.</p>
        </header>
  
        {/* Top Ad */}
        <div className="w-full mb-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Top Banner)
          </div>
        </div>
  
        {/* Categories */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Date and Time */}
          <Category title="Date and Time" color="blue" items={[
            ['Age Calculator', '/other/age'],
            ['Date Calculator', '/other/date'],
            ['Time Calculator', '/other/time'],
            ['Hours Calculator', '/other/hours'],
            ['Time Card Calculator', '/other/time-card'],
            ['Time Zone Calculator', '/other/time-zone'],
            ['Time Duration Calculator', '/other/duration'],
            ['Day Counter', '/other/day-counter'],
            ['Day of the Week Calculator', '/other/day-week'],
          ]} />
  
          {/* Housing/Building */}
          <Category title="Housing / Building" color="green" items={[
            ['Concrete Calculator', '/other/concrete'],
            ['BTU Calculator', '/other/btu'],
            ['Square Footage Calculator', '/other/sqft'],
            ['Stair Calculator', '/other/stair'],
            ['Roofing Calculator', '/other/roofing'],
            ['Tile Calculator', '/other/tile'],
            ['Mulch Calculator', '/other/mulch'],
            ['Gravel Calculator', '/other/gravel'],
          ]} />
  
          {/* Various Measurements */}
          <Category title="Measurements / Units" color="purple" items={[
            ['Height Calculator', '/other/height'],
            ['Conversion Calculator', '/other/conversion'],
            ['GDP Calculator', '/other/gdp'],
            ['Density Calculator', '/other/density'],
            ['Mass Calculator', '/other/mass'],
            ['Weight Calculator', '/other/weight'],
            ['Speed Calculator', '/other/speed'],
            ['Molarity Calculator', '/other/molarity'],
            ['Molecular Weight Calculator', '/other/molecular-weight'],
            ['Roman Numeral Converter', '/other/roman'],
          ]} />
  
          {/* Electronics */}
          <Category title="Electronics / Circuits" color="red" items={[
            ['Voltage Drop Calculator', '/other/voltage-drop'],
            ['Resistor Calculator', '/other/resistor'],
            ['Ohms Law Calculator', '/other/ohms-law'],
            ['Electricity Calculator', '/other/electricity'],
          ]} />
  
          {/* Internet */}
          <Category title="Internet" color="yellow" items={[
            ['IP Subnet Calculator', '/other/ip-subnet'],
            ['Password Generator', '/other/password'],
            ['Bandwidth Calculator', '/other/bandwidth'],
          ]} />
  
          {/* Everyday Utility */}
          <Category title="Everyday Utility" color="teal" items={[
            ['GPA Calculator', '/other/gpa'],
            ['Grade Calculator', '/other/grade'],
            ['Bra Size Calculator', '/other/bra-size'],
            ['Tip Calculator', '/other/tip'],
            ['Golf Handicap Calculator', '/other/golf'],
            ['Sleep Calculator', '/other/sleep'],
          ]} />
  
          {/* Weather */}
          <Category title="Weather" color="sky" items={[
            ['Wind Chill Calculator', '/other/wind-chill'],
            ['Heat Index Calculator', '/other/heat-index'],
            ['Dew Point Calculator', '/other/dew-point'],
          ]} />
  
          {/* Transportation */}
          <Category title="Transportation" color="indigo" items={[
            ['Fuel Cost Calculator', '/other/fuel'],
            ['Gas Mileage Calculator', '/other/mileage'],
            ['Horsepower Calculator', '/other/hp'],
            ['Engine Horsepower Calculator', '/other/engine-hp'],
            ['Mileage Calculator', '/other/mileage-calc'],
            ['Tire Size Calculator', '/other/tire'],
          ]} />
  
          {/* Entertainment */}
          <Category title="Entertainment" color="rose" items={[
            ['Dice Roller', '/other/dice'],
            ['Love Calculator', '/other/love'],
          ]} />
        </section>
  
        {/* Bottom Ad */}
        <div className="w-full mt-8">
          <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg">
            Google Ad (Bottom Banner)
          </div>
        </div>
      </main>
    )
  }
  
  
  
  function Category({ title, color, items }: { title: string, color: string, items: [string, string][] }) {
    const colorMap: Record<string, string> = {
      blue: 'text-blue-800',
      green: 'text-green-800',
      purple: 'text-purple-800',
      red: 'text-red-700',
      yellow: 'text-yellow-900',
      teal: 'text-teal-800',
      sky: 'text-sky-800',
      indigo: 'text-indigo-800',
      rose: 'text-rose-800',
    }
  
    const titleColor = colorMap[color] || 'text-gray-800'
    const linkColor = titleColor.replace('text-', 'text-')
  
    return (
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className={`text-xl font-semibold ${titleColor} mb-4`}>{title}</h3>
        <ul className={`space-y-2 ${linkColor}`}>
          {items.map(([label, href], idx) => (
            <li key={idx}>
              <Link href={href} className="hover:underline">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  export default OtherCalculatorsPage;