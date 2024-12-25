import React from 'react';

export const YearAnimation: React.FC = () => {
  return (
    <div className="fixed bottom-4 w-full overflow-hidden pointer-events-none z-20">
      <div className="year-container w-48 md:w-72 lg:w-96 aspect-[2/1] animate-fly-year">
        <div className="relative w-full h-full">
          {/* 2025 with trailing effect */}
          <div className="absolute inset-0 font-bold text-6xl md:text-8xl lg:text-9xl 
                        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                        bg-clip-text text-transparent filter drop-shadow-lg">
            2025
            <span className="absolute -left-4 -top-2 opacity-30">2025</span>
            <span className="absolute -left-8 -top-4 opacity-10">2025</span>
          </div>
          {/* Sparkle effects */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex gap-2">
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight">✨</span>
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight" style={{ animationDelay: '0.2s' }}>⭐</span>
            <span className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight" style={{ animationDelay: '0.4s' }}>🎉</span>
          </div>
        </div>
      </div>
    </div>
  );
};