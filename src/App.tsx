import { Marquee } from './components/Marquee';
import { tracks, videos } from './data/tracks';
import './App.css';

export const App = () => {
  return (
    <div className="min-h-screen bg-background text-text-light relative overflow-x-hidden font-['Poppins']">
      {/* CRT Overlay */}
      <div className="crt-screen pointer-events-none fixed inset-0 z-50"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        
        {/* Header Section */}
        <header className="mb-16 text-center border-4 border-white p-8 brutalist-shadow-lime bg-primary">
          <h1 className="text-6xl md:text-8xl font-black mb-4 glitch-text text-accent-lime uppercase tracking-tighter">
            Poo'Whiskey
          </h1>
          <p className="text-2xl md:text-3xl font-bold uppercase text-accent-orange">
            Package Store Mix CD
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="brutalist-button-lime px-8 py-3 text-xl font-bold uppercase">
              Listen Now
            </button>
            <button className="brutalist-button-orange px-8 py-3 text-xl font-bold uppercase">
              Buy Tape
            </button>
          </div>
        </header>

        {/* Marquee Divider */}
        <div className="my-16 -mx-4">
          <Marquee text="RAW CUTS /// UNDERGROUND /// PACKAGE STORE MIX CD" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Tracks Section */}
          <section className="border-4 border-white p-6 brutalist-shadow-white bg-primary">
            <h2 className="text-4xl font-black mb-8 text-accent-lime uppercase border-b-4 border-white pb-4">
              Tracklist
            </h2>
            <div className="space-y-6">
              {tracks.map((track) => (
                <div key={track.id} className="border-2 border-secondary p-4 hover:border-accent-lime transition-colors group cursor-pointer bg-background">
                  <a href={track.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-black text-secondary group-hover:text-accent-lime">
                          {track.trackNumber}
                        </span>
                        <div>
                          <h3 className="font-bold text-xl uppercase group-hover:glitch-text">{track.title}</h3>
                          <p className="text-accent-orange font-mono uppercase">{track.artist}</p>
                        </div>
                      </div>
                      <span className="bg-white text-black px-3 py-1 font-bold font-mono group-hover:bg-accent-lime">
                        {track.duration}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section className="border-4 border-white p-6 brutalist-shadow-orange bg-primary">
            <h2 className="text-4xl font-black mb-8 text-accent-orange uppercase border-b-4 border-white pb-4">
              Visuals
            </h2>
            <div className="grid grid-cols-1 gap-8 no-scrollbar h-[800px] overflow-y-auto pr-4">
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
                    <h3 className="font-bold uppercase text-lg truncate" title={video.title}>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer Marquee */}
        <div className="mt-16 -mx-4">
          <Marquee 
            text="OUT NOW /// STREAM EVERYWHERE /// 2025" 
            bgColor="bg-accent-orange" 
            textColor="text-black font-black" 
          />
        </div>
        
      </div>
    </div>
  );
};

export default App;
