function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-[var(--primary-dark)] text-[var(--primary-light)]">
      <div className="container-custom py-16 md:py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-[#34d399]">
                Sacred Trails
              </span>
              <h3 className="text-2xl font-black text-white">
                Travel Journal
              </h3>
            </div>
            <p className="text-[#a7f3d0] leading-relaxed max-w-xs">
              A premium collection of Himalayan pilgrimages and sacred stories gathered along the mountain trails of Uttarakhand.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-[#a7f3d0] hover:text-[#34d399] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#34d399] rounded-full" />
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  className="text-[#a7f3d0] hover:text-[#34d399] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#34d399] rounded-full" />
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contribute</h4>
            <p className="text-[#a7f3d0] leading-relaxed">
              New sacred sites are added regularly. Keep exploring the peaks.
            </p>
            <div className="pt-2">
              <code className="bg-[#065f46] text-[#34d399] px-3 py-1.5 rounded-md text-xs font-mono border border-[#065f46]">
                src/data/places.js
              </code>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--primary)] pt-10">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[#a7f3d0]">
              © {currentYear} Sacred Trails. Dedicated to the spirit of the mountains.
            </p>
            <p className="text-sm font-medium text-[#34d399] flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Crafted with devotion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
