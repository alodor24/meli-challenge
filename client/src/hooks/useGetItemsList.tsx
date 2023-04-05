import { useEffect, useState } from "react";
import { ItemsList } from "../constants/types";

type Props = {
  search: string;
};

const useGetItemsList = ({ search }: Props) => {
  const [data, setData] = useState<ItemsList | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/items?q=${search}`)
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

export default useGetItemsList;
