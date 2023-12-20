import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegisterData } from "../Store/actions/regAction";

function Registration() {
  // const user = useSelector(state => state.user)
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const [inputval, setInputval] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    //dispatch(registerUser(name , value))

    setInputval((inputval) => {
      return {
        ...inputval,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //(fullname , email , password , cpassword )= inputval;

    const error = {};

    if (!inputval.fullname) {
      error.fullname = " type your proper fullname  ";
    }

    if (!inputval.email) {
      error.email = " enter proper email";
    }

    if (!inputval.password) {
      error.password = " password is required";
    }

    if (!inputval.cpassword) {
      error.cpassword = " password is required";
    }

    if (inputval.password !== inputval.cpassword) {
      error.cpassword = " confirm password should be as password ";
    }
    if (Object.keys(error).length > 0) {
      setError(error);
      return null;
    } else {
      //dispatch({ type: "REGISTER_USER",payload: inputval });
      //dispatch(add_DATA(inputval))
      //dispatch(register_Data())
      dispatch(setRegisterData(inputval));
      navigate("/login");
    }
  };

  //console.log(login.user);
  //===========================================================return================================

  return (
    <div className=" container">
      <form onSubmit={handleSubmit} className="reg-container">
        <span>Sign-Up</span>
        <input
          type=" text"
          placeholder="Fullname"
          onChange={handleChange}
          value={inputval.fullname}
          name="fullname"
        />

        {error.fullname ? <p className="err-mes">{error.fullname}</p> : null}

        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={inputval.email}
          name="email"
        />

        {error.email ? <p className="err-mes">{error.email}</p> : null}

        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={inputval.password}
          name="password"
          maxLength={16}
        />

        {error.password ? <p className="err-mes">{error.password}</p> : null}

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={inputval.cpassword}
          name="cpassword"
        />

        {error.cpassword ? <p className="err-mes">{error.cpassword}</p> : null}

        <button className="btnsig" type="submit">
          signup
        </button>
        <button href="./login" type="link" className="btnsig">
          Already have an account ? Login
        </button>
      </form>
    </div>
  );
}

export default Registration;
