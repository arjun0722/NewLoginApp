import React, { useState } from 'react'

import SIgn_img from '../image/SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
       
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert("pls input the name")
        } else if (email === "") {
            alert("pls input email")
        } else if (!email.includes("@")) {
            alert("wrong email address")
        }  else if (password === "") {
            alert("pls input the password")
        } else if (password.length < 5) {
            alert("passwrod size is too small")
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-7 px-5 pt-5">
              <h1 className="font-weight-bold py-3">Sheoran HiTech</h1>
              <h4>Register Your Account Here</h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input name="name"
                    onChange={getdata}
                      type="name"
                      className="form-control my-3 p-4"
                      placeholder="Enter Your Name"
                    ></input>
                  </div>
  
                  <div className="col-lg-7">
                    <input name="email"
                    onChange={getdata}
                      type="email"
                      className="form-control my-3 p-4"
                      placeholder="Enter Your Email"
                    ></input>
                  </div>
  
                  <div className="col-lg-7">
                    <input name="password"
                    onChange={getdata}
                      type="password"
                      className="form-control my-3 p-4"
                      placeholder="Enter Your Password"
                    ></input>
                  </div>
  
                  <div className="form-row">
                    <div className="col-lg-7">
                      <button onClick={addData} type="button" className="btn1 mt-3 mb-5">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#">Forgot password</a>
                <p className="passcode">
                  Don't have account <span><NavLink to="/login">SignIn</NavLink></span>
                </p>
              </form>
            </div>
         <SIgn_img/>
          </div>
        </div>
      </section>
    )
}

export default Home