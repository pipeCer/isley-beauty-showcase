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
              href="https://www.instagram.com/isleybymakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-smooth"
              aria-label="Instagram"
            >
              <div className="relative p-2 rounded-lg transition-smooth group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--instagram-start))] group-hover:to-[hsl(var(--instagram-end))] group-hover:scale-110">
                <Instagram 
                  className="w-5 h-5 text-background/80 transition-smooth group-hover:text-white" 
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/beba.guillenparra"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-smooth"
              aria-label="Facebook"
            >
              <div className="p-2 rounded-lg transition-smooth group-hover:bg-[hsl(var(--facebook))] group-hover:scale-110">
                <Facebook className="w-5 h-5 text-background/80 transition-smooth group-hover:text-white" />
              </div>
            </a>
            <a
              href="https://wa.me/573222431077"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-smooth"
              aria-label="WhatsApp"
            >
              <div className="p-2 rounded-lg transition-smooth group-hover:bg-[hsl(var(--whatsapp))] group-hover:scale-110">
                <MessageCircle className="w-5 h-5 text-background/80 transition-smooth group-hover:text-white" />
              </div>
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
