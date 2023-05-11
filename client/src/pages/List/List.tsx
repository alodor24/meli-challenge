import { useLocation } from "react-router-dom";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetItemsList from "../../hooks/useGetItemsList";
import useSearchContext from "../../context/SearchContext/useSearchContext";
import { useEffect } from "react";
import Error from "../../components/Error/Error";

const List = () => {
  const { search } = useLocation();
  const { searchValue, setSearchValue } = useSearchContext();
  const { data, isLoading, error } = useGetItemsList();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const searchValue = query.get("search");
    if (searchValue) {
      setSearchValue(searchValue);
    }
  }, []);

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
