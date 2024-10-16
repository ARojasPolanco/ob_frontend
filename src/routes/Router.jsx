import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";

import HomePage from "../pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
