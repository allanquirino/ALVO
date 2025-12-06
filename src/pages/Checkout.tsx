import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, QrCode, Truck, MapPin, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);
};

const steps = [
  { id: 1, name: "Dados", icon: MapPin },
  { id: 2, name: "Entrega", icon: Truck },
  { id: 3, name: "Pagamento", icon: CreditCard },
];

const Checkout = () => {
  const { items, totalPrice } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | null>(null);

  const shippingCost = totalPrice >= 29900 ? 0 : 1990;
  const total = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 section-padding">
          <div className="container-luxury text-center">
            <h1 className="text-2xl font-semibold mb-4">Seu carrinho está vazio</h1>
            <Button variant="outline" asChild>
              <Link to="/produtos">Explorar Produtos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            Continuar Comprando
          </Link>
        </div>

        <section className="container-luxury px-6 pb-20">
          <h1 className="text-3xl font-light tracking-tight mb-8">
            Finalizar <span className="text-gradient font-medium">Compra</span>
          </h1>

          {/* Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                    currentStep === step.id
                      ? "bg-primary text-primary-foreground"
                      : currentStep > step.id
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                  <span className="text-sm font-medium hidden sm:inline">{step.name}</span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-8 md:w-16 h-px mx-2",
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8"
              >
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6">Dados Pessoais</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Nome Completo</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">CPF</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="000.000.000-00"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">E-mail</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Telefone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-6 pt-6 border-t border-border">Endereço</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">CEP</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="00000-000"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm text-muted-foreground block mb-2">Rua</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="Nome da rua"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Número</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="123"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Complemento</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="Apto, Bloco..."
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Bairro</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="Bairro"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Cidade</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="Cidade"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Estado</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="UF"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6">Opções de Entrega</h2>
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 p-4 border border-primary rounded-xl cursor-pointer bg-primary/5">
                        <input type="radio" name="shipping" defaultChecked className="accent-primary" />
                        <div className="flex-1">
                          <p className="font-medium">PAC - Correios</p>
                          <p className="text-sm text-muted-foreground">Entrega em 5-10 dias úteis</p>
                        </div>
                        <span className="font-semibold text-primary">
                          {shippingCost === 0 ? "Grátis" : formatPrice(shippingCost)}
                        </span>
                      </label>
                      <label className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
                        <input type="radio" name="shipping" className="accent-primary" />
                        <div className="flex-1">
                          <p className="font-medium">SEDEX - Correios</p>
                          <p className="text-sm text-muted-foreground">Entrega em 2-5 dias úteis</p>
                        </div>
                        <span className="font-semibold">{formatPrice(3490)}</span>
                      </label>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6">Método de Pagamento</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        onClick={() => setPaymentMethod("pix")}
                        className={cn(
                          "flex flex-col items-center gap-4 p-6 border rounded-xl transition-all",
                          paymentMethod === "pix"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <QrCode className="h-10 w-10 text-primary" />
                        <div className="text-center">
                          <p className="font-medium">PIX</p>
                          <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
                        </div>
                      </button>
                      <button
                        onClick={() => setPaymentMethod("card")}
                        className={cn(
                          "flex flex-col items-center gap-4 p-6 border rounded-xl transition-all",
                          paymentMethod === "card"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <CreditCard className="h-10 w-10 text-primary" />
                        <div className="text-center">
                          <p className="font-medium">Cartão de Crédito</p>
                          <p className="text-sm text-muted-foreground">Parcelamento em até 12x</p>
                        </div>
                      </button>
                    </div>

                    {paymentMethod === "card" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4 pt-6 border-t border-border"
                      >
                        <div>
                          <label className="text-sm text-muted-foreground block mb-2">Número do Cartão</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-muted-foreground block mb-2">Validade</label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                              placeholder="MM/AA"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground block mb-2">CVV</label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                              placeholder="123"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground block mb-2">Nome no Cartão</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Como está no cartão"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                      Voltar
                    </Button>
                  )}
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <Button variant="gold" onClick={() => setCurrentStep(currentStep + 1)}>
                        Continuar
                      </Button>
                    ) : (
                      <Button variant="gold" disabled={!paymentMethod}>
                        Finalizar Pedido
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="glass rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-6">Resumo do Pedido</h3>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.variant.id}`} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Qtd: {item.quantity}
                          {item.variant.color && ` • ${item.variant.color}`}
                        </p>
                        <p className="text-sm font-semibold text-primary">
                          {formatPrice(item.variant.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className={shippingCost === 0 ? "text-primary" : ""}>
                      {shippingCost === 0 ? "Grátis" : formatPrice(shippingCost)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Checkout;
