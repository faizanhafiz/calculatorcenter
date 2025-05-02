import Link from 'next/link'

const  Footer =()=> {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-6">
          <Link href="/about-us" className="hover:text-blue-400">About Us</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          <Link href="/sitemap.xml" className="hover:text-blue-400">Sitemap</Link>
        </div>
        <p className="text-sm mt-4 md:mt-0">© {new Date().getFullYear()} CalculatorHub. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
export default Footer