"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://138.68.127.156:8000/api/db/policy/";

var savePolicy = function savePolicy(data) {
  return regeneratorRuntime.async(function savePolicy$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(API, data));

        case 3:
          _reactToastify.toast.success("Дані успішно збережені!");

          window.location.href = "/disease";
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);

          _reactToastify.toast.error("Щось пішло не так!");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getPolicy = function getPolicy() {
  var response;
  return regeneratorRuntime.async(function getPolicy$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(API));

        case 3:
          response = _context2.sent;

          _reactToastify.toast.success("Данні зчитані!");

          console.log(response.data);
          return _context2.abrupt("return", response.data);

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);

          _reactToastify.toast.error("Щось пішло не так!");

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var updatePolicy = function updatePolicy(id, updatedData) {
  var response;
  return regeneratorRuntime.async(function updatePolicy$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].put("".concat(API).concat(id, "/"), updatedData));

        case 3:
          response = _context3.sent;

          _reactToastify.toast.success("Поліс відредаговано!");

          return _context3.abrupt("return", response.data);

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);

          _reactToastify.toast.error("Щось пішло не так!");

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var savePolicyService = {
  savePolicy: savePolicy,
  getPolicy: getPolicy,
  updatePolicy: updatePolicy
};
var _default = savePolicyService;
exports["default"] = _default;