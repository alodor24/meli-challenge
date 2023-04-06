import { useState } from "react";
import { SearchContextData } from ".";

const useSearchContextValue = (): SearchContextData => {
  const [searchValue, setSearchValue] = useState<string>("");
  return {
    searchValue,
    setSearchValue,
  };
};

export default useSearchContextValue;
