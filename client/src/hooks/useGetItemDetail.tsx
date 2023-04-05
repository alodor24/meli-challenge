import { useEffect, useState } from "react";
import { ItemDetail } from "../constants/types";

type Props = {
  itemId?: string;
};

const useGetItemDetail = ({ itemId }: Props) => {
  const [data, setData] = useState<ItemDetail | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/items/${itemId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    isLoading,
  };
};

export default useGetItemDetail;
