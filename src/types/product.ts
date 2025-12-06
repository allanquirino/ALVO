export interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  colorHex?: string;
  price: number;
  stock: number;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  variants: ProductVariant[];
  featured?: boolean;
  new?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
}
