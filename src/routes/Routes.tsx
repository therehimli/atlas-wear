import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
const CartPage = lazy(() => import('@/pages/CartPage'))
const SellPage = lazy(() => import('@/pages/SellPage'))
const NotFound = lazy(() => import('@/pages/404'))
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'))

const MainRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sell" element={<SellPage />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
