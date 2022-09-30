import React from 'react'
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import Products from './Products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <div>
      <Link to="/">首頁</Link> |
      <Link to={
        { pathname: '/products', }
      }
        state={{
          data: {
            id: '1',
            name: 'QQ 產品'
          }
        }}>
        產品詳細
      </Link>
    </div>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/products" element={ <Products /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)