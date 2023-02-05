import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardProducts.css'
import axios from 'axios'
import getConfig from '../../utils/getConfig.js'
import { getUserCart } from '../../store/slices/cart.slice.js'
import { useDispatch } from 'react-redux'

const CardProduct = ({product}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    e.stopPropagation()
    const URL ='https://e-commerce-api.academlo.tech/api/v1/cart'

    const data = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='product' onClick={handleClick}>
      <header className='product__header'>
        <img className='product__img' src={product.productImgs[0]} alt="" />
        <img className='product__img' src={product.productImgs[1]} alt="" />
      </header>
      <section className='product__body'>
        <h3 className='product__name'>{product.title}</h3>
        <article className='product__price-container'>
          <span className='product__price-label'>Price</span>
          <h4 className='product__price-number'>{product.price}</h4>
        </article>
        <button onClick={handleBtnClick} className='product__btn'>🛒</button>
      </section>
    </article>
  )
}

export default CardProduct