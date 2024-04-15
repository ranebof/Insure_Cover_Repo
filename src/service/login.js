import axios from "axios";


const API = "http://13.49.244.146:8000/";


const register = (user,password,email) => {
     return axios.post(API + "api/auth/register/",{
      user,password,email     
     }, {
       headers: {
          "Accept": "*/*",
          "Content-Type":"application/json",
       } 
     })
}

const login = (username,password) => {
  return axios.post(API+ "api/auth/login/",{
      username,password 
  })
  .then(function (response) {
    if(response.data){
     localStorage.setItem("token",JSON.stringify(response.data))
    } else {
      throw new Error("Login failed: No token received");
    }
  })
  .catch(function (error) {
    console.error("Login failed:", error);
    throw error;
  });
}


const authService = {
    register,
    login
    // checkUserExists: async function(username) {
    //   try {
    //     const response = await axios.get(API + "api/auth/get_data/" + username);
    //     return response.status === 200;
    //   } catch (error) {
    //     console.error("Error checking user existence:", error);
    //     return false;
    //   }
    // },
}

export default authService