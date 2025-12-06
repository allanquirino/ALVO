import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-border">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-2xl font-bold tracking-[0.3em] text-foreground">
              LUXE
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Excelência e sofisticação em cada detalhe. Produtos premium para quem valoriza qualidade.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground mb-6">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-3">
              {["Início", "Produtos", "Categorias", "Sobre"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Início" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground mb-6">
              SUPORTE
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Envio", "Trocas", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground mb-6">
              NEWSLETTER
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades e ofertas exclusivas.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 LUXE. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
