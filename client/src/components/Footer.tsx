import { Link } from "wouter";
import { SiLinkedin, SiX, SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    services: [
      { label: "Social Media Marketing", path: "/" },
      { label: "Website Development", path: "/" },
      { label: "Sales Generation", path: "/" },
      { label: "AI Agent Services", path: "/" },
    ],
    social: [
      { icon: SiLinkedin, label: "LinkedIn", url: "#" },
      { icon: SiX, label: "X", url: "#" },
      { icon: SiFacebook, label: "Facebook", url: "#" },
      { icon: SiInstagram, label: "Instagram", url: "#" },
    ],
  };

  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent mb-4">
              Panda Digital
            </div>
            <p className="text-sm text-muted-foreground">
              Helping Chinese companies succeed in the global market.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-email">
              contact@pandadigital.com
            </p>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-phone">
              +86 138 0000 0000
            </p>
            <div className="flex gap-2">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="rounded-md"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Panda Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
