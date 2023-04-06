import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/items",
    element: <List />,
  },
  {
    path: "/items/:itemId",
    element: <Detail />,
  },
]);
