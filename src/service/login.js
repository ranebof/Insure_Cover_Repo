import axios from "axios";


const API = "http://13.49.244.146:8000/";


const register = (user,first_name,last_name,email,phone_number,company_name,company_email) => {
     return axios.post(API + "api/auth/register/",{
      user,first_name,last_name,email,phone_number,company_name,company_email       
     }, {
       headers: {
          "Accept": "*/*",
          "Content-Type":"application/json",
       } 
     })
}

const login = (username,passwoord) => {
  return axios.post(API+ "api/auth/login/",{
      username,passwoord
  })
  .then(function (response) {
    if(response.data.token){
     localStorage.setItem("token",JSON.stringify(response.data))
    } else {
      // If the response does not contain a token, handle the error
      throw new Error("Login failed: No token received");
    }
  })
  .catch(function (error) {
    // Handle any errors that occur during the request or if the response does not contain a token
    console.error("Login failed:", error);
    // Optionally, you can re-throw the error to propagate it further
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