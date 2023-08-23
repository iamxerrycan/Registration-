import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAxiosdata } from "../Store/actions/axiAction";
//import { setSuccessData } from "../Store/actions/axiAction";

function Dashboard() {
  const navigate = useNavigate();
  const registerData = useSelector((state) => state.register.registerData);
  const dispatch = useDispatch();
 

  
  // axios fetching data =====================================================
  const [axidata, setAxidata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function apidata() {
      try {
        
        const response = await axios.get("https://reqres.in/api/users");
        const res = await response.data.data;
        setAxidata(res);
        dispatch(setAxiosdata(axidata));;
        console.log(apidata, "new");
        setLoading(false);
      } catch (err) {
        window.alert("something went wrong!");
        setLoading(false);
      }
    }
    apidata();
  }, );

  const Exit = () => {
    navigate("../");
  };

  // table to show data=====================================================
  return (
    <>
      <div className="main">
        <h2 className="heading"> Dashboard</h2>
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th> Name </th>
                <th>Email </th>
                <th>Password</th>
                <th>Confirm Password </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {registerData.fullname} </td>
                <td>{registerData.email}</td>
                <td>{registerData.password}</td>
                <td>{registerData.cpassword}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>firstname </th>
                <th>lastname </th>
                <th>email </th>
                <th>avtaar </th>
              </tr>
            </thead>
            <tbody>
              {/* {isEnter ===true  ?  */}

              {axidata.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                      {" "}
                      <img
                        src={item.avatar}
                        style={{ width: 40, height: 40 }}
                        alt="avtaar"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <div className="btnst">
          <button className="btn" type="submit" onClick={Exit}>
            Exit
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
