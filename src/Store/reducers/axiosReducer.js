
import { AXIOS_DATA } from "../actions/types";
//import {AXIOS_SUCCESS} from "../actions/types"
 
export const initialState = {
  axiosData: [],
};

function axiosReducer(state = initialState, action) {
  switch (action.type) {
    case AXIOS_DATA:
      return {
        ...state,
        axiosData: action.payload
        
      };

      // case AXIOS_SUCCESS:
      //   return{
      //     ...state ,
     
      
    default:
      return state;
  }
}

export default axiosReducer;
