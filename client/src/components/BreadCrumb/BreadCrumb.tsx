import useGetItemsList from "../../hooks/useGetItemsList";

const BreadCrumb = () => {
  const { data } = useGetItemsList();

  return (
    <section className="breadcrumb">
      <p className="breadcrumb-text">
        {data && data.categories.length > 0 ? (
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
