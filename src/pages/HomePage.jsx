import DestinationCard from '../components/DestinationCard'

function HomePage({ places }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 px-4 overflow-hidden bg-[#f0fdf4]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ecfdf5] rounded-full blur-[120px] opacity-80 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fef3c7] rounded-full blur-[120px] opacity-60 translate-y-1/2 -translate-x-1/3" />

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-10">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#065f46] bg-white px-8 py-3 rounded-2xl shadow-sm border border-[#065f46]/5">
                Personal Himalayan Archive
              </span>
            </div>

            <h1 className="mb-10 text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tight leading-[0.9] lg:leading-[0.85]">
              Sacred <span className="text-[#065f46]">Trails</span> <br/> <span className="text-slate-400">of India</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto font-medium">
              A curated collection of spiritual journeys through the revered landscapes of India and Nepal. From Himalayan peaks to ancient riverside shrines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#destinations"
                className="btn-primary"
              >
                Explore the Journal
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#why-journal"
                className="btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section - White to break flow */}
      <section id="destinations" className="py-24 md:py-32 px-4 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b45309] mb-4 block">
                The Collection
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
                Journeys that <br/> <span className="text-[#065f46]">Stayed with Me</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-md font-medium leading-relaxed">
              Every mountain path has a story. Explore the full journal, gallery, and significance of these sacred sites.
            </p>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {places.map((place, index) => (
              <DestinationCard key={place.slug} place={place} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section - Warm Amber Tint */}
      <section id="why-journal" className="py-24 md:py-40 px-4 bg-[#fffbeb]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#b45309]/10">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Majestic mountain peak" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl max-w-xs border border-slate-100">
                <p className="text-slate-900 font-bold italic text-lg mb-4">"In the presence of the peaks, every breath becomes a prayer."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#b45309]" />
                  <p className="text-[#065f46] text-xs font-black uppercase tracking-widest">Mountain Wisdom</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#065f46] mb-4 block">
                The Spirit
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">
                Travel as Story and <span className="text-[#b45309]">Spiritual Geography</span>
              </h2>
              <p className="text-xl text-slate-700 mb-12 leading-relaxed font-medium">
                This journal captures the emotional and spiritual resonance of the Himalayan landscape, blending visual storytelling with personal reflection.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <div className="w-14 h-14 bg-[#f0fdf4] rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#065f46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Reflections</h3>
                  <p className="text-slate-600 text-sm font-medium">Personal insights that reveal the deeper meaning of each path.</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <div className="w-14 h-14 bg-[#fffbeb] rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#b45309]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Heritage</h3>
                  <p className="text-slate-600 text-sm font-medium">Context that enriches your understanding of sacred spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Deep Emerald */}
      <section className="py-24 md:py-48 px-4 bg-[#064e3b] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#34d399] rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container-custom relative text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tight leading-none">
            Begin Your <br/> <span className="text-[#34d399]">Own Journey</span>
          </h2>
          <p className="text-2xl text-[#ecfdf5] mb-14 max-w-2xl mx-auto font-medium opacity-90">
            The Himalayas are calling. Every path you take is a story waiting to be told.
          </p>
          <a
            href="#destinations"
            className="btn-accent"
          >
            Explore the Journal
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage
