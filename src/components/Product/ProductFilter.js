import React from 'react'

function ProductFilter({children}) {
  return (
    <>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-3 sidebar-contect" id="side">
        <div class="scroll-div-side">
          <div class="category-filter ">
          <ul class="nav flex-column">  

           <span onclick="openside()"><i class="fa-solid fa-xmark" style={{fontSize: "30px"}}></i></span> 
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Catogories</u></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fragnance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skin Care & Beauty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Accessories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home Fragrance </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Apparels </a>
            </li>
          </ul>
        </div>
        <div class="brands-filter">
          <ul class="nav flex-column">  
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Brands</u></a>
            </li>
           
              <div class="scroll-div">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      4711
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Alyssa 
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Ashley
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Aramis
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Aspen
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Bahama
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Baomi 
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Bentley
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Betty
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                      Barclay
                    </li>
                  </ul>
            </div>
        
          </ul>
        </div>
       
        <div class="price-filter">
          <ul class="nav flex-column">  
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Price</u></a>
            </li>
            <div class="scroll-div">
            <ul class="list-group">
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 0-499
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 500-999
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 1000-1999
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 2000-3999
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 4000-10000
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 10000-15000
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 15000-20000
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Rs. 20000 & above
              </li>
            </ul>
          </div>
          </ul>
        </div>
        <div class="size-filter mb-5">
          <ul class="nav flex-column">  
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-angle-down"></i>&nbsp;<u class="cathead">Size</u></a>
            </li>
            <div class="scroll-div">
            <ul class="list-group">
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                4711
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Alyssa 
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Ashley
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Aramis
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Aspen
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Bahama
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Baomi 
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Bentley
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Betty
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Barclay
              </li>
            </ul>
            </div>
          </ul>
        </div>
        </div>
        </div>
      
        {children}

        </div>
    </div>
    </>
  )
}

export default ProductFilter