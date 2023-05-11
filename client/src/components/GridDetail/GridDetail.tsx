import { useRef, useState } from "react";
import Button from "../Button";
import { currencyFormatter } from "../../helpers/utils";
import { CSSTransition } from "react-transition-group";
import Loader from "../Loader";
import Error from "../Error";
import { ItemDetail } from "../../types";
import Message from "../Message/Message";

type Props = {
  data?: ItemDetail;
  isLoading: boolean;
  error: boolean;
};

const GridDetail: React.FC<Props> = ({ data, isLoading, error }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const nodeRef = useRef(null);

  const handleClick = () => {
    setShowMessage(true);
  };

  if (error) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid-detail">
          <CSSTransition
            nodeRef={nodeRef}
            in={showMessage}
            timeout={500}
            classNames="alert"
            unmountOnExit
          >
            <Message innerRef={nodeRef} text="Añadido al carrito" />
          </CSSTransition>

          <figure className="grid-detail-container-image">
            <img
              className="img-responsive"
              src={data?.item.picture}
              alt={data?.item.title}
              loading="lazy"
            />
          </figure>

          <aside className="grid-detail-sidebar">
            <small className="grid-detail-sidebar-info">
              {data?.item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
              {data?.item.sold_quantity} Vendidos
            </small>
            <h1 className="grid-detail-sidebar-title">{data?.item.title}</h1>
            <h2 className="grid-detail-sidebar-price">
              {data &&
                currencyFormatter({
                  currency: data.item.price.currency,
                  value: data.item.price.amount,
                })}
              <sup className="grid-detail-sidebar-price-decimal">
                {data && data.item.price.decimals > 0
                  ? data.item.price.decimals
                  : "00"}
              </sup>
              {data?.item.free_shipping && (
                <img
                  className="grid-detail-sidebar-shipping"
                  src="/assets/images/icon-shipping.png"
                  alt="Free Shipping Icon"
                  loading="lazy"
                />
              )}
            </h2>
            <Button
              onClick={handleClick}
              text={showMessage ? "Añadido" : "Comprar"}
              disabled={showMessage}
            />
          </aside>

          <section className="grid-detail-description">
            <h4 className="grid-detail-description-title">
              Descripción del producto
            </h4>
            <div className="grid-detail-description-paragraph">
              {data?.item.description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default GridDetail;
