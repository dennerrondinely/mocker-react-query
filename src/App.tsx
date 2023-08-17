import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
