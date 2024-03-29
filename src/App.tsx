import { ThemeProvider } from '@/components/theme-provider';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from './routes/BrowserRouter';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={Router} />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};
