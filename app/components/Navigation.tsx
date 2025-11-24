"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
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
              href="/menu" 
              className={`bg-[#006400] text-white px-6 py-3 font-sans font-semibold text-sm hover:bg-[#004d00] transition-colors ${
                pathname === "/menu" ? "border-2 border-yellow-400" : "border border-white"
              }`}
            >
              MENU
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

