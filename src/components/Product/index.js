import React from 'react'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'

function Productsection() {
  return (
    <>
    <ProductFilter>
      <ProductList>
        <ProductCard id={1}/>
        <ProductCard id={2}/>
      </ProductList>
    </ProductFilter>

    </>
  )
}

export default Productsection