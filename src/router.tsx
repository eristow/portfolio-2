import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeCalculator from "./pages/RecipeCalculator";
import Stocks from "./pages/Stocks";
import ErrorPage from "./error-page";
import Home from "./pages/Home";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stocks",
        element: <Stocks />,
      },
      {
        path: "/recipe-calculator",
        element: <RecipeCalculator />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
