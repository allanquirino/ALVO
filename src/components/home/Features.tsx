import { motion } from "framer-motion";
import { Truck, Shield, RefreshCw, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Envio Expresso",
    description: "Entrega rápida e segura para todo o Brasil",
  },
  {
    icon: Shield,
    title: "Garantia Premium",
    description: "Garantia estendida em todos os produtos",
  },
  {
    icon: RefreshCw,
    title: "Troca Facilitada",
    description: "30 dias para troca sem complicações",
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Múltiplas opções de pagamento",
  },
];

export const Features = () => {
  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="container-luxury px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
