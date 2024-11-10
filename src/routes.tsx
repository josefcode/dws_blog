import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutesUrls } from './utils/enums/routes-url';
import { Home } from './pages/home/index.page';

export function RouterProvider() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <Home />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
