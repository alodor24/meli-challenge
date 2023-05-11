import { useEffect, useState } from "react";
import { ItemsList } from "../types";
import useSearchContext from "../context/SearchContext/useSearchContext";

const useGetItemsList = () => {
  const { searchValue } = useSearchContext();
  const [data, setData] = useState<ItemsList | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (searchValue !== "") {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/items?q=${searchValue}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.items.length > 0) {
            setData(data);
            setIsLoading(false);
            return;
          }

          setError(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchValue]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetItemsList;
