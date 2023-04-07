import Error from "../../components/Error";
import Layout from "../../components/Layout";

const NotFound = () => {
  return (
    <Layout
      title="Error 404"
      description="Página para notificar al usuario que ha habido un error al realizar su búsqueda"
    >
      <Error />
    </Layout>
  );
};

export default NotFound;
