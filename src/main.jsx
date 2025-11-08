import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import Router from './Router/Router';
import AuthProvider from './Provider/AuthProvider';
/* Animate CSS */
import 'animate.css';
import SkillProvider from './Provider/SkillProvider';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SkillProvider>
        <RouterProvider router={Router} />
      </SkillProvider>
    </AuthProvider>
  </StrictMode>
);
