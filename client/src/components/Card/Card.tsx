import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/detail">
      <article className="card">
        <figure className="card-container-image">
          <img
            className="card-image img-responsive"
            src="/assets/images/iPhonePro14.jpg"
            alt=""
            loading="lazy"
          />
        </figure>

        <div>
          <h3 className="card-price">
            <span>$ </span>
            1.980
            <sup className="card-price-decimal">00</sup>
            <img
              className="card-shipping"
              src="/assets/images/icon-shipping.png"
              alt=""
              loading="lazy"
            />
          </h3>

          <h2 className="card-title">Título del producto</h2>
        </div>

        <small className="card-address">Capital Federal</small>
      </article>
    </Link>
  );
};

export default Card;
