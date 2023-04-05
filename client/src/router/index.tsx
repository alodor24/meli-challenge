import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/items/:itemId",
    element: <Detail />,
  },
]);
