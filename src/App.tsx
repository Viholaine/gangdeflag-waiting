import React from 'react';
import { Flag, Mail, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Flag className="h-16 w-16 text-orange-600" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Drapeaux Feutrés
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Bientôt disponible : Une collection unique de drapeaux décoratifs en feutrine,
            faits main avec passion et créativité.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Notre boutique ouvre prochainement
            </h2>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Me prévenir
                </button>
              </div>
            </form>
          </div>

          <div className="flex justify-center gap-8 text-gray-600">
            <a href="mailto:contact@drapeauxfeutres.com" className="hover:text-orange-600 transition flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
            <a href="https://instagram.com" className="hover:text-orange-600 transition flex items-center gap-2">
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=500"
            alt="Felt craft"
            className="rounded-lg shadow-md aspect-square object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1629976002376-3bccae77037d?auto=format&fit=crop&q=80&w=500"
            alt="Handmade decoration"
            className="rounded-lg shadow-md aspect-square object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?auto=format&fit=crop&q=80&w=500"
            alt="Cozy interior"
            className="rounded-lg shadow-md aspect-square object-cover hidden md:block"
          />
          <img 
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=500"
            alt="Modern decoration"
            className="rounded-lg shadow-md aspect-square object-cover hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default App;