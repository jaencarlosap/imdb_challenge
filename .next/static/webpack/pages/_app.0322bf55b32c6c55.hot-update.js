"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./hooks/useQuery.js":
/*!***************************!*\
  !*** ./hooks/useQuery.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useQuery\": function() { return /* binding */ useQuery; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jaencarlos_Documents_personal_imdb_challenge_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jaencarlos_Documents_personal_imdb_challenge_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jaencarlos_Documents_personal_imdb_challenge_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var libs_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/query */ \"./libs/query.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nvar url_base = \"https://api.themoviedb.org/3/\";\nvar api_key = \"?api_key=\".concat(\"857e863d16d83ff461f8d169c6ad9a7b\");\nvar useQuery = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), result = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var SendQuery = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_jaencarlos_Documents_personal_imdb_challenge_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var query, params, paramsToSend, result;\n            return _Users_jaencarlos_Documents_personal_imdb_challenge_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        query = param.query, params = param.params;\n                        setIsLoading(true);\n                        paramsToSend = new URLSearchParams(params);\n                        _ctx.next = 5;\n                        return (0,libs_query__WEBPACK_IMPORTED_MODULE_1__.Query)(url_base + query + api_key + \"&\" + paramsToSend);\n                    case 5:\n                        result = _ctx.sent;\n                        setIsLoading(false);\n                        setResult(result);\n                        return _ctx.abrupt(\"return\", {\n                            result: result\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function SendQuery(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        result: result,\n        isLoading: isLoading,\n        SendQuery: SendQuery\n    };\n};\n_s(useQuery, \"R5MpwxtIzaMQi8yPEhY6DBbDou0=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VRdWVyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQWtDO0FBQ0Y7O0FBRWhDLElBQU1FLFFBQVEsR0FBRywrQkFBK0I7QUFDaEQsSUFBTUMsT0FBTyxHQUFHLFdBQVUsQ0FBa0MsT0FBaENDLGtDQUErQixDQUFFO0FBRXRELElBQU1HLFFBQVEsR0FBRyxXQUFNOztJQUM3QixJQUE0Qk4sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUFuQ08sTUFBTSxHQUFlUCxHQUFjLEdBQTdCLEVBQUVRLFNBQVMsR0FBSVIsR0FBYyxHQUFsQjtJQUN4QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ1MsU0FBUyxHQUFrQlQsSUFBZSxHQUFqQyxFQUFFVSxZQUFZLEdBQUlWLElBQWUsR0FBbkI7SUFFOUIsSUFBTVcsU0FBUzttQkFBRywyUUFBNkI7Z0JBQXBCQyxLQUFLLEVBQUVDLE1BQU0sRUFHakNDLFlBQVksRUFDWlAsTUFBTTs7Ozt3QkFKY0ssS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTt3QkFDdkNILFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBRVpJLFlBQVksR0FBRyxJQUFJQyxlQUFlLENBQUNGLE1BQU0sQ0FBQzs7K0JBQzNCZCxpREFBSyxDQUFDRSxRQUFRLEdBQUdXLEtBQUssR0FBR1YsT0FBTyxHQUFHLEdBQUcsR0FBR1ksWUFBWSxDQUFDOzt3QkFBckVQLE1BQU0sWUFBK0Q7d0JBRTNFRyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNuQkYsU0FBUyxDQUFDRCxNQUFNLENBQUM7cURBRVY7NEJBQUVBLE1BQU0sRUFBTkEsTUFBTTt5QkFBRTs7Ozs7O1NBQ2pCO3dCQVZLSSxTQUFTOzs7T0FVZDtJQUVELE9BQU87UUFDTkosTUFBTSxFQUFOQSxNQUFNO1FBQ05FLFNBQVMsRUFBVEEsU0FBUztRQUNURSxTQUFTLEVBQVRBLFNBQVM7S0FDVDtDQUNEO0dBckJZTCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVF1ZXJ5LmpzP2JlMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdsaWJzL3F1ZXJ5J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXJsX2Jhc2UgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy8nXG5jb25zdCBhcGlfa2V5ID0gYD9hcGlfa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gXG5cbmV4cG9ydCBjb25zdCB1c2VRdWVyeSA9ICgpID0+IHtcblx0Y29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCBTZW5kUXVlcnkgPSBhc3luYyAoeyBxdWVyeSwgcGFyYW1zIH0pID0+IHtcblx0XHRzZXRJc0xvYWRpbmcodHJ1ZSlcblxuXHRcdGNvbnN0IHBhcmFtc1RvU2VuZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IFF1ZXJ5KHVybF9iYXNlICsgcXVlcnkgKyBhcGlfa2V5ICsgJyYnICsgcGFyYW1zVG9TZW5kKVxuXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxuXHRcdHNldFJlc3VsdChyZXN1bHQpXG5cblx0XHRyZXR1cm4geyByZXN1bHQgfVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRyZXN1bHQsXG5cdFx0aXNMb2FkaW5nLFxuXHRcdFNlbmRRdWVyeVxuXHR9XG59XG4iXSwibmFtZXMiOlsiUXVlcnkiLCJ1c2VTdGF0ZSIsInVybF9iYXNlIiwiYXBpX2tleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwidXNlUXVlcnkiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJTZW5kUXVlcnkiLCJxdWVyeSIsInBhcmFtcyIsInBhcmFtc1RvU2VuZCIsIlVSTFNlYXJjaFBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useQuery.js\n"));

/***/ })

});