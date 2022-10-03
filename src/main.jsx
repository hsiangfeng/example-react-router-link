import React from 'react'
import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Router from './routes'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
            activeClassName="router-link-active"
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
      <Router />
    </HashRouter>
  </React.StrictMode>
)