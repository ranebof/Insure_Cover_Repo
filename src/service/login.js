import axios from "axios";


const API = "";


const register = (name,surname,email) => {
     return axios.post(API,{
        name,surname,email       
     }, {
       headers: {
          "Accept": "*/*",
          "Content-Type":"application/json",
       } 
     })
}


const authService = {
    register
}

