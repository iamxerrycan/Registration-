import { AXIOS_DATA } from "./types";
//import { AXIOS_SUCCESS } from "./types";

export const setAxiosdata = (axiosData)=>{
    return {
        type:AXIOS_DATA ,
        payload: axiosData
    }

}

// export const setSuccessData = (axiosData) =>{

//     return{
//         type:AXIOS_SUCCESS,
//         payload:axiosData
//     }
// }