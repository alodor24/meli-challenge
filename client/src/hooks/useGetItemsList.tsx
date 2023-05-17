import { useEffect, useState } from "react";
import { ItemsList } from "../types";

type Props = {
  searchValue?: string;
};

const useGetItemsList = ({ searchValue }: Props) => {
  const [data, setData] = useState<ItemsList | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchDataList = async () => {
      try {
        await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/items?q=${searchValue}`
        )
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
            throw new Error(error);
          });
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    if (searchValue && searchValue !== "") fetchDataList();
  }, [searchValue]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetItemsList;
