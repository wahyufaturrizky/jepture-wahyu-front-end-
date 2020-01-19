webpackHotUpdate("static\\development\\pages\\post\\EditPost\\[id].js",{

/***/ "./pages/post/EditPost/[id].js":
/*!*************************************!*\
  !*** ./pages/post/EditPost/[id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "C:\\ReactJs\\jepture-wahyu-front-end-\\pages\\post\\EditPost\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var EditPost =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EditPost, _Component);

  function EditPost() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditPost);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EditPost)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      title: '',
      author: '',
      category_name: '',
      body_post: '',
      status_post: '',
      created_at: '',
      update_at: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var posts = {
        title: _this.state.title,
        author: _this.state.author,
        category_name: _this.state.category_name,
        body_post: _this.state.body_post,
        status_post: _this.state.status_post,
        created_at: _this.state.created_at,
        update_at: _this.state.update_at
      };
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.put('http://localhost:3004/jsonusers', posts).then(function (res) {
        console.log(res);
        console.log(res.data);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EditPost, [{
    key: "render",
    value: function render(props) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("meta", {
        content: "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
        name: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        href: "../../../../../static/assets/img/stisla.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "View Post \u2014 Stisla"), __jsx("link", {
        rel: "stylesheet",
        href: "../../../../../static/assets/modules/bootstrap/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../../../../../static/assets/modules/fontawesome/css/all.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../../../../../static/assets/modules/bootstrap-social/bootstrap-social.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../../../../../static/assets/css/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../../../../../static/assets/css/components.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-94034622-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          \n            gtag('config', 'UA-94034622-3');"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), __jsx("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        className: "main-wrapper main-wrapper-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), __jsx("nav", {
        className: "navbar navbar-expand-lg main-navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("form", {
        className: "form-inline mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("ul", {
        className: "navbar-nav mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        "data-toggle": "sidebar",
        className: "nav-link nav-link-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        "data-toggle": "search",
        className: "nav-link nav-link-lg d-sm-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })))), __jsx("div", {
        className: "search-element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("input", {
        className: "form-control",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search",
        "data-width": 250,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx("button", {
        className: "btn",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), __jsx("div", {
        className: "search-backdrop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx("div", {
        className: "search-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("div", {
        className: "search-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Histories"), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "How to hack NASA using CSS"), __jsx("a", {
        href: "#",
        className: "search-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Kodinger.com"), __jsx("a", {
        href: "#",
        className: "search-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "#Stisla"), __jsx("a", {
        href: "#",
        className: "search-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }))), __jsx("div", {
        className: "search-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Result"), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("img", {
        className: "mr-3 rounded",
        width: 30,
        src: "../../../static/assets/img/products/product-3-50.png",
        alt: "product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), "oPhone S9 Limited Edition")), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("img", {
        className: "mr-3 rounded",
        width: 30,
        src: "../../../static/assets/img/products/product-2-50.png",
        alt: "product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), "Drone X2 New Gen-7")), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("img", {
        className: "mr-3 rounded",
        width: 30,
        src: "../../../static/assets/img/products/product-1-50.png",
        alt: "product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), "Headphone Blitz")), __jsx("div", {
        className: "search-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Projects"), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("div", {
        className: "search-icon bg-danger text-white mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      })), "Stisla Admin Template")), __jsx("div", {
        className: "search-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("div", {
        className: "search-icon bg-primary text-white mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-laptop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), "Create a new Homepage Design"))))), __jsx("ul", {
        className: "navbar-nav navbar-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("li", {
        className: "dropdown dropdown-list-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        "data-toggle": "dropdown",
        className: "nav-link nav-link-lg message-toggle beep",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-menu dropdown-list dropdown-menu-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Messages", __jsx("div", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Mark All As Read"))), __jsx("div", {
        className: "dropdown-list-content dropdown-list-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "dropdown-item dropdown-item-unread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../static/assets/img/avatar/avatar-1.png",
        className: "rounded-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), __jsx("div", {
        className: "is-online",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Kusnaedi"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Hello, Bro!"), __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "10 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item dropdown-item-unread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../static/assets/img/avatar/avatar-2.png",
        className: "rounded-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Dedik Sugiharto"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit"), __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "12 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item dropdown-item-unread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../static/assets/img/avatar/avatar-3.png",
        className: "rounded-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), __jsx("div", {
        className: "is-online",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Agung Ardiansyah"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "12 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../static/assets/img/avatar/avatar-4.png",
        className: "rounded-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Ardian Rahardiansyah"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Duis aute irure dolor in reprehenderit in voluptate velit ess"), __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "16 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../static/assets/img/avatar/avatar-5.png",
        className: "rounded-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Alfa Zulkarnain"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Exercitation ullamco laboris nisi ut aliquip ex ea commodo"), __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Yesterday")))), __jsx("div", {
        className: "dropdown-footer text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "View All ", __jsx("i", {
        className: "fas fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }))))), __jsx("li", {
        className: "dropdown dropdown-list-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        "data-toggle": "dropdown",
        className: "nav-link notification-toggle nav-link-lg beep",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-menu dropdown-list dropdown-menu-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Notifications", __jsx("div", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Mark All As Read"))), __jsx("div", {
        className: "dropdown-list-content dropdown-list-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "dropdown-item dropdown-item-unread",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-icon bg-primary text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Template update is available now!", __jsx("div", {
        className: "time text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "2 Min Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-icon bg-info text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "You"), " and ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Dedik Sugiharto"), " are now friends", __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "10 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-icon bg-success text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Kusnaedi"), " has moved task ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Fix bug header"), " to ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Done"), __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "12 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-icon bg-danger text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-exclamation-triangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Low disk space. Let's clean it!", __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "17 Hours Ago"))), __jsx("a", {
        href: "#",
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-item-icon bg-info text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      })), __jsx("div", {
        className: "dropdown-item-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Welcome to Stisla template!", __jsx("div", {
        className: "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "Yesterday")))), __jsx("div", {
        className: "dropdown-footer text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "View All ", __jsx("i", {
        className: "fas fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }))))), __jsx("li", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        "data-toggle": "dropdown",
        className: "nav-link dropdown-toggle nav-link-lg nav-link-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../static/assets/img/avatar/avatar-1.png",
        className: "rounded-circle mr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), __jsx("div", {
        className: "d-sm-none d-lg-inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Hi, ", this.props.user.author)), __jsx("div", {
        className: "dropdown-menu dropdown-menu-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx("div", {
        className: "dropdown-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Logged in 5 min ago"), __jsx("a", {
        href: "features-profile.html",
        className: "dropdown-item has-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), " Profile"), __jsx("a", {
        href: "features-activities.html",
        className: "dropdown-item has-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-bolt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }), " Activities"), __jsx("a", {
        href: "features-settings.html",
        className: "dropdown-item has-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), " Settings"), __jsx("div", {
        className: "dropdown-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, __jsx("a", {
        className: "dropdown-item has-icon text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-sign-out-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }), " Logout")))))), __jsx("div", {
        className: "main-sidebar sidebar-style-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, __jsx("aside", {
        id: "sidebar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx("div", {
        className: "sidebar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/dashboard/DashboardAdmin",
        href: "/dashboard/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Stisla"))), __jsx("div", {
        className: "sidebar-brand sidebar-brand-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/dashboard/DashboardAdmin",
        href: "/dashboard/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "St"))), __jsx("ul", {
        className: "sidebar-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, __jsx("li", {
        className: "menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "Dashboard"), __jsx("li", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "nav-link has-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-fire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "Dashboard")), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/dashboard/DashboardAdmin",
        href: "/dashboard/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        href: "index-0.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "General Dashboard"))))), __jsx("li", {
        className: "menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "Pages"), __jsx("li", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, __jsx("a", {
        href: "#",
        className: "nav-link has-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-bicycle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "Features")), __jsx("ul", {
        className: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/post/CreatePost",
        href: "/post/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Post Create"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/post/ListPost",
        href: "/post/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Posts")))))), __jsx("div", {
        className: "mt-4 mb-4 p-3 hide-sidebar-mini",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx("a", {
        target: "_blank",
        href: "https://www.linkedin.com/in/wahyu-fatur-rizky/",
        className: "btn btn-primary btn-lg btn-block btn-icon-split",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-rocket",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }), " Profil ", this.props.user.author)))), __jsx("div", {
        className: "main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, __jsx("section", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, __jsx("div", {
        className: "section-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, __jsx("div", {
        className: "section-header-back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "./Post",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-arrow-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      })))), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "Edit Post"), __jsx("div", {
        className: "section-header-breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, __jsx("div", {
        className: "breadcrumb-item active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "../dashboard/DashboardAdmin",
        href: "../dashboard/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "Dashboard"))), __jsx("div", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "./Post",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Posts"))), __jsx("div", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Edit Post"))), __jsx("div", {
        className: "section-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, __jsx("h2", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Hi, ", this.props.user.author, "!"), __jsx("p", {
        className: "section-lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "Change information about yourself on this page."), __jsx("div", {
        className: "row mt-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, __jsx("div", {
        className: "col-12 col-md-12 col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("div", {
        className: "card profile-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, __jsx("div", {
        className: "profile-widget-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, __jsx("img", {
        alt: "image",
        src: "../../../../../static/assets/img/avatar/avatar-1.png",
        className: "rounded-circle profile-widget-picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }), __jsx("div", {
        className: "profile-widget-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, __jsx("div", {
        className: "profile-widget-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, __jsx("div", {
        className: "profile-widget-item-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "Posts"), __jsx("div", {
        className: "profile-widget-item-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, "187")), __jsx("div", {
        className: "profile-widget-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, __jsx("div", {
        className: "profile-widget-item-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "Followers"), __jsx("div", {
        className: "profile-widget-item-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "6,8K")), __jsx("div", {
        className: "profile-widget-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, __jsx("div", {
        className: "profile-widget-item-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Following"), __jsx("div", {
        className: "profile-widget-item-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "2,1K")))), __jsx("div", {
        className: "profile-widget-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, __jsx("div", {
        className: "profile-widget-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, this.props.user.author, " ", __jsx("div", {
        className: "text-muted d-inline font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, __jsx("div", {
        className: "slash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }), " Web Developer")), this.props.user.author, " is a superhero name in ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Indonesia"), ", especially in my family. He is not a fictional character but an original hero in my family, a hero for his children and for his wife. So, I use the name as a user in this template."), __jsx("div", {
        className: "card-footer text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, __jsx("div", {
        className: "font-weight-bold mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "Follow ", this.props.user.author, " On"), __jsx("a", {
        href: "https://www.linkedin.com/in/wahyu-fatur-rizky/",
        target: "_blank",
        className: "btn btn-social-icon btn-facebook mr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, __jsx("i", {
        className: "fab fa-facebook-f",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      })), __jsx("a", {
        href: "https://www.linkedin.com/in/wahyu-fatur-rizky/",
        target: "_blank",
        className: "btn btn-social-icon btn-twitter mr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, __jsx("i", {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      })), __jsx("a", {
        href: "https://www.linkedin.com/in/wahyu-fatur-rizky/",
        target: "_blank",
        className: "btn btn-social-icon btn-github mr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, __jsx("i", {
        className: "fab fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      })), __jsx("a", {
        href: "https://www.linkedin.com/in/wahyu-fatur-rizky/",
        target: "_blank",
        className: "btn btn-social-icon btn-instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, __jsx("i", {
        className: "fab fa-instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }))))), __jsx("div", {
        className: "col-12 col-md-12 col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, __jsx("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, __jsx("form", {
        method: "post",
        className: "needs-validation",
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, __jsx("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Detail Post")), __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, __jsx("div", {
        className: "form-group col-md-6 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, "Title"), __jsx("input", {
        type: "text",
        className: "form-control",
        defaultValue: "Laravel 5 Tutorial: Introduction",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }), __jsx("div", {
        className: "invalid-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "Please fill Title")), __jsx("div", {
        className: "form-group col-md-6 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, "Category"), __jsx("input", {
        type: "text",
        className: "form-control",
        defaultValue: "Web Developer",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), __jsx("div", {
        className: "invalid-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Please fill Category"))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, __jsx("div", {
        className: "form-group col-md-7 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "Author"), __jsx("input", {
        type: "text",
        className: "form-control",
        defaultValue: "{this.props.user.author}",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }), __jsx("div", {
        className: "invalid-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, "Please fill author")), __jsx("div", {
        className: "form-group col-md-5 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, "Status"), __jsx("input", {
        type: "text",
        className: "form-control",
        defaultValue: "Published",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, __jsx("div", {
        className: "form-group col-md-7 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "Date Create"), __jsx("input", {
        type: "date",
        className: "form-control",
        defaultValue: "2019-01-20",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }), __jsx("div", {
        className: "invalid-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "Please fill author")), __jsx("div", {
        className: "form-group col-md-5 col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, "Date Update"), __jsx("input", {
        type: "date",
        className: "form-control",
        defaultValue: "2019-01-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, __jsx("div", {
        className: "form-group col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "Content Description Body"), __jsx("textarea", {
        className: "form-control summernote-simple",
        defaultValue: "Laravel 5 Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      })))), __jsx("div", {
        className: "card-footer text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/post/ListPost",
        href: "/post/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, "Back")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: "/post/Post",
        href: "/post/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, "Save Changes")))))))))), __jsx("footer", {
        className: "main-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, __jsx("div", {
        className: "footer-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, "Copyright \xA9 2018", __jsx("div", {
        className: "bullet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }), "Modify Design By ", __jsx("a", {
        target: "_blank",
        href: "https://www.linkedin.com/in/wahyu-fatur-rizky/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, this.props.user.author)), __jsx("div", {
        className: "footer-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      })))), __jsx("script", {
        src: "../../../../../static/assets/modules/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/modules/popper.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/modules/tooltip.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/modules/bootstrap/js/bootstrap.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/modules/nicescroll/jquery.nicescroll.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/modules/moment.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/js/stisla.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/js/scripts.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }), __jsx("script", {
        src: "../../../../../static/assets/js/custom.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }));
    }
  }]);

  return EditPost;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

ViewPost.getInitialProps = function _callee(_ref, res) {
  var id, response, user;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref.query.id;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("http://localhost:3004/jsonusers/".concat(id)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 6:
          user = _context.sent;
          return _context.abrupt("return", {
            user: user
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EditPost);

/***/ })

})
//# sourceMappingURL=[id].js.c6c4c5fb0f9d1a524dfd.hot-update.js.map