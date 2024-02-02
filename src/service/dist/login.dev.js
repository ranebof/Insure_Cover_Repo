"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "";

var register = function register(name, surname, email) {
  return _axios["default"].post(API, {
    name: name,
    surname: surname,
    email: email
  }, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
  });
};

var authService = {
  register: register
};