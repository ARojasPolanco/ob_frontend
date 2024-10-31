import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";

import HomePage from "../pages/home/HomePage";
import ProductDetail from "../pages/detail/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/admin/auth/Login";
import RegisterBusiness from "../pages/admin/auth/RegisterBusiness";
import CreateOffer from "../pages/admin/CreateOffer";

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
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterBusiness />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create",
        element: <CreateOffer />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
