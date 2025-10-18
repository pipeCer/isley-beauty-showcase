import { Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <h3 className="text-2xl md:text-3xl font-elegant font-semibold">Isley Guillén</h3>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-whatsapp transition-smooth"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-background/70 text-sm text-center">
            © 2025 Isley Guillén. Todos los derechos reservados.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/70 hover:text-primary transition-smooth text-sm font-medium"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
