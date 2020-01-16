webpackHotUpdate("static\\development\\pages\\post\\ViewPost.js",{

/***/ "./components/LayoutDashboard.js":
/*!***************************************!*\
  !*** ./components/LayoutDashboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./components/SideBar.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\components\\LayoutDashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("meta", {
    content: "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
    name: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "../static/assets/img/stisla.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title, " \u2014 Stisla"), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap/css/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/fontawesome/css/all.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap-social/bootstrap-social.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/jqvmap/dist/jqvmap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/summernote/summernote-bs4.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/jquery-selectric/selectric.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap-daterangepicker/daterangepicker.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/select2/dist/css/select2.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/jquery-selectric/selectric.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/css/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../static/assets/css/components.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-94034622-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n  \n            gtag('config', 'UA-94034622-3');"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    id: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "main-wrapper main-wrapper-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), __jsx("script", {
    src: "../static/assets/modules/jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/popper.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/tooltip.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/bootstrap/js/bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/nicescroll/jquery.nicescroll.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/moment.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/stisla.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/jquery.sparkline.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/chart.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/summernote/summernote-bs4.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/chocolat/dist/js/jquery.chocolat.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/jquery-selectric/jquery.selectric.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/upload-preview/assets/js/jquery.uploadPreview.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/page/index.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/page/features-posts.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/page/features-post-create.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/page/forms-advanced-forms.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/scripts.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("script", {
    src: "../static/assets/js/custom.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=ViewPost.js.a53e1dcb4f065476449e.hot-update.js.map