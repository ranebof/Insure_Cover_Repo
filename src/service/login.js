import axios from "axios";

const API = "http://138.68.127.156:8000/";

const register = (user, first_name, last_name, email, phone_number) => {
  return axios.post(
    "http://138.68.127.156:8000/api/auth/register/",
    {
      user,
      first_name,
      last_name,
      email,
      phone_number,
    },
    {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );
};

const login = (username, password) => {
  return axios
    .post(API + "api/auth/login/", {
      username,
      password,
    })
    .then(function (response) {
      if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data));
      } else {
        throw new Error("Login failed: No token received");
      }
    })
    .catch(function (error) {
      console.error("Login failed:", error);
      throw error;
    });
};

const authService = {
  register,
  login,
  // checkUserExists: async function(username) {
  //   try {
  //     const response = await axios.get(API + "api/auth/get_data/" + username);
  //     return response.status === 200;
  //   } catch (error) {
  //     console.error("Error checking user existence:", error);
  //     return false;
  //   }
  // },
};

export default authService;
