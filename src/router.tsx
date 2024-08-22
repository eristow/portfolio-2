import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeCalculator from "./pages/RecipeCalculator";
import Stocks from "./pages/Stocks";
import ErrorPage from "./error-page";
import Home from "./pages/Home";
import Layout from "./layout";
import TicTacToe from "./pages/TicTacToe";
import Radio from "./pages/Radio";

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
      {
        path: "/tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "/radio",
        element: <Radio />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
