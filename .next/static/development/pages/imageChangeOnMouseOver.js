(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/imageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fdanlubbers%2FDocuments%2FGitHub%2Fpluralsight-tutorials%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js!./":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fdanlubbers%2FDocuments%2FGitHub%2Fpluralsight-tutorials%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/imageChangeOnMouseOver", function() {
      var mod = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js", function() {
          if(!next.router.components["/imageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js")
          next.router.update("/imageChangeOnMouseOver", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/imageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOneMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOneMouseOver */ "./src/ImageToggleOneMouseOver.js");
var _this = undefined,
    _jsxFileName = "/Users/danlubbers/Documents/GitHub/pluralsight-tutorials/hello-next/pages/imageChangeOnMouseOver.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var imageChangeOnMouseOver = function imageChangeOnMouseOver() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_src_ImageToggleOneMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImage: "/static/floro-cristina-5107-final.jpg",
    secondaryImage: "./static/floro-cristina-5107-before.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (imageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOneMouseOver.js":
/*!****************************************!*\
  !*** ./src/ImageToggleOneMouseOver.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/danlubbers/Documents/GitHub/pluralsight-tutorials/hello-next/src/ImageToggleOneMouseOver.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOneMouseOver = function ImageToggleOneMouseOver(_ref) {
  var primaryImage = _ref.primaryImage,
      secondaryImage = _ref.secondaryImage;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImage;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImage;
    },
    src: primaryImage,
    alt: "",
    width: "800px",
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOneMouseOver);

/***/ }),

/***/ 3:
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fdanlubbers%2FDocuments%2FGitHub%2Fpluralsight-tutorials%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fdanlubbers%2FDocuments%2FGitHub%2Fpluralsight-tutorials%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fdanlubbers%2FDocuments%2FGitHub%2Fpluralsight-tutorials%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imageChangeOnMouseOver.js.map