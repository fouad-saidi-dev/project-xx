import farmImage from "@/assets/farm-aerial.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";


export const About = () => {


  const { ref, isVisible } = useScrollAnimation();

  return (
    // <section id="about" className="py-20 bg-background">
    <section 
      ref={ref}
      id="about" 
      className={`py-20 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary">
              Qui sommes-nous ?
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Lancée en 2013, FRUITS HADIYAT SAHRA est la filiale agricole du <strong>Groupe Saham</strong> spécialisée 
                dans la production et le conditionnement de dattes Mejhoul. FRUITS HADIYAT SAHRA opère la plus grande 
                ferme de palmiers dattiers au Maroc, située dans le berceau de la datte Mejhoul, dans la 
                province d'Arfoud.
              </p>
              <p>
                FRUITS HADIYAT SAHRA et l'ensemble de nos collaborateurs sont portés par la volonté de{" "}
                <strong>redonner toutes ses lettres de noblesse au terroir qui a vu naître la datte Mejhoul</strong>.
              </p>
              <p>
                Nous mettons notre expertise et notre passion au service de la renaissance d'un patrimoine agricole 
                exceptionnel. Notre engagement envers la qualité et la durabilité nous permet de proposer des 
                produits d'excellence reconnus à l'international.
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                En savoir plus →
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={farmImage} 
                alt="FRUITS HADIYAT SAHRA Farm Aerial View" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
