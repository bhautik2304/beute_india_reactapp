import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProductCard({id}) {
 const Navigate =useNavigate();
  const goToCart=()=>{
    var id=1
    Navigate(`cart/${id}`)
  }
  var path="/product/"+id
  return (
    <>
    <Link style={{textDecoration:'none'}} to={path}>
        <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                <div class="card mt-3 mb-2">
                  <img src="/picture/img3.png" alt=""/>
                  <h2 class="card-title">
                    Channel perfum
                  </h2>
                  <p>
                    Lorem ipsum Lorem ipsum Lorem
                   </p>
                  <div class="price-buy pb-3">
                    <div class="price">
                      RS 1250
                    </div>
                    <div>
                    <button onClick={goToCart}>add to cart</button>
                    </div>
                  </div>
                </div>
        </div>
    </Link>
    </>
  )
}

export default ProductCard