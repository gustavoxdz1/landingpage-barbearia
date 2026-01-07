import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h4 className="hero__tag">Experiência completa em cuidado masculino</h4>

        <h1 className="hero__title">
          Detalhe por detalhe,
          <br />
          o corte que valoriza voce.
        </h1>

        <p className="hero__subtitle">
          Técnica, estilo e atenção aos detalhes para um resultado que fala por você
        </p>

        <div className="hero__actions">
          <a
            href="https://wa.me/5592985785436"
            target="_blank"
            rel="noreferrer"
            className="hero__primary"
          >
            Agendar agora
          </a>
          <a href="#services" className="hero__secondary">
            Ver serviços
          </a>
        </div>

        <p className="hero__note">
         <h4>Atendimento de segunda a sábado · Corte, barba e atendimentos exclusivos</h4>
        </p>
      </div>

      <div className="hero__image-wrapper">
        <div className="hero__image"/>
      </div>
    </section>
  );
}

export default Hero;

