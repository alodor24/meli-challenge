import Button from "../Button";

const GridDetail = () => {
  return (
    <div className="grid-detail">
      <figure className="grid-detail-container-image">
        <img
          className="img-responsive"
          src="/assets/images/iPhonePro14.jpg"
          alt=""
        />
      </figure>

      <aside className="grid-detail-sidebar">
        <small className="grid-detail-sidebar-info">Usado - Vendidos</small>
        <h1 className="grid-detail-sidebar-title">Título del producto</h1>
        <h2 className="grid-detail-sidebar-price">
          <span>$ </span>
          1.980
          <sup className="grid-detail-sidebar-price-decimal">00</sup>
        </h2>
        <Button text="Comprar" />
      </aside>

      <section className="grid-detail-description">
        <h4 className="grid-detail-description-title">
          Descripción del producto
        </h4>
        <p className="grid-detail-description-paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quasi
          laborum aperiam error adipisci repudiandae pariatur alias ipsum dolore
          molestiae dolor numquam veritatis quod, ducimus repellendus expedita
          quibusdam hic porro?
        </p>
      </section>
    </div>
  );
};

export default GridDetail;
