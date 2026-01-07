import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <h2>Nossos serviços</h2>
        <h4>
          Cortes, barba e cuidados pensados para quem busca um visual alinhado e
          um atendimento de alto padrão.
        </h4>
      </div>

      <div className="services__grid">
        <div className="service-card">
          <h3>Corte masculino</h3>
          <p>
            Corte na tesoura ou máquina, acabamento detalhado e finalização com
            produtos de qualidade.
          </p>
          <span className="service-card__price">a partir de R$ 45</span>
        </div>

        <div className="service-card">
          <h3>Barba completa</h3>
          <p>
            Aparação, desenho, toalha quente e hidratação para um resultado
            limpo e confortável.
          </p>
          <span className="service-card__price">a partir de R$ 40</span>
        </div>

        <div className="service-card">
          <h3>Corte + barba</h3>
          <p>
            Combinação perfeita para quem quer sair com o visual totalmente em
            dia em uma única visita.
          </p>
          <span className="service-card__price">a partir de R$ 75</span>
        </div>

        <div className="service-card service-card--highlight">
          <h3>Pacote mensal</h3>
          <p>
            Plano com visitas recorrentes no mês para manter sempre o corte e a
            barba alinhados, com horário reservado.
          </p>
          <span className="service-card__price">consulte valores</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
