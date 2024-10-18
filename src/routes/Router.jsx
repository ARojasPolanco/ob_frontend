import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";

import HomePage from "../pages/home/HomePage";
import ProductDetail from "../pages/detail/ProductDetail";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
