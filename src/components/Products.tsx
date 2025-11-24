import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import premiumMedjool from "@/assets/products/premium-medjool.jpg";
import premiumAlmonds from "@/assets/products/premium-almonds.jpg";
import qualityWalnuts from "@/assets/products/quality-walnuts.jpg";
import roastedPistachios from "@/assets/products/roasted-pistachios.jpg";

const products = [
  {
    name: "Dattes Mejhool",
    category: "Luxury Selection",
    description: "Nos dattes Mejhoul premium sélectionnées pour leur taille exceptionnelle et leur saveur incomparable.",
    features: ["Large Size", "Natural Sweet", "Premium Quality"],
    image: premiumMedjool,
  },
  {
    name: "Amandes Premium",
    category: "Fruits Secs",
    description: "Amandes de qualité supérieure, riches en nutriments et au goût délicieux.",
    features: ["Natural", "Rich in Protein", "Heart Healthy"],
    image: premiumAlmonds,
  },
  {
    name: "Noix de Qualité",
    category: "Fruits Secs",
    description: "Noix fraîches et croquantes, sources d'oméga-3 et de vitamines essentielles.",
    features: ["Omega-3", "Brain Food", "Fresh"],
    image: qualityWalnuts,
  },
  {
    name: "Pistaches",
    category: "Fruits Secs",
    description: "Pistaches savoureuses et nutritives, parfaites pour un snack sain.",
    features: ["High Fiber", "Antioxidants", "Nutrient Dense"],
    image: roastedPistachios,
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
            Nos marques
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre gamme de produits d'exception, issus de notre savoir-faire 
            et de notre engagement envers la qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card border-border group overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-accent-foreground">
                  {product.category}
                </Badge>
                <CardTitle className="font-playfair text-xl text-primary group-hover:text-accent transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="border-primary/30 text-primary text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
