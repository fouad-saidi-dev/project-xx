import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Sparkles, TreePine, Factory, Globe, CheckCircle2 } from "lucide-react";

const Quality = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
              Notre Engagement Qualité
            </h1>
            <p className="text-xl text-muted-foreground">
              Excellence, innovation et durabilité au cœur de notre production
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Award,
                title: "Prix Khalifa",
                description: "Lauréat du prestigieux Prix Khalifa pour le palmier dattier, reconnaissance internationale de notre excellence"
              },
              {
                icon: Shield,
                title: "Certifications",
                description: "Certifications bio internationales et conformité aux standards les plus exigeants"
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Technologies de pointe pour garantir la meilleure qualité à chaque étape"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                    </div>
                    <CardTitle className="font-playfair text-2xl text-primary">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="bg-secondary rounded-lg p-12 mb-20">
            <h2 className="font-playfair font-bold text-4xl text-primary text-center mb-12">
              Nos Atouts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TreePine,
                  title: "627 Hectares",
                  description: "La plus grande ferme de dattes Mejhoul au Maroc"
                },
                {
                  icon: Factory,
                  title: "5 Hectares",
                  description: "Une unité de conditionnement à la pointe de l'innovation"
                },
                {
                  icon: Globe,
                  title: "Réseau Global",
                  description: "Fort réseau commercial au Maroc et à l'international"
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-card rounded-lg p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <Icon className="w-12 h-12 text-accent" />
                    </div>
                    <h3 className="font-playfair font-bold text-2xl text-primary">
                      {stat.title}
                    </h3>
                    <p className="text-muted-foreground italic text-sm">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair font-bold text-3xl text-primary mb-8 text-center">
              Notre Processus de Qualité
            </h2>
            <div className="space-y-4">
              {[
                "Sélection rigoureuse des palmiers dattiers",
                "Surveillance constante de la croissance",
                "Récolte au moment optimal de maturité",
                "Tri manuel par des experts qualifiés",
                "Conditionnement dans des installations modernes",
                "Contrôle qualité à chaque étape",
                "Traçabilité complète du champ à l'assiette",
                "Respect des normes internationales"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Quality;
