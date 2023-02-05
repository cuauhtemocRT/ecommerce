import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'

const Home = () => {

  const products = useSelector(state => state.products)

  return (
    <div>
      <div className='products-container'>
        {
          products?.map(product => (
            <CardProduct 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home