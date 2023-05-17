import { useEffect, useState } from "react";
import { ItemDetail } from "../types";

type Props = {
  itemId?: string;
};

const useGetItemDetail = ({ itemId }: Props) => {
  const [data, setData] = useState<ItemDetail | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        await fetch(`${import.meta.env.VITE_BASE_URL}/api/items/${itemId}`)
          .then((resp) => resp.json())
          .then((data) => {
            if (Object.entries(data).length !== 0) {
              setData(data);
              return;
            }
            setError(true);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    if (itemId) fetchItemDetail();
  }, [itemId]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetItemDetail;
