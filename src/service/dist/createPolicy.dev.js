"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://13.49.244.146:8000/";

var createPolicy = function createPolicy(number, name, description, company) {
  return _axios["default"].post(API + "create/", {
    number: number,
    name: name,
    description: description,
    company: company
  }, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.data;
  })["catch"](function (error) {
    console.error("Сталася помилка при створенні полісу:", error);
    throw error;
  });
};

var createService = {
  createPolicy: createPolicy
};
var _default = createService;
exports["default"] = _default;