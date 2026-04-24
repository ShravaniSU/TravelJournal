import { Link, useParams } from 'react-router-dom'
import { places } from '../data/places'

function DestinationPage() {
  const { slug } = useParams()
  const place = places.find((p) => p.slug === slug)

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4]">
        <div className="container-custom text-center py-20 animate-fade-in">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b45309] mb-4 block">
            Error 404
          </span>
          <h1 className="mt-3 mb-10 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            This journey is not <br/> in the journal yet.
          </h1>
          <Link
            to="/"
            className="btn-primary"
          >
            Back to Journal
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section - Restored 2-column layout */}
      <section className="relative py-20 md:py-32 px-4 bg-[#f0fdf4]">
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-[#065f46] hover:text-[#064e3b] font-bold mb-12 group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span>Back to Collection</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b45309] mb-6 block">
                {place.region}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight mb-8">
                {place.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-10 border-l-4 border-[#065f46] pl-8">
                {place.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                {place.highlights.map((highlight) => (
                  <span key={highlight} className="badge">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image - Featured Image Restored */}
            <div className="relative animate-fade-in lg:block">
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#065f46]/20">
                <img
                  src={place.coverImage}
                  alt={place.coverAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#b45309]/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#065f46]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b45309] mb-6 block">
              The Journal Entry
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">
              A Journey Through <br/> <span className="text-[#065f46]">Silence and Scale</span>
            </h2>
            <div className="text-xl text-slate-700 leading-relaxed font-medium space-y-8 whitespace-pre-wrap bg-[#f8fafc] p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
              {place.story}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section - Colorful Cards */}
      <section className="py-24 md:py-32 px-4 bg-[#fffbeb]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Significance Card */}
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg className="w-40 h-40 text-[#065f46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
                  </svg>
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#065f46] mb-4 block">
                Heritage
              </span>
              <h3 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                Spiritual Significance
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {place.significance}
              </p>
            </div>

            {/* Personal Experience Card */}
            <div className="bg-[#064e3b] p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg className="w-40 h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#34d399] mb-4 block">
                Reflection
              </span>
              <h3 className="text-3xl font-black text-white mb-8 leading-tight">
                My Experience
              </h3>
              <p className="text-lg text-[#ecfdf5] leading-relaxed font-medium">
                {place.personalExperience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-36 px-4 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#065f46] mb-4 block">
              Visual Memories
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Moments from <br/> <span className="text-[#b45309]">the Journey</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              A curated collection of landscapes and textures captured along the mountain path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {place.gallery.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[16/10] shadow-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-12">
                  <p className="text-white text-xl font-bold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Journeys CTA */}
      <section className="py-32 px-4 bg-[#f0fdf4] text-center overflow-hidden relative">
        {/* Decorative Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#065f46]/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container-custom relative">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#065f46] mb-4 block">
            Keep Exploring
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-12 tracking-tight leading-none">
            Ready to <br/> <span className="text-[#b45309]">See More?</span>
          </h2>
          <Link
            to="/"
            className="btn-primary"
          >
            Explore All Destinations
          </Link>
        </div>
      </section>
    </article>
  )
}

export default DestinationPage
