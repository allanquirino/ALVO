import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);
};

export const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold tracking-wide">Carrinho</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground mb-6">Seu carrinho está vazio</p>
                  <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                    <Link to="/produtos">Explorar Produtos</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 px-6">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.variant.id}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.variant.color && `Cor: ${item.variant.color}`}
                          {item.variant.size && `Tamanho: ${item.variant.size}`}
                        </p>
                        <p className="text-sm font-semibold text-primary mt-2">
                          {formatPrice(item.variant.price)}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant.id, item.quantity + 1)
                            }
                            disabled={item.quantity >= item.variant.stock}
                            className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:border-primary transition-colors disabled:opacity-50"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-lg font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/checkout" onClick={() => setIsOpen(false)}>
                    Finalizar Compra
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => setIsOpen(false)}>
                  Continuar Comprando
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
