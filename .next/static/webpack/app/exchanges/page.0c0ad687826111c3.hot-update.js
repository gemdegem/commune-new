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

/***/ "(app-pages-browser)/./src/app/exchanges/components/exchange-component.tsx":
/*!*************************************************************!*\
  !*** ./src/app/exchanges/components/exchange-component.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchange-component.module.css */ \"(app-pages-browser)/./src/app/exchanges/components/exchange-component.module.css\");\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* This component has been copy pasted from the Docasaurus version of the project */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ExchangeRow = (param)=>/*#__PURE__*/ {\n    let { exchange, index } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"h-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-sm font-medium text-gray-900\",\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-5 w-5 mr-2\",\n                            src: exchange.logo,\n                            alt: \"\".concat(exchange.name, \" Logo\")\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        }, undefined),\n                        exchange.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.price\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: exchange.volume\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.volume7d\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md font-medium\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: exchange.link,\n                    className: \"text-blue-700 hover:text-blue-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-block bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white font-sans font-semibold px-2 py-2\",\n                        children: \"Trade\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExchangeRow;\nconst ExchangeComponent = ()=>{\n    _s();\n    const [comswapData, setComswapData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].exchangeApiUrl);\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok \" + response.statusText);\n                }\n                const data = await response.json();\n                setComswapData(data);\n            } catch (error) {\n                if (error instanceof Error) {\n                    console.error(\"Error fetching Comswap data:\", error);\n                    setError(error.message);\n                } else {\n                    console.error(\"Unrecognized error:\", error);\n                }\n            }\n        };\n        fetchData();\n    }, []);\n    const tokenAddress = \"0xc78B628b060258300218740B1A7a5b3c82b3bd9f\";\n    const apiKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg2OTc0NGQ4LTFhYzUtNDBiOC1iYmM2LTBmN2VmNDZjNzcyMCIsIm9yZ0lkIjoiMzc1NDA3IiwidXNlcklkIjoiMzg1Nzg1IiwidHlwZUlkIjoiN2E0Nzg1OWEtYWVmNy00M2QyLWIwMjctNDE3YzkyNWE1MmFmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDY4NjQyMjQsImV4cCI6NDg2MjYyNDIyNH0.YFbvIJpjJodm3UnlPCcE_16yLYcXaPC9w67oUoEAkkA\";\n    const formatMarketCap = (marketCap)=>{\n        const marketCapInt = parseInt(marketCap, 10);\n        return marketCapInt.toLocaleString();\n    };\n    const exchanges = [\n        {\n            name: \"Comswap\",\n            logo: \"https://comswap.io/static/media/logo.0eafc56c200101eecb87.png\",\n            price: comswapData ? \"$\".concat(comswapData.price) : \"Loading...\",\n            volume: comswapData ? \"$\".concat(comswapData.volume1d) : \"Loading...\",\n            volume7d: comswapData ? \"$\".concat(comswapData.volume7d) : \"Loading...\",\n            link: \"https://comswap.io\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-40 bg-blue-50 rounded-lg border-2 border-blue-400 border-solid shadow-md p-3 max-w-3xl mx-auto  overflow-x-auto w-full\",\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 text-lg font-semibold text-red-500\",\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined),\n            comswapData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 text-lg font-semibold text-center\",\n                children: [\n                    \"$COM Current Market Cap: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 36\n                    }, undefined),\n                    \" $\",\n                    formatMarketCap(comswapData.marketCap)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default().table), \"rounded-md\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"EXCHANGE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"LAST PRICE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"24H VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"7D VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"BUY/SELL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white \",\n                        children: [\n                            exchanges.map((exchange, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExchangeRow, {\n                                    exchange: exchange,\n                                    index: idx\n                                }, idx, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TokenPrice, {\n                                        tokenAddress: tokenAddress,\n                                        apiKey: apiKey\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExchangeComponent, \"6IevsrICdto7E5HX7jCqgoGL8qQ=\");\n_c1 = ExchangeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExchangeComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"ExchangeRow\");\n$RefreshReg$(_c1, \"ExchangeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2UtY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrRkFBa0Y7O0FBRS9CO0FBQ2Y7QUFFa0I7QUFDeEI7QUFFOUIsTUFBTU0sY0FBYztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFvQztXQUN4RSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRUYsUUFBUTs7Ozs7OzBCQUV6Riw4REFBQ0c7Z0JBQUdELFdBQVU7MEJBQ1osNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUlILFdBQVU7NEJBQWVJLEtBQUtQLFNBQVNRLElBQUk7NEJBQUVDLEtBQUssR0FBaUIsT0FBZFQsU0FBU1UsSUFBSSxFQUFDOzs7Ozs7d0JBQ3ZFVixTQUFTVSxJQUFJOzs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDTjtnQkFBR0QsV0FBVTswQkFBdURILFNBQVNXLEtBQUs7Ozs7OzswQkFDbkYsOERBQUNQO2dCQUFHRCxXQUFVOzBCQUF3REgsU0FBU1ksTUFBTTs7Ozs7OzBCQUNyRiw4REFBQ1I7Z0JBQUdELFdBQVU7MEJBQXVESCxTQUFTYSxRQUFROzs7Ozs7MEJBQ3RGLDhEQUFDVDtnQkFBR0QsV0FBVTswQkFDWiw0RUFBQ1c7b0JBQUVDLE1BQU1mLFNBQVNnQixJQUFJO29CQUFFYixXQUFVOzhCQUNoQyw0RUFBQ0U7d0JBQUlGLFdBQVU7a0NBQXlKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFLO0tBbEJBSjtBQXFCTixNQUFNa0Isb0JBQW9COztJQUN4QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3hCLCtDQUFRQSxDQUFNO0lBQ3BELE1BQU0sQ0FBQ3lCLE9BQU9DLFNBQVMsR0FBRzFCLCtDQUFRQSxDQUFTO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU00QixZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNMUIsK0NBQU1BLENBQUMyQixjQUFjO2dCQUNsRCxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNLGlDQUFpQ0osU0FBU0ssVUFBVTtnQkFDdEU7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO2dCQUNoQ1gsZUFBZVU7WUFDakIsRUFBRSxPQUFPVCxPQUFPO2dCQUNkLElBQUlBLGlCQUFpQk8sT0FBTztvQkFDMUJJLFFBQVFYLEtBQUssQ0FBQyxnQ0FBZ0NBO29CQUM5Q0MsU0FBU0QsTUFBTVksT0FBTztnQkFDeEIsT0FBTztvQkFDTEQsUUFBUVgsS0FBSyxDQUFDLHVCQUF1QkE7Z0JBQ3ZDO1lBQ0Y7UUFDRjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1XLGVBQWU7SUFDckIsTUFBTUMsU0FBUztJQUVmLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxlQUFlQyxTQUFTRixXQUFXO1FBQ3pDLE9BQU9DLGFBQWFFLGNBQWM7SUFDcEM7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCO1lBQ0U5QixNQUFNO1lBQ05GLE1BQU07WUFDTkcsT0FBT08sY0FBYyxJQUFzQixPQUFsQkEsWUFBWVAsS0FBSyxJQUFLO1lBQy9DQyxRQUFRTSxjQUFjLElBQXlCLE9BQXJCQSxZQUFZdUIsUUFBUSxJQUFLO1lBQ25ENUIsVUFBVUssY0FBYyxJQUF5QixPQUFyQkEsWUFBWUwsUUFBUSxJQUFLO1lBQ3JERyxNQUFNO1FBQ1I7S0FDRDtJQUVELHFCQUNFLDhEQUFDWDtRQUFJRixXQUFVOztZQUNaaUIsdUJBQVMsOERBQUNmO2dCQUFJRixXQUFVOztvQkFBMEM7b0JBQVFpQjs7Ozs7OztZQUMxRUYsNkJBQ0MsOERBQUNiO2dCQUFJRixXQUFVOztvQkFBeUM7a0NBQzdCLDhEQUFDdUM7Ozs7O29CQUFLO29CQUFHUCxnQkFBZ0JqQixZQUFZa0IsU0FBUzs7Ozs7OzswQkFHM0UsOERBQUNPO2dCQUFNeEMsV0FBV1AsaURBQVVBLENBQUNDLDZFQUFhLEVBQUU7O2tDQUMxQyw4REFBQytDO3dCQUFNekMsV0FBVTtrQ0FDZiw0RUFBQ0Q7OzhDQUNDLDhEQUFDMkM7b0NBQUdDLE9BQU07b0NBQU0zQyxXQUFVOzhDQUFrRTs7Ozs7OzhDQUc1Riw4REFBQzBDO29DQUFHQyxPQUFNO29DQUFNM0MsV0FBVTs4Q0FBa0U7Ozs7Ozs4Q0FHNUYsOERBQUMwQztvQ0FBR0MsT0FBTTtvQ0FBTTNDLFdBQVU7OENBQWtFOzs7Ozs7OENBRzVGLDhEQUFDMEM7b0NBQUdDLE9BQU07b0NBQU0zQyxXQUFVOzhDQUFrRTs7Ozs7OzhDQUc1Riw4REFBQzBDO29DQUFHQyxPQUFNO29DQUFNM0MsV0FBVTs4Q0FBa0U7Ozs7Ozs4Q0FHNUYsOERBQUMwQztvQ0FBR0MsT0FBTTtvQ0FBTTNDLFdBQVU7OENBQWtFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLaEcsOERBQUM0Qzt3QkFBTTVDLFdBQVU7OzRCQUNkcUMsVUFBVVEsR0FBRyxDQUFDLENBQUNoRCxVQUFVaUQsb0JBQ3hCLDhEQUFDbEQ7b0NBQXNCQyxVQUFVQTtvQ0FBVUMsT0FBT2dEO21DQUFoQ0E7Ozs7OzBDQUVwQiw4REFBQy9DOztvQ0FDRTtrREFDRCw4REFBQ2dEO3dDQUFXakIsY0FBY0E7d0NBQWNDLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUQ7R0F4Rk1qQjtNQUFBQTtBQTBGTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2UtY29tcG9uZW50LnRzeD80M2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgY29tcG9uZW50IGhhcyBiZWVuIGNvcHkgcGFzdGVkIGZyb20gdGhlIERvY2FzYXVydXMgdmVyc2lvbiBvZiB0aGUgcHJvamVjdCAqL1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXhjaGFuZ2UtY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIkAvY29uZmlnXCI7XG5cbmNvbnN0IEV4Y2hhbmdlUm93ID0gKHsgZXhjaGFuZ2UsIGluZGV4IH06IHsgZXhjaGFuZ2U6IGFueTsgaW5kZXg6IG51bWJlciB9KSA9PiAoXG4gIDx0ciBjbGFzc05hbWU9XCJoLTEyXCI+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00IHRleHQtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntpbmRleCArIDF9PC90ZD5cblxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCAgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC01IHctNSBtci0yXCIgc3JjPXtleGNoYW5nZS5sb2dvfSBhbHQ9e2Ake2V4Y2hhbmdlLm5hbWV9IExvZ29gfSAvPlxuICAgICAgICB7ZXhjaGFuZ2UubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00IHRleHQtY2VudGVyIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPntleGNoYW5nZS5wcmljZX08L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCAgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+e2V4Y2hhbmdlLnZvbHVtZX08L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCB0ZXh0LWNlbnRlciB0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj57ZXhjaGFuZ2Uudm9sdW1lN2R9PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgIHRleHQtY2VudGVyIHRleHQtbWQgZm9udC1tZWRpdW1cIj5cbiAgICAgIDxhIGhyZWY9e2V4Y2hhbmdlLmxpbmt9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctMnhsIHRleHQtY2VudGVyIGhvdmVyOmJnLWJsdWUtNjAwIGR1cmF0aW9uLTIwMCB0ZXh0LXdoaXRlIGZvbnQtc2FucyBmb250LXNlbWlib2xkIHB4LTIgcHktMlwiPlRyYWRlPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cbmNvbnN0IEV4Y2hhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbY29tc3dhcERhdGEsIHNldENvbXN3YXBEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29uZmlnLmV4Y2hhbmdlQXBpVXJsKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvayBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvbXN3YXBEYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgQ29tc3dhcCBkYXRhOlwiLCBlcnJvcik7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlVucmVjb2duaXplZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9rZW5BZGRyZXNzID0gXCIweGM3OEI2MjhiMDYwMjU4MzAwMjE4NzQwQjFBN2E1YjNjODJiM2JkOWZcIjtcbiAgY29uc3QgYXBpS2V5ID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKdWIyNWpaU0k2SWpnMk9UYzBOR1E0TFRGaFl6VXROREJpT0MxaVltTTJMVEJtTjJWbU5EWmpOemN5TUNJc0ltOXlaMGxrSWpvaU16YzFOREEzSWl3aWRYTmxja2xrSWpvaU16ZzFOemcxSWl3aWRIbHdaVWxrSWpvaU4yRTBOemcxT1dFdFlXVm1OeTAwTTJReUxXSXdNamN0TkRFM1l6a3lOV0UxTW1GbUlpd2lkSGx3WlNJNklsQlNUMHBGUTFRaUxDSnBZWFFpT2pFM01EWTROalF5TWpRc0ltVjRjQ0k2TkRnMk1qWXlOREl5TkgwLllGYnZJSnBqSm9kbTNVbmxQQ2NFXzE2eUxZY1hhUEM5dzY3b1VvRUFra0FcIjtcblxuICBjb25zdCBmb3JtYXRNYXJrZXRDYXAgPSAobWFya2V0Q2FwOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtYXJrZXRDYXBJbnQgPSBwYXJzZUludChtYXJrZXRDYXAsIDEwKTtcbiAgICByZXR1cm4gbWFya2V0Q2FwSW50LnRvTG9jYWxlU3RyaW5nKCk7XG4gIH07XG5cbiAgY29uc3QgZXhjaGFuZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29tc3dhcFwiLFxuICAgICAgbG9nbzogXCJodHRwczovL2NvbXN3YXAuaW8vc3RhdGljL21lZGlhL2xvZ28uMGVhZmM1NmMyMDAxMDFlZWNiODcucG5nXCIsXG4gICAgICBwcmljZTogY29tc3dhcERhdGEgPyBgJCR7Y29tc3dhcERhdGEucHJpY2V9YCA6IFwiTG9hZGluZy4uLlwiLFxuICAgICAgdm9sdW1lOiBjb21zd2FwRGF0YSA/IGAkJHtjb21zd2FwRGF0YS52b2x1bWUxZH1gIDogXCJMb2FkaW5nLi4uXCIsXG4gICAgICB2b2x1bWU3ZDogY29tc3dhcERhdGEgPyBgJCR7Y29tc3dhcERhdGEudm9sdW1lN2R9YCA6IFwiTG9hZGluZy4uLlwiLFxuICAgICAgbGluazogXCJodHRwczovL2NvbXN3YXAuaW9cIixcbiAgICB9LCAvL2FkZCBtb3JlIGV4Y2hhbmdlc1xuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ6LTQwIGJnLWJsdWUtNTAgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItYmx1ZS00MDAgYm9yZGVyLXNvbGlkIHNoYWRvdy1tZCBwLTMgbWF4LXctM3hsIG14LWF1dG8gIG92ZXJmbG93LXgtYXV0byB3LWZ1bGxcIj5cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtcmVkLTUwMFwiPkVycm9yOiB7ZXJyb3J9PC9kaXY+fVxuICAgICAge2NvbXN3YXBEYXRhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICRDT00gQ3VycmVudCBNYXJrZXQgQ2FwOiA8YnIgLz4gJHtmb3JtYXRNYXJrZXRDYXAoY29tc3dhcERhdGEubWFya2V0Q2FwKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnRhYmxlLCBcInJvdW5kZWQtbWRcIil9PlxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAjXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIEVYQ0hBTkdFXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIExBU1QgUFJJQ0VcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgMjRIIFZPTFVNRVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA3RCBWT0xVTUVcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgQlVZL1NFTExcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIFwiPlxuICAgICAgICAgIHtleGNoYW5nZXMubWFwKChleGNoYW5nZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8RXhjaGFuZ2VSb3cga2V5PXtpZHh9IGV4Y2hhbmdlPXtleGNoYW5nZX0gaW5kZXg9e2lkeH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8VG9rZW5QcmljZSB0b2tlbkFkZHJlc3M9e3Rva2VuQWRkcmVzc30gYXBpS2V5PXthcGlLZXl9IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJjb25maWciLCJFeGNoYW5nZVJvdyIsImV4Y2hhbmdlIiwiaW5kZXgiLCJ0ciIsImNsYXNzTmFtZSIsInRkIiwiZGl2IiwiaW1nIiwic3JjIiwibG9nbyIsImFsdCIsIm5hbWUiLCJwcmljZSIsInZvbHVtZSIsInZvbHVtZTdkIiwiYSIsImhyZWYiLCJsaW5rIiwiRXhjaGFuZ2VDb21wb25lbnQiLCJjb21zd2FwRGF0YSIsInNldENvbXN3YXBEYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJleGNoYW5nZUFwaVVybCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibWVzc2FnZSIsInRva2VuQWRkcmVzcyIsImFwaUtleSIsImZvcm1hdE1hcmtldENhcCIsIm1hcmtldENhcCIsIm1hcmtldENhcEludCIsInBhcnNlSW50IiwidG9Mb2NhbGVTdHJpbmciLCJleGNoYW5nZXMiLCJ2b2x1bWUxZCIsImJyIiwidGFibGUiLCJ0aGVhZCIsInRoIiwic2NvcGUiLCJ0Ym9keSIsIm1hcCIsImlkeCIsIlRva2VuUHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/exchanges/components/exchange-component.tsx\n"));

/***/ })

});