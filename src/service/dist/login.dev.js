"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://13.49.244.146:8000/";

var register = function register(user, first_name, last_name, email, phone_number, company_name, company_email) {
  return _axios["default"].post(API + "api/auth/register/", {
    user: user,
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number,
    company_name: company_name,
    company_email: company_email
  }, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
  });
};

var login = function login(username, passwoord) {
  return _axios["default"].post(API + "api/auth/login/", {
    username: username,
    passwoord: passwoord
  }).then(function (response) {
    if (response.data.token) {
      localStorage.setItem("token", JSON.stringify(response.data));
    } else {
      // If the response does not contain a token, handle the error
      throw new Error("Login failed: No token received");
    }
  })["catch"](function (error) {
    // Handle any errors that occur during the request or if the response does not contain a token
    console.error("Login failed:", error); // Optionally, you can re-throw the error to propagate it further

    throw error;
  });
};

var authService = {
  register: register,
  login: login // checkUserExists: async function(username) {
  //   try {
  //     const response = await axios.get(API + "api/auth/get_data/" + username);
  //     return response.status === 200;
  //   } catch (error) {
  //     console.error("Error checking user existence:", error);
  //     return false;
  //   }
  // },

};
var _default = authService;
exports["default"] = _default;