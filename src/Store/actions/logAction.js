import { LOGIN_USER } from "./types";

export const setLoginData = (inputval) => {
  return {
    type: LOGIN_USER,
    payload: inputval,
  };
};

//   export function loginUser(payload){
//     return function(dispatch){

//       dispatch({
//         type: LOGIN_USER,
//         payload: payload
//       })

//     }
//   }
