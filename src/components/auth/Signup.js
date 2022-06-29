import React from 'react'

function Signup() {
  return (
    <>
    <form action="#">
          <h1>BEAUT INDIA</h1>
          <h6>Signup</h6>
          <div className="form-group">
            <select name="company" className=" form-select form-co" id="company" >
              <option value="">Select your company</option>
              <option value="1">roots</option>
              <option value="2">roots-2</option>
              <option value="3">roots-3</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="ps">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="loginbtn"> <a href="landing.html"> Log in</a></button>
        </form>
    </>
  )
}

export default Signup