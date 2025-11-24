import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import VideoWithThumbnail from "./components/VideoWithThumbnail";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#600015]">
      <Navigation />

      {/* Home Content Section - Grid Layout */}
      <section className="bg-[#600015] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/intro-1.jpeg"
                alt="Santo's Kitchen Introduction"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/intro-2.jpeg"
                alt="Santo's Kitchen food display"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/intro-3.jpeg"
                alt="Santo's Kitchen food preparation"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/intro-4.jpeg"
                alt="Santo's Kitchen food serving"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/intro-5.jpeg"
                alt="Santo's Kitchen"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-[#004d00] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-sans">Watch Us Cook</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              <VideoWithThumbnail
                src="/videos/video-4.mp4"
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
