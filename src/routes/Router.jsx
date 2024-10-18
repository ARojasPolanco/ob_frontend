import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";

import HomePage from "../pages/home/HomePage";
import ProductDetail from "../pages/detail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
