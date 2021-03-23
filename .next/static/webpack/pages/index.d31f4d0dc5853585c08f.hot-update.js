webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getInitialProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony import */ var C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./pages/Card.js");
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Index.module.scss */ "./pages/Index.module.scss");
/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data.json */ "./data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./data/data.json", 1);




var _jsxFileName = "C:\\Users\\Mahdar\\Desktop\\ssr\\pages\\index.js",
    _this = undefined;





function getInitialProps() {
  return _getInitialProps.apply(this, arguments);
}

function _getInitialProps() {
  _getInitialProps = Object(C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, cards;
    return C_Users_Mahdar_Desktop_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(_data_data_json__WEBPACK_IMPORTED_MODULE_6__);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            cards = _context.sent;
            console.log(cards, "cardssss");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getInitialProps.apply(this, arguments);
}

var Home = function Home() {
  // static async getInitialProps(){
  // return {cards:data}
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        href: "/static/styles.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.AppHeader,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: "/static/logo.png",
        className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.StaticLogo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Grid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJkYXRhIiwicmVzIiwianNvbiIsImNhcmRzIiwiY29uc29sZSIsImxvZyIsIkhvbWUiLCJzdHlsZXMiLCJBcHBIZWFkZXIiLCJTdGF0aWNMb2dvIiwiR3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBZUEsZUFBdEI7QUFBQTtBQUFBOzs7b1JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFYUMsS0FBSyxDQUFDQyw0Q0FBRCxDQUZsQjs7QUFBQTtBQUVDQyxlQUZEO0FBQUE7QUFBQSxtQkFHZUEsR0FBRyxDQUFDQyxJQUFKLEVBSGY7O0FBQUE7QUFHQ0MsaUJBSEQ7QUFJTEMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLFVBQW5COztBQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFNUCxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCO0FBQ0E7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsb0JBQVg7QUFBZ0MsV0FBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFRLGVBQVMsRUFBRUMseURBQU0sQ0FBQ0MsU0FBMUI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixpQkFBUyxFQUFFRCx5REFBTSxDQUFDRTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBT0U7QUFBSyxlQUFTLEVBQUVGLHlEQUFNLENBQUNHO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQXBCRDs7S0FBTUosSTtBQXNCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDMxZjRkMGRjNTg1MzU4NWMwOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEuanNvbic7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgLy8gcmV0dXJuIHsgY2FyZHM6IGRhdGEgfVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRhdGEpO1xyXG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGNvbnNvbGUubG9nKGNhcmRzLCBcImNhcmRzc3NzXCIpO1xyXG59XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gIC8vIHJldHVybiB7Y2FyZHM6ZGF0YX1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5TdGF0aWNMb2dvfSAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5HcmlkfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBjYXJkcy5tYXAoKGNhcmQpID0+ICg8Q2FyZCBrZXk9e2NhcmQuaWR9IC8+KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgey8qIDxDYXJkIC8+XHJcbiAgICAgICAgPENhcmQgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==