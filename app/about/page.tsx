import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#800020]">
      <Navigation />
      
      {/* About Us Section */}
      <section className="bg-[#006400] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us.jpeg"
                alt="Santo Mendes"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text on Right */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
                About Santo&apos;s Kitchen
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-sans">
                A Matriarch&apos;s Legacy, Carried on
              </h3>
              <p className="text-lg leading-relaxed mb-4 font-sans">
                Santo Mendes was a renowned baker in Wesley - a small village in the small island of Dominica. 
                People would travel from all over the island for her bread.
              </p>
              <p className="text-lg leading-relaxed font-sans">
                Her legacy lives on through Santo&apos;s Kitchen, where we honor her recipes and continue 
                to share the authentic flavors of the Caribbean with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

