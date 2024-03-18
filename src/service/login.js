import axios from "axios";


const API = "http://16.170.143.105:8000/api/";


const register = (user,first_name,last_name,email,phone_number,company_name,company_email) => {
     return axios.post(API + "register/",{
      user,first_name,last_name,email,phone_number,company_name,company_email       
     }, {
       headers: {
          "Accept": "*/*",
          "Content-Type":"application/json",
       } 
     })
}

const login = (username,password) => {
  return axios.post(API+ "login/",{
      username,password

  })
  .then(function (response) {
    if(response.data.token){
     localStorage.setItem("token",JSON.stringify(response.data))
    }
  })
}


const authService = {
    register,
    login
}

export default authService