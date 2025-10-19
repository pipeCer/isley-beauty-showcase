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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md border-b border-border/30 shadow-soft'
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className={`text-2xl md:text-3xl font-elegant font-semibold transition-smooth ${
              isScrolled 
                ? 'text-foreground hover:text-primary' 
                : 'text-white drop-shadow-lg hover:text-white/80'
            }`}
          >
            Isley Guillén
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('inicio')}
              className={`transition-smooth font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10'
                  : 'text-white drop-shadow-md hover:text-[hsl(var(--rose-gold))] hover:bg-white/10'
              }`}
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('servicios')}
              className={`transition-smooth font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10'
                  : 'text-white drop-shadow-md hover:text-[hsl(var(--rose-gold))] hover:bg-white/10'
              }`}
            >
              Servicios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('portafolio')}
              className={`transition-smooth font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10'
                  : 'text-white drop-shadow-md hover:text-[hsl(var(--rose-gold))] hover:bg-white/10'
              }`}
            >
              Portafolio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('sobre-mi')}
              className={`transition-smooth font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10'
                  : 'text-white drop-shadow-md hover:text-[hsl(var(--rose-gold))] hover:bg-white/10'
              }`}
            >
              Sobre mí
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contacto')}
              className={`transition-smooth font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10'
                  : 'text-white drop-shadow-md hover:text-[hsl(var(--rose-gold))] hover:bg-white/10'
              }`}
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
              className="group transition-smooth"
              aria-label="Instagram"
            >
              <div className="relative p-2 rounded-lg transition-smooth group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--instagram-start))] group-hover:to-[hsl(var(--instagram-end))] group-hover:scale-110">
                <Instagram 
                  className="w-5 h-5 transition-smooth group-hover:text-white" 
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--instagram-start)), hsl(var(--instagram-end)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-smooth"
              aria-label="Facebook"
            >
              <div className="p-2 rounded-lg transition-smooth group-hover:bg-[hsl(var(--facebook))] group-hover:scale-110">
                <Facebook className="w-5 h-5 text-[hsl(var(--facebook))] transition-smooth group-hover:text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
