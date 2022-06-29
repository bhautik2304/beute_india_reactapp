import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Logout } from '../../util';


function Navbar() {

  const navigate=useNavigate();
  const logout=()=>{
    Logout(navigate)
  }
  return (
    <>
    <div class="navhead">
      <div class="logoo">
        <Link to="/"><h1> BEAUT INDIA</h1></Link>
      </div>
      <ul class="navhead-links" id="myDIV">
        <li>
          <div class="wrapper">
            <div class="container searchcontainer">
              <div class="search_wrap search_wrap_1">
                <div class="search_box">
                  <input type="text" class="input-search" placeholder="SEARCH" />
                  <div class="btn btn_common">
                    <img src="/picture/Group 1.svg" class="search-img" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link to="/wishlist"><img src="/picture/noun-love-4726271.svg" class="heart-img"  alt="" /></Link>
        </li>
        <li>
          <Link to="/cart"><img src="/picture/Path 39.svg" class="cart-img" alt="" /></Link>
        </li>
        <li class="nav-item dropdown user">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paras
          </a>
         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><Link class="dropdown-item" to="setting">Setting</Link></li> 
            <li><Link class="dropdown-item" to="#">Demo</Link></li> 
            <li><hr class="dropdown-divider"/></li> 
            <li><button class="dropdown-item" onClick={logout}>Logout</button></li> 
          </ul>
        </li>
      </ul>

      <div class="hamburger" onclick="myFunction()">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </>
  )
}

export default Navbar