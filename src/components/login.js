import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginData } from "../Store/actions/logAction";
import { Eye, EyeOff } from "dragon-eye";

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const toggleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
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
    } else {
      dispatch(setLoginData(inputval));

      navigate("/dashboard");
    }
    //localStorage.setItem("userdata", JSON.stringify(loginData));
  };

  const handleRes = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="mainmain">
      <div className=" container">
        <form onSubmit={handleSubmit} className="reg-container">
          <span>LOGIN </span>
          <div className="input-form">
            <div className=" input-block">
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
              <input
                type={show? "text" :"password"}
                autoComplete="off"
                placeholder="Password"
                value={inputval.password}
                onChange={handleChange}
                name="password"
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
                {show ? (
                  <Eye colour="#0e8248"/>
                ) : (
                  <EyeOff  colour="#0e8248"/>
                )}
              </button>
            </div>

            {error.password ? (
              <p className="err-mes">{error.password} </p>
            ) : null}
          </div>
          <button type="submit" className="btnsig">
            Login
          </button>
          <button href="./" onClick={handleRes} type="link" className="btnsig">
            Don't have ? Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
