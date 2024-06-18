"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://138.68.127.156:8000/";

var register = function register(user, first_name, last_name, email, phone_number) {
  return _axios["default"].post("http://138.68.127.156:8000/api/auth/register/", {
    user: user,
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number
  }, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    }
  });
};

var login = function login(username, password) {
  return _axios["default"].post(API + "api/auth/login/", {
    username: username,
    password: password
  }).then(function (response) {
    if (response.data) {
      localStorage.setItem("token", JSON.stringify(response.data));
    } else {
      throw new Error("Login failed: No token received");
    }
  })["catch"](function (error) {
    console.error("Login failed:", error);
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