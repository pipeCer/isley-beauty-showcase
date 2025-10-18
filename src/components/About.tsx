import aboutPortrait from '@/assets/about-portrait.jpg';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 gradient-elegant rounded-lg opacity-20 blur-xl" />
              <img
                src={aboutPortrait}
                alt="Isley Guillén"
                className="relative rounded-lg shadow-glow w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-6">
              Sobre mí
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Soy <span className="font-semibold text-foreground">Isley Guillén</span>, 
                maquilladora profesional venezolana. Desde hace varios años me apasiona el arte 
                de resaltar la belleza natural de cada persona.
              </p>
              <p>
                Llegué a <span className="font-semibold text-foreground">Cali, Colombia</span>, 
                para perfeccionar mis habilidades en el mundo de la estética y aprender de nuevas 
                tendencias internacionales.
              </p>
              <p>
                Mi filosofía es ofrecer una experiencia personalizada donde cada detalle resalte 
                tu esencia con <span className="font-semibold text-foreground">elegancia y naturalidad</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
