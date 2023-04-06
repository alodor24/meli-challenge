import { useParams } from "react-router-dom";
import Button from "../Button";
import useGetItemDetail from "../../hooks/useGetItemDetail";
import { currencyFormatter } from "../../helpers/utils";
import Loader from "../Loader";
import Error from "../Error";

const GridDetail = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const { data, isLoading, error } = useGetItemDetail({ itemId });

  if (error) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid-detail">
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
            <Button text="Comprar" />
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
