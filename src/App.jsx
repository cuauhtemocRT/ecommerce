import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Home from './pages/Home'
import { getAllProducts } from './store/slices/products.slice.js'
import ProductInfo from './pages/ProductInfo'
import axios from 'axios'
import Login from './pages/Login'
import { getUserCart } from './store/slices/cart.slice.js'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getUserCart())
  }, [])
 


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:id' element={<ProductInfo />}/>
      </Routes>
    </div>
  )
}

export default App
