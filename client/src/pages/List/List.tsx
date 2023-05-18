import { useLocation } from "react-router-dom";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetItemsList from "../../hooks/useGetItemsList";
import { useEffect, useState } from "react";
import Error from "../../components/Error";
import BreadCrumb from "../../components/BreadCrumb";

const List = () => {
  const { search } = useLocation();
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading, error } = useGetItemsList({ searchValue });

  useEffect(() => {
    const query = new URLSearchParams(search);
    const value = query.get("search");
    if (value) setSearchValue(value);
  }, [search]);

  return (
    <Layout
      title={
        searchValue
          ? searchValue[0].toUpperCase() + searchValue.substring(1)
          : "Lista de Productos"
      }
      description="Lista de productos encontrados"
    >
      <>
        {error ? (
          <Error />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div>
            <BreadCrumb data={data} />
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
