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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchange-component.module.css */ \"(app-pages-browser)/./src/app/exchanges/components/exchange-component.module.css\");\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* This component has been copy pasted from the Docasaurus version of the project */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ExchangeRow = (param)=>/*#__PURE__*/ {\n    let { exchange, index } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"h-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-sm font-medium text-gray-900\",\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-5 w-5 mr-2\",\n                            src: exchange.logo,\n                            alt: \"\".concat(exchange.name, \" Logo\")\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined),\n                        exchange.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.price\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: exchange.volume\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.volume7d\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md font-medium\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: exchange.link,\n                        className: \"text-blue-700 hover:text-blue-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inline-block bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white font-sans font-semibold px-2 py-2\",\n                            children: \"Trade\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined),\n                    exchange.chartLink && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: exchange.chartLink,\n                        className: \"text-blue-700 hover:text-blue-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inline-block bg-green-500 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-green-400 duration-200 text-white font-sans font-semibold px-2 py-2\",\n                            children: \"Chart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExchangeRow;\nconst ExchangeComponent = ()=>{\n    _s();\n    const [exchanges, setExchanges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const comswapResponse = await fetch(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].exchangeApiUrl);\n                if (!comswapResponse.ok) {\n                    throw new Error(\"Network response was not ok \" + comswapResponse.statusText);\n                }\n                const comswapData = await comswapResponse.json();\n                const dexScreenerURL = \"https://api.dexscreener.com/latest/dex/search?q=0xc78B628b060258300218740B1A7a5b3c82b3bd9f\";\n                const uniswapResponse = await fetch(dexScreenerURL);\n                const uniswapData = await uniswapResponse.json();\n                const uniswapPair = uniswapData.pairs[0];\n                setExchanges([\n                    {\n                        name: \"Comswap (Mainnet)\",\n                        logo: \"https://comswap.io/static/media/logo.0eafc56c200101eecb87.png\",\n                        price: \"$\".concat(parseFloat(comswapData.price).toFixed(2)),\n                        volume: \"$\".concat(comswapData.volume1d.toLocaleString()),\n                        volume7d: \"$\".concat(comswapData.volume7d.toLocaleString()),\n                        link: \"https://comswap.io\"\n                    },\n                    {\n                        name: \"Uniswap (Erc20)\",\n                        logo: \"https://cryptologos.cc/logos/uniswap-uni-logo.png\",\n                        price: \"$\".concat(parseFloat(uniswapPair.priceUsd).toFixed(2)),\n                        volume: \"$\".concat(uniswapPair.volume.h24.toLocaleString()),\n                        volume7d: \"N/A\",\n                        link: \"https://app.uniswap.org/swap?outputCurrency=0xc78B628b060258300218740B1A7a5b3c82b3bd9f&chain=ethereum\",\n                        chartLink: uniswapPair.url\n                    }\n                ]);\n            } catch (error) {\n                console.error(\"Error fetching exchange data:\", error);\n                setError(error instanceof Error ? error.message : String(error));\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default().exchangeComponent), \"z-40 bg-blue-50 rounded-lg border-2 border-blue-400 shadow-md p-3 max-w-3xl mx-auto overflow-x-auto\"),\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 text-lg font-semibold text-red-500\",\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 94,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_4___default().table), \"rounded-md w-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"EXCHANGE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"LAST PRICE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"24H VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"7D VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"BUY/SELL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white\",\n                        children: [\n                            exchanges.map((exchange, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExchangeRow, {\n                                    exchange: exchange,\n                                    index: idx\n                                }, idx, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"h-12 bg-gray-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    colSpan: 6,\n                                    className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                                    children: [\n                                        \"To Bridge funds between Commune and Ethereum use the\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://bridge.commune.finance\",\n                                            className: \"text-blue-700 hover:text-blue-800\",\n                                            children: \"Commune Bridge\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExchangeComponent, \"t7R28KtBuAuhK0zuRve+LDCJhxk=\");\n_c1 = ExchangeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExchangeComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"ExchangeRow\");\n$RefreshReg$(_c1, \"ExchangeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2UtY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrRkFBa0Y7O0FBRS9CO0FBQ2Y7QUFFa0I7QUFDeEI7QUFhOUIsTUFBTU0sY0FBYztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFvQztXQUN4RSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRUYsUUFBUTs7Ozs7OzBCQUV6Riw4REFBQ0c7Z0JBQUdELFdBQVU7MEJBQ1osNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUlILFdBQVU7NEJBQWVJLEtBQUtQLFNBQVNRLElBQUk7NEJBQUVDLEtBQUssR0FBaUIsT0FBZFQsU0FBU1UsSUFBSSxFQUFDOzs7Ozs7d0JBQ3ZFVixTQUFTVSxJQUFJOzs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDTjtnQkFBR0QsV0FBVTswQkFBdURILFNBQVNXLEtBQUs7Ozs7OzswQkFDbkYsOERBQUNQO2dCQUFHRCxXQUFVOzBCQUF3REgsU0FBU1ksTUFBTTs7Ozs7OzBCQUNyRiw4REFBQ1I7Z0JBQUdELFdBQVU7MEJBQXVESCxTQUFTYSxRQUFROzs7Ozs7MEJBQ3RGLDhEQUFDVDtnQkFBR0QsV0FBVTs7a0NBQ1osOERBQUNXO3dCQUFFQyxNQUFNZixTQUFTZ0IsSUFBSTt3QkFBRWIsV0FBVTtrQ0FDaEMsNEVBQUNFOzRCQUFJRixXQUFVO3NDQUF5Sjs7Ozs7Ozs7Ozs7b0JBRXpLSCxTQUFTaUIsU0FBUyxrQkFDakIsOERBQUNIO3dCQUFFQyxNQUFNZixTQUFTaUIsU0FBUzt3QkFBRWQsV0FBVTtrQ0FDckMsNEVBQUNFOzRCQUFJRixXQUFVO3NDQUEySjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUs7S0F2QkFKO0FBMEJOLE1BQU1tQixvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsV0FBV0Ms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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2V4Y2hhbmdlcy9jb21wb25lbnRzL2V4Y2hhbmdlLWNvbXBvbmVudC50c3g/NDNiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGNvbXBvbmVudCBoYXMgYmVlbiBjb3B5IHBhc3RlZCBmcm9tIHRoZSBEb2Nhc2F1cnVzIHZlcnNpb24gb2YgdGhlIHByb2plY3QgKi9cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V4Y2hhbmdlLWNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCJAL2NvbmZpZ1wiO1xuaW1wb3J0IFRva2VuUHJpY2UgZnJvbSBcIi4vZGV4LWNvbXBvbmVudFwiO1xuXG5pbnRlcmZhY2UgRXhjaGFuZ2VEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2dvOiBzdHJpbmc7XG4gIHByaWNlOiBzdHJpbmc7XG4gIHZvbHVtZTogc3RyaW5nO1xuICB2b2x1bWU3ZDogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIGNoYXJ0TGluaz86IHN0cmluZztcbn1cblxuY29uc3QgRXhjaGFuZ2VSb3cgPSAoeyBleGNoYW5nZSwgaW5kZXggfTogeyBleGNoYW5nZTogYW55OyBpbmRleDogbnVtYmVyIH0pID0+IChcbiAgPHRyIGNsYXNzTmFtZT1cImgtMTJcIj5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2luZGV4ICsgMX08L3RkPlxuXG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00ICB0ZXh0LWNlbnRlciB0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiBzcmM9e2V4Y2hhbmdlLmxvZ299IGFsdD17YCR7ZXhjaGFuZ2UubmFtZX0gTG9nb2B9IC8+XG4gICAgICAgIHtleGNoYW5nZS5uYW1lfVxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+e2V4Y2hhbmdlLnByaWNlfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00ICB0ZXh0LWNlbnRlciB0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj57ZXhjaGFuZ2Uudm9sdW1lfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00IHRleHQtY2VudGVyIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPntleGNoYW5nZS52b2x1bWU3ZH08L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCAgdGV4dC1jZW50ZXIgdGV4dC1tZCBmb250LW1lZGl1bVwiPlxuICAgICAgPGEgaHJlZj17ZXhjaGFuZ2UubGlua30gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBob3Zlcjp0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy0yeGwgdGV4dC1jZW50ZXIgaG92ZXI6YmctYmx1ZS02MDAgZHVyYXRpb24tMjAwIHRleHQtd2hpdGUgZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgcHgtMiBweS0yXCI+VHJhZGU8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICAgIHtleGNoYW5nZS5jaGFydExpbmsgJiYgKFxuICAgICAgICA8YSBocmVmPXtleGNoYW5nZS5jaGFydExpbmt9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyZWVuLTUwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctMnhsIHRleHQtY2VudGVyIGhvdmVyOmJnLWdyZWVuLTQwMCBkdXJhdGlvbi0yMDAgdGV4dC13aGl0ZSBmb250LXNhbnMgZm9udC1zZW1pYm9sZCBweC0yIHB5LTJcIj5DaGFydDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG4pO1xuXG5jb25zdCBFeGNoYW5nZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2V4Y2hhbmdlcywgc2V0RXhjaGFuZ2VzXSA9IHVzZVN0YXRlPEV4Y2hhbmdlRGF0YVtdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb21zd2FwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb25maWcuZXhjaGFuZ2VBcGlVcmwpO1xuICAgICAgICBpZiAoIWNvbXN3YXBSZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvayBcIiArIGNvbXN3YXBSZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21zd2FwRGF0YSA9IGF3YWl0IGNvbXN3YXBSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3QgZGV4U2NyZWVuZXJVUkwgPSBgaHR0cHM6Ly9hcGkuZGV4c2NyZWVuZXIuY29tL2xhdGVzdC9kZXgvc2VhcmNoP3E9MHhjNzhCNjI4YjA2MDI1ODMwMDIxODc0MEIxQTdhNWIzYzgyYjNiZDlmYDtcbiAgICAgICAgY29uc3QgdW5pc3dhcFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGV4U2NyZWVuZXJVUkwpO1xuICAgICAgICBjb25zdCB1bmlzd2FwRGF0YSA9IGF3YWl0IHVuaXN3YXBSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IHVuaXN3YXBQYWlyID0gdW5pc3dhcERhdGEucGFpcnNbMF07XG5cbiAgICAgICAgc2V0RXhjaGFuZ2VzKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXN3YXAgKE1haW5uZXQpXCIsXG4gICAgICAgICAgICBsb2dvOiBcImh0dHBzOi8vY29tc3dhcC5pby9zdGF0aWMvbWVkaWEvbG9nby4wZWFmYzU2YzIwMDEwMWVlY2I4Ny5wbmdcIixcbiAgICAgICAgICAgIHByaWNlOiBgJCR7cGFyc2VGbG9hdChjb21zd2FwRGF0YS5wcmljZSkudG9GaXhlZCgyKX1gLFxuICAgICAgICAgICAgdm9sdW1lOiBgJCR7Y29tc3dhcERhdGEudm9sdW1lMWQudG9Mb2NhbGVTdHJpbmcoKX1gLFxuICAgICAgICAgICAgdm9sdW1lN2Q6IGAkJHtjb21zd2FwRGF0YS52b2x1bWU3ZC50b0xvY2FsZVN0cmluZygpfWAsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vY29tc3dhcC5pb1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJVbmlzd2FwIChFcmMyMClcIixcbiAgICAgICAgICAgIGxvZ286IFwiaHR0cHM6Ly9jcnlwdG9sb2dvcy5jYy9sb2dvcy91bmlzd2FwLXVuaS1sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgcHJpY2U6IGAkJHtwYXJzZUZsb2F0KHVuaXN3YXBQYWlyLnByaWNlVXNkKS50b0ZpeGVkKDIpfWAsXG4gICAgICAgICAgICB2b2x1bWU6IGAkJHt1bmlzd2FwUGFpci52b2x1bWUuaDI0LnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIHZvbHVtZTdkOiBcIk4vQVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL2FwcC51bmlzd2FwLm9yZy9zd2FwP291dHB1dEN1cnJlbmN5PTB4Yzc4QjYyOGIwNjAyNTgzMDAyMTg3NDBCMUE3YTViM2M4MmIzYmQ5ZiZjaGFpbj1ldGhlcmV1bVwiLFxuICAgICAgICAgICAgY2hhcnRMaW5rOiB1bmlzd2FwUGFpci51cmwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZXhjaGFuZ2UgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcikpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5leGNoYW5nZUNvbXBvbmVudCwgXCJ6LTQwIGJnLWJsdWUtNTAgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItYmx1ZS00MDAgc2hhZG93LW1kIHAtMyBtYXgtdy0zeGwgbXgtYXV0byBvdmVyZmxvdy14LWF1dG9cIil9PlxuICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNTAwXCI+RXJyb3I6IHtlcnJvcn08L2Rpdj59XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMudGFibGUsIFwicm91bmRlZC1tZCB3LWZ1bGxcIil9PlxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj4jPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5FWENIQU5HRTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+TEFTVCBQUklDRTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+MjRIIFZPTFVNRTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+N0QgVk9MVU1FPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5CVVkvU0VMTDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XG4gICAgICAgICAge2V4Y2hhbmdlcy5tYXAoKGV4Y2hhbmdlLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxFeGNoYW5nZVJvdyBrZXk9e2lkeH0gZXhjaGFuZ2U9e2V4Y2hhbmdlfSBpbmRleD17aWR4fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJoLTEyIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0gY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIFRvIEJyaWRnZSBmdW5kcyBiZXR3ZWVuIENvbW11bmUgYW5kIEV0aGVyZXVtIHVzZSB0aGV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JyaWRnZS5jb21tdW5lLmZpbmFuY2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNzAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgICAgICAgICBDb21tdW5lIEJyaWRnZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiY29uZmlnIiwiRXhjaGFuZ2VSb3ciLCJleGNoYW5nZSIsImluZGV4IiwidHIiLCJjbGFzc05hbWUiLCJ0ZCIsImRpdiIsImltZyIsInNyYyIsImxvZ28iLCJhbHQiLCJuYW1lIiwicHJpY2UiLCJ2b2x1bWUiLCJ2b2x1bWU3ZCIsImEiLCJocmVmIiwibGluayIsImNoYXJ0TGluayIsIkV4Y2hhbmdlQ29tcG9uZW50IiwiZXhjaGFuZ2VzIiwic2V0RXhjaGFuZ2VzIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoRGF0YSIsImNvbXN3YXBSZXNwb25zZSIsImZldGNoIiwiZXhjaGFuZ2VBcGlVcmwiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImNvbXN3YXBEYXRhIiwianNvbiIsImRleFNjcmVlbmVyVVJMIiwidW5pc3dhcFJlc3BvbnNlIiwidW5pc3dhcERhdGEiLCJ1bmlzd2FwUGFpciIsInBhaXJzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ2b2x1bWUxZCIsInRvTG9jYWxlU3RyaW5nIiwicHJpY2VVc2QiLCJoMjQiLCJ1cmwiLCJjb25zb2xlIiwibWVzc2FnZSIsIlN0cmluZyIsImV4Y2hhbmdlQ29tcG9uZW50IiwidGFibGUiLCJ0aGVhZCIsInRoIiwidGJvZHkiLCJtYXAiLCJpZHgiLCJjb2xTcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/exchanges/components/exchange-component.tsx\n"));

/***/ })

});