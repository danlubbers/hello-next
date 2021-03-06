webpackHotUpdate("static/development/pages/imageToggleOnScroll.js",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/danlubbers/Documents/GitHub/pluralsight-tutorials/hello-next/src/ImageToggleOnScroll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  var primaryImage = _ref.primaryImage,
      secondaryImage = _ref.secondaryImage;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      console.log({
        imageRef: imageRef
      });
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  };

  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);
  return !isLoading && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: inView ? primaryImage : secondaryImage,
    alt: "",
    width: "800px",
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ })

})
//# sourceMappingURL=imageToggleOnScroll.js.cd389ebd80c8caa305b9.hot-update.js.map