"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      {/* Top Header with Icons */}
      <div className="bg-[#800020] py-3">
        <div className="container mx-auto px-4 flex justify-end gap-6">
          <button className="text-white flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Log In</span>
          </button>
          <button className="text-white flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="bg-white text-[#800020] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
          </button>
        </div>
      </div>

      {/* Hero Section with Logo and Title */}
      <section className="bg-[#800020] py-16 text-center">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Link href="/" className="block outline-none focus:outline-none">
              <div className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform border-none outline-none">
                <Image
                  src="/images/logo.png"
                  alt="Santo's Kitchen Logo"
                  fill
                  className="object-cover rounded-full border-none outline-none"
                  priority
                />
              </div>
            </Link>
          </div>
          
          <h1 className="text-6xl md:text-8xl text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-dancing-script), cursive' }}>
            Santo&apos;s Kitchen
          </h1>
          <p className="text-xl md:text-2xl text-white font-sans mb-8">
            Authentic Caribbean Cuisine
          </p>

          {/* Navigation */}
          <nav className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/" 
              className={`bg-[#006400] text-white px-6 py-3 font-sans font-semibold text-sm hover:bg-[#004d00] transition-colors ${
                pathname === "/" ? "border-2 border-yellow-400" : "border border-white"
              }`}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className={`bg-[#006400] text-white px-6 py-3 font-sans font-semibold text-sm hover:bg-[#004d00] transition-colors ${
                pathname === "/about" ? "border-2 border-yellow-400" : "border border-white"
              }`}
            >
              ABOUT US
            </Link>
            <Link 
              href="/contact" 
              className={`bg-[#006400] text-white px-6 py-3 font-sans font-semibold text-sm hover:bg-[#004d00] transition-colors ${
                pathname === "/contact" ? "border-2 border-yellow-400" : "border border-white"
              }`}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}

