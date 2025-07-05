import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // <-- import BrowserRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  {/* <-- wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);