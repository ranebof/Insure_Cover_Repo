"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://138.68.127.156:8000/api/policy/";

var savePolicy = function savePolicy(data) {
  var response;
  return regeneratorRuntime.async(function savePolicy$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(API, data));

        case 3:
          response = _context.sent;

          _reactToastify.toast.success("Дані успішно збережені!");

          return _context.abrupt("return", {
            data: response.data
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);

          _reactToastify.toast.error("Щось пішло не так!");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var savePolicyService = {
  savePolicy: savePolicy
};
var _default = savePolicyService;
exports["default"] = _default;