import React from 'react';
import { Sparkles, PartyPopper, Rocket } from 'lucide-react';

interface NewYearGreetingProps {
  recipient: string;
  sender: string;
}

export const NewYearGreeting: React.FC<NewYearGreetingProps> = ({ recipient, sender }) => {
  const capitalizeFirstLetter = (str: string): string => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-4 mb-8">
        <PartyPopper className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 animate-bounce-slight" />
        <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
        <Rocket className="w-10 h-10 md:w-14 md:h-14 text-purple-500 animate-bounce-slight" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
        ¡Feliz 2025!
      </h1>
      <p className="text-2xl md:text-4xl text-purple-700 mb-8">
        {capitalizeFirstLetter(recipient)}
      </p>
      <div className="space-y-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        <p>
          Que este nuevo año te traiga infinitas posibilidades y momentos inolvidables.
        </p>
        <p>
          Que cada día esté lleno de éxitos, alegría y nuevas aventuras.
          Que tus sueños se hagan realidad y que la felicidad sea tu compañera constante
          en este viaje llamado 2025.
        </p>
        <p className="text-xl md:text-2xl font-semibold mt-6 text-blue-600">
          Con los mejores deseos, {capitalizeFirstLetter(sender)}
        </p>
      </div>
    </div>
  );
};