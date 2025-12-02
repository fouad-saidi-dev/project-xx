import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import premiumMedjool from "@/assets/products/premium-medjool.jpg";
import organicMedjool from "@/assets/products/organic-medjool.jpg";
import gourmetSelection from "@/assets/products/gourmet-selection.jpg";
import classicMedjool from "@/assets/products/classic-medjool.jpg";
import giftBoxes from "@/assets/products/gift-boxes.jpg";
import bulkProfessional from "@/assets/products/bulk-professional.jpg";
import premiumAlmonds from "@/assets/products/premium-almonds.jpg";
import qualityWalnuts from "@/assets/products/quality-walnuts.jpg";
import roastedPistachios from "@/assets/products/roasted-pistachios.jpg";

const products = [
  {
    name: "Dattes Mejhool",
    category: "Luxury Selection",
    description: "Nos dattes Mejhoul premium sélectionnées pour leur taille exceptionnelle et leur saveur incomparable. Idéales pour les occasions spéciales.",
    features: ["Taille jumbo", "Saveur intense", "Texture fondante", "Sélection manuelle"],
    price: "Premium Range",
    image: premiumMedjool,
  },
  {
    name: "Amandes Premium",
    category: "Fruits Secs",
    description: "Amandes de qualité supérieure, riches en nutriments et au goût délicieux. Parfaites pour un snack sain.",
    features: ["Riche en protéines", "Source de magnésium", "Antioxydants naturels", "Sans additifs"],
    price: "Premium Range",
    image: premiumAlmonds,
  },
  {
    name: "Noix de Qualité",
    category: "Fruits Secs",
    description: "Noix fraîches et croquantes, sources d'oméga-3 et de vitamines essentielles. Idéales pour la santé cardiovasculaire.",
    features: ["Oméga-3", "Santé du cerveau", "Fraîcheur garantie", "Naturellement nutritives"],
    price: "Health Range",
    image: qualityWalnuts,
  },
  {
    name: "Pistaches Grillées",
    category: "Fruits Secs",
    description: "Pistaches savoureuses et nutritives, parfaites pour un snack sain. Riches en fibres et antioxydants.",
    features: ["Riche en fibres", "Antioxydants", "Source de vitamines", "Goût authentique"],
    price: "Gourmet Range",
    image: roastedPistachios,
  },
];

const Products = () => {
  return (
    <>
      <SEO
        title="Nos Produits - Dattes Mejhool, Amandes, Noix et Pistaches"
        description="Découvrez notre gamme complète de produits premium : dattes Mejhool jumbo, amandes naturelles, noix riches en oméga-3 et pistaches nutritives. Qualité garantie."
        keywords="fruits hadiayt sahra, dattes errachidia, dattes mejhoul, dattes maroc, dattes sahra, dattes premium, fruits secs, amandes, noix de cajou, pistaches, graines, produits naturels maroc, boutique dattes maroc, vente dattes en ligne, fruits secs maroc, datte tafilalet, datte arfoud, datte tafilat, datte sahra, tmar, tamar, tamar mejhoul, tamar maroc, tamar sahra, louz errachidia, louz maroc, louz sahra, noix de cajou maroc, noix de cajou sahra, fistik, fistik maroc, fistik sahra, graines maroc, graines sahra, pistaches maroc, pistaches sahra, amandes maroc, amandes sahra, fruits secs sahra, fruits secs errachidia, fruits secs tafilalet, fruits secs arfoud, fruits secs tafilat, fruits secs tamar, fruitshadiyatsahra, datteserrachidia, dattesmejhoul, dattesmaroc, achat dattes, vente dattes, datte de qualité, datte premium, datte naturelle, datte bio, datte fraîche, datte sucrée, amande de qualité, noix de cajou de qualité, pistaches de qualité, amande premium, noix de cajou premium, pistaches premium, amande naturelle, noix de cajou naturelle, pistaches naturelle, amande bio, noix de cajou bio, pistaches bio, achat fruits secs, vente fruits secs, fruits secs de qualité, fruits secs premium, fruits secs naturels, fruits secs bio, grgaa3, grgaa3 maroc, grgaa3 sahra, grgaa3 errachidia, grgaa3 tafilalet, grgaa3 arfoud, grgaa3 tafilat, grgaa3 tamar, casar, casablanca, garage 3lal, tmar garage 3lal, تمور المجهول, تمور الرشيدية, تمور المغرب, تمور الصحراء, تمور صحراوية, شراء التمور, متجر تمور, تمور أرفود, تمور تافيلالت, فواكه هدية الصحراء, شراء تمور اونلاين, افضل اسعار التمور, منتجات صحراوية طبيعية, تمر, تمور, شراء التمر, مكسرات, فواكه جافة, شراء تمور أونلاين, أفضل أسعار التمور, تمر المجهول المغربي"
      />
      <main className="min-h-screen">
        <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
              Nos Produits
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez notre gamme complète de dattes Mejhoul d'exception
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card border-border group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
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
                  <CardTitle className="font-playfair text-2xl text-primary group-hover:text-accent transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
    </>
  );
};

export default Products;
