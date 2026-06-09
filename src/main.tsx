import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Traiteur from './pages/Traiteur';
import Privatisation from './pages/Privatisation'
import Contact from './pages/Contact';
import './main.css'
import Emporter from './pages/Emporter';

// 1. Définis les routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {path: 'a-emporter', element: <Emporter />},
      { path: 'notre-histoire', element: <About /> },
      { path: 'traiteur', element: <Traiteur /> },
      { path: 'privatisation', element: <Privatisation /> },
      {path: 'contact', element: <Contact />}
    ],
  },
]);

// 2. Rend l'application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
