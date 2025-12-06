import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Minus, Plus, Heart, Share2, Truck, Shield, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductVariant } from "@/types/product";
import { cn } from "@/lib/utils";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Produto não encontrado</h1>
          <Button variant="outline" asChild>
            <Link to="/produtos">Voltar para Produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-luxury px-6 py-4">
          <Link
            to="/produtos"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para Produtos
          </Link>
        </div>

        {/* Product Content */}
        <section className="container-luxury px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-primary tracking-[0.2em] uppercase">
                    {product.category}
                  </span>
                  {product.new && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Novo
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < Math.floor(product.rating!)
                              ? "text-primary fill-primary"
                              : "text-muted-foreground"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} avaliações)
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-semibold text-primary">
                    {formatPrice(selectedVariant?.price || product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Variants */}
              {product.variants.some((v) => v.color) && (
                <div>
                  <p className="text-sm font-medium mb-3">
                    Cor: <span className="text-muted-foreground">{selectedVariant?.color}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants
                      .filter((v) => v.colorHex)
                      .map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          className={cn(
                            "w-10 h-10 rounded-full border-2 transition-all",
                            selectedVariant?.id === variant.id
                              ? "border-primary scale-110"
                              : "border-transparent hover:scale-105"
                          )}
                          style={{ backgroundColor: variant.colorHex }}
                          title={variant.color}
                        />
                      ))}
                  </div>
                </div>
              )}

              {product.variants.some((v) => v.size) && (
                <div>
                  <p className="text-sm font-medium mb-3">Tamanho</p>
                  <div className="flex flex-wrap gap-3">
                    {product.variants
                      .filter((v) => v.size)
                      .map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          disabled={variant.stock === 0}
                          className={cn(
                            "w-12 h-12 rounded-lg border text-sm font-medium transition-all",
                            selectedVariant?.id === variant.id
                              ? "bg-primary text-primary-foreground border-primary"
                              : variant.stock === 0
                              ? "border-border text-muted-foreground opacity-50 cursor-not-allowed"
                              : "border-border hover:border-primary"
                          )}
                        >
                          {variant.size}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(selectedVariant?.stock || 10, quantity + 1))
                    }
                    className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!selectedVariant || selectedVariant.stock === 0}
                >
                  {selectedVariant?.stock === 0 ? "Esgotado" : "Adicionar ao Carrinho"}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={cn("h-5 w-5", isFavorite && "fill-primary text-primary")} />
                </Button>

                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Stock */}
              {selectedVariant && selectedVariant.stock < 10 && selectedVariant.stock > 0 && (
                <p className="text-sm text-primary">
                  Apenas {selectedVariant.stock} unidades restantes!
                </p>
              )}

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Frete Grátis</p>
                    <p className="text-xs text-muted-foreground">Acima de R$ 299</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Garantia</p>
                    <p className="text-xs text-muted-foreground">12 meses</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
