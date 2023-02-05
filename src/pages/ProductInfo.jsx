import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDescription from '../components/ProductInfo/ProductDescription'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'

const ProductInfo = () => {

   const { id } = useParams()

   const [product, setProduct] = useState()
   const [similarProducts, setSimilarProducts] = useState()

   const allProducts = useSelector(state => state.products)

   useEffect(() => {
     const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
     axios.get(URL)
     .then(res => setProduct(res.data.data.product))
     .catch(err => console.log(err))
   }, [id])

   useEffect(() => {
     if(allProducts && product){
        const pivot = allProducts.filter(prod => prod.category.name === product.category)
        setSimilarProducts(pivot)
     }
   }, [allProducts, product])
   
   console.log(similarProducts)

  return (
    <div>
        <ProductDescription
        product={product}
        />
        <section>
            <h2>Discover similar items</h2>
            <div className='similar-products-container'>
              {
                similarProducts?.map(simProd => {
                    if(simProd.title !== product.title){
                        return (
                            <CardProduct
                            key={simProd.id}
                            product={simProd}

                            />
                        )
                    }
                })
              }
            </div>
        </section>
    </div>
  )
}

export default ProductInfo