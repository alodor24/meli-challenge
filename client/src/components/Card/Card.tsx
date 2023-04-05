import { Link } from "react-router-dom";
import { ItemPrice } from "../../constants/types";
import { currencyFormatter } from "../../helpers/utils";

type Props = {
  id: string;
  image: string;
  price: ItemPrice;
  freeShipping: boolean;
  title: string;
  location: string;
};

const Card: React.FC<Props> = ({
  id,
  image,
  price,
  freeShipping,
  title,
  location,
}) => {
  return (
    <Link to={`/items/${id}`}>
      <article className="card">
        <figure className="card-container-image">
          <img
            className="card-image img-responsive"
            src={image}
            alt={title}
            loading="lazy"
          />
        </figure>

        <div>
          <h3 className="card-price">
            {currencyFormatter({
              currency: price.currency,
              value: price.amount,
            })}
            <sup className="card-price-decimal">
              {price.decimals > 0 ? price.decimals : "00"}
            </sup>
            {freeShipping && (
              <img
                className="card-shipping"
                src="/assets/images/icon-shipping.png"
                alt="Free Shipping Icon"
                loading="lazy"
              />
            )}
          </h3>

          <h2 className="card-title">{title}</h2>
        </div>

        <small className="card-address">{location}</small>
      </article>
    </Link>
  );
};

export default Card;
