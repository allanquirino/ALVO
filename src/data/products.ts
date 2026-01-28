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
    name: "Chronograph Elite 2026",
    description: "Relógio automático com cronógrafo de alta precisão. Novo movimento calibre exclusivo da coleção 2026. Caixa em aço inoxidável com acabamento escovado e polido. Resistente à água até 100m.",
    price: 14990,
    originalPrice: 18990,
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
      { id: "1-1", color: "Preto Ônix", colorHex: "#0a0a0a", price: 14990, stock: 5, sku: "CHR-BLK-026" },
      { id: "1-2", color: "Dourado Rose", colorHex: "#B76E79", price: 16990, stock: 3, sku: "CHR-RSE-026" },
      { id: "1-3", color: "Prata Fosco", colorHex: "#A8A8A8", price: 14990, stock: 8, sku: "CHR-SLV-026" },
    ],
  },
  {
    id: "2",
    name: "Maison Leather Tote",
    description: "Bolsa tote em couro italiano premium da nova coleção. Design contemporâneo com detalhes em metal dourado. Interior forrado em camurça com múltiplos compartimentos.",
    price: 5990,
    originalPrice: 7490,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    category: "bolsas",
    featured: true,
    new: true,
    rating: 4.8,
    reviews: 89,
    variants: [
      { id: "2-1", color: "Noir Profond", colorHex: "#0d0d0d", price: 5990, stock: 12, sku: "MLT-BLK-026" },
      { id: "2-2", color: "Cognac", colorHex: "#9A463D", price: 5990, stock: 7, sku: "MLT-COG-026" },
      { id: "2-3", color: "Taupe", colorHex: "#8B8589", price: 5990, stock: 5, sku: "MLT-TPE-026" },
    ],
  },
  {
    id: "3",
    name: "Lumière Diamond Pendant",
    description: "Pingente exclusivo em ouro 18k com diamante central de 0.75 quilates. Design inspirado na luz das estrelas. Certificado GIA. Corrente ajustável inclusa.",
    price: 34990,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    category: "joias",
    featured: true,
    new: true,
    rating: 5.0,
    reviews: 45,
    variants: [
      { id: "3-1", color: "Ouro Amarelo", colorHex: "#FFD700", price: 34990, stock: 2, sku: "LDP-YGD-026" },
      { id: "3-2", color: "Ouro Branco", colorHex: "#E8E8E8", price: 35990, stock: 3, sku: "LDP-WGD-026" },
      { id: "3-3", color: "Ouro Rosé", colorHex: "#B76E79", price: 35990, stock: 2, sku: "LDP-RGD-026" },
    ],
  },
  {
    id: "4",
    name: "Monaco Aviator",
    description: "Óculos de sol aviador com armação em titânio ultraleve e lentes polarizadas Zeiss. Edição limitada 2026 com proteção UV400.",
    price: 2490,
    originalPrice: 2990,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    category: "acessorios",
    featured: true,
    new: true,
    rating: 4.7,
    reviews: 203,
    variants: [
      { id: "4-1", color: "Dourado/Verde", colorHex: "#CBA135", price: 2490, stock: 15, sku: "MAV-GGR-026" },
      { id: "4-2", color: "Gunmetal/Cinza", colorHex: "#505050", price: 2490, stock: 10, sku: "MAV-GUN-026" },
      { id: "4-3", color: "Ouro Rose/Marrom", colorHex: "#B76E79", price: 2690, stock: 8, sku: "MAV-RSE-026" },
    ],
  },
  {
    id: "5",
    name: "Executive Carbon Wallet",
    description: "Carteira executiva em couro com textura carbon fiber. Tecnologia RFID blocking integrada. Design slim com capacidade para 12 cartões.",
    price: 1290,
    originalPrice: 1590,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    ],
    category: "acessorios",
    new: true,
    rating: 4.6,
    reviews: 156,
    variants: [
      { id: "5-1", color: "Carbon Black", colorHex: "#1a1a1a", price: 1290, stock: 20, sku: "ECW-BLK-026" },
      { id: "5-2", color: "Navy Carbon", colorHex: "#1a1a3e", price: 1290, stock: 15, sku: "ECW-NVY-026" },
      { id: "5-3", color: "Burgundy", colorHex: "#722F37", price: 1290, stock: 10, sku: "ECW-BRG-026" },
    ],
  },
  {
    id: "6",
    name: "Royal Sapphire Ring",
    description: "Anel statement em ouro branco 18k com safira azul royal de 1.5 quilates, cercada por 24 diamantes. Peça única da coleção 2026.",
    price: 24990,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    ],
    category: "joias",
    rating: 4.9,
    reviews: 34,
    variants: [
      { id: "6-1", size: "15", price: 24990, stock: 2, sku: "RSR-15-026" },
      { id: "6-2", size: "16", price: 24990, stock: 3, sku: "RSR-16-026" },
      { id: "6-3", size: "17", price: 24990, stock: 2, sku: "RSR-17-026" },
      { id: "6-4", size: "18", price: 24990, stock: 1, sku: "RSR-18-026" },
    ],
  },
  {
    id: "7",
    name: "Skeleton Automatic",
    description: "Relógio automático esqueletizado com movimento visível. Caixa em titânio com cristal de safira dupla face. Edição numerada de 500 peças.",
    price: 22990,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80",
    ],
    category: "relogios",
    featured: true,
    new: true,
    rating: 5.0,
    reviews: 67,
    variants: [
      { id: "7-1", color: "Titânio Natural", colorHex: "#878681", price: 22990, stock: 3, sku: "SKA-TIT-026" },
      { id: "7-2", color: "PVD Black", colorHex: "#0a0a0a", price: 24990, stock: 2, sku: "SKA-PVD-026" },
    ],
  },
  {
    id: "8",
    name: "Quilted Chain Bag",
    description: "Bolsa de ombro com matelassê artesanal e corrente dourada removível. Couro de cordeiro premium. Inspirada na elegância parisiense.",
    price: 7990,
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    ],
    category: "bolsas",
    new: true,
    rating: 4.9,
    reviews: 112,
    variants: [
      { id: "8-1", color: "Noir", colorHex: "#0d0d0d", price: 7990, stock: 6, sku: "QCB-BLK-026" },
      { id: "8-2", color: "Ivory", colorHex: "#FFFFF0", price: 7990, stock: 4, sku: "QCB-IVR-026" },
      { id: "8-3", color: "Bordeaux", colorHex: "#5C1F35", price: 7990, stock: 5, sku: "QCB-BDX-026" },
    ],
  },
  {
    id: "9",
    name: "Tennis Diamond Bracelet",
    description: "Pulseira tennis em ouro branco 18k com 45 diamantes totalizando 3 quilates. Fecho de segurança duplo. Certificação completa.",
    price: 45990,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    category: "joias",
    featured: true,
    rating: 5.0,
    reviews: 28,
    variants: [
      { id: "9-1", size: "16cm", price: 45990, stock: 2, sku: "TDB-16-026" },
      { id: "9-2", size: "17cm", price: 45990, stock: 3, sku: "TDB-17-026" },
      { id: "9-3", size: "18cm", price: 45990, stock: 2, sku: "TDB-18-026" },
    ],
  },
  {
    id: "10",
    name: "Heritage Cufflinks",
    description: "Abotoaduras em ouro 18k com acabamento guilloché artesanal. Design clássico com toque contemporâneo. Par com estojo de apresentação.",
    price: 4990,
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
    ],
    category: "acessorios",
    rating: 4.8,
    reviews: 45,
    variants: [
      { id: "10-1", color: "Ouro Amarelo", colorHex: "#FFD700", price: 4990, stock: 8, sku: "HCL-YGD-026" },
      { id: "10-2", color: "Ouro Branco", colorHex: "#E8E8E8", price: 4990, stock: 6, sku: "HCL-WGD-026" },
      { id: "10-3", color: "Ônix/Ouro", colorHex: "#0a0a0a", price: 5490, stock: 4, sku: "HCL-ONX-026" },
    ],
  },
  {
    id: "11",
    name: "Diver Professional",
    description: "Relógio de mergulho profissional com resistência até 300m. Bisel cerâmico unidirecional e válvula de hélio. Movimento automático suíço.",
    price: 18990,
    originalPrice: 22990,
    images: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80",
    ],
    category: "relogios",
    new: true,
    rating: 4.8,
    reviews: 89,
    variants: [
      { id: "11-1", color: "Deep Blue", colorHex: "#0a2463", price: 18990, stock: 5, sku: "DVP-BLU-026" },
      { id: "11-2", color: "Stealth Black", colorHex: "#0a0a0a", price: 19990, stock: 4, sku: "DVP-BLK-026" },
      { id: "11-3", color: "Racing Green", colorHex: "#014421", price: 18990, stock: 6, sku: "DVP-GRN-026" },
    ],
  },
  {
    id: "12",
    name: "Mini Crossbody",
    description: "Bolsa crossbody compacta em couro granulado com hardware dourado. Alça ajustável. Perfeita para o dia a dia com sofisticação.",
    price: 3490,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
    ],
    category: "bolsas",
    rating: 4.7,
    reviews: 178,
    variants: [
      { id: "12-1", color: "Black", colorHex: "#0d0d0d", price: 3490, stock: 15, sku: "MCB-BLK-026" },
      { id: "12-2", color: "Tan", colorHex: "#D2B48C", price: 3490, stock: 12, sku: "MCB-TAN-026" },
      { id: "12-3", color: "Forest", colorHex: "#228B22", price: 3490, stock: 8, sku: "MCB-FOR-026" },
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
