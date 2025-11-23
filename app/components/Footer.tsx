export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#800020] text-white py-8 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-sans">
            © {new Date().getFullYear()} by SUGAR & SPICE. Powered and secured by Wix
          </p>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-white text-[#006400] px-6 py-3 rounded-lg shadow-2xl border-2 border-[#006400] font-sans font-semibold hover:bg-[#006400] hover:text-white transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Let&apos;s Chat!</span>
        </button>
      </div>
    </>
  );
}

