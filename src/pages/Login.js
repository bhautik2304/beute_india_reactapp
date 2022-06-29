import React,{useState} from "react";
import {Login} from "../components";
import {SaveLogin} from "../util"
function Loginpage() {



  return (
    <>
      <div class="login-container">
        <div class="row">
          <div class="col-lg-6">
            <div class="dot-img-one">
              <img src="/picture/Group 3.png" width="12%" alt="" />
            </div>
            <div class="login-form">
              <Login />
            </div>
            <div class="dot-img-two">
              <img src="/picture/Group 3.png" width="14%" alt="" />
            </div>
          </div>
          <div class="login-img col-lg-6">
            <div class="row">
              <img src="/picture/Group 1.png" class="img-1" alt="" />
              <img src="/picture/Group 1.5.png" class="img-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
