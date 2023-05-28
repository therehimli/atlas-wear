import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
const NotFound = lazy(() => import('@/pages/404'))
const SearchPage = lazy(() => import('@/pages/SearchPage'))
const ProductPage = lazy(() => import('@/pages/ProductPage'))
const AccountPage = lazy(() => import('@/pages/AccountPage'))
const SellPage = lazy(() => import('@/pages/SellPage'))

const MainRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/accommodations/:id" element={<SellPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
