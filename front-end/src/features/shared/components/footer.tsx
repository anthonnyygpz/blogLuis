import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Mi Blog</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Compartiendo conocimiento y experiencias profesionales.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/quien-soy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Quién Soy
                </Link>
              </li>
              <li>
                <Link
                  to="/portafolio"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/casos-exito"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Sígueme</h3>
            <div className="mt-2 flex space-x-4">
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Mi Blog. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
