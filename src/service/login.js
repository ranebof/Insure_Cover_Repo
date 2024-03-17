import axios from "axios";


const API = "http://16.171.165.215:8000/api/register/";


const register = (user,first_name,last_name,email,phone_number,company_name,company_email) => {
     return axios.post(API,{
      user,first_name,last_name,email,phone_number,company_name,company_email       
     }, {
       headers: {
          "Accept": "*/*",
          "Content-Type":"application/json",
       } 
     })
}

const login = (email,password) => {
  return axios.post(API,{
      email,password

  })
  .then(function (response) {
    if(response.data.token){
      localStorage.setItem("token",JSON.stringify(response.data))
    }
  })
}


const authService = {
    register
}

const loginService = {
  login
}

export default authService