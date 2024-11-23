import Image from "next/image";
// pages/index.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kinza Khan</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold mb-6">Welcome to My Portfolio</h2>
        <p className="text-lg">I am a passionate web developer with a knack for creating beautiful and functional websites. Explore my work!</p>
      </main>

      <footer className="bg-blue-500 text-white py-6 text-center">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}
