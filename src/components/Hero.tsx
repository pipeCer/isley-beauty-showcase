import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola Isley, me gustaría cotizar un servicio de maquillaje.'
  );
  const whatsappNumber = '573222431077'; // Replace with actual number

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-elegant font-bold text-white mb-6 drop-shadow-lg">
            Realza tu belleza con un toque profesional
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 font-light drop-shadow-md">
            Maquillaje y estilismo por Isley Guillén
          </p>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-glow px-8 py-6 text-lg font-medium rounded-full transition-smooth hover:scale-105"
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
            }
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicita tu asesoría
          </Button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
