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
        keywords="fruits hadiayt sahra, dattes errachidia, dattes mejhoul, dattes maroc, dattes sahra, dattes premium, fruits secs, amandes, noix de cajou, pistaches, graines, produits naturels maroc, boutique dattes maroc, vente dattes en ligne, fruits secs maroc, datte tafilalet, datte arfoud, datte tafilat, datte sahra, tmar, tamar, tamar mejhoul, tamar maroc, tamar sahra, louz errachidia, louz maroc, louz sahra, noix de cajou maroc, noix de cajou sahra, fistik, fistik maroc, fistik sahra, graines maroc, graines sahra, pistaches maroc, pistaches sahra, amandes maroc, amandes sahra, fruits secs sahra, fruits secs errachidia, fruits secs tafilalet, fruits secs arfoud, fruits secs tafilat, fruits secs tamar, fruitshadiyatsahra, datteserrachidia, dattesmejhoul, dattesmaroc, achat dattes, vente dattes, datte de qualité, datte premium, datte naturelle, datte bio, datte fraîche, datte sucrée, amande de qualité, noix de cajou de qualité, pistaches de qualité, amande premium, noix de cajou premium, pistaches premium, amande naturelle, noix de cajou naturelle, pistaches naturelle, amande bio, noix de cajou bio, pistaches bio, achat fruits secs, vente fruits secs, fruits secs de qualité, fruits secs premium, fruits secs naturels, fruits secs bio, grgaa3, grgaa3 maroc, grgaa3 sahra, grgaa3 errachidia, grgaa3 tafilalet, grgaa3 arfoud, grgaa3 tafilat, grgaa3 tamar, casar, casablanca, garage 3lal, tmar garage 3lal, تمور المجهول, تمور الرشيدية, تمور المغرب, تمور الصحراء, تمور صحراوية, شراء التمور, متجر تمور, تمور أرفود, تمور تافيلالت, فواكه هدية الصحراء, شراء تمور اونلاين, افضل اسعار التمور, منتجات صحراوية طبيعية, تمر, تمور, شراء التمر, مكسرات, فواكه جافة, شراء تمور أونلاين, أفضل أسعار التمور, تمر المجهول المغربي"
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
