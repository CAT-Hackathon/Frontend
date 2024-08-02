import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "#layouts/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <p>Home</p>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
