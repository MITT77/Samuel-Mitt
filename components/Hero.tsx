import React from 'react';
import { HERO_IMAGE } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPlayers = () => {
    document.getElementById('players')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-lakers-purple/30 to-gray-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-lakers-gold font-bold tracking-[0.2em] mb-4 text-lg md:text-xl animate-fade-in-up">
          LOS ANGELES LAKERS
        </h2>
        <h1 className="text-6xl md:text-9xl font-display text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
          Showtime <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lakers-gold to-yellow-200">2.0</span>
        </h1>
        <p className="text-gray-200 max-w-2xl text-lg md:text-xl mb-12 font-light">
          Testemunhe a nova era. O legado continua com a maior união de estrelas da história.
        </p>
        
        <button 
          onClick={scrollToPlayers}
          className="group flex flex-col items-center gap-2 text-white hover:text-lakers-gold transition-colors duration-300"
        >
          <span className="text-sm font-bold uppercase tracking-widest">Conheça o Time</span>
          <ChevronDown className="animate-bounce" size={32} />
        </button>
      </div>
    </section>
  );
};