import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from '../context/AppContext';

export default function App() {
  useEffect(() => {
    let m = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (!m) {
      m = document.createElement('meta');
      m.name = 'viewport';
      document.head.appendChild(m);
    }
    m.content =
      'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover';
  }, []);

  return <AppProvider><RouterProvider router={router} /></AppProvider>;
}
