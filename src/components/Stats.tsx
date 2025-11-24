import { TreePine, Factory, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: TreePine,
    value: "627 Hectares",
    description: "La plus grande ferme de dattes Mejhoul au Maroc",
  },
  {
    icon: Factory,
    value: "5 Hectares",
    description: "Une unité de conditionnement à la pointe de l'innovation",
  },
  {
    icon: Award,
    value: "Innovant",
    description: "Lauréat du prestigieux Prix Khalifa pour le palmier dattier",
  },
  {
    icon: Globe,
    value: "Global",
    description: "Fort réseau commercial au Maroc et à l'international",
  },
];

export const Stats = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-8 rounded-lg bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-primary">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground italic">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
