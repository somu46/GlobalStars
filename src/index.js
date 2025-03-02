import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/root';
import { About, Blog, Contact, Faqs, Photo, Video } from './Pages';
 
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
        path: 'about-us',
        element: <About/>
      },
      {
        path: 'contact-us',
        element: <Contact/>
      },
      {
        path: 'faqs',
        element: <Faqs/>
      },
      {
        path: 'blogs',
        element: <Blog/>
      },
      {
        path: 'videos',
        element: <Video/>
      },
      {
        path: 'photos',
        element : <Photo/>
      },
      {
        path:"*",
        element: <h1>404 Not Found</h1>
      }
    ]
  },
 
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);