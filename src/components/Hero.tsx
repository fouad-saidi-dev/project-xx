import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-nuts-dates.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-6">
            <h1 className="font-playfair font-bold text-5xl md:text-7xl leading-tight">
              FRUITS HADIYAT SAHRA
            </h1>
            <p className="font-playfair text-3xl md:text-4xl">
              L'excellence du Mejhoul marocain
            </p>
            <p className="text-lg text-primary-foreground/90 max-w-xl">
              Experience the finest Mejhool dates from the largest sustainable farm in Morocco. 
              Premium quality, natural sweetness, and exceptional taste.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link to="/quality">Nos Atouts</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">Nos Produits</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
