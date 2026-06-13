export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string; // SoundCloud URL
  duration: string;
  releaseDate: string;
  type: 'single' | 'mix' | 'feature';
  trackNumber: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  url: string;
  releaseDate: string;
}

export const tracks: Track[] = [
  {
    id: "package-store-mix-full",
    title: "Package Store Mix CD (Full Tape)",
    artist: "Poo'Whiskey",
    url: "https://soundcloud.com/poowhiskey/sets/package-store-mix-cd",
    duration: "42:15",
    releaseDate: "2025",
    type: "mix",
    trackNumber: "01"
  },
  {
    id: "the-state-feat-poowhiskey",
    title: "The State",
    artist: "Quedaspitta (feat. Poo'Whiskey)",
    url: "https://soundcloud.com/quedaspitta/the-state-feat-poo-whiskey",
    duration: "03:45",
    releaseDate: "2025",
    type: "feature",
    trackNumber: "02"
  },
  {
    id: "package-store-mix-a",
    title: "Package Store Mix (Side A - Raw Cuts)",
    artist: "Poo'Whiskey",
    url: "https://soundcloud.com/poowhiskey/sets/package-store-mix-cd",
    duration: "21:10",
    releaseDate: "2025",
    type: "mix",
    trackNumber: "03"
  },
  {
    id: "package-store-mix-b",
    title: "Package Store Mix (Side B - Underground)",
    artist: "Poo'Whiskey",
    url: "https://soundcloud.com/poowhiskey/sets/package-store-mix-cd",
    duration: "21:05",
    releaseDate: "2025",
    type: "mix",
    trackNumber: "04"
  }
];

export const videos: Video[] = [
  {
    id: "vid-1",
    title: "Poo'Whiskey - CRAXwtiYz3U (Official Video)",
    youtubeId: "CRAXwtiYz3U",
    url: "https://youtu.be/CRAXwtiYz3U",
    releaseDate: "2025"
  },
  {
    id: "vid-2",
    title: "Poo'Whiskey - Ifj3PR0ZVuo (Package Store Session)",
    youtubeId: "Ifj3PR0ZVuo",
    url: "https://youtu.be/Ifj3PR0ZVuo",
    releaseDate: "2025"
  },
  {
    id: "vid-3",
    title: "Poo'Whiskey - wJz9KM1534U (Official Audio)",
    youtubeId: "wJz9KM1534U",
    url: "https://youtu.be/wJz9KM1534U",
    releaseDate: "2025"
  },
  {
    id: "vid-4",
    title: "Poo'Whiskey - RxwaKhf5Wg4 (Live Performance)",
    youtubeId: "RxwaKhf5Wg4",
    url: "https://youtu.be/RxwaKhf5Wg4",
    releaseDate: "2025"
  },
  {
    id: "vid-5",
    title: "Poo'Whiskey - ta9RNOVZlNs (Visualizer)",
    youtubeId: "ta9RNOVZlNs",
    url: "https://youtu.be/ta9RNOVZlNs",
    releaseDate: "2025"
  },
  {
    id: "vid-6",
    title: "Poo'Whiskey - SLYKwZHi6VY (Street Cypher)",
    youtubeId: "SLYKwZHi6VY",
    url: "https://youtu.be/SLYKwZHi6VY",
    releaseDate: "2025"
  },
  {
    id: "vid-7",
    title: "Poo'Whiskey - T0Q8RUGC8FU (Official Release)",
    youtubeId: "T0Q8RUGC8FU",
    url: "https://youtu.be/T0Q8RUGC8FU",
    releaseDate: "2025"
  },
  {
    id: "vid-8",
    title: "Poo'Whiskey - hFM-TrgYxmI (Underground Heat)",
    youtubeId: "hFM-TrgYxmI",
    url: "https://youtu.be/hFM-TrgYxmI",
    releaseDate: "2025"
  }
];
