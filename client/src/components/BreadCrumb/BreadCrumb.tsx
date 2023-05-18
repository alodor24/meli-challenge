import { ItemDetail, ItemsList } from "../../types";

type Props = {
  data?: ItemsList | ItemDetail;
};

const BreadCrumb: React.FC<Props> = ({ data }) => {
  return (
    <section className="breadcrumb">
      <p className="breadcrumb-text">
        {data?.categories && data.categories.length > 0 ? (
          data.categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))
        ) : (
          <span>Categoría no específicada</span>
        )}
      </p>
    </section>
  );
};

export default BreadCrumb;
