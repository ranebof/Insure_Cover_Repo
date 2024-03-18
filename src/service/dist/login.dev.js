"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://16.170.143.105:8000/api/login/";

var register = function register(user, first_name, last_name, email, phone_number, company_name, company_email) {
  return _axios["default"].post(API, {
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

var login = function login(username, password) {
  return _axios["default"].post(API, {
    username: username,
    password: password
  }).then(function (response) {
    if (response.data.token) {
      localStorage.setItem("token", JSON.stringify(response.data));
    }
  });
};

var authService = {
  register: register,
  login: login
};
var _default = authService;
exports["default"] = _default;