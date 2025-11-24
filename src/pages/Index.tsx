import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Accueil - Dattes Mejhool et Fruits Secs Premium"
        description="FRUITS HADIYAT SAHRA - Producteur de dattes Mejhool premium, amandes, noix et pistaches à Arfoud, Maroc. Qualité exceptionnelle depuis 2013. Contactez-nous sur WhatsApp."
        keywords="dattes mejhool maroc, fruits secs premium, amandes arfoud, noix qualité, pistaches maroc, fruits hadiyat sahra"
      />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Stats />
        <About />
        <Products />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
