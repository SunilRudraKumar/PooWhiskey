
import { Marquee } from './components/Marquee';
import { tracks, videos } from './data/tracks';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-accent-lime">Poo'Whiskey</h1>
        <p className="text-xl text-gray-400">Package Store Mix CD (Full Tape)</p>
      </header>
      
      <Marquee text="POO'WHISKEY - PACKAGE STORE MIX CD" />
      
      <main className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-accent-lime pb-2">Tracks</h2>
          <ul className="space-y-4">
            {tracks.map((track) => (
              <li key={track.id} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                <a href={track.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg">{track.title}</h3>
                      <p className="text-gray-400">{track.artist}</p>
                    </div>
                    <span className="text-accent-lime">{track.duration}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-accent-lime pb-2">Videos</h2>
          <div className="grid grid-cols-1 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
