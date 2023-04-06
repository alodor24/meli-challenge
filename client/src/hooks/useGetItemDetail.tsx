import { useEffect, useState } from "react";
import { ItemDetail } from "../constants/types";

type Props = {
  itemId?: string;
};

const useGetItemDetail = ({ itemId }: Props) => {
  const [data, setData] = useState<ItemDetail | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/items/${itemId}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (Object.entries(data).length !== 0) {
          setData(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setError(true);
        }
      });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetItemDetail;
