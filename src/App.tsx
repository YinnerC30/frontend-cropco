import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { UsersModule } from './components/UsersModule';
import ErrorPage from './ErrorPage';

import { Counter } from './features/counter/Counter';
import Pokemons from './components/Pokemons';
import Users from './components/Users';
import DemoPage from './payments/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DemoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/counter',
    element: <Counter />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/pokemon',
    element: <Pokemons />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'users',
        element: <UsersModule />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
