import { StrictMode, Suspense } from 'react'
import { HashRouter, NavLink } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Router from './routes'
import Loading from './components/Loading';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <nav className="px-5 flex items-center h-[60px] bg-indigo-500 text-white">
        <h1 className="mr-auto text-2xl">React TodoList</h1>
        <ul className="flex">
          <li className="mr-3">
            <NavLink to="/home"
            className={({ isActive }) => 
              [
                'border p-3 hover:bg-indigo-600 duration-500',
                isActive ? 'router-link-active' : null
              ].join(' ')
            }
            >Home</NavLink>
          </li>
          <li className="mr-3">
            <NavLink to="/todolist"
            className={({ isActive }) => 
              [
                'border p-3 hover:bg-indigo-600 duration-500',
                isActive ? 'router-link-active' : null
              ].join(' ')
            }
            >ToDoList</NavLink>
          </li>
          <li className="mr-3">
          <NavLink to='/products'
            className={({ isActive }) => 
              [
                'border p-3 hover:bg-indigo-600 duration-500',
                isActive ? 'router-link-active' : null
              ].join(' ')
            }
            >產品詳細</NavLink>
          </li>
          <li className="mr-3">
          <NavLink to='/admin'
            className={({ isActive }) => 
              [
                'border p-3 hover:bg-indigo-600 duration-500',
                isActive ? 'router-link-active' : null
              ].join(' ')
            }
            >Admin</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={ <Loading/> }>
        <Router />
      </Suspense>
    </HashRouter>
  </StrictMode>
)