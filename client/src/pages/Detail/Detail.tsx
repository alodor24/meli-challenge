import { useParams } from "react-router-dom";
import GridDetail from "../../components/GridDetail";
import Layout from "../../components/Layout";
import useGetItemDetail from "../../hooks/useGetItemDetail";
import BreadCrumb from "../../components/BreadCrumb";

const Detail = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const { data, isLoading, error } = useGetItemDetail({ itemId });

  return (
    <Layout
      title={data?.item.title || "Producto"}
      description={data?.item.description.substring(0, 80) || ""}
    >
      <BreadCrumb data={data} />
      <div className="wrapper-container">
        <GridDetail data={data} isLoading={isLoading} error={error} />
      </div>
    </Layout>
  );
};

export default Detail;
