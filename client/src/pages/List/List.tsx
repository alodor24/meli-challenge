import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetItemsList from "../../hooks/useGetItemsList";

const List = () => {
  const { data, isLoading } = useGetItemsList({ search: "xbox" });

  return (
    <Layout>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {(data?.items || []).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.picture}
                price={item.price}
                freeShipping={item.free_shipping}
                title={item.title}
                location={item.state_name}
              />
            ))}
          </div>
        )}
      </>
    </Layout>
  );
};

export default List;
