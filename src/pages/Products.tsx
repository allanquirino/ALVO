import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Destaque" },
  { value: "newest", label: "Mais Recentes" },
  { value: "price-asc", label: "Menor Preço" },
  { value: "price-desc", label: "Maior Preço" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "newest":
        result = result.filter((p) => p.new).concat(result.filter((p) => !p.new));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result = result.filter((p) => p.featured).concat(result.filter((p) => !p.featured));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-graphite">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                Nossos <span className="text-gradient font-medium">Produtos</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Descubra nossa coleção completa de produtos premium, selecionados com cuidado e excelência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="container-luxury px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Categories */}
              <div className="hidden md:flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                    !selectedCategory
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  )}
                >
                  Todos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                      selectedCategory === cat.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                className="md:hidden"
                onClick={() => setShowFilters(true)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
              </Button>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-secondary border border-border rounded-lg px-4 py-2 pr-10 text-sm text-foreground focus:outline-none focus:border-primary cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Limpar filtro
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Nenhum produto encontrado.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setShowFilters(false)}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">Categoria</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setShowFilters(false);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    !selectedCategory
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  Todos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setShowFilters(false);
                    }}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedCategory === cat.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Products;
