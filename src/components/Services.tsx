import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import serviceMakeup from '@/assets/service-makeup.jpg';
import serviceHair from '@/assets/service-hair.jpg';
import serviceBlower from '@/assets/service-blower.jpg';
import servicePersonalized from '@/assets/service-personalized.jpg';

const services = [
  {
    title: 'Maquillaje Profesional',
    description: 'Maquillaje personalizado para eventos especiales, bodas y sesiones fotográficas.',
    image: serviceMakeup,
  },
  {
    title: 'Peinados',
    description: 'Estilismo capilar elegante para complementar tu look en cualquier ocasión.',
    image: serviceHair,
  },
  {
    title: 'Blower',
    description: 'Secado y peinado profesional para un acabado impecable y duradero.',
    image: serviceBlower,
  },
  {
    title: 'Servicios Personalizados',
    description: 'Paquetes a medida diseñados específicamente para tus necesidades.',
    image: servicePersonalized,
  },
];

const Services = () => {
  const whatsappMessage = encodeURIComponent(
    'Hola Isley, me gustaría cotizar un servicio de maquillaje.'
  );
  const whatsappNumber = '1234567890'; // Replace with actual number

  return (
    <section id="servicios" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
            Mis Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los servicios profesionales que ofrezco para realzar tu belleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-elegant text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground transition-smooth"
                  onClick={() =>
                    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Cotizar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
