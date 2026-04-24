import { Link } from 'react-router-dom'

function DestinationCard({ place, index }) {
  return (
    <article
      className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up"
      style={{ '--index': index }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-slate-100">
        <img
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src={place.coverImage}
          alt={place.coverAlt}
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Region Badge */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-[#065f46] text-[10px] font-black uppercase tracking-widest rounded-xl shadow-sm">
            {place.region.split(',')[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="mb-6">
          <h3 className="text-3xl font-black text-slate-900 group-hover:text-[#065f46] transition-colors leading-[1.1]">
            {place.name}
          </h3>
        </div>

        <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed font-medium">
          {place.shortDescription}
        </p>

        {/* Highlights */}
        <div className="mb-10 flex flex-wrap gap-2">
          {place.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1.5 bg-[#f0fdf4] text-[#065f46] text-[10px] font-black uppercase tracking-wider rounded-lg border border-[#065f46]/5"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* CTA Link */}
        <Link
          to={`/destination/${place.slug}`}
          className="inline-flex items-center justify-between w-full px-8 py-4 bg-[#065f46] text-white font-bold rounded-2xl hover:bg-[#064e3b] transition-all group/btn shadow-lg shadow-[#065f46]/10"
        >
          <span>Journal Entry</span>
          <svg
            className="w-6 h-6 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default DestinationCard
