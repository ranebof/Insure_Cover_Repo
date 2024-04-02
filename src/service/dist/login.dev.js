"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://16.170.143.105:8000/api/";

var register = function register(user, first_name, last_name, email, phone_number, company_name, company_email) {
  return _axios["default"].post(API + "register/", {
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
  return _axios["default"].post(API + "login/", {
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
  login: login,
  checkUserExists: function checkUserExists(username) {
    var response;
    return regeneratorRuntime.async(function checkUserExists$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get(API + "users/" + username));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.status === 200);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("Error checking user existence:", _context.t0);
            return _context.abrupt("return", false);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  }
};
var _default = authService;
exports["default"] = _default;