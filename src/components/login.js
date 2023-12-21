import { useNavigate } from "react-router-dom";
import "./registration.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginData } from "../Store/actions/logAction";


function Login() {
  const navigate = useNavigate();
  

  //==============================================NAVIGATION PART ===============================consy
  const [error, setError] = useState({});

  const [inputval, setInputval] = useState({
    password: "",
    email: "",
  });

  //const {email , password} = inputval;
  const registerData = useSelector((state) => state.register.registerData);
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputval(() => {
      return {
        ...inputval,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError(validate(inputval));

    const error = {};
    if (inputval.email !== registerData.email) {
      error.email = "incorrect email";
    }
    if (!inputval.email) {
      error.email = "email is required!";
    }
    if (inputval.password !== registerData.password) {
      error.password = " incorrect password";
    }
    if (!inputval.password) {
      error.password = " password is required!";
    }
    if (Object.keys(error).length > 0) {
      setError(error);
      return;
    } 
    else {
      
      dispatch(setLoginData(inputval))

      navigate("/dashboard");
    }
    //localStorage.setItem("userdata", JSON.stringify(loginData));
  };

  return (
    <div className=" container">
      <form onSubmit={handleSubmit} className="reg-container">
        <div >
          <span>LOGIN </span>

          <div className="input-form">
            <div className=" input-block">
              <label htmlFor="email" className="input-label">
                {" "}
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                placeholder="Email"
                value={inputval.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            {error.email ? <p className="err-mes">{error.email} </p> : null}

            <div className="input-block">
              <label htmlFor="password" className="input-label">
                {" "}
                Password{" "}
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Password"
                value={inputval.password}
                onChange={handleChange}
                name="password"
              />
            </div>

            {error.password ? (
              <p className="err-mes">{error.password} </p>
            ) : null}
          </div>

          <button type="submit" className="btnsig">
            {" "}
            Login{" "}
          </button>
            {" "}
            <span>Don't have an account ? </span>{" "}
            <button href="./" type="link" className="btnsig">
              {" "}
              Registration{" "}
            </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default (Login);
