module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card/Card.js":
/*!*********************************!*\
  !*** ./components/card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.scss */ \"./components/card/Card.module.scss\");\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/mahdar/Documents/front-end/Next/components/card/Card.js\";\n\n\nconst Card = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Card,\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Front,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/juice.jpg\",\n      alt: \"Avatar\",\n      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CardImage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: [\"Vitamin Juice \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Price,\n          children: \"$24.99\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 25\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Need a jump on your vitamins while drinking? Tired of popping the pills? Drink our vitamin enhanced juice, available in several flavours.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvQ2FyZC5qcz8yMGU2Il0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInN0eWxlcyIsIkZyb250IiwiQ2FyZEltYWdlIiwiQ29udGFpbmVyIiwiUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsaUJBQ1g7QUFBSyxXQUFTLEVBQUVDLHdEQUFNLENBQUNGLElBQXZCO0FBQUEseUJBQ0U7QUFBSyxhQUFTLEVBQUVFLHdEQUFNLENBQUNDLEtBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUMsWUFBVDtBQUFzQixTQUFHLEVBQUMsUUFBMUI7QUFBbUMsZUFBUyxFQUFFRCx3REFBTSxDQUFDRTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVGLHdEQUFNLENBQUNHLFNBQXZCO0FBQUEsOEJBQ0U7QUFBQSxrREFDZ0I7QUFBTSxtQkFBUyxFQUFFSCx3REFBTSxDQUFDSSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFrQmVOLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJkL0NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcmR9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRnJvbnR9PlxuICAgICAgPGltZyBzcmM9XCIvanVpY2UuanBnXCIgYWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPXtzdHlsZXMuQ2FyZEltYWdlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxuICAgICAgICA8aDM+XG4gICAgICAgICAgVml0YW1pbiBKdWljZSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5QcmljZX0+JDI0Ljk5PC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICBOZWVkIGEganVtcCBvbiB5b3VyIHZpdGFtaW5zIHdoaWxlIGRyaW5raW5nPyBUaXJlZCBvZiBwb3BwaW5nIHRoZVxuICAgICAgICAgIHBpbGxzPyBEcmluayBvdXIgdml0YW1pbiBlbmhhbmNlZCBqdWljZSwgYXZhaWxhYmxlIGluIHNldmVyYWxcbiAgICAgICAgICBmbGF2b3Vycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card/Card.js\n");

/***/ }),

/***/ "./components/card/Card.module.scss":
/*!******************************************!*\
  !*** ./components/card/Card.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Card\": \"Card_Card__jAIru\",\n\t\"Front\": \"Card_Front__37rJj\",\n\t\"Price\": \"Card_Price__2K92Y\",\n\t\"Container\": \"Card_Container__26g3T\",\n\t\"CardImage\": \"Card_CardImage__1gYw2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvQ2FyZC5tb2R1bGUuc2Nzcz9mZjEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvQ2FyZC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNhcmRcIjogXCJDYXJkX0NhcmRfX2pBSXJ1XCIsXG5cdFwiRnJvbnRcIjogXCJDYXJkX0Zyb250X18zN3JKalwiLFxuXHRcIlByaWNlXCI6IFwiQ2FyZF9QcmljZV9fMks5MllcIixcblx0XCJDb250YWluZXJcIjogXCJDYXJkX0NvbnRhaW5lcl9fMjZnM1RcIixcblx0XCJDYXJkSW1hZ2VcIjogXCJDYXJkX0NhcmRJbWFnZV9fMWdZdzJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card/Card.module.scss\n");

/***/ }),

/***/ "./data/data.json":
/*!************************!*\
  !*** ./data/data.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":0,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":1,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":2,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":3,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":4,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":5,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":6,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":7,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":8,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":9,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":10,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":11,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":12,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":13,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":14,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":15,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":16,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"},{\\\"id\\\":17,\\\"animation\\\":\\\"card\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEvZGF0YS5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/data.json\n");

/***/ }),

/***/ "./pages/Index.module.scss":
/*!*********************************!*\
  !*** ./pages/Index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Grid\": \"Index_Grid__TlFhD\",\n\t\"StaticLogo\": \"Index_StaticLogo__1a6Bu\",\n\t\"AppHeader\": \"Index_AppHeader___VtO1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbmRleC5tb2R1bGUuc2Nzcz80ZWZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL0luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiR3JpZFwiOiBcIkluZGV4X0dyaWRfX1RsRmhEXCIsXG5cdFwiU3RhdGljTG9nb1wiOiBcIkluZGV4X1N0YXRpY0xvZ29fXzFhNkJ1XCIsXG5cdFwiQXBwSGVhZGVyXCI6IFwiSW5kZXhfQXBwSGVhZGVyX19fVnRPMVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Index.module.scss\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/Card */ \"./components/card/Card.js\");\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.module.scss */ \"./pages/Index.module.scss\");\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.json */ \"./data/data.json\");\nvar _data_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ \"./data/data.json\", 1);\n\nvar _jsxFileName = \"/home/mahdar/Documents/front-end/Next/pages/index.js\";\n\n\n\n\nconst getStaticProps = async () => {\n  return {\n    props: {\n      cardsList: _data_data_json__WEBPACK_IMPORTED_MODULE_4__\n    }\n  };\n};\n\nconst Home = ({\n  cardsList,\n  login\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.AppHeader,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/logo.png\",\n        alt: \"me\",\n        className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.StaticLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Grid,\n      children: cardsList.map(card => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, card.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicHJvcHMiLCJjYXJkc0xpc3QiLCJkYXRhIiwiSG9tZSIsImxvZ2luIiwic3R5bGVzIiwiQXBwSGVhZGVyIiwiU3RhdGljTG9nbyIsIkdyaWQiLCJtYXAiLCJjYXJkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRUMsNENBQUlBO0FBQWpCO0FBREYsR0FBUDtBQUlELENBTE07O0FBT1AsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUYsV0FBRjtBQUFhRztBQUFiLENBQUQsS0FBMEI7QUFDckMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBRUMseURBQU0sQ0FBQ0MsU0FBMUI7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBQyxXQUROO0FBRUUsV0FBRyxFQUFDLElBRk47QUFHRSxpQkFBUyxFQUFFRCx5REFBTSxDQUFDRTtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUssZUFBUyxFQUFFRix5REFBTSxDQUFDRyxJQUF2QjtBQUFBLGdCQUNHUCxTQUFTLENBQUNRLEdBQVYsQ0FBZUMsSUFBRCxpQkFDYixxRUFBQyw2REFBRCxNQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBakJEOztBQW1CZVIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvQ2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JbmRleC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvZGF0YS5qc29uJztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNhcmRzTGlzdDogZGF0YSB9XG4gIH07XG4gIFxufVxuXG5jb25zdCBIb21lID0gKHsgY2FyZHNMaXN0LCBsb2dpbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXG4gICAgICAgICAgYWx0PVwibWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlN0YXRpY0xvZ299XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuR3JpZH0+XG4gICAgICAgIHtjYXJkc0xpc3QubWFwKChjYXJkKSA9PiAoXG4gICAgICAgICAgPENhcmQga2V5PXtjYXJkLmlkfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });