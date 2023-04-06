import { useLocation } from "react-router-dom";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import useGetItemsList from "../../hooks/useGetItemsList";
import useSearchContext from "../../context/SearchContext/useSearchContext";
import { useEffect } from "react";

const List = () => {
  const { search } = useLocation();
  const { setSearchValue } = useSearchContext();
  const { data, isLoading } = useGetItemsList();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const searchValue = query.get("search");
    if (searchValue) {
      setSearchValue(searchValue);
    }
  }, []);

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
