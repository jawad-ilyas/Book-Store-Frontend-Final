import React from 'react'
import Home from './pages/Home/Home'
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage'
import BookDetailPage from './pages/BookDetailPage/BookDetailPage'
import CartPage from './pages/CartPage/CartPage.JSX'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginRegisterPage from './pages/LoginRegisterPage/LoginRegisterPage'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import AdminBooksPage from './pages/AdminBooksPage/AdminBooksPage'
import AdminOrdersPage from './pages/AdminOrdersPage/AdminOrdersPage'
import AdminUsersPage from './pages/AdminUsersPage/AdminUsersPage'
import NotFound from './pages/NotFound'
import NewsletterPage from './pages/NewsletterPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ToastComponent from './components/ToastComponent'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
  
      <ToastComponent />

      <Footer />

    </div>
  )
}

export default App
