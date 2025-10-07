import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import ceoImage from "@assets/stock_images/brown_skin_man_ceo_b_53443c85.jpg";
import mdImage from "@assets/stock_images/brown_skin_man_manag_05858585.jpg";
import ctoImage from "@assets/stock_images/brown_skin_man_cto_t_b0f4ade6.jpg";

const management = [
  {
    name: "Moinul Islam",
    role: "CEO & Managing Director",
    email: "admin@pandadigital.com",
    image: ceoImage,
  },
  {
    name: "Shishir",
    role: "Managing Director",
    email: "md@pandadigital.com",
    image: mdImage,
  },
  {
    name: "MD MAHADI HASAN",
    role: "Chief Technology Officer",
    email: "cto@pandadigital.com",
    image: ctoImage,
  },
];

export function ManagementSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving our global success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {management.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300"
                data-testid={`card-management-${index}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-1" data-testid={`text-management-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3" data-testid={`text-management-role-${index}`}>
                    {member.role}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-management-email-${index}`}
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
