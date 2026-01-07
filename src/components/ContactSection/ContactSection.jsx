import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <h2>Contato e localização</h2>
        <h4>
          Agende seu horário pelo WhatsApp ou venha nos fazer uma visita. Estamos
          em um ponto fácil de chegar e com ambiente preparado para te receber da forma que voce merece .
        </h4>
      </div>

      <div className="contact__content">
        <div className="contact__info">
          <h3>Agendamentos</h3>
          <p className="contact__label"><h4>WhatsApp</h4></p>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noreferrer"
            className="contact__whatsapp"
          >
            (92) 985785436
          </a>

          <p className="contact__label"><h4>Horário de funcionamento</h4></p>
          <p className="contact__text">
            Segunda a sexta: 9h às 20h
            <br />
            Sábado: 9h às 18h
          </p>

          <p className="contact__label"><h4>Endereço</h4></p>
          <p className="contact__text">
            Rua Exemplo, 123 – Bairro Tal
            <br />
            Sua cidade – UF
          </p>

          <div className="contact__actions">
            <a
              href="https://wa.me/5592985785436"
              target="_blank"
              rel="noreferrer"
              className="contact__primary"
            >
              Agendar agora
            </a>
            <a
              href="https://maps.app.goo.gl/JTQedh5oHXfc8bR98"
              target="_blank"
              rel="noreferrer"
              className="contact__secondary"
            >
              Ver rota no mapa
            </a>
          </div>
        </div>

        <div className="contact__map-wrapper">
          <iframe
            className="contact__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1180979932066!2d-46.65657152379297!3d-23.56400136168926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c97a8d4c2d%3A0x7c9b59c44d8a4bb!2sAv.+Paulista%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da barbearia"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
