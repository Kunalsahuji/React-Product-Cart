import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import User from './components/User'
import Product from './components/Product'
import Cart from './components/Cart'
function App() {

  return (
    <div className="">
      <div className="">
        < Nav />
      </div>
      <div className="">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
