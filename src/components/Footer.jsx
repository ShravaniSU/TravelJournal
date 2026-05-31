function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-[var(--primary-dark)] text-[var(--primary-light)]">
      <div className="container-custom py-16 md:py-20">
        {/* Divider */}
        <div className="border-t border-[var(--primary)] pt-10">
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
