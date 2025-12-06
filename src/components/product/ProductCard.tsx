import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.variants.length > 0) {
      addToCart(product, product.variants[0], 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/produto/${product.id}`} className="block group">
        <div className="card-luxury">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.new && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Novo
                </span>
              )}
              {product.originalPrice && (
                <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <motion.button
              className={cn(
                "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all",
                isFavorite
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-card"
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
            </motion.button>

            {/* Quick Add */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleQuickAdd}
                className="w-full py-3 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-4 w-4" />
                Adicionar ao Carrinho
              </button>
            </motion.div>
          </div>

          {/* Info */}
          <div className="p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-lg font-semibold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Colors */}
            {product.variants.some((v) => v.colorHex) && (
              <div className="flex gap-2 mt-4">
                {product.variants
                  .filter((v) => v.colorHex)
                  .slice(0, 4)
                  .map((variant) => (
                    <div
                      key={variant.id}
                      className="w-5 h-5 rounded-full border border-border"
                      style={{ backgroundColor: variant.colorHex }}
                      title={variant.color}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
