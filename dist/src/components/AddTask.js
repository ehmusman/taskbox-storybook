"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Task = _interopRequireDefault(require("./Task"));

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");

require("font-awesome/css/font-awesome.min.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddTask = function AddTask(_ref) {
  var _ref$iValues = _ref.iValues,
      iValues = _ref$iValues === void 0 ? [] : _ref$iValues;

  var _useState = (0, _react.useState)(iValues),
      _useState2 = _slicedToArray(_useState, 2),
      tasks = _useState2[0],
      setTasks = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      task = _useState4[0],
      setTask = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      err = _useState6[0],
      setErr = _useState6[1];

  var addingTask = function addingTask() {
    if (!task) {
      setErr(true);
      return;
    }

    var data = {
      id: Math.random() * 100020102,
      task: task
    };

    var newData = _toConsumableArray(tasks);

    newData.push(data);
    setTasks(newData);
  };

  var handleOnChange = function handleOnChange(e) {
    setErr(false);
    setTask(e.target.value);
  };

  var handleCompletedTask = function handleCompletedTask(id) {
    var data = _toConsumableArray(tasks);

    data.map(function (task) {
      return task.id === id ? task.isCompleted = true : task;
    });
    setTasks(data);
  };

  var handleRemoveTask = function handleRemoveTask(id) {
    var data = _toConsumableArray(tasks);

    setTasks(data.filter(function (task) {
      return task.id !== id;
    }));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "addtask",
        children: "Add Task"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        className: "form-control ".concat(err ? "is-invalid" : ""),
        placeholder: "Add Task",
        value: task,
        onChange: handleOnChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "invalid-feedback",
        children: "This field is required"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: addingTask,
      className: "btn btn-dark",
      children: "Add Task"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "card-columns my-3",
      children: tasks.map(function (task) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Task.default, {
          id: task.id,
          task: task.task,
          isCompleted: task.isCompleted,
          handleCompletedTask: handleCompletedTask,
          remove: handleRemoveTask
        }, task.id);
      })
    })]
  });
};

var _default = AddTask;
exports.default = _default;

//# sourceMappingURL=AddTask.js.map