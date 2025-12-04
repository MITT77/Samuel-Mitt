import React from 'react';
import { PLAYERS } from '../constants';

export const Players: React.FC = () => {
  return (
    <section id="players" className="min-h-screen py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 uppercase tracking-tight">
            O Big Three
          </h2>
          <div className="w-24 h-1 bg-lakers-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {PLAYERS.map((player) => (
            <div 
              key={player.id} 
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-lakers-purple/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Card Header Background */}
              <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-lakers-purple to-gray-800 opacity-80"></div>
              
              {/* Player Image */}
              <div className="relative z-10 -mb-4 pt-8 px-4 flex justify-center">
                <img 
                  src={player.imageUrl} 
                  alt={player.name}
                  className="h-64 md:h-80 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Player Info */}
              <div className="relative z-20 bg-white text-gray-900 p-6 pt-10 clip-path-slant mt-[-2rem]">
                <div className="flex justify-between items-end border-b-2 border-lakers-gold pb-4 mb-4">
                   <h3 className="text-3xl font-display uppercase leading-none">
                    {player.name.split(' ')[0]} <br/>
                    <span className="text-lakers-purple">{player.name.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <span className="text-4xl font-display text-gray-200 opacity-50 absolute right-4 top-8">
                     #{player.id === 1 ? '77' : player.id === 2 ? '15' : '23'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">Posição</span>
                    <span className="font-bold text-gray-800 text-right">{player.position}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">Altura</span>
                    <span className="font-bold text-gray-800">{player.height}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};