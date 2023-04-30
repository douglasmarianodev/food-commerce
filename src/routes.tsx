import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Burgers from './pages/Main/Burgers'
import Drinks from './pages/Main/Drinks'
import IceCreams from './pages/Main/IceCreams'
import Pizzas from './pages/Main/Pizzas'
import MyCart from './pages/Main/MyCart'
import Payment from './pages/Main/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='bebidas' element={<Drinks />} />
        <Route path='sorvetes' element={<IceCreams />} />
      </Route>
      <Route path='cart' element={<MyCart />} />
      <Route path="payment" element={<Payment />} />
    </Routes>
  )
}
