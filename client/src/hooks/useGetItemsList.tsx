import { useEffect, useState } from "react";
import { ItemsList } from "../constants/types";
import useSearchContext from "../context/SearchContext/useSearchContext";

const useGetItemsList = () => {
  const { searchValue } = useSearchContext();
  const [data, setData] = useState<ItemsList | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/items?q=${searchValue}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchValue]);

  return {
    data,
    isLoading,
  };
};

export default useGetItemsList;
