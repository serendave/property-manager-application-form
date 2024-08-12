import { StrictMode } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { MultistepFormProvider } from './providers';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({ routeTree });

function App() {
  return (
    <StrictMode>
      <MultistepFormProvider>
        <RouterProvider router={router} />
      </MultistepFormProvider>
    </StrictMode>
  );
}

export default App;
