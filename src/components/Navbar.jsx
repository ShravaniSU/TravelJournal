import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)]/30 bg-[var(--bg-card)]/90 backdrop-blur-md">
      <div className="container-custom flex items-center justify-between gap-6 py-4">
        {/* Brand */}
        <Link 
          to="/" 
          className="group flex flex-col gap-0.5 no-underline"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#065f46]">
            Sacred Trails
          </span>
          <span className="text-xl font-black text-slate-900 group-hover:text-[#065f46] transition-colors">
            Travel Journal
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[var(--primary-light)] text-[var(--primary)]'
                  : 'text-slate-600 hover:text-[var(--primary)] hover:bg-[var(--primary-light)]/50'
              }`
            }
          >
            Home
          </NavLink>
          <a
            href="#destinations"
            className="px-4 py-2 rounded-lg font-semibold text-slate-600 hover:text-[var(--primary)] hover:bg-[var(--primary-light)]/50 transition-all duration-200"
          >
            Destinations
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
