import { createContext } from "react";

export type SearchContextData = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextData | undefined>(undefined);

export default SearchContext;
