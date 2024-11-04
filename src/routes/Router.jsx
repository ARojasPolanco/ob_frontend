import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import HomePage from "../pages/home/HomePage";
import ProductDetail from "../pages/detail/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/admin/auth/Login";
import RegisterBusiness from "../pages/admin/auth/RegisterBusiness";
import CreateOffer from "../pages/admin/CreateOffer";
import ProtectedAdminRoute from "../components/ProtectedAdminRoute";
import Businesses from "../pages/admin/Businesses";
import Offers from "../pages/admin/Offers";

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
        path: "/de182701a79d616e",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: (
          <ProtectedAdminRoute>
            <RegisterBusiness />
          </ProtectedAdminRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/create",
        element: (
          <ProtectedAdminRoute>
            <CreateOffer />
          </ProtectedAdminRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/businesses",
        element: (
          <ProtectedAdminRoute>
            <Businesses />
          </ProtectedAdminRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/offers/:businessId",
        element: (
          <ProtectedAdminRoute>
            <Offers />
          </ProtectedAdminRoute>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
