import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
