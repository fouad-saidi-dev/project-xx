import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import farmImage from "@/assets/farm-aerial.jpg";
import { Award, Heart, Leaf, Users } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-muted-foreground">
              Une passion pour l'excellence et le terroir marocain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-3xl text-primary">
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
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={farmImage} 
                  alt="FRUITS HADIYAT SAHRA Farm Aerial View" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "Un engagement total envers la qualité et l'excellence"
              },
              {
                icon: Leaf,
                title: "Durabilité",
                description: "Pratiques agricoles respectueuses de l'environnement"
              },
              {
                icon: Users,
                title: "Expertise",
                description: "Une équipe dédiée de professionnels passionnés"
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Technologies de pointe et méthodes modernes"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center space-y-4 p-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
