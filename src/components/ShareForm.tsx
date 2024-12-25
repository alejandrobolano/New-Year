import React, { useState } from 'react';
import { Copy, Check, Sparkles, Rocket } from 'lucide-react';
import { createShareableUrl } from '../utils/urlParams';

export const ShareForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = createShareableUrl(recipient, sender);
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bottom-24 flex-grow flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col gap-4">
        <div className="flex justify-center items-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
          <p><strong>¡Comparte tu cariño con los demás!</strong></p>          
          <Rocket className="w-10 h-10 md:w-14 md:h-14 text-purple-500 animate-bounce-slight" />
        </div>
        <input
          type="text"
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
          placeholder="Nombre del destinatario"
        />
        <input
          type="text"
          onChange={(e) => setSender(e.target.value)}
          className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"
          placeholder="Tu nombre"
        />
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-transparent bg-gradient-to-b from-blue-500 to-purple-500 hover:from-blue-200 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 bg-[length:200%_auto] hover:bg-right relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-100 opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative flex items-center justify-center gap-2 text-white">
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Compartir tarjeta navideña</span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};