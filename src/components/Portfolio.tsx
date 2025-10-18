import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const portfolioImages = [
  { src: portfolio1, alt: 'Maquillaje de novia' },
  { src: portfolio2, alt: 'Maquillaje de gala' },
  { src: portfolio3, alt: 'Maquillaje natural' },
  { src: portfolio4, alt: 'Maquillaje para evento' },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portafolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
            Mi Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una muestra de los resultados que puedo lograr para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-smooth cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <img
            src={selectedImage || ''}
            alt="Portfolio"
            className="w-full h-auto rounded-lg shadow-glow"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
