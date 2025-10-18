import { useState, useEffect } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-2xl md:text-3xl font-elegant font-semibold text-white drop-shadow-lg hover:text-white/80 transition-smooth"
          >
            Isley Guillén
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('inicio')}
              className="text-white drop-shadow-md hover:text-white/80 transition-smooth font-medium"
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('servicios')}
              className="text-white drop-shadow-md hover:text-white/80 transition-smooth font-medium"
            >
              Servicios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('portafolio')}
              className="text-white drop-shadow-md hover:text-white/80 transition-smooth font-medium"
            >
              Portafolio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('sobre-mi')}
              className="text-white drop-shadow-md hover:text-white/80 transition-smooth font-medium"
            >
              Sobre mí
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contacto')}
              className="text-white drop-shadow-md hover:text-white/80 transition-smooth font-medium"
            >
              Contacto
            </Button>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 drop-shadow-md hover:text-white transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 drop-shadow-md hover:text-white transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
