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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchange-component.module.css */ \"(app-pages-browser)/./src/app/exchanges/components/exchange-component.module.css\");\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* This component has been copy pasted from the Docasaurus version of the project */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ExchangeRow = (param)=>/*#__PURE__*/ {\n    let { exchange, index } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"h-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-sm font-medium text-gray-900\",\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-5 w-5 mr-2\",\n                            src: exchange.logo,\n                            alt: \"\".concat(exchange.name, \" Logo\")\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined),\n                        exchange.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.price\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: exchange.volume\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.volume7d\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md font-medium\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: exchange.link,\n                        className: \"text-blue-700 hover:text-blue-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inline-block bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white font-sans font-semibold px-2 py-2\",\n                            children: \"Trade\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined),\n                    exchange.chartLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: exchange.chartLink,\n                        className: \"text-blue-700 hover:text-blue-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inline-block bg-green-500 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-green-400 duration-200 text-white font-sans font-semibold px-2 py-2\",\n                            children: exchange.chartLabel\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExchangeRow;\nconst ExchangeComponent = ()=>{\n    _s();\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const comswapResponse = await fetch(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].exchangeApiUrl);\n                if (!comswapResponse.ok) {\n                    throw new Error(\"Network response was not ok \" + comswapResponse.statusText);\n                }\n                const comswapData = await comswapResponse.json();\n                const dexScreenerURL = \"https://api.dexscreener.com/latest/dex/search?q=0xc78B628b060258300218740B1A7a5b3c82b3bd9f\";\n                const uniswapResponse = await fetch(dexScreenerURL);\n                const uniswapData = await uniswapResponse.json();\n                const uniswapPair = uniswapData.pairs[0];\n                setExchanges([\n                    {\n                        name: \"Comswap\",\n                        logo: \"https://comswap.io/static/media/logo.0eafc56c200101eecb87.png\",\n                        price: \"$\".concat(parseFloat(comswapData.price).toFixed(2)),\n                        volume: \"$\".concat(comswapData.volume1d.toLocaleString()),\n                        volume7d: \"$\".concat(comswapData.volume7d.toLocaleString()),\n                        link: \"https://comswap.io\"\n                    },\n                    {\n                        name: \"Uniswap\",\n                        logo: \"https://cryptologos.cc/logos/uniswap-uni-logo.png\",\n                        price: \"$\".concat(parseFloat(uniswapPair.priceUsd).toFixed(2)),\n                        volume: \"$\".concat(uniswapPair.volume.h24.toLocaleString()),\n                        volume7d: \"N/A\",\n                        link: \"https://app.uniswap.org/swap?outputCurrency=0xc78B628b060258300218740B1A7a5b3c82b3bd9f&chain=ethereum\"\n                    }\n                ]);\n            } catch (error) {\n                console.error(\"Error fetching exchange data:\", error);\n                setError(error instanceof Error ? error.message : String(error));\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default().exchangeComponent), \"z-40 bg-blue-50 rounded-lg border-2 border-blue-400 shadow-md p-3 max-w-3xl mx-auto overflow-x-auto\"),\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 text-lg font-semibold text-red-500\",\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 93,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default().table), \"rounded-md w-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"EXCHANGE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"LAST PRICE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"24H VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"7D VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"BUY/SELL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white\",\n                        children: exchanges.map((exchange, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExchangeRow, {\n                                exchange: exchange,\n                                index: idx\n                            }, idx, false, {\n                                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExchangeComponent, \"t7R28KtBuAuhK0zuRve+LDCJhxk=\");\n_c1 = ExchangeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExchangeComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"ExchangeRow\");\n$RefreshReg$(_c1, \"ExchangeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2UtY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrRkFBa0Y7O0FBRS9CO0FBQ2Y7QUFFa0I7QUFDeEI7QUFhOUIsTUFBTU0sY0FBYztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFvQztXQUN4RSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRUYsUUFBUTs7Ozs7OzBCQUV6Riw4REFBQ0c7Z0JBQUdELFdBQVU7MEJBQ1osNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUlILFdBQVU7NEJBQWVJLEtBQUtQLFNBQVNRLElBQUk7NEJBQUVDLEtBQUssR0FBaUIsT0FBZFQsU0FBU1UsSUFBSSxFQUFDOzs7Ozs7d0JBQ3ZFVixTQUFTVSxJQUFJOzs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDTjtnQkFBR0QsV0FBVTswQkFBdURILFNBQVNXLEtBQUs7Ozs7OzswQkFDbkYsOERBQUNQO2dCQUFHRCxXQUFVOzBCQUF3REgsU0FBU1ksTUFBTTs7Ozs7OzBCQUNyRiw4REFBQ1I7Z0JBQUdELFdBQVU7MEJBQXVESCxTQUFTYSxRQUFROzs7Ozs7MEJBQ3RGLDhEQUFDVDtnQkFBR0QsV0FBVTs7a0NBQ1osOERBQUNXO3dCQUFFQyxNQUFNZixTQUFTZ0IsSUFBSTt3QkFBRWIsV0FBVTtrQ0FDaEMsNEVBQUNFOzRCQUFJRixXQUFVO3NDQUF5Sjs7Ozs7Ozs7Ozs7b0JBRXpLSCxTQUFTaUIsU0FBUyxrQkFDakIsOERBQUNIO3dCQUFFQyxNQUFNZixTQUFTaUIsU0FBUzt3QkFBRWQsV0FBVTtrQ0FDckMsNEVBQUNFOzRCQUFJRixXQUFVO3NDQUE0SkgsU0FBU2tCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxNO0tBdkJBbkI7QUEwQk4sTUFBTW9CLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBaUIsRUFBRTtJQUM3RCxNQUFNLENBQUMyQixPQUFPQyxTQUFTLEdBQUc1QiwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNOEIsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLGtCQUFrQixNQUFNQyxNQUFNNUIsK0NBQU1BLENBQUM2QixjQUFjO2dCQUN6RCxJQUFJLENBQUNGLGdCQUFnQkcsRUFBRSxFQUFFO29CQUN2QixNQUFNLElBQUlDLE1BQU0saUNBQWlDSixnQkFBZ0JLLFVBQVU7Z0JBQzdFO2dCQUNBLE1BQU1DLGNBQWMsTUFBTU4sZ0JBQWdCTyxJQUFJO2dCQUU5QyxNQUFNQyxpQkFBa0I7Z0JBQ3hCLE1BQU1DLGtCQUFrQixNQUFNUixNQUFNTztnQkFDcEMsTUFBTUUsY0FBYyxNQUFNRCxnQkFBZ0JGLElBQUk7Z0JBQzlDLE1BQU1JLGNBQWNELFlBQVlFLEtBQUssQ0FBQyxFQUFFO2dCQUV4Q2hCLGFBQWE7b0JBQ1g7d0JBQ0VYLE1BQU07d0JBQ05GLE1BQU07d0JBQ05HLE9BQU8sSUFBNkMsT0FBekMyQixXQUFXUCxZQUFZcEIsS0FBSyxFQUFFNEIsT0FBTyxDQUFDO3dCQUNqRDNCLFFBQVEsSUFBMEMsT0FBdENtQixZQUFZUyxRQUFRLENBQUNDLGNBQWM7d0JBQy9DNUIsVUFBVSxJQUEwQyxPQUF0Q2tCLFlBQVlsQixRQUFRLENBQUM0QixjQUFjO3dCQUNqRHpCLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQ0VOLE1BQU07d0JBQ05GLE1BQU07d0JBQ05HLE9BQU8sSUFBZ0QsT0FBNUMyQixXQUFXRixZQUFZTSxRQUFRLEVBQUVILE9BQU8sQ0FBQzt3QkFDcEQzQixRQUFRLElBQTRDLE9BQXhDd0IsWUFBWXhCLE1BQU0sQ0FBQytCLEdBQUcsQ0FBQ0YsY0FBYzt3QkFDakQ1QixVQUFVO3dCQUNWRyxNQUFNO29CQUNSO2lCQUNEO1lBQ0gsRUFBRSxPQUFPTSxPQUFPO2dCQUNkc0IsUUFBUXRCLEtBQUssQ0FBQyxpQ0FBaUNBO2dCQUMvQ0MsU0FBU0QsaUJBQWlCTyxRQUFRUCxNQUFNdUIsT0FBTyxHQUFHQyxPQUFPeEI7WUFDM0Q7UUFDRjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbkI7UUFBSUYsV0FBV1AsaURBQVVBLENBQUNDLHlGQUF5QixFQUFFOztZQUNuRHlCLHVCQUFTLDhEQUFDakI7Z0JBQUlGLFdBQVU7O29CQUEwQztvQkFBUW1COzs7Ozs7OzBCQUMzRSw4REFBQzBCO2dCQUFNN0MsV0FBV1AsaURBQVVBLENBQUNDLDZFQUFhLEVBQUU7O2tDQUMxQyw4REFBQ29EO3dCQUFNOUMsV0FBVTtrQ0FDZiw0RUFBQ0Q7OzhDQUNDLDhEQUFDZ0Q7b0NBQUcvQyxXQUFVOzhDQUFrRTs7Ozs7OzhDQUNoRiw4REFBQytDO29DQUFHL0MsV0FBVTs4Q0FBa0U7Ozs7Ozs4Q0FDaEYsOERBQUMrQztvQ0FBRy9DLFdBQVU7OENBQWtFOzs7Ozs7OENBQ2hGLDhEQUFDK0M7b0NBQUcvQyxXQUFVOzhDQUFrRTs7Ozs7OzhDQUNoRiw4REFBQytDO29DQUFHL0MsV0FBVTs4Q0FBa0U7Ozs7Ozs4Q0FDaEYsOERBQUMrQztvQ0FBRy9DLFdBQVU7OENBQWtFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHcEYsOERBQUNnRDt3QkFBTWhELFdBQVU7a0NBQ2RpQixVQUFVZ0MsR0FBRyxDQUFDLENBQUNwRCxVQUFVcUQsb0JBQ3hCLDhEQUFDdEQ7Z0NBQXNCQyxVQUFVQTtnQ0FBVUMsT0FBT29EOytCQUFoQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUI7R0FuRU1sQztNQUFBQTtBQXFFTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2UtY29tcG9uZW50LnRzeD80M2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgY29tcG9uZW50IGhhcyBiZWVuIGNvcHkgcGFzdGVkIGZyb20gdGhlIERvY2FzYXVydXMgdmVyc2lvbiBvZiB0aGUgcHJvamVjdCAqL1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXhjaGFuZ2UtY29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIkAvY29uZmlnXCI7XG5pbXBvcnQgVG9rZW5QcmljZSBmcm9tIFwiLi9kZXgtY29tcG9uZW50XCI7XG5cbmludGVyZmFjZSBFeGNoYW5nZURhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvZ286IHN0cmluZztcbiAgcHJpY2U6IHN0cmluZztcbiAgdm9sdW1lOiBzdHJpbmc7XG4gIHZvbHVtZTdkOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgY2hhcnRMaW5rPzogc3RyaW5nO1xufVxuXG5jb25zdCBFeGNoYW5nZVJvdyA9ICh7IGV4Y2hhbmdlLCBpbmRleCB9OiB7IGV4Y2hhbmdlOiBhbnk7IGluZGV4OiBudW1iZXIgfSkgPT4gKFxuICA8dHIgY2xhc3NOYW1lPVwiaC0xMlwiPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCB0ZXh0LWNlbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57aW5kZXggKyAxfTwvdGQ+XG5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgIHRleHQtY2VudGVyIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMlwiIHNyYz17ZXhjaGFuZ2UubG9nb30gYWx0PXtgJHtleGNoYW5nZS5uYW1lfSBMb2dvYH0gLz5cbiAgICAgICAge2V4Y2hhbmdlLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCB0ZXh0LWNlbnRlciB0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj57ZXhjaGFuZ2UucHJpY2V9PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgIHRleHQtY2VudGVyIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPntleGNoYW5nZS52b2x1bWV9PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+e2V4Y2hhbmdlLnZvbHVtZTdkfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00ICB0ZXh0LWNlbnRlciB0ZXh0LW1kIGZvbnQtbWVkaXVtXCI+XG4gICAgICA8YSBocmVmPXtleGNoYW5nZS5saW5rfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNzAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctYmx1ZS03MDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LTJ4bCB0ZXh0LWNlbnRlciBob3ZlcjpiZy1ibHVlLTYwMCBkdXJhdGlvbi0yMDAgdGV4dC13aGl0ZSBmb250LXNhbnMgZm9udC1zZW1pYm9sZCBweC0yIHB5LTJcIj5UcmFkZTwvZGl2PlxuICAgICAgPC9hPlxuICAgICAge2V4Y2hhbmdlLmNoYXJ0TGluayAmJiAoXG4gICAgICAgIDxhIGhyZWY9e2V4Y2hhbmdlLmNoYXJ0TGlua30gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBob3Zlcjp0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JlZW4tNTAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy0yeGwgdGV4dC1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNDAwIGR1cmF0aW9uLTIwMCB0ZXh0LXdoaXRlIGZvbnQtc2FucyBmb250LXNlbWlib2xkIHB4LTIgcHktMlwiPntleGNoYW5nZS5jaGFydExhYmVsfTwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5jb25zdCBFeGNoYW5nZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2V4Y2hhbmdlcywgc2V0RXhjaGFuZ2VzXSA9IHVzZVN0YXRlPEV4Y2hhbmdlRGF0YVtdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb21zd2FwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb25maWcuZXhjaGFuZ2VBcGlVcmwpO1xuICAgICAgICBpZiAoIWNvbXN3YXBSZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvayBcIiArIGNvbXN3YXBSZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21zd2FwRGF0YSA9IGF3YWl0IGNvbXN3YXBSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3QgZGV4U2NyZWVuZXJVUkwgPSBgaHR0cHM6Ly9hcGkuZGV4c2NyZWVuZXIuY29tL2xhdGVzdC9kZXgvc2VhcmNoP3E9MHhjNzhCNjI4YjA2MDI1ODMwMDIxODc0MEIxQTdhNWIzYzgyYjNiZDlmYDtcbiAgICAgICAgY29uc3QgdW5pc3dhcFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGV4U2NyZWVuZXJVUkwpO1xuICAgICAgICBjb25zdCB1bmlzd2FwRGF0YSA9IGF3YWl0IHVuaXN3YXBSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IHVuaXN3YXBQYWlyID0gdW5pc3dhcERhdGEucGFpcnNbMF07XG5cbiAgICAgICAgc2V0RXhjaGFuZ2VzKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXN3YXBcIixcbiAgICAgICAgICAgIGxvZ286IFwiaHR0cHM6Ly9jb21zd2FwLmlvL3N0YXRpYy9tZWRpYS9sb2dvLjBlYWZjNTZjMjAwMTAxZWVjYjg3LnBuZ1wiLFxuICAgICAgICAgICAgcHJpY2U6IGAkJHtwYXJzZUZsb2F0KGNvbXN3YXBEYXRhLnByaWNlKS50b0ZpeGVkKDIpfWAsXG4gICAgICAgICAgICB2b2x1bWU6IGAkJHtjb21zd2FwRGF0YS52b2x1bWUxZC50b0xvY2FsZVN0cmluZygpfWAsXG4gICAgICAgICAgICB2b2x1bWU3ZDogYCQke2NvbXN3YXBEYXRhLnZvbHVtZTdkLnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb21zd2FwLmlvXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlVuaXN3YXBcIixcbiAgICAgICAgICAgIGxvZ286IFwiaHR0cHM6Ly9jcnlwdG9sb2dvcy5jYy9sb2dvcy91bmlzd2FwLXVuaS1sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgcHJpY2U6IGAkJHtwYXJzZUZsb2F0KHVuaXN3YXBQYWlyLnByaWNlVXNkKS50b0ZpeGVkKDIpfWAsXG4gICAgICAgICAgICB2b2x1bWU6IGAkJHt1bmlzd2FwUGFpci52b2x1bWUuaDI0LnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIHZvbHVtZTdkOiBcIk4vQVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL2FwcC51bmlzd2FwLm9yZy9zd2FwP291dHB1dEN1cnJlbmN5PTB4Yzc4QjYyOGIwNjAyNTgzMDAyMTg3NDBCMUE3YTViM2M4MmIzYmQ5ZiZjaGFpbj1ldGhlcmV1bVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGV4Y2hhbmdlIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuZXhjaGFuZ2VDb21wb25lbnQsIFwiei00MCBiZy1ibHVlLTUwIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1tZCBwLTMgbWF4LXctM3hsIG14LWF1dG8gb3ZlcmZsb3cteC1hdXRvXCIpfT5cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtcmVkLTUwMFwiPkVycm9yOiB7ZXJyb3J9PC9kaXY+fVxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnRhYmxlLCBcInJvdW5kZWQtbWQgdy1mdWxsXCIpfT5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+IzwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+RVhDSEFOR0U8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkxBU1QgUFJJQ0U8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPjI0SCBWT0xVTUU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPjdEIFZPTFVNRTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+QlVZL1NFTEw8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgIHtleGNoYW5nZXMubWFwKChleGNoYW5nZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8RXhjaGFuZ2VSb3cga2V5PXtpZHh9IGV4Y2hhbmdlPXtleGNoYW5nZX0gaW5kZXg9e2lkeH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJjb25maWciLCJFeGNoYW5nZVJvdyIsImV4Y2hhbmdlIiwiaW5kZXgiLCJ0ciIsImNsYXNzTmFtZSIsInRkIiwiZGl2IiwiaW1nIiwic3JjIiwibG9nbyIsImFsdCIsIm5hbWUiLCJwcmljZSIsInZvbHVtZSIsInZvbHVtZTdkIiwiYSIsImhyZWYiLCJsaW5rIiwiY2hhcnRMaW5rIiwiY2hhcnRMYWJlbCIsIkV4Y2hhbmdlQ29tcG9uZW50IiwiZXhjaGFuZ2VzIiwic2V0RXhjaGFuZ2VzIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoRGF0YSIsImNvbXN3YXBSZXNwb25zZSIsImZldGNoIiwiZXhjaGFuZ2VBcGlVcmwiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImNvbXN3YXBEYXRhIiwianNvbiIsImRleFNjcmVlbmVyVVJMIiwidW5pc3dhcFJlc3BvbnNlIiwidW5pc3dhcERhdGEiLCJ1bmlzd2FwUGFpciIsInBhaXJzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ2b2x1bWUxZCIsInRvTG9jYWxlU3RyaW5nIiwicHJpY2VVc2QiLCJoMjQiLCJjb25zb2xlIiwibWVzc2FnZSIsIlN0cmluZyIsImV4Y2hhbmdlQ29tcG9uZW50IiwidGFibGUiLCJ0aGVhZCIsInRoIiwidGJvZHkiLCJtYXAiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/exchanges/components/exchange-component.tsx\n"));

/***/ })

});