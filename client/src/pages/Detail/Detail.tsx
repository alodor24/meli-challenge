import { useParams } from "react-router-dom";
import GridDetail from "../../components/GridDetail";
import Layout from "../../components/Layout";
import useGetItemDetail from "../../hooks/useGetItemDetail";

const Detail = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const { data, isLoading, error } = useGetItemDetail({ itemId });

  return (
    <Layout
      title={data?.item.title || "Producto"}
      description={data?.item.description.substring(0, 80) || ""}
    >
      <GridDetail data={data} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default Detail;
