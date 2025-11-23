import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#800020]">
      <Navigation />
      
      {/* Contact Section */}
      <section className="bg-[#006400] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/contact.jpeg"
                alt="Contact us"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Contact Form on Right */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
                GET IN TOUCH
              </h2>
              <p className="text-lg mb-8 font-sans">
                At Santo&apos;s Kitchen, we are passionate about food, and love to share our culinary expertise.
              </p>
              
              {/* Contact Information */}
              <div className="mb-8 space-y-2 font-sans">
                <div>
                  <span className="font-semibold">Email: </span>
                  <a href="mailto:santoskitchendmv@gmail.com" className="hover:opacity-80 transition-opacity">
                    santoskitchendmv@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Text or Call us at: </span>
                  <a href="tel:301-653-9506" className="hover:opacity-80 transition-opacity">
                    301-653-9506
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white mb-2 font-sans">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded border-none focus:outline-none focus:ring-2 focus:ring-white font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white mb-2 font-sans">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded border-none focus:outline-none focus:ring-2 focus:ring-white font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-white mb-2 font-sans">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded border-none focus:outline-none focus:ring-2 focus:ring-white font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-sans">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded border-none focus:outline-none focus:ring-2 focus:ring-white font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2 font-sans">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded border-none focus:outline-none focus:ring-2 focus:ring-white font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded border-none focus:outline-none focus:ring-2 focus:ring-white resize-none font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-[#006400] px-8 py-3 rounded font-sans font-semibold hover:bg-gray-100 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

