import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="FRUITS HADIYAT SAHRA" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-playfair font-bold text-xl">FRUITS HADIYAT SAHRA</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              L'excellence du Mejhoul marocain depuis 2013
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/about" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="/quality" className="hover:text-accent transition-colors">Qualité</a></li>
              <li><a href="/products" className="hover:text-accent transition-colors">Produits</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>NR 09 RUE ALI IBEN ABI TALEB NOUVELLE CITE ARFOUD, Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="https://wa.me/212602415793" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +212 602 415 793
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@fruitshadiyatsahra.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/fruits_hadiyat_sahra?igsh=MTZjbTdpcnh2M3d6Mw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 FRUITS HADIYAT SAHRA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
