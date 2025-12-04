import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Players } from './components/Players';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased bg-gray-900 min-h-screen text-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Players />
        <Stats />
      </main>
      
      <div className="h-12 md:h-0">
        {/* Spacer for fixed footer on mobile to ensure content isn't covered */}
      </div>
      
      <Footer />
    </div>
  );
};

export default App;