import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
// import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

// const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
// const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
