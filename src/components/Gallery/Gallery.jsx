import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__header">
        <h2>Um Pouco dos nossos serviços</h2>

        <h4>
          Ambiente corfortavel , climatizado pensado para voce relaxar enquanto
          cuida do visual
        </h4>
      </div>

      <div className="gallery__grid">
        <div className="gallery__item gallery__item--large">
          <div className="gallery__image gallery__image--1" />
        </div>
        <div className="gallery__item">
          <div className="gallery__image gallery__image--2" />
        </div>
        <div className="gallery__item">
          <div className="gallery__image gallery__image--3" />
        </div>
        <div className="gallery__item">
          <div className="gallery__image gallery__image--4" />
        </div>
        <div className="gallery__item">
          <div className="gallery__image gallery__image--5" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
