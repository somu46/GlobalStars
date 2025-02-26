import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/root';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path:"*",
        element: <h1>404 Not Found</h1>
      }
    ]
  },
  // {
  //   path:"*",
  //   element: <h1>404 Not Found</h1>
  // }
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);