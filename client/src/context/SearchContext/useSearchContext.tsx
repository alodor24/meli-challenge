import { useContext } from "react";
import SearchContext, { SearchContextData } from ".";

const useSearchContext = (): SearchContextData => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error(
      "useSearchContext must be used within the searchContext.Provider"
    );
  }

  return searchContext;
};

export default useSearchContext;
