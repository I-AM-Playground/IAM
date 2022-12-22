import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home';
import { Magazine } from './pages/Magazine';
import { Music } from './pages/Music/Music';
import { Show } from './pages/Show';
import { Video } from './pages/Video';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'music',
    element: <Music />,
  },
  {
    path: 'video',
    element: <Video />,
  },
  {
    path: 'show',
    element: <Show />,
  },
  {
    path: 'magazine',
    element: <Magazine />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
