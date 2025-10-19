import { MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola Isley, me gustaría cotizar un servicio de maquillaje.'
  );
  const whatsappNumber = '573222431077'; // Replace with actual number

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-6">
            Contáctame
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Estoy aquí para ayudarte a lucir increíble. Contáctame para cotizar tu servicio
          </p>

          {/* WhatsApp Button */}
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-glow px-10 py-6 text-xl font-medium rounded-full mb-10 transition-smooth hover:scale-105"
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
            }
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Cotiza tu servicio por WhatsApp
          </Button>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/isleybymakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-smooth group"
            >
              <div className="p-4 rounded-full bg-muted transition-smooth group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--instagram-start))] group-hover:to-[hsl(var(--instagram-end))] group-hover:scale-110">
                <Instagram className="w-6 h-6 transition-smooth group-hover:text-white" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/beba.guillenparra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-smooth group"
            >
              <div className="p-4 rounded-full bg-muted transition-smooth group-hover:bg-[hsl(var(--facebook))] group-hover:scale-110">
                <Facebook className="w-6 h-6 transition-smooth group-hover:text-white" />
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-smooth group"
            >
              <div className="p-4 rounded-full bg-muted transition-smooth group-hover:bg-[hsl(var(--whatsapp))] group-hover:scale-110">
                <MessageCircle className="w-6 h-6 transition-smooth group-hover:text-white" />
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
