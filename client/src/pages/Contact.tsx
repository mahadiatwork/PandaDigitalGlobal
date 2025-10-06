import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@pandadigital.com",
    href: "mailto:contact@pandadigital.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 138 0000 0000",
    href: "tel:+861380000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Shanghai, China",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

const socialLinks = [
  { icon: SiLinkedin, label: "LinkedIn", url: "#" },
  { icon: SiX, label: "X", url: "#" },
  { icon: SiFacebook, label: "Facebook", url: "#" },
  { icon: SiInstagram, label: "Instagram", url: "#" },
];

export default function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business global? Let's discuss how we can help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 h-full">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                          data-testid={`link-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium" data-testid={`text-${info.label.toLowerCase()}`}>
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
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
                        data-testid={`link-social-${social.label.toLowerCase()}`}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
