import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <SEO
        title="Contact - Contactez FRUITS HADIYAT SAHRA"
        description="Contactez-nous pour vos commandes de dattes Mejhool et fruits secs. WhatsApp: +212 602 415 793. Arfoud, Maroc. Réponse rapide garantie."
        keywords="contact fuits hadiyat sahra, commander dattes mejhool, whatsapp fruits secs, Arfoud maroc"
      />
      <main className="min-h-screen">
        <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground">
              Notre équipe est à votre disposition pour répondre à vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-primary">
                    Informations de Contact
                  </CardTitle>
                  <CardDescription>
                    Plusieurs façons de nous joindre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground text-sm">
                        NR 09 RUE ALI IBEN ABI TALEB NOUVELLE CITE ARFOUD<br />
                        Maroc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone / WhatsApp</h3>
                      <a 
                        href="https://wa.me/212602415793" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-accent transition-colors"
                      >
                        +212 602 415 793
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        contact@hadiyatsahra.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground text-sm">
                        Lundi - Vendredi: 9h00 - 18h00<br />
                        Samedi: 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary">
                  Envoyez-nous un Message
                </CardTitle>
                <CardDescription>
                  Nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nom complet
                    </label>
                    <Input 
                      id="name"
                      placeholder="Votre nom"
                      required
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Téléphone
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+212 XXX XXX XXX"
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Décrivez votre demande..."
                      rows={5}
                      required
                      className="border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
    </>
  );
};

export default Contact;
