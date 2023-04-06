import { RouterProvider } from "react-router-dom";
import { router } from "../../router";
import SearchContext from "../../context/SearchContext";
import useSearchContextValue from "../../context/SearchContext/useSearchContextValue";

const App = () => {
  const searchContextValue = useSearchContextValue();

  return (
    <SearchContext.Provider value={searchContextValue}>
      <RouterProvider router={router} />
    </SearchContext.Provider>
  );
};

export default App;
