import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product, ProductVariant } from "@/types/product";
import { toast } from "sonner";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.variant.id === variant.id
      );

      if (existing) {
        const newQuantity = Math.min(existing.quantity + quantity, variant.stock);
        toast.success(`${product.name} atualizado no carrinho`);
        return prev.map((item) =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      toast.success(`${product.name} adicionado ao carrinho`);
      return [...prev, { product, variant, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant.id === variantId)
      )
    );
    toast.success("Item removido do carrinho");
  };

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.variant.id === variantId
          ? { ...item, quantity: Math.min(quantity, item.variant.stock) }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success("Carrinho esvaziado");
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.variant.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
