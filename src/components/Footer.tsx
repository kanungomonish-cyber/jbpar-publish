import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About JBPAR</h3>
            <p className="text-sm opacity-90">
              An international, peer-reviewed, multidisciplinary, open-access journal dedicated to
              advancing the integration of academic research and business practice.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="/about" className="hover:underline">Aim & Scope</a></li>
              <li><a href="/guidelines" className="hover:underline">Author Guidelines</a></li>
              <li><a href="/current-issue" className="hover:underline">Current Issue</a></li>
              <li><a href="/editors-reviewers" className="hover:underline">Editors & Reviewers</a></li>
              <li><a href="/submit" className="hover:underline">Submit Manuscript</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <a href="mailto:editor.jbpar@gmail.com" className="hover:underline">
                  editor.jbpar@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <a href="tel:+919039960573" className="hover:underline">
                  +91 90399 60573
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>A88, Vaibhav Nagar, Kanadia Road, Indore, MP 452017</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/journal-of-business-practice-and-academic-research-jbpar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1BUF2UNMad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/editor.jbpar?utm_source=qr&igsh=Nml0NzFpMG51Z29l" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-center text-sm opacity-90">
            <p>© {new Date().getFullYear()} Journal of Business Practice and Academic Research. All rights reserved.</p>
            <p className="mt-1">Editorial Chief</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
