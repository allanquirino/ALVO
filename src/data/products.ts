import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  { id: "1", name: "Relógios", slug: "relogios" },
  { id: "2", name: "Acessórios", slug: "acessorios" },
  { id: "3", name: "Bolsas", slug: "bolsas" },
  { id: "4", name: "Joias", slug: "joias" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Chronograph Elite",
    description: "Relógio automático com cronógrafo de alta precisão. Caixa em aço inoxidável com acabamento escovado e polido. Resistente à água até 100m.",
    price: 12990,
    originalPrice: 15990,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    ],
    category: "relogios",
    featured: true,
    new: true,
    rating: 4.9,
    reviews: 127,
    variants: [
      { id: "1-1", color: "Preto", colorHex: "#1a1a1a", price: 12990, stock: 5, sku: "CHR-BLK-001" },
      { id: "1-2", color: "Dourado", colorHex: "#CBA135", price: 14990, stock: 3, sku: "CHR-GLD-001" },
      { id: "1-3", color: "Prata", colorHex: "#C0C0C0", price: 12990, stock: 8, sku: "CHR-SLV-001" },
    ],
  },
  {
    id: "2",
    name: "Minimal Leather Bag",
    description: "Bolsa em couro legítimo italiano com acabamento premium. Design minimalista com interior espaçoso e compartimentos organizadores.",
    price: 4590,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    category: "bolsas",
    featured: true,
    rating: 4.8,
    reviews: 89,
    variants: [
      { id: "2-1", color: "Preto", colorHex: "#1a1a1a", price: 4590, stock: 12, sku: "MLB-BLK-001" },
      { id: "2-2", color: "Caramelo", colorHex: "#8B4513", price: 4590, stock: 7, sku: "MLB-CRM-001" },
    ],
  },
  {
    id: "3",
    name: "Diamond Pendant",
    description: "Pingente em ouro 18k com diamante central de 0.5 quilates. Certificado GIA. Corrente inclusa.",
    price: 28990,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    category: "joias",
    featured: true,
    rating: 5.0,
    reviews: 45,
    variants: [
      { id: "3-1", color: "Ouro Amarelo", colorHex: "#FFD700", price: 28990, stock: 2, sku: "DMP-YGD-001" },
      { id: "3-2", color: "Ouro Branco", colorHex: "#E8E8E8", price: 29990, stock: 3, sku: "DMP-WGD-001" },
    ],
  },
  {
    id: "4",
    name: "Aviator Sunglasses",
    description: "Óculos de sol aviador com armação em titânio e lentes polarizadas. Proteção UV400.",
    price: 1890,
    originalPrice: 2290,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    category: "acessorios",
    new: true,
    rating: 4.7,
    reviews: 203,
    variants: [
      { id: "4-1", color: "Dourado/Verde", colorHex: "#CBA135", price: 1890, stock: 15, sku: "AVS-GGR-001" },
      { id: "4-2", color: "Prata/Azul", colorHex: "#C0C0C0", price: 1890, stock: 10, sku: "AVS-SBL-001" },
    ],
  },
  {
    id: "5",
    name: "Executive Wallet",
    description: "Carteira executiva em couro saffiano com detalhes em metal. Múltiplos compartimentos para cartões.",
    price: 890,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    ],
    category: "acessorios",
    rating: 4.6,
    reviews: 156,
    variants: [
      { id: "5-1", color: "Preto", colorHex: "#1a1a1a", price: 890, stock: 20, sku: "EXW-BLK-001" },
      { id: "5-2", color: "Marinho", colorHex: "#1a1a3e", price: 890, stock: 15, sku: "EXW-NVY-001" },
    ],
  },
  {
    id: "6",
    name: "Sapphire Ring",
    description: "Anel em ouro branco 18k com safira azul de 1.2 quilates cercada por diamantes.",
    price: 18990,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    ],
    category: "joias",
    rating: 4.9,
    reviews: 34,
    variants: [
      { id: "6-1", size: "15", price: 18990, stock: 2, sku: "SPR-15-001" },
      { id: "6-2", size: "16", price: 18990, stock: 3, sku: "SPR-16-001" },
      { id: "6-3", size: "17", price: 18990, stock: 2, sku: "SPR-17-001" },
      { id: "6-4", size: "18", price: 18990, stock: 1, sku: "SPR-18-001" },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
