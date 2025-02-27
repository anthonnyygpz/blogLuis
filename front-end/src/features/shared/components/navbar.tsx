import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo y nombre del blog */}
          <div className="navbar-logo">
            <a href="/" className="logo-link">
              <img
                className="logo-image"
                src="/api/placeholder/32/32"
                alt="Logo"
              />
              <span className="logo-text">Mi Blog</span>
            </a>
          </div>

          {/* Menú de escritorio */}
          <div className="navbar-menu-desktop">
            <a href="/#" className="menu-item">
              Inicio
            </a>
            <a href="/#aboutMe" className="menu-item">
              Sobre Mí
            </a>
            <a href="/#myService" className="menu-item">
              Mis Servicios
            </a>
            <a href="/#project" className="menu-item">
              Mis proyectos
            </a>
            <a href="/#customerReviews" className="menu-item">
              Opiniones de clientes
            </a>
            <a href="/contact" className="menu-item contact-button">
              Contacto
            </a>
          </div>

          {/* Botón de menú móvil */}
          <div className="navbar-menu-mobile-button">
            <button onClick={toggleMenu} className="menu-toggle">
              {isMenuOpen ? (
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="navbar-menu-mobile">
          <a href="/#" className="menu-item">
            Inicio
          </a>
          <a href="/#aboutMe" className="menu-item">
            Sobre Mí
          </a>
          <a href="/#myService" className="menu-item">
            Mis Servicios
          </a>
          <a href="/#project" className="menu-item">
            Mis proyectos
          </a>
          <a href="/#customerReviews" className="menu-item">
            Opiniones de clientes
          </a>
          <a href="/contact" className="menu-item contact-button">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};
