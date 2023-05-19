import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
const CartPage = lazy(() => import('@/pages/CartPage'))
const NotFound = lazy(() => import('@/pages/404'))
const SearchPage = lazy(() => import('@/pages/SearchPage'))
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'))
const ProductPage = lazy(() => import('@/pages/ProductPage'))

const MainRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
