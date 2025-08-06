import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-display font-black text-text-primary">
              assessoria <span className="text-gradient-gold bg-clip-text bg-gradient-gold">boss</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#depoimentos" className="text-text-secondary hover:text-gold transition-colors duration-300 font-medium">
              Depoimentos
            </a>
            <a href="#clientes" className="text-text-secondary hover:text-gold transition-colors duration-300 font-medium">
              Clientes
            </a>
            <a href="#sobre" className="text-text-secondary hover:text-gold transition-colors duration-300 font-medium">
              Sobre nós
            </a>
            <Button 
              className="bg-gradient-gold hover:bg-gradient-gold/90 text-background font-bold px-6 py-2 rounded-xl shadow-glow-gold transition-all duration-300 hover:scale-105"
            >
              Contratar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#depoimentos" className="text-text-secondary hover:text-gold transition-colors duration-300 font-medium">
                Depoimentos
              </a>
              <a href="#clientes" className="text-text-secondary hover:text-gold transition-colors duration-300 font-medium">
                Clientes
              </a>
              <a href="#sobre" className="text-text-secondary hover:text-gold transition-colors duration-300 font-medium">
                Sobre nós
              </a>
              <Button 
                className="bg-gradient-gold hover:bg-gradient-gold/90 text-background font-bold px-6 py-2 rounded-xl shadow-glow-gold transition-all duration-300 w-fit"
              >
                Contratar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;