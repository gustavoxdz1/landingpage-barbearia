import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__logo">THE HUNTER BARBER</div>

      <nav className="header__nav">
        <a href="#services">Serviços</a>
        <a href="#gallery">Galeria</a>
        <a href="#testimonials">Depoimentos</a>
        <a href="#contact">Contato</a>
      </nav>

      <a
        className="header__cta"
        href="https://wa.me/5592985785436"
        target="_blank"
        rel="noreferrer"
      >
        Agendar no WhatsApp
      </a>
    </header>
  );
}

export default Header;
