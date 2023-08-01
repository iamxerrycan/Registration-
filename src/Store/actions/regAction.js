import { REGISTER_USER } from "./types";

export const setRegisterData = (inputval) => {
  return {
    type: REGISTER_USER,
    payload: inputval,
  };
};

//   import {
//     REGISTER_USER
//   } from './types'

//   export function registerUser(payload){
//     return function(dispatch){

//       dispatch({
//         type: REGISTER_USER,
//         payload: payload
//       })

//     }
//   }
