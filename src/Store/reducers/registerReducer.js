import { REGISTER_USER } from "../actions/types";

const initialState = {
  //isRegister: false,
  registerData: {
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
  },
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
       // isRegister: true,
       registerData: action.payload,
      };
    default:
      return state;
  }
}

export default registerReducer;
