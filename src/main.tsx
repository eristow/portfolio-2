import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';
import Home from 'src/pages/Home';
import Stocks from 'src/pages/Stocks';
import RecipeCalculator from './pages/RecipeCalculator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/stocks',
    element: <Stocks />,
  },
  {
    path: '/recipe-calculator',
    element: <RecipeCalculator />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
