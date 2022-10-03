import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const App = lazy(() => import('../App'));
const ToDoList = lazy(() => import('../ToDoList'));
const Products = lazy(() => import('../Products'));
const Admin = lazy(() => import('../Admin'));

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todolist',
    element: <ToDoList />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/admin',
    element: <Admin />,
  }
];

export default () => useRoutes(routes);