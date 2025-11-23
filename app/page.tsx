import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import VideoWithThumbnail from "./components/VideoWithThumbnail";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#800020]">
      <Navigation />
      
      {/* Home Content Section - Two Column Layout */}
      <section className="bg-[#800020] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Left Column - Large Intro Image */}
            <div className="relative w-full">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/intro.jpeg"
                  alt="Santo's Kitchen Introduction"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Food Gallery (3 images stacked) */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 font-sans">Placeholder</span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 font-sans">Placeholder</span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 font-sans">Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-[#006400] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-sans">Watch Us Cook</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              <VideoWithThumbnail
                src="/videos/video-1.mp4"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              <VideoWithThumbnail
                src="/videos/video-2.mp4"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              <VideoWithThumbnail
                src="/videos/video-3.mp4"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
