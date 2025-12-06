import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

const categoryImages: Record<string, string> = {
  relogios: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
  acessorios: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bolsas: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  joias: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
};

export const Categories = () => {
  return (
    <section className="section-padding bg-graphite">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs text-primary tracking-[0.3em] uppercase mb-4 block">
            Explore
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Nossas <span className="text-gradient font-medium">Categorias</span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/produtos?categoria=${category.slug}`}
                className="group relative block aspect-[16/9] overflow-hidden rounded-xl"
              >
                {/* Image */}
                <motion.img
                  src={categoryImages[category.slug]}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Explorar coleção
                      </p>
                    </div>
                    <motion.div
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
