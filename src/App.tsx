import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthProvider';
import { AuthPage } from '@/pages/AuthPage/AuthPage';
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';
import { GuestRoute } from '@/components/GuestRoute/GuestRoute';
import { keepPreviousData, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: keepPreviousData,
      refetchOnMount: false
    }
  }
});

const router = createBrowserRouter([
  {
    Component: AuthProvider,
    children: [
      { Component: GuestRoute, children: [{ index: true, element: <AuthPage /> }] },
      {
        path: '/products',
        Component: ProtectedRoute,
        children: [
          {
            index: true,
            lazy: async () => {
              const { ProductsPage } = await import('@/pages/ProductsPage/ProductsPage');
              return { Component: ProductsPage };
            }
          }
        ]
      }
    ]
  }
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
