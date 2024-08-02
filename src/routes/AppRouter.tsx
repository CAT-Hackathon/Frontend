import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Main Layout</p>,
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
