import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Home, ShoppingBag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding">
          <div className="container-luxury">

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src="/Logo ALVO.jpeg"
                  alt="Ilustração representando a jornada da marca ALVO"
                  className="w-full max-w-md h-auto"
                />
              </motion.div>

              {/* History Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">A História da ALVO</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A ALVO nasceu em 2010 como uma pequena loja dedicada a produtos artesanais e de qualidade. Fundada por empreendedores visionários, a marca rapidamente ganhou reconhecimento por sua inovação e compromisso com a sustentabilidade.
                  </p>
                  <p>
                    Em 2015, expandimos nossas operações para incluir uma linha completa de produtos ecológicos, marcando um marco importante em nossa jornada. Nossos valores centrais incluem integridade, criatividade e respeito ao meio ambiente.
                  </p>
                  <p>
                    Ao longo dos anos, evoluímos de uma loja local para uma plataforma de e-commerce líder, sempre priorizando a satisfação do cliente e a excelência em cada produto oferecido.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Search and Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="btn-outline">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Voltar ao Início
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <Link to="/produtos" className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Ver Produtos
                  </Link>
                </Button>
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

export default NotFound;
