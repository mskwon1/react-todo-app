import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import resetCSS from '#libs/resetCSS.ts';
import mainRouter from '#routers/mainRouter';
import mockWorker from '#libs/mock-worker';

resetCSS();

mockWorker.start({ onUnhandledRequest: 'bypass' }).then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={mainRouter} />
    </React.StrictMode>
  )
);
