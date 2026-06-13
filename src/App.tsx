import { Marquee } from './components/Marquee';
import { tracks, videos } from './data/tracks';
import './App.css';

export const App = () => {
  return (
    <div className="min-h-screen bg-background text-text-light relative overflow-x-hidden font-['Poppins'] pb-20">
      {/* CRT Overlay */}
      <div className="crt-screen pointer-events-none fixed inset-0 z-50"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        
        {/* Header Section */}
        <header className="mb-16 text-center border-4 border-white p-8 md:p-16 brutalist-shadow-lime bg-primary">
          <h1 className="text-5xl md:text-8xl font-black mb-4 glitch-text text-accent-lime uppercase tracking-tighter">
            Poo'Whiskey
          </h1>
          <p className="text-xl md:text-3xl font-bold uppercase text-accent-orange tracking-widest">
            Package Store Mix CD
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            <a href="#listen" className="brutalist-button-lime px-8 py-4 text-xl font-black uppercase text-center block w-full md:w-auto">
              Listen Now
            </a>
            <a href="#store" className="brutalist-button-orange px-8 py-4 text-xl font-black uppercase text-center block w-full md:w-auto">
              Buy Tape
            </a>
          </div>
        </header>

        {/* Marquee Divider */}
        <div className="my-16 -mx-4 md:-mx-8">
          <Marquee text="RAW CUTS /// UNDERGROUND /// PACKAGE STORE MIX CD" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-24">
          
          {/* Tracks Section (Playable Media) */}
          <section id="listen" className="border-4 border-white p-4 md:p-8 brutalist-shadow-white bg-primary">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-accent-lime uppercase border-b-4 border-white pb-4">
              Tracklist & Audio
            </h2>
            <div className="space-y-8">
              {tracks.map((track) => (
                <div key={track.id} className="border-4 border-secondary p-4 bg-background">
                  <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl md:text-4xl font-black text-secondary">
                        {track.trackNumber}
                      </span>
                      <div>
                        <h3 className="font-bold text-xl md:text-2xl uppercase glitch-text">{track.title}</h3>
                        <p className="text-accent-orange font-mono uppercase">{track.artist}</p>
                      </div>
                    </div>
                    <span className="bg-white text-black px-3 py-1 font-bold font-mono">
                      {track.duration}
                    </span>
                  </div>
                  {/* SoundCloud Embed */}
                  <div className="w-full mt-4">
                    <iframe 
                      width="100%" 
                      height="166" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23CCFF00&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                      className="w-full border-2 border-white filter grayscale hover:grayscale-0 transition-all"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section className="border-4 border-white p-4 md:p-8 brutalist-shadow-orange bg-primary">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-accent-orange uppercase border-b-4 border-white pb-4">
              Visuals
            </h2>
            <div className="grid grid-cols-1 gap-8 no-scrollbar h-auto max-h-[1200px] overflow-y-auto pr-2 md:pr-4">
              {videos.map((video) => (
                <div key={video.id} className="border-4 border-white brutalist-shadow-white bg-background group">
                  <div className="aspect-video relative overflow-hidden vhs-lines">
                    <iframe 
                      className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4 border-t-4 border-white bg-secondary">
                    <h3 className="font-bold uppercase text-lg md:text-xl truncate" title={video.title}>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Merchandise / Buy Tape Section */}
        <section id="store" className="mb-24 border-4 border-white p-4 md:p-12 brutalist-shadow-lime bg-primary">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white uppercase text-center">
            Merch Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square border-4 border-white bg-background flex items-center justify-center brutalist-shadow-orange group">
              <div className="absolute inset-0 vhs-lines opacity-50"></div>
              {/* Spinning Cassette visual representation */}
              <div className="spin-active relative z-10 w-48 h-32 md:w-64 md:h-40 border-4 border-accent-lime bg-black rounded-lg flex items-center justify-center before:content-[''] before:absolute before:inset-2 before:border-2 before:border-accent-orange before:rounded-md">
                <div className="w-full flex justify-around px-8">
                  <div className="w-8 h-8 rounded-full border-4 border-white bg-background"></div>
                  <div className="w-8 h-8 rounded-full border-4 border-white bg-background"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-white text-black px-2 font-mono text-sm uppercase font-bold rotate-[-10deg]">Side A</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-accent-lime uppercase glitch-text">
                Package Store Mix CD (Physical)
              </h3>
              <p className="text-xl md:text-2xl font-mono text-white">
                Limited Edition Run. Includes 4 bonus raw cuts and exclusive digital download code.
              </p>
              <div className="text-4xl font-black text-accent-orange">
                $15.00 USD
              </div>
              <button className="brutalist-button-lime w-full py-6 text-2xl font-black uppercase tracking-widest mt-8">
                Pre-Order Now
              </button>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="mb-16 border-4 border-white p-8 md:p-12 brutalist-shadow-white bg-background vhs-lines relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-white uppercase text-center glitch-text">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-mono">
              <div className="border-2 border-accent-lime p-8 bg-black">
                <h4 className="text-xl text-accent-lime font-bold mb-4">Summer Tour '26</h4>
                <p className="text-gray-400">Dates TBA</p>
              </div>
              <div className="border-2 border-accent-orange p-8 bg-black">
                <h4 className="text-xl text-accent-orange font-bold mb-4">Vinyl Pressing</h4>
                <p className="text-gray-400">Limited to 500 copies</p>
              </div>
              <div className="border-2 border-white p-8 bg-black">
                <h4 className="text-xl text-white font-bold mb-4">New Merch Drop</h4>
                <p className="text-gray-400">Hoodies & Tees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Marquee */}
        <div className="mt-16 -mx-4 md:-mx-8">
          <Marquee 
            text="OUT NOW /// STREAM EVERYWHERE /// POO'WHISKEY 2026" 
            bgColor="bg-accent-orange" 
            textColor="text-black font-black" 
          />
        </div>
        
      </div>
    </div>
  );
};

export default App;
