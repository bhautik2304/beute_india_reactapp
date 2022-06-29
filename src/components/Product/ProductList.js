import React from 'react'

function ProductList({children}) {
  return (
    <>
<div class="col-lg-10 col-md-9 main-content" >
          
          <h1>
            Product list
          </h1>
          <div class="container-fluid ">
            <div class="row main-row">
            <div class="row sorting-section">
              <div class="main-box">
                <div class="box1 box-blue"> VIEW AS  <img src="/picture/Group 46.svg"  alt=""/> <img src="/picture/Group 45.svg"  alt=""/></div>
                <div class="box2 box-black"> ITEMS PER PAGE : 50</div>
                  <div class="box3 box-green">
                    <select class="form-select form-filter" aria-label="Default select example">
                    <option selected>Default Sorting</option>
                    <option value="1">Popularity</option>
                    <option value="2">Low</option>
                    <option value="3">High</option>
                    </select>
                  </div>
                <div class="box4 box-grey" ><span onclick="openside()"><img src="/picture/filter.png" width="10%" alt=""/>&nbsp;&nbsp;Filter</span></div>
              </div>
            </div>
          </div>
          <div class="row text-center mt-2 mb-5">
          {children}
          </div>
          </div>
          </div>

    </>
  )
}

export default ProductList