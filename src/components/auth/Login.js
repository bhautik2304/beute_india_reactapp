import React,{useState} from 'react'
import { SaveLogin } from '../../util';
import { useNavigate } from "react-router-dom";
function Login() {

  const Navigate=useNavigate()

  const [name, setName] = useState('');
  const [compunyId, setCompunyId] = useState('');
  const [pass, setPass] = useState('');
  
  const login=(e)=>{
    e.preventDefault()
    if(name=="bhautik" && pass==1234){
      // alert('is login')
     const data=compunyId 
      SaveLogin(data)
      Navigate('/')
    }
    console.log(localStorage.getItem('login'))
  }
  return (
    <>
        <form action="#">
          <h1>BEAUT INDIA</h1>
          <h6>LOG IN</h6>
          <div className="form-group">
            <select name="company" value={compunyId} onChange={e=>setCompunyId(e.target.value)} className=" form-select form-co" id="company" >
              <option value="">Select your company</option>
              <option value="1">roots</option>
              <option value="2">roots-2</option>
              <option value="3">roots-3</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="ps">User Name</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="ps">Password</label>
            <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button onClick={login} className="loginbtn">Log in</button>
        </form>
    </>
  )
}

export default Login