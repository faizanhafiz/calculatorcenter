import Link from 'next/link'

const  Navbar = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">CalculatorCenter</Link>

        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about-us" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
export default Navbar