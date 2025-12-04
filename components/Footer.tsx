import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-lakers-gold text-lakers-purple z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center text-sm font-bold">
        <div>
          © 2025 LAKERS FAN PAGE DEV|Samuel Mitt & Lucas Gabriel
        </div>
        <div className="flex items-center space-x-2 mt-1 md:mt-0">
          <span>FEITO COM</span>
          <Heart size={16} fill="#552583" />
          <span>PARA FÃS</span>
        </div>
      </div>
    </footer>
  );
};