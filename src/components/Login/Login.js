import React, { useState } from 'react'

import SIgn_img from '../image/SIgn_img';
import { useNavigate } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert("pls input the email");
        } else if (!email.includes("@")) {
            alert("email address is wrong");
        } else if (password === "") {
            alert("pls fill the password");
        } else if (password.length < 5) {
            alert("password size too small");
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }

    return (
        <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-7 px-5 pt-5">
              <h1 className="font-weight-bold py-3">Sheoran HiTech</h1>
              <h4>LogIn</h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      name="email"
                      onChange={getdata}
                      type="email"
                      className="form-control my-3 p-4"
                      placeholder="Enter Your Email"
                    ></input>
                  </div>
  
                  <div className="col-lg-7">
                    <input
                      name="password"
                      onChange={getdata}
                      type="password"
                      className="form-control my-3 p-4"
                      placeholder="Enter Your Password"
                    ></input>
                  </div>
  
                  <div className="form-row">
                    <div className="col-lg-7">
                      <button
                        onClick={addData}
                        type="button"
                        className="btn1 mt-3 mb-5"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          <SIgn_img/>
          </div>
        </div>
      </section>
    )
}

export default Login