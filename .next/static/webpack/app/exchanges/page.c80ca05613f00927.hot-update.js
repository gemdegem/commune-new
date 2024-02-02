"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/exchanges/page",{

/***/ "(app-pages-browser)/./src/app/exchanges/components/dex-component.tsx":
/*!********************************************************!*\
  !*** ./src/app/exchanges/components/dex-component.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TokenPrice: function() { return /* binding */ TokenPrice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// components/TokenPrice.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst TokenPrice = (param)=>{\n    let { tokenAddress, apiKey } = param;\n    _s();\n    const [priceData, setPriceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTokenPrice = async ()=>{\n            const url = \"https://deep-index.moralis.io/api/v2/erc20/\".concat(tokenAddress, \"/price?chain=eth\");\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(url, {\n                    headers: {\n                        \"Content-Type\": \"application/json\",\n                        \"x-api-key\": apiKey\n                    }\n                });\n                console.log(response.data);\n                setPriceData({\n                    usdPrice: response.data.usdPrice\n                });\n                setIsLoading(false);\n            } catch (error) {\n                if (axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAxiosError(error)) {\n                    setError(error.message);\n                } else {\n                    setError(\"An unknown error occurred\");\n                }\n                setIsLoading(false);\n            }\n        };\n        fetchTokenPrice();\n    }, [\n        tokenAddress,\n        apiKey\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/dex-component.tsx\",\n        lineNumber: 46,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/dex-component.tsx\",\n        lineNumber: 47,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Token Price: \",\n            (priceData === null || priceData === void 0 ? void 0 : priceData.usdPrice) ? \"$\".concat(priceData.usdPrice.toFixed(2)) : \"N/A\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/dex-component.tsx\",\n        lineNumber: 49,\n        columnNumber: 10\n    }, undefined);\n};\n_s(TokenPrice, \"yQM4C/Ym1rYwpJh9NrmIhc40l74=\");\n_c = TokenPrice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenPrice);\nvar _c;\n$RefreshReg$(_c, \"TokenPrice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZGV4LWNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0QkFBNEI7OztBQUN1QjtBQUN6QjtBQVduQixNQUFNSSxhQUF3QztRQUFDLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxFQUFFOztJQUM1RSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQW1CO0lBQzdELE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBVTtJQUNwRCxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQWdCO0lBRWxEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGtCQUFrQjtZQUN0QixNQUFNQyxNQUFNLDhDQUEyRCxPQUFiVCxjQUFhO1lBRXZFLElBQUk7Z0JBQ0YsTUFBTVUsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDRixLQUFLO29CQUNwQ0csU0FBUzt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGFBQWFYO29CQUNmO2dCQUNGO2dCQUNBWSxRQUFRQyxHQUFHLENBQUNKLFNBQVNLLElBQUk7Z0JBQ3pCWixhQUFhO29CQUFFYSxVQUFVTixTQUFTSyxJQUFJLENBQUNDLFFBQVE7Z0JBQUM7Z0JBQ2hEWCxhQUFhO1lBQ2YsRUFBRSxPQUFPQyxPQUFPO2dCQUNkLElBQUlSLDZDQUFLQSxDQUFDbUIsWUFBWSxDQUFDWCxRQUFRO29CQUM3QkMsU0FBU0QsTUFBTVksT0FBTztnQkFDeEIsT0FBTztvQkFDTFgsU0FBUztnQkFDWDtnQkFDQUYsYUFBYTtZQUNmO1FBQ0Y7UUFFQUc7SUFDRixHQUFHO1FBQUNSO1FBQWNDO0tBQU87SUFFekIsSUFBSUcsV0FBVyxxQkFBTyw4REFBQ2U7a0JBQUk7Ozs7OztJQUMzQixJQUFJYixPQUFPLHFCQUFPLDhEQUFDYTs7WUFBSTtZQUFRYjs7Ozs7OztJQUUvQixxQkFBTyw4REFBQ2E7O1lBQUk7WUFBY2pCLENBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBV2MsUUFBUSxJQUFHLElBQWtDLE9BQTlCZCxVQUFVYyxRQUFRLENBQUNJLE9BQU8sQ0FBQyxNQUFPOzs7Ozs7O0FBQ3hGLEVBQUU7R0FwQ1dyQjtLQUFBQTtBQXNDYiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2V4Y2hhbmdlcy9jb21wb25lbnRzL2RleC1jb21wb25lbnQudHN4P2MwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Ub2tlblByaWNlLnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFRva2VuUHJpY2VQcm9wcyB7XG4gIHRva2VuQWRkcmVzczogc3RyaW5nO1xuICBhcGlLZXk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByaWNlRGF0YSB7XG4gIHVzZFByaWNlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBUb2tlblByaWNlOiBSZWFjdC5GQzxUb2tlblByaWNlUHJvcHM+ID0gKHsgdG9rZW5BZGRyZXNzLCBhcGlLZXkgfSkgPT4ge1xuICBjb25zdCBbcHJpY2VEYXRhLCBzZXRQcmljZURhdGFdID0gdXNlU3RhdGU8UHJpY2VEYXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVG9rZW5QcmljZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2RlZXAtaW5kZXgubW9yYWxpcy5pby9hcGkvdjIvZXJjMjAvJHt0b2tlbkFkZHJlc3N9L3ByaWNlP2NoYWluPWV0aGA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogYXBpS2V5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0UHJpY2VEYXRhKHsgdXNkUHJpY2U6IHJlc3BvbnNlLmRhdGEudXNkUHJpY2UgfSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFRva2VuUHJpY2UoKTtcbiAgfSwgW3Rva2VuQWRkcmVzcywgYXBpS2V5XSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcblxuICByZXR1cm4gPGRpdj5Ub2tlbiBQcmljZToge3ByaWNlRGF0YT8udXNkUHJpY2UgPyBgJCR7cHJpY2VEYXRhLnVzZFByaWNlLnRvRml4ZWQoMil9YCA6IFwiTi9BXCJ9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5QcmljZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJUb2tlblByaWNlIiwidG9rZW5BZGRyZXNzIiwiYXBpS2V5IiwicHJpY2VEYXRhIiwic2V0UHJpY2VEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoVG9rZW5QcmljZSIsInVybCIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNkUHJpY2UiLCJpc0F4aW9zRXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/exchanges/components/dex-component.tsx\n"));

/***/ })

});