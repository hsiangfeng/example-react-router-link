import { useRoutes } from 'react-router-dom';

import App from '../App';
import ToDoList from '../ToDoList';
import Products from '../Products';
import Admin from '../Admin';

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