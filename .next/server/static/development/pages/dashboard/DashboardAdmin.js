module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LayoutComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutComponent */ "./components/LayoutComponent.js");
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("footer", {
    className: "main-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Copyright \xA9 2018", __jsx("div", {
    className: "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), " Design By ", __jsx("a", {
    href: "https://nauval.in/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Muhamad Nauval Azhar")), __jsx("div", {
    className: "footer-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/LayoutComponent.js":
/*!***************************************!*\
  !*** ./components/LayoutComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\components\\LayoutComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  title
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("meta", {
  charset: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("meta", {
  content: "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
  name: "viewport",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  href: "../static/assets/img/stisla.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, title, " \u2014 Stisla"), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/bootstrap/css/bootstrap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/fontawesome/css/all.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/jqvmap/dist/jqvmap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/summernote/summernote-bs4.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/owlcarousel2/dist/assets/owl.carousel.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/owlcarousel2/dist/assets/owl.theme.default.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/css/style.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/css/components.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("script", {
  async: true,
  src: "https://www.googletagmanager.com/gtag/js?id=UA-94034622-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("script", {
  dangerouslySetInnerHTML: {
    __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'UA-94034622-3');`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/jquery.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/popper.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/tooltip.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/bootstrap/js/bootstrap.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/nicescroll/jquery.nicescroll.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/moment.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/stisla.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/jquery.sparkline.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/chart.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/owlcarousel2/dist/owl.carousel.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/summernote/summernote-bs4.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/chocolat/dist/js/jquery.chocolat.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/page/index.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/scripts.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/custom.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
})), children));

/***/ }),

/***/ "./components/LayoutDashboard.js":
/*!***************************************!*\
  !*** ./components/LayoutDashboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./components/SideBar.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\components\\LayoutDashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  title
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("meta", {
  charset: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("meta", {
  content: "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
  name: "viewport",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  href: "../static/assets/img/stisla.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, title, " \u2014 Stisla"), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/bootstrap/css/bootstrap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/fontawesome/css/all.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/jqvmap/dist/jqvmap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/summernote/summernote-bs4.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/owlcarousel2/dist/assets/owl.carousel.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/modules/owlcarousel2/dist/assets/owl.theme.default.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/css/style.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "../static/assets/css/components.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("script", {
  async: true,
  src: "https://www.googletagmanager.com/gtag/js?id=UA-94034622-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("script", {
  dangerouslySetInnerHTML: {
    __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'UA-94034622-3');`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/jquery.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/popper.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/tooltip.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/bootstrap/js/bootstrap.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/nicescroll/jquery.nicescroll.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/moment.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/stisla.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/jquery.sparkline.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/chart.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/owlcarousel2/dist/owl.carousel.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/summernote/summernote-bs4.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/modules/chocolat/dist/js/jquery.chocolat.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/page/index.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/scripts.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), __jsx("script", {
  src: "../static/assets/js/custom.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
})), __jsx("div", {
  id: "app",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("div", {
  class: "main-wrapper main-wrapper-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}), __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
})))));

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Navbar = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "navbar-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("nav", {
    className: "navbar navbar-expand-lg main-navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("form", {
    className: "form-inline mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("ul", {
    className: "navbar-nav mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    "data-toggle": "sidebar",
    className: "nav-link nav-link-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    "data-toggle": "search",
    className: "nav-link nav-link-lg d-sm-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })))), __jsx("div", {
    className: "search-element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("input", {
    className: "form-control",
    type: "search",
    placeholder: "Search",
    "aria-label": "Search",
    "data-width": 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("button", {
    className: "btn",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("div", {
    className: "search-backdrop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("div", {
    className: "search-result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "search-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Histories"), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "How to hack NASA using CSS"), __jsx("a", {
    href: "#",
    className: "search-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Kodinger.com"), __jsx("a", {
    href: "#",
    className: "search-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "#Stisla"), __jsx("a", {
    href: "#",
    className: "search-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))), __jsx("div", {
    className: "search-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Result"), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 30,
    src: "../static/assets/img/products/product-3-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), "oPhone S9 Limited Edition")), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 30,
    src: "../static/assets/img/products/product-2-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), "Drone X2 New Gen-7")), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 30,
    src: "../static/assets/img/products/product-1-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), "Headphone Blitz")), __jsx("div", {
    className: "search-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Projects"), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "search-icon bg-danger text-white mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), "Stisla Admin Template")), __jsx("div", {
    className: "search-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "search-icon bg-primary text-white mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-laptop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), "Create a new Homepage Design"))))), __jsx("ul", {
    className: "navbar-nav navbar-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("li", {
    className: "dropdown dropdown-list-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    "data-toggle": "dropdown",
    className: "nav-link nav-link-lg message-toggle beep",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-menu dropdown-list dropdown-menu-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Messages", __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Mark All As Read"))), __jsx("div", {
    className: "dropdown-list-content dropdown-list-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item dropdown-item-unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/avatar/avatar-1.png",
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx("div", {
    className: "is-online",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Kusnaedi"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Hello, Bro!"), __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "10 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item dropdown-item-unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/avatar/avatar-2.png",
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Dedik Sugiharto"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit"), __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "12 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item dropdown-item-unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/avatar/avatar-3.png",
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx("div", {
    className: "is-online",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Agung Ardiansyah"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "12 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/avatar/avatar-4.png",
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Ardian Rahardiansyah"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Duis aute irure dolor in reprehenderit in voluptate velit ess"), __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "16 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/avatar/avatar-5.png",
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Alfa Zulkarnain"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Exercitation ullamco laboris nisi ut aliquip ex ea commodo"), __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "Yesterday")))), __jsx("div", {
    className: "dropdown-footer text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "View All ", __jsx("i", {
    className: "fas fa-chevron-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }))))), __jsx("li", {
    className: "dropdown dropdown-list-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    "data-toggle": "dropdown",
    className: "nav-link notification-toggle nav-link-lg beep",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-menu dropdown-list dropdown-menu-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "Notifications", __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, "Mark All As Read"))), __jsx("div", {
    className: "dropdown-list-content dropdown-list-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item dropdown-item-unread",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-icon bg-primary text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "Template update is available now!", __jsx("div", {
    className: "time text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "2 Min Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-icon bg-info text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "You"), " and ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Dedik Sugiharto"), " are now friends", __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, "10 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-icon bg-success text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, "Kusnaedi"), " has moved task ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, "Fix bug header"), " to ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, "Done"), __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, "12 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-icon bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-exclamation-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, "Low disk space. Let's clean it!", __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "17 Hours Ago"))), __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-item-icon bg-info text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-bell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  })), __jsx("div", {
    className: "dropdown-item-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, "Welcome to Stisla template!", __jsx("div", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, "Yesterday")))), __jsx("div", {
    className: "dropdown-footer text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "View All ", __jsx("i", {
    className: "fas fa-chevron-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }))))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    "data-toggle": "dropdown",
    className: "nav-link dropdown-toggle nav-link-lg nav-link-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/avatar/avatar-1.png",
    className: "rounded-circle mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }), __jsx("div", {
    className: "d-sm-none d-lg-inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, "Hi, Ujang Maman")), __jsx("div", {
    className: "dropdown-menu dropdown-menu-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "Logged in 5 min ago"), __jsx("a", {
    href: "features-profile.html",
    className: "dropdown-item has-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }), " Profile"), __jsx("a", {
    href: "features-activities.html",
    className: "dropdown-item has-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-bolt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }), " Activities"), __jsx("a", {
    href: "features-settings.html",
    className: "dropdown-item has-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-cog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }), " Settings"), __jsx("div", {
    className: "dropdown-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }), __jsx("a", {
    href: "#",
    className: "dropdown-item has-icon text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-sign-out-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }), " Logout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/SideBar.js":
/*!*******************************!*\
  !*** ./components/SideBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\components\\SideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SideBar = () => {
  return __jsx("div", {
    className: "main-sidebar sidebar-style-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("aside", {
    id: "sidebar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "sidebar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Stisla")), __jsx("div", {
    className: "sidebar-brand sidebar-brand-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "St")), __jsx("ul", {
    className: "sidebar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Dashboard"), __jsx("li", {
    className: "dropdown active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-fire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Dashboard")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "index-0.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "General Dashboard")), __jsx("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Ecommerce Dashboard")))), __jsx("li", {
    className: "menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Starter"), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Layout")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "layout-default.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Default Layout")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "layout-transparent.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Transparent Sidebar")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "layout-top-navigation.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Top Navigation")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "blank.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Blank Page"))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-th",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Bootstrap")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-alert.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Alert")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-badge.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Badge")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-breadcrumb.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Breadcrumb")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-buttons.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Buttons")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-card.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Card")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-carousel.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Carousel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-collapse.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Collapse")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-dropdown.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Dropdown")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-form.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Form")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-list-group.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "List Group")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-media-object.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Media Object")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-modal.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Modal")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-nav.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Nav")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-navbar.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Navbar")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-pagination.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Pagination")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-popover.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Popover")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-progress.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Progress")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-table.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Table")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-tooltip.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Tooltip")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "bootstrap-typography.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Typography")))), __jsx("li", {
    className: "menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Stisla"), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-th-large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Components")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-article.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Article")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link beep beep-sidebar",
    href: "components-avatar.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Avatar")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-chat-box.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Chat Box")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link beep beep-sidebar",
    href: "components-empty-state.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Empty State")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-gallery.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Gallery")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link beep beep-sidebar",
    href: "components-hero.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Hero")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-multiple-upload.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Multiple Upload")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link beep beep-sidebar",
    href: "components-pricing.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Pricing")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-statistic.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Statistic")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-tab.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Tab")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-table.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Table")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "components-user.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "User")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link beep beep-sidebar",
    href: "components-wizard.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Wizard")))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-file-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Forms")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "forms-advanced-form.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Advanced Form")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "forms-editor.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Editor")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "forms-validation.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Validation")))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-map-marker-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Google Maps")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-advanced-route.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Advanced Route")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-draggable-marker.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Draggable Marker")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-geocoding.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Geocoding")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-geolocation.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Geolocation")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-marker.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Marker")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-multiple-marker.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Multiple Marker")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-route.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Route")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("a", {
    href: "gmaps-simple.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Simple")))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-plug",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Modules")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-calendar.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Calendar")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-chartjs.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "ChartJS")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-datatables.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "DataTables")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-flag.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Flag")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-font-awesome.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Font Awesome")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-ion-icons.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Ion Icons")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-owl-carousel.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Owl Carousel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-sparkline.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Sparkline")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-sweet-alert.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Sweet Alert")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-toastr.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Toastr")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-vector-map.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Vector Map")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "modules-weather-icon.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Weather Icon")))), __jsx("li", {
    className: "menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Pages"), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "Auth")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("a", {
    href: "auth-forgot-password.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Forgot Password")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("a", {
    href: "auth-login.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Login")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("a", {
    href: "auth-register.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "Register")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("a", {
    href: "auth-reset-password.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Reset Password")))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-exclamation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Errors")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "errors-503.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "503")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "errors-403.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "403")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "errors-404.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "404")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "errors-500.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "500")))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-bicycle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Features")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-activities.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "Activities")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-post-create.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, "Post Create")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-posts.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "Posts")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-profile.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "Profile")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-settings.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "Settings")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-setting-detail.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, "Setting Detail")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "features-tickets.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Tickets")))), __jsx("li", {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "nav-link has-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-ellipsis-h",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "Utilities")), __jsx("ul", {
    className: "dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("a", {
    href: "utilities-contact.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Contact")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "utilities-invoice.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, "Invoice")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("a", {
    href: "utilities-subscribe.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, "Subscribe")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("a", {
    className: "nav-link",
    href: "credits.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-pencil-ruler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "Credits")))), __jsx("div", {
    className: "mt-4 mb-4 p-3 hide-sidebar-mini",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://getstisla.com/docs",
    className: "btn btn-primary btn-lg btn-block btn-icon-split",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-rocket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }), " Documentation"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./pages/dashboard/DashboardAdmin.js":
/*!*******************************************!*\
  !*** ./pages/dashboard/DashboardAdmin.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LayoutDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/LayoutDashboard */ "./components/LayoutDashboard.js");
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\pages\\dashboard\\DashboardAdmin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DashboardAdmin = () => {
  return __jsx(_components_LayoutDashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-4 col-md-4 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "card card-statistic-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-stats-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Order Statistics -", __jsx("div", {
    className: "dropdown d-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-weight-600 dropdown-toggle",
    "data-toggle": "dropdown",
    href: "#",
    id: "orders-month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "August"), __jsx("ul", {
    className: "dropdown-menu dropdown-menu-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("li", {
    className: "dropdown-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Select Month"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "January")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "February")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "March")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "April")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "May")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "June")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "July")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "August")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "September")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "October")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "November")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "December"))))), __jsx("div", {
    className: "card-stats-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-stats-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-stats-item-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "24"), __jsx("div", {
    className: "card-stats-item-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Pending")), __jsx("div", {
    className: "card-stats-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-stats-item-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "12"), __jsx("div", {
    className: "card-stats-item-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Shipping")), __jsx("div", {
    className: "card-stats-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-stats-item-count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "23"), __jsx("div", {
    className: "card-stats-item-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Completed")))), __jsx("div", {
    className: "card-icon shadow-primary bg-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), __jsx("div", {
    className: "card-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Total Orders")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "59")))), __jsx("div", {
    className: "col-lg-4 col-md-4 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "card card-statistic-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("canvas", {
    id: "balance-chart",
    height: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), __jsx("div", {
    className: "card-icon shadow-primary bg-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-dollar-sign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx("div", {
    className: "card-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Balance")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "$187,13")))), __jsx("div", {
    className: "col-lg-4 col-md-4 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "card card-statistic-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("canvas", {
    id: "sales-chart",
    height: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })), __jsx("div", {
    className: "card-icon shadow-primary bg-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-shopping-bag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), __jsx("div", {
    className: "card-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Sales")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "4,732"))))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Budget vs Sales")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("canvas", {
    id: "myChart",
    height: 158,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })))), __jsx("div", {
    className: "col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    className: "card gradient-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Top 5 Products"), __jsx("div", {
    className: "card-header-action dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    "data-toggle": "dropdown",
    className: "btn btn-danger dropdown-toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "Month"), __jsx("ul", {
    className: "dropdown-menu dropdown-menu-sm dropdown-menu-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("li", {
    className: "dropdown-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Select Period"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Today")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "Week")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "Month")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "This Year"))))), __jsx("div", {
    className: "card-body",
    id: "top-5-scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("ul", {
    className: "list-unstyled list-unstyled-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 55,
    src: "../static/assets/img/products/product-3-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-weight-600 text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "86 Sales")), __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "oPhone S9 Limited"), __jsx("div", {
    className: "mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-primary",
    "data-width": "64%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "$68,714")), __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-danger",
    "data-width": "43%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "$38,700"))))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 55,
    src: "../static/assets/img/products/product-4-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-weight-600 text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "67 Sales")), __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "iBook Pro 2018"), __jsx("div", {
    className: "mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-primary",
    "data-width": "84%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, "$107,133")), __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-danger",
    "data-width": "60%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, "$91,455"))))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 55,
    src: "../static/assets/img/products/product-1-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-weight-600 text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "63 Sales")), __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Headphone Blitz"), __jsx("div", {
    className: "mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-primary",
    "data-width": "34%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, "$3,717")), __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-danger",
    "data-width": "28%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, "$2,835"))))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 55,
    src: "../static/assets/img/products/product-3-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-weight-600 text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, "28 Sales")), __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "oPhone X Lite"), __jsx("div", {
    className: "mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-primary",
    "data-width": "45%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, "$13,972")), __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-danger",
    "data-width": "30%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, "$9,660"))))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3 rounded",
    width: 55,
    src: "../static/assets/img/products/product-5-50.png",
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx("div", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-weight-600 text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, "19 Sales")), __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, "Old Camera"), __jsx("div", {
    className: "mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-primary",
    "data-width": "35%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, "$7,391")), __jsx("div", {
    className: "budget-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-danger",
    "data-width": "28%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "$5,472"))))))), __jsx("div", {
    className: "card-footer pt-3 d-flex justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-primary",
    "data-width": 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, "Selling Price")), __jsx("div", {
    className: "budget-price justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, __jsx("div", {
    className: "budget-price-square bg-danger",
    "data-width": 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }), __jsx("div", {
    className: "budget-price-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, "Budget Price")))))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, "Best Products")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx("div", {
    className: "owl-carousel owl-theme",
    id: "products-carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-item pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/products/product-4-50.png",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  })), __jsx("div", {
    className: "product-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }, "iBook Pro 2018"), __jsx("div", {
    className: "product-review",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  })), __jsx("div", {
    className: "text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }, "67 Sales"), __jsx("div", {
    className: "product-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, "Detail"))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/products/product-3-50.png",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  })), __jsx("div", {
    className: "product-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, "oPhone S9 Limited"), __jsx("div", {
    className: "product-review",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  })), __jsx("div", {
    className: "text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }, "86 Sales"), __jsx("div", {
    className: "product-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, "Detail"))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, __jsx("img", {
    alt: "image",
    src: "../static/assets/img/products/product-1-50.png",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  })), __jsx("div", {
    className: "product-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, __jsx("div", {
    className: "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, "Headphone Blitz"), __jsx("div", {
    className: "product-review",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }), __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: undefined
  }), __jsx("i", {
    className: "far fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  })), __jsx("div", {
    className: "text-muted text-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, "63 Sales"), __jsx("div", {
    className: "product-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, "Detail"))))))))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: undefined
  }, "Top Countries")), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  }, __jsx("div", {
    className: "text-title mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: undefined
  }, "July"), __jsx("ul", {
    className: "list-unstyled list-unstyled-border list-unstyled-noborder mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }, __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid mt-1 img-shadow",
    src: "../static/assets/modules/flag-icon-css/flags/4x3/id.svg",
    alt: "image",
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }, "Indonesia"), __jsx("div", {
    className: "text-small text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: undefined
  }, "3,282 ", __jsx("i", {
    className: "fas fa-caret-down text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: undefined
  })))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid mt-1 img-shadow",
    src: "../static/assets/modules/flag-icon-css/flags/4x3/my.svg",
    alt: "image",
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: undefined
  }, "Malaysia"), __jsx("div", {
    className: "text-small text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: undefined
  }, "2,976 ", __jsx("i", {
    className: "fas fa-caret-down text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: undefined
  })))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid mt-1 img-shadow",
    src: "../static/assets/modules/flag-icon-css/flags/4x3/us.svg",
    alt: "image",
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: undefined
  }, "United States"), __jsx("div", {
    className: "text-small text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: undefined
  }, "1,576 ", __jsx("i", {
    className: "fas fa-caret-up text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: undefined
  })))))), __jsx("div", {
    className: "col-sm-6 mt-sm-0 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: undefined
  }, __jsx("div", {
    className: "text-title mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  }, "August"), __jsx("ul", {
    className: "list-unstyled list-unstyled-border list-unstyled-noborder mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: undefined
  }, __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid mt-1 img-shadow",
    src: "../static/assets/modules/flag-icon-css/flags/4x3/id.svg",
    alt: "image",
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: undefined
  }, "Indonesia"), __jsx("div", {
    className: "text-small text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: undefined
  }, "3,486 ", __jsx("i", {
    className: "fas fa-caret-up text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: undefined
  })))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid mt-1 img-shadow",
    src: "../static/assets/modules/flag-icon-css/flags/4x3/ps.svg",
    alt: "image",
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: undefined
  }, "Palestine"), __jsx("div", {
    className: "text-small text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: undefined
  }, "3,182 ", __jsx("i", {
    className: "fas fa-caret-up text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: undefined
  })))), __jsx("li", {
    className: "media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid mt-1 img-shadow",
    src: "../static/assets/modules/flag-icon-css/flags/4x3/de.svg",
    alt: "image",
    width: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: undefined
  }), __jsx("div", {
    className: "media-body ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: undefined
  }, __jsx("div", {
    className: "media-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: undefined
  }, "Germany"), __jsx("div", {
    className: "text-small text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: undefined
  }, "2,317 ", __jsx("i", {
    className: "fas fa-caret-down text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: undefined
  }))))))))))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: undefined
  }, "Invoices"), __jsx("div", {
    className: "card-header-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: undefined
  }, "View More ", __jsx("i", {
    className: "fas fa-chevron-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: undefined
  })))), __jsx("div", {
    className: "card-body p-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: undefined
  }, __jsx("div", {
    className: "table-responsive table-invoice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: undefined
  }, __jsx("table", {
    className: "table table-striped",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: undefined
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: undefined
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: undefined
  }, "Invoice ID"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, "Customer"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }, "Status"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: undefined
  }, "Due Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: undefined
  }, "Action")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: undefined
  }, "INV-87239")), __jsx("td", {
    className: "font-weight-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: undefined
  }, "Kusnadi"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: undefined
  }, __jsx("div", {
    className: "badge badge-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: undefined
  }, "Unpaid")), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: undefined
  }, "July 19, 2018"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: undefined
  }, "Detail"))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }, "INV-48574")), __jsx("td", {
    className: "font-weight-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: undefined
  }, "Hasan Basri"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: undefined
  }, __jsx("div", {
    className: "badge badge-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: undefined
  }, "Paid")), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: undefined
  }, "July 21, 2018"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: undefined
  }, "Detail"))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: undefined
  }, "INV-76824")), __jsx("td", {
    className: "font-weight-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: undefined
  }, "Muhamad Nuruzzaki"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: undefined
  }, __jsx("div", {
    className: "badge badge-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: undefined
  }, "Unpaid")), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }, "July 22, 2018"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: undefined
  }, "Detail"))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: undefined
  }, "INV-84990")), __jsx("td", {
    className: "font-weight-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: undefined
  }, "Agung Ardiansyah"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: undefined
  }, __jsx("div", {
    className: "badge badge-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: undefined
  }, "Unpaid")), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: undefined
  }, "July 22, 2018"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: undefined
  }, "Detail"))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: undefined
  }, "INV-87320")), __jsx("td", {
    className: "font-weight-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: undefined
  }, "Ardian Rahardiansyah"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: undefined
  }, __jsx("div", {
    className: "badge badge-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: undefined
  }, "Paid")), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: undefined
  }, "July 28, 2018"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: undefined
  }, "Detail"))))))))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: undefined
  }, __jsx("div", {
    className: "card card-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: undefined
  }, __jsx("i", {
    className: "far fa-question-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: undefined
  })), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: undefined
  }, "14"), __jsx("div", {
    className: "card-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: undefined
  }, "Customers need help")), __jsx("div", {
    className: "card-body p-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }, __jsx("div", {
    className: "tickets-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "ticket-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: undefined
  }, __jsx("div", {
    className: "ticket-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: undefined
  }, "My order hasn't arrived yet")), __jsx("div", {
    className: "ticket-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: undefined
  }, "Laila Tazkiah"), __jsx("div", {
    className: "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: undefined
  }), __jsx("div", {
    className: "text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: undefined
  }, "1 min ago"))), __jsx("a", {
    href: "#",
    className: "ticket-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: undefined
  }, __jsx("div", {
    className: "ticket-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: undefined
  }, "Please cancel my order")), __jsx("div", {
    className: "ticket-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: undefined
  }, "Rizal Fakhri"), __jsx("div", {
    className: "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: undefined
  }, "2 hours ago"))), __jsx("a", {
    href: "#",
    className: "ticket-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: undefined
  }, __jsx("div", {
    className: "ticket-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: undefined
  }, "Do you see my mother?")), __jsx("div", {
    className: "ticket-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: undefined
  }, "Syahdan Ubaidillah"), __jsx("div", {
    className: "bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: undefined
  }, "6 hours ago"))), __jsx("a", {
    href: "features-tickets.html",
    className: "ticket-item ticket-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: undefined
  }, "View All ", __jsx("i", {
    className: "fas fa-chevron-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: undefined
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardAdmin);

/***/ }),

/***/ 5:
/*!*************************************************!*\
  !*** multi ./pages/dashboard/DashboardAdmin.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ReactJs\jepture-wahyu-front-end-\pages\dashboard\DashboardAdmin.js */"./pages/dashboard/DashboardAdmin.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=DashboardAdmin.js.map