export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#800020] text-white py-8 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-sans">
            © {new Date().getFullYear()} by Santo&apos;s Kitchen
          </p>
        </div>
      </footer>
    </>
  );
}

