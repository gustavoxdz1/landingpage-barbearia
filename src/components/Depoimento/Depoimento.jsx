import "./Depoimento.css";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__header">
        <h2>O que os clientes dizem</h2>
        <p>
          Atendimento de confiança, ambiente agradável e aquele cuidado a mais
          que faz a diferença a cada visita.
        </p>
      </div>

      <div className="testimonials__grid">
        <div className="testimonial-card">
          <p className="testimonial-card__text">
            “Sempre fui muito exigente com corte e barba. Aqui encontrei
            pontualidade, capricho e um ambiente em que realmente dá vontade de
            voltar.”
          </p>
          <div className="testimonial-card__footer">
            <div className="testimonial-card__avatar">JG</div>
            <div>
              <p className="testimonial-card__name">João Gabriel</p>
              <p className="testimonial-card__role">Cliente há 2 anos</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-card__text">
            “O atendimento é diferenciado: desde o agendamento pelo WhatsApp
            até o acabamento final, tudo é feito com muito cuidado.”
          </p>
          <div className="testimonial-card__footer">
            <div className="testimonial-card__avatar">MC</div>
            <div>
              <p className="testimonial-card__name">Marcos Carvalho</p>
              <p className="testimonial-card__role">Profissional liberal</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-card__text">
            “Ambiente limpo, bem organizado e com ótimos produtos. Dá para
            perceber que existe preocupação real com a experiência do cliente.”
          </p>
          <div className="testimonial-card__footer">
            <div className="testimonial-card__avatar">RA</div>
            <div>
              <p className="testimonial-card__name">Rafael Alves</p>
              <p className="testimonial-card__role">Cliente recorrente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
