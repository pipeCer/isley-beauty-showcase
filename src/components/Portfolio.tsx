import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const portfolioImages = [
  { 
    src: portfolio1, 
    alt: 'Maquillaje de novia',
    description: 'Look nupcial elegante con acabado natural y radiante, perfecto para un día inolvidable.'
  },
  { 
    src: portfolio2, 
    alt: 'Maquillaje de gala',
    description: 'Maquillaje sofisticado para eventos especiales con técnicas de alta definición.'
  },
  { 
    src: portfolio3, 
    alt: 'Maquillaje natural',
    description: 'Estilo fresco y luminoso que realza tu belleza natural con toques sutiles.'
  },
  { 
    src: portfolio4, 
    alt: 'Maquillaje para evento',
    description: 'Look glamuroso y duradero ideal para fotografías y celebraciones especiales.'
  },
];

const Portfolio = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? portfolioImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === portfolioImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

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
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-elegant text-xl font-semibold mb-2">{image.alt}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent 
          className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/10 hover:text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Image and Description */}
            {selectedImageIndex !== null && (
              <div className="flex flex-col items-center justify-center w-full h-full p-8">
                <div className="relative max-w-5xl max-h-[70vh] w-full">
                  <img
                    src={portfolioImages[selectedImageIndex].src}
                    alt={portfolioImages[selectedImageIndex].alt}
                    className="w-full h-full object-contain rounded-lg shadow-glow"
                  />
                </div>
                <div className="mt-8 max-w-3xl text-center">
                  <h3 className="font-elegant text-3xl font-semibold text-white mb-4">
                    {portfolioImages[selectedImageIndex].alt}
                  </h3>
                  <p className="text-lg text-white/80">
                    {portfolioImages[selectedImageIndex].description}
                  </p>
                  <p className="text-sm text-white/60 mt-4">
                    {selectedImageIndex + 1} / {portfolioImages.length}
                  </p>
                </div>
              </div>
            )}

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/10 hover:text-white"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
