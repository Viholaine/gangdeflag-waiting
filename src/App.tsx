import React from 'react';
import { Mail, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="\public\Gang-de-flag_main-logo.jpg" 
              alt="Gang de Flag Logo" 
              className="h-24 md:h-32"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-primary/80 mb-12">
            HEY,<br/>
            On arrive bientôt !! <br/ ><br/>
            Une gang unique de fanions, qui claquent au vent, faits dans le nord de la France.
          </p>

          <div className="flex justify-center gap-8 text-primary/70">
            <a href="mailto:contact@gangdeflag.com" className="hover:text-secondary transition flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
            <a href="https://instagram.com/gangdeflag" className="hover:text-secondary transition flex items-center gap-2">
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;