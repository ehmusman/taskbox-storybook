"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Task = function Task(_ref) {
  var task = _ref.task,
      id = _ref.id,
      isCompleted = _ref.isCompleted,
      handleCompletedTask = _ref.handleCompletedTask,
      remove = _ref.remove;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "card ".concat(isCompleted ? "bg-danger text-light" : ""),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
        className: "float-right",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          style: {
            cursor: "".concat(!isCompleted ? "pointer" : "")
          },
          onClick: !isCompleted ? function () {
            return handleCompletedTask(id);
          } : null,
          className: " fa fa-check-circle mx-3"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "fa fa-trash",
          onClick: function onClick() {
            return remove(id);
          },
          style: {
            cursor: "pointer"
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "mt-3",
        children: task
      })]
    })
  });
};

var _default = Task;
exports.default = _default;

//# sourceMappingURL=Task.js.map