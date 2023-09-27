import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sobre from './pages/sobre/sobre';
import Habilidades from './pages/habilidades/habilidades';
import Projetos from './pages/projetos/projetos';


const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Sobre />,
    },
    {
      path: "Habilidades",
      element: <Habilidades />,
    },
    {
      path: "Projetos",
      element: <Projetos />,
    }
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);