// import React, { useEffect, useState } from "react";
// import "./dashboard.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { setAxiosdata } from "../Store/actions/axiAction";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const registerData = useSelector((state) => state.register.registerData);
//   const dispatch = useDispatch();

//   const [axidata, setAxidata] = useState([]);
//   const [loading, setLoading] = useState(true);

//     async function fetchData() {
//       try {
//         const response = await axios.get("https://reqres.in/api/users");
//         const res = await response.data.data;
//         setAxidata(res);
//         dispatch(setAxiosdata(axidata));
//         setLoading(false);
//       } catch (err) {
//         window.alert("Something went wrong!");
//         setLoading(false);
//       }
//     }

//   useEffect(() => {
//     fetchData();
//   }, [dispatch, axidata]);

//   const exit = () => {
//     navigate("../");
//   };

//   return (
//     <div className="main-dash">
//       <div className="data-from-redux">
//         <h4 style={{color : "white"}}>Data From Redux Store!</h4>
//         <table className="first-table">
//           <thead className="thead">
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Confirm Password</th>
//             </tr>
//           </thead>
//           <tbody className="tbody">
//             <tr>
//               <td>{registerData.fullname}</td>
//               <td>{registerData.email}</td>
//               <td>{registerData.password}</td>
//               <td>{registerData.cpassword}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="api-data">
//       <h4 style={{color : "white"}}>Data From Api!</h4>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <table className="second-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Avatar</th>
//               </tr>
//             </thead>
//             <tbody>
//               {axidata.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.email}</td>
//                   <td>
//                     <img
//                       src={item.avatar}
//                       style={{ width: 40, height: 40 }}
//                       alt="avatar"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       <div className="exit-button">
//         <button className="btn" type="submit" onClick={exit}>
//           Exit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dashboard.css";
import logo from '../assets/logouser.jpg'

const Dashboard = () => {
  const navigate = useNavigate();
  const registerData = useSelector((state) => state.register.registerData);

  const exit = () => {
    navigate("../");
  };

  return (
    <div className="main-dash">
      <div className="container-dash">
        {" "}
        <img style={{width: "170px" , height:"170px", borderRadius:"50%"}} src={logo} alt="User Logo" />
      
      <div className="data-from-redux">
        <div className="user-info">
          <div>
            <strong>Name:</strong> {registerData.fullname}
          </div>
          <div>
            <strong>Email:</strong> {registerData.email}
          </div>
          <div>
            <strong>Password:</strong> {registerData.password}
          </div>
        </div>
      </div>
      <button onClick={exit}>LogOut</button>
      </div>
    </div>
  );
};

export default Dashboard;
