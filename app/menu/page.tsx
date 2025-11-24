import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#800020]">
      <Navigation />
      
      {/* Menu Section */}
      <section className="bg-[#006400] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Current Menu Placeholder */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-sans">
                Current Menu
              </h2>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-[#800020] to-[#600015] flex items-center justify-center border-2 border-yellow-400">
                <div className="text-center">
                  <div className="text-yellow-400 text-5xl mb-4" style={{ fontFamily: 'var(--font-dancing-script), cursive' }}>
                    Santo&apos;s Kitchen
                  </div>
                  <span className="text-white font-sans text-2xl font-semibold">Current Menu Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Previous Menus */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-sans">
                Previous Menus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/old-menu-1.jpeg"
                    alt="Previous menu 1"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/old-menu-2.jpeg"
                    alt="Previous menu 2"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

