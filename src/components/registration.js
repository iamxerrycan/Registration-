import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRegisterData } from "../Store/actions/regAction";
import { Eye, EyeOff } from "dragon-eye";

function Registration() {
  // const user = useSelector(state => state.user)
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const toggleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

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
      error.fullname = "Please enter your full name";
    } else {
      const fullNameRegex = /^[a-zA-Z\s]+$/;
      if (!fullNameRegex.test(inputval.fullname)) {
        error.fullname = "Please enter a valid full name";
      } else if (inputval.fullname.length < 8) {
        error.fullname = "fullname should be at least 8 characters long";
      }
    }

    if (!inputval.email) {
      error.email = "Please enter your email";
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(inputval.email)) {
        error.email = "Please enter a valid email address";
      }
    }

    if (!inputval.password) {
      error.password = "Please enter a password";
    } else {
      if (inputval.password.length < 8) {
        error.password = "Password should be at least 8 characters long";
      }
      const lowercaseRegex = /[a-z]/;

      const uppercaseRegex = /[A-Z]/;
      if (
        !uppercaseRegex.test(inputval.password) ||
        !lowercaseRegex.test(inputval.password)
      ) {
        error.password =
          "Password should contain at least one upper-lower case letter";
      }

      const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if (!specialCharRegex.test(inputval.password)) {
        error.password =
          "Password should contain at least one special character";
      }
    }
    if (!inputval.cpassword) {
      error.cpassword = "Please confirm your password";
    } else if (inputval.password !== inputval.cpassword) {
      error.cpassword = "Passwords do not match";
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

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  //console.log(login.user);
  //===========================================================return================================

  return (
    <div className="mainmain">
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

          <div className="showhide">
            {" "}
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={inputval.password}
              name="password"
              maxLength={16}
            />
            <button
              style={{
                border: "none",
                width: "10px",
                background: "none",
                margin: "0",
                padding: "0",
              }}
              onClick={toggleClick}
            >
              {show ? <Eye colour="#0e8248" /> : <EyeOff colour="#0e8248" />}
            </button>
          </div>

          {error.password ? <p className="err-mes">{error.password}</p> : null}

          <div className="showhide">
            <input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleChange}
              value={inputval.cpassword}
              name="cpassword"
            />

            <button
              style={{
                border: "none",
                width: "10px",
                background: "none",
                margin: "0",
                padding: "0",
              }}
              onClick={toggleClick}
            >
              {show ? <Eye colour="#0e8248" /> : <EyeOff colour="#0e8248" />}
            </button>
          </div>

          {error.cpassword ? (
            <p className="err-mes">{error.cpassword}</p>
          ) : null}

          <button className="btnsig" type="submit">
            signup
          </button>
          <button
            href="./login"
            onClick={handleLogin}
            type="link"
            className="btnsig"
          >
            Already have an account ? Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
