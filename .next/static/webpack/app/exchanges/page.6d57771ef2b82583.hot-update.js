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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange-component.module.css */ \"(app-pages-browser)/./src/app/exchanges/components/exchange-component.module.css\");\n/* harmony import */ var _exchange_component_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* This component has been copy pasted from the Docasaurus version of the project */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ExchangeRow = (param)=>/*#__PURE__*/ {\n    let { exchange, index } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        className: \"h-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-sm font-medium text-gray-900\",\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"h-5 w-5 mr-2\",\n                            src: exchange.logo,\n                            alt: \"\".concat(exchange.name, \" Logo\")\n                        }, void 0, false, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        }, undefined),\n                        exchange.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.price\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md text-gray-500\",\n                children: exchange.volume\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4 text-center text-md text-gray-500\",\n                children: exchange.volume7d\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"px-3 md:px-6 py-4  text-center text-md font-medium\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: exchange.link,\n                    className: \"text-blue-700 hover:text-blue-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-block bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white font-sans font-semibold px-2 py-2\",\n                        children: \"Trade\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExchangeRow;\nconst ExchangeComponent = ()=>{\n    _s();\n    const [comswapData, setComswapData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [exchangeData, setExchangeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchExchangesData = async ()=>{\n            try {\n                // Przykład pobierania danych dla Comswap\n                // Zakładając, że masz dostęp do API Comswap lub statycznych danych\n                const comswapData = {\n                    name: \"Comswap\",\n                    logo: \"https://comswap.io/static/media/logo.0eafc56c200101eecb87.png\",\n                    price: \"Loading...\",\n                    volume: \"Loading...\",\n                    volume7d: \"N/A\",\n                    link: \"https://comswap.io\"\n                };\n                // Pobieranie danych dla Uniswap z DexScreener\n                const dexScreenerURL = \"https://api.dexscreener.com/latest/dex/search?q=0xc78B628b060258300218740B1A7a5b3c82b3bd9f\";\n                const response = await fetch(dexScreenerURL);\n                const uniswapData = await response.json();\n                const uniswapPair = uniswapData.pairs[0]; // Pierwsza para zwrócona przez zapytanie\n                const uniswapExchange = {\n                    name: \"Uniswap\",\n                    logo: \"https://cryptologos.cc/logos/uniswap-uni-logo.png\",\n                    price: \"$\".concat(parseFloat(uniswapPair.priceUsd).toFixed(2)),\n                    volume: \"$\".concat(uniswapPair.volume.h24.toLocaleString()),\n                    volume7d: \"N/A\",\n                    link: uniswapPair.url\n                };\n                setExchanges([\n                    comswapData,\n                    uniswapExchange\n                ]);\n            } catch (error) {\n                console.error(\"Error fetching exchange data:\", error);\n                setError(error instanceof Error ? error.message : String(error));\n            }\n        };\n        fetchExchangesData();\n    }, []);\n    const tokenAddress = \"0xc78B628b060258300218740B1A7a5b3c82b3bd9f\";\n    const formatMarketCap = (marketCap)=>{\n        const marketCapInt = parseInt(marketCap, 10);\n        return marketCapInt.toLocaleString();\n    };\n    const exchanges = [\n        {\n            name: \"Comswap\",\n            logo: \"https://comswap.io/static/media/logo.0eafc56c200101eecb87.png\",\n            price: comswapData ? \"$\".concat(comswapData.price) : \"Loading...\",\n            volume: comswapData ? \"$\".concat(comswapData.volume1d) : \"Loading...\",\n            volume7d: comswapData ? \"$\".concat(comswapData.volume7d) : \"Loading...\",\n            link: \"https://comswap.io\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_3___default().exchangeComponent), \"z-40 bg-blue-50 rounded-lg border-2 border-blue-400 shadow-md p-3 max-w-3xl mx-auto overflow-x-auto\"),\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 text-lg font-semibold text-red-500\",\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 95,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_exchange_component_module_css__WEBPACK_IMPORTED_MODULE_3___default().table), \"rounded-md w-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"EXCHANGE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"LAST PRICE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"24H VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"7D VOLUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-3 md:px-6 py-3 text-center text-xs font-medium text-gray-500\",\n                                    children: \"BUY/SELL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white\",\n                        children: exchangeData.map((exchange, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExchangeRow, {\n                                exchange: exchange,\n                                index: idx\n                            }, idx, false, {\n                                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/commune deploy version/commune-new/src/app/exchanges/components/exchange-component.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExchangeComponent, \"6t35zxN168FDwvF4scW6C0BYb4g=\");\n_c1 = ExchangeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExchangeComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"ExchangeRow\");\n$RefreshReg$(_c1, \"ExchangeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXhjaGFuZ2VzL2NvbXBvbmVudHMvZXhjaGFuZ2UtY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGtGQUFrRjs7QUFFL0I7QUFDZjtBQUVrQjtBQUl0RCxNQUFNSyxjQUFjO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQW9DO1dBQ3hFLDhEQUFDQztRQUFHQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1FRixRQUFROzs7Ozs7MEJBRXpGLDhEQUFDRztnQkFBR0QsV0FBVTswQkFDWiw0RUFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBSUgsV0FBVTs0QkFBZUksS0FBS1AsU0FBU1EsSUFBSTs0QkFBRUMsS0FBSyxHQUFpQixPQUFkVCxTQUFTVSxJQUFJLEVBQUM7Ozs7Ozt3QkFDdkVWLFNBQVNVLElBQUk7Ozs7Ozs7Ozs7OzswQkFHbEIsOERBQUNOO2dCQUFHRCxXQUFVOzBCQUF1REgsU0FBU1csS0FBSzs7Ozs7OzBCQUNuRiw4REFBQ1A7Z0JBQUdELFdBQVU7MEJBQXdESCxTQUFTWSxNQUFNOzs7Ozs7MEJBQ3JGLDhEQUFDUjtnQkFBR0QsV0FBVTswQkFBdURILFNBQVNhLFFBQVE7Ozs7OzswQkFDdEYsOERBQUNUO2dCQUFHRCxXQUFVOzBCQUNaLDRFQUFDVztvQkFBRUMsTUFBTWYsU0FBU2dCLElBQUk7b0JBQUViLFdBQVU7OEJBQ2hDLDRFQUFDRTt3QkFBSUYsV0FBVTtrQ0FBeUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUs7S0FsQkFKO0FBcUJOLE1BQU1rQixvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQU07SUFDcEQsTUFBTSxDQUFDd0IsY0FBY0MsZ0JBQWdCLEdBQUd6QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELE1BQU0sQ0FBQzBCLE9BQU9DLFNBQVMsR0FBRzNCLCtDQUFRQSxDQUFTO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU02QixxQkFBcUI7WUFDekIsSUFBSTtnQkFDRix5Q0FBeUM7Z0JBQ3pDLG1FQUFtRTtnQkFDbkUsTUFBTU4sY0FBYztvQkFDbEJSLE1BQU07b0JBQ05GLE1BQU07b0JBQ05HLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLFVBQVU7b0JBQ1ZHLE1BQU07Z0JBQ1I7Z0JBRUEsOENBQThDO2dCQUM5QyxNQUFNUyxpQkFBa0I7Z0JBQ3hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUY7Z0JBQzdCLE1BQU1HLGNBQWMsTUFBTUYsU0FBU0csSUFBSTtnQkFDdkMsTUFBTUMsY0FBY0YsWUFBWUcsS0FBSyxDQUFDLEVBQUUsRUFBRSx5Q0FBeUM7Z0JBRW5GLE1BQU1DLGtCQUFrQjtvQkFDdEJ0QixNQUFNO29CQUNORixNQUFNO29CQUNORyxPQUFPLElBQWdELE9BQTVDc0IsV0FBV0gsWUFBWUksUUFBUSxFQUFFQyxPQUFPLENBQUM7b0JBQ3BEdkIsUUFBUSxJQUE0QyxPQUF4Q2tCLFlBQVlsQixNQUFNLENBQUN3QixHQUFHLENBQUNDLGNBQWM7b0JBQ2pEeEIsVUFBVTtvQkFDVkcsTUFBTWMsWUFBWVEsR0FBRztnQkFDdkI7Z0JBQ0FDLGFBQWE7b0JBQUNyQjtvQkFBYWM7aUJBQWdCO1lBQzdDLEVBQUUsT0FBT1YsT0FBTztnQkFDZGtCLFFBQVFsQixLQUFLLENBQUMsaUNBQWlDQTtnQkFDL0NDLFNBQVNELGlCQUFpQm1CLFFBQVFuQixNQUFNb0IsT0FBTyxHQUFHQyxPQUFPckI7WUFDM0Q7UUFDRjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1vQixlQUFlO0lBRXJCLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxlQUFlQyxTQUFTRixXQUFXO1FBQ3pDLE9BQU9DLGFBQWFWLGNBQWM7SUFDcEM7SUFFQSxNQUFNWSxZQUFZO1FBQ2hCO1lBQ0V2QyxNQUFNO1lBQ05GLE1BQU07WUFDTkcsT0FBT08sY0FBYyxJQUFzQixPQUFsQkEsWUFBWVAsS0FBSyxJQUFLO1lBQy9DQyxRQUFRTSxjQUFjLElBQXlCLE9BQXJCQSxZQUFZZ0MsUUFBUSxJQUFLO1lBQ25EckMsVUFBVUssY0FBYyxJQUF5QixPQUFyQkEsWUFBWUwsUUFBUSxJQUFLO1lBQ3JERyxNQUFNO1FBQ1I7S0FDRDtJQUVELHFCQUNFLDhEQUFDWDtRQUFJRixXQUFXTixpREFBVUEsQ0FBQ0MseUZBQXlCLEVBQUU7O1lBQ25Ed0IsdUJBQVMsOERBQUNqQjtnQkFBSUYsV0FBVTs7b0JBQTBDO29CQUFRbUI7Ozs7Ozs7MEJBQzNFLDhEQUFDOEI7Z0JBQU1qRCxXQUFXTixpREFBVUEsQ0FBQ0MsNkVBQWEsRUFBRTs7a0NBQzFDLDhEQUFDdUQ7d0JBQU1sRCxXQUFVO2tDQUNmLDRFQUFDRDs7OENBQ0MsOERBQUNvRDtvQ0FBR25ELFdBQVU7OENBQWtFOzs7Ozs7OENBQ2hGLDhEQUFDbUQ7b0NBQUduRCxXQUFVOzhDQUFrRTs7Ozs7OzhDQUNoRiw4REFBQ21EO29DQUFHbkQsV0FBVTs4Q0FBa0U7Ozs7Ozs4Q0FDaEYsOERBQUNtRDtvQ0FBR25ELFdBQVU7OENBQWtFOzs7Ozs7OENBQ2hGLDhEQUFDbUQ7b0NBQUduRCxXQUFVOzhDQUFrRTs7Ozs7OzhDQUNoRiw4REFBQ21EO29DQUFHbkQsV0FBVTs4Q0FBa0U7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdwRiw4REFBQ29EO3dCQUFNcEQsV0FBVTtrQ0FDZGlCLGFBQWFvQyxHQUFHLENBQUMsQ0FBQ3hELFVBQVV5RCxvQkFDM0IsOERBQUMxRDtnQ0FBc0JDLFVBQVVBO2dDQUFVQyxPQUFPd0Q7K0JBQWhDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QjtHQXBGTXhDO01BQUFBO0FBc0ZOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9leGNoYW5nZXMvY29tcG9uZW50cy9leGNoYW5nZS1jb21wb25lbnQudHN4PzQzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBjb21wb25lbnQgaGFzIGJlZW4gY29weSBwYXN0ZWQgZnJvbSB0aGUgRG9jYXNhdXJ1cyB2ZXJzaW9uIG9mIHRoZSBwcm9qZWN0ICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9leGNoYW5nZS1jb21wb25lbnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQC9jb25maWdcIjtcbmltcG9ydCBUb2tlblByaWNlIGZyb20gXCIuL2RleC1jb21wb25lbnRcIjtcblxuY29uc3QgRXhjaGFuZ2VSb3cgPSAoeyBleGNoYW5nZSwgaW5kZXggfTogeyBleGNoYW5nZTogYW55OyBpbmRleDogbnVtYmVyIH0pID0+IChcbiAgPHRyIGNsYXNzTmFtZT1cImgtMTJcIj5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2luZGV4ICsgMX08L3RkPlxuXG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00ICB0ZXh0LWNlbnRlciB0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiBzcmM9e2V4Y2hhbmdlLmxvZ299IGFsdD17YCR7ZXhjaGFuZ2UubmFtZX0gTG9nb2B9IC8+XG4gICAgICAgIHtleGNoYW5nZS5uYW1lfVxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwicHgtMyBtZDpweC02IHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+e2V4Y2hhbmdlLnByaWNlfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00ICB0ZXh0LWNlbnRlciB0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj57ZXhjaGFuZ2Uudm9sdW1lfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS00IHRleHQtY2VudGVyIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPntleGNoYW5nZS52b2x1bWU3ZH08L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktNCAgdGV4dC1jZW50ZXIgdGV4dC1tZCBmb250LW1lZGl1bVwiPlxuICAgICAgPGEgaHJlZj17ZXhjaGFuZ2UubGlua30gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBob3Zlcjp0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy0yeGwgdGV4dC1jZW50ZXIgaG92ZXI6YmctYmx1ZS02MDAgZHVyYXRpb24tMjAwIHRleHQtd2hpdGUgZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgcHgtMiBweS0yXCI+VHJhZGU8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuY29uc3QgRXhjaGFuZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb21zd2FwRGF0YSwgc2V0Q29tc3dhcERhdGFdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW2V4Y2hhbmdlRGF0YSwgc2V0RXhjaGFuZ2VEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEV4Y2hhbmdlc0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBQcnp5a8WCYWQgcG9iaWVyYW5pYSBkYW55Y2ggZGxhIENvbXN3YXBcbiAgICAgICAgLy8gWmFrxYJhZGFqxIVjLCDFvGUgbWFzeiBkb3N0xJlwIGRvIEFQSSBDb21zd2FwIGx1YiBzdGF0eWN6bnljaCBkYW55Y2hcbiAgICAgICAgY29uc3QgY29tc3dhcERhdGEgPSB7XG4gICAgICAgICAgbmFtZTogXCJDb21zd2FwXCIsXG4gICAgICAgICAgbG9nbzogXCJodHRwczovL2NvbXN3YXAuaW8vc3RhdGljL21lZGlhL2xvZ28uMGVhZmM1NmMyMDAxMDFlZWNiODcucG5nXCIsIC8vIFByenlrxYJhZG93ZSBsb2dvIENvbXN3YXBcbiAgICAgICAgICBwcmljZTogXCJMb2FkaW5nLi4uXCIsIC8vIFR1dGFqIG1vxbxlc3ogd3N0YXdpxIcgcHJhd2R6aXdlIGRhbmVcbiAgICAgICAgICB2b2x1bWU6IFwiTG9hZGluZy4uLlwiLCAvLyBUdXRhaiBtb8W8ZXN6IHdzdGF3acSHIHByYXdkeml3ZSBkYW5lXG4gICAgICAgICAgdm9sdW1lN2Q6IFwiTi9BXCIsIC8vIEplxZtsaSBuaWUgZG9zdMSZcG5lXG4gICAgICAgICAgbGluazogXCJodHRwczovL2NvbXN3YXAuaW9cIixcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQb2JpZXJhbmllIGRhbnljaCBkbGEgVW5pc3dhcCB6IERleFNjcmVlbmVyXG4gICAgICAgIGNvbnN0IGRleFNjcmVlbmVyVVJMID0gYGh0dHBzOi8vYXBpLmRleHNjcmVlbmVyLmNvbS9sYXRlc3QvZGV4L3NlYXJjaD9xPTB4Yzc4QjYyOGIwNjAyNTgzMDAyMTg3NDBCMUE3YTViM2M4MmIzYmQ5ZmA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGV4U2NyZWVuZXJVUkwpO1xuICAgICAgICBjb25zdCB1bmlzd2FwRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgdW5pc3dhcFBhaXIgPSB1bmlzd2FwRGF0YS5wYWlyc1swXTsgLy8gUGllcndzemEgcGFyYSB6d3LDs2NvbmEgcHJ6ZXogemFweXRhbmllXG5cbiAgICAgICAgY29uc3QgdW5pc3dhcEV4Y2hhbmdlID0ge1xuICAgICAgICAgIG5hbWU6IFwiVW5pc3dhcFwiLFxuICAgICAgICAgIGxvZ286IFwiaHR0cHM6Ly9jcnlwdG9sb2dvcy5jYy9sb2dvcy91bmlzd2FwLXVuaS1sb2dvLnBuZ1wiLCAvLyBMb2dvIFVuaXN3YXBcbiAgICAgICAgICBwcmljZTogYCQke3BhcnNlRmxvYXQodW5pc3dhcFBhaXIucHJpY2VVc2QpLnRvRml4ZWQoMil9YCxcbiAgICAgICAgICB2b2x1bWU6IGAkJHt1bmlzd2FwUGFpci52b2x1bWUuaDI0LnRvTG9jYWxlU3RyaW5nKCl9YCxcbiAgICAgICAgICB2b2x1bWU3ZDogXCJOL0FcIiwgLy8gTmllIGRvc3TEmXBuZSB3IHR5bSBBUElcbiAgICAgICAgICBsaW5rOiB1bmlzd2FwUGFpci51cmwsXG4gICAgICAgIH07XG4gICAgICAgIHNldEV4Y2hhbmdlcyhbY29tc3dhcERhdGEsIHVuaXN3YXBFeGNoYW5nZV0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGV4Y2hhbmdlIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hFeGNoYW5nZXNEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2tlbkFkZHJlc3MgPSBcIjB4Yzc4QjYyOGIwNjAyNTgzMDAyMTg3NDBCMUE3YTViM2M4MmIzYmQ5ZlwiO1xuXG4gIGNvbnN0IGZvcm1hdE1hcmtldENhcCA9IChtYXJrZXRDYXA6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1hcmtldENhcEludCA9IHBhcnNlSW50KG1hcmtldENhcCwgMTApO1xuICAgIHJldHVybiBtYXJrZXRDYXBJbnQudG9Mb2NhbGVTdHJpbmcoKTtcbiAgfTtcblxuICBjb25zdCBleGNoYW5nZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJDb21zd2FwXCIsXG4gICAgICBsb2dvOiBcImh0dHBzOi8vY29tc3dhcC5pby9zdGF0aWMvbWVkaWEvbG9nby4wZWFmYzU2YzIwMDEwMWVlY2I4Ny5wbmdcIixcbiAgICAgIHByaWNlOiBjb21zd2FwRGF0YSA/IGAkJHtjb21zd2FwRGF0YS5wcmljZX1gIDogXCJMb2FkaW5nLi4uXCIsXG4gICAgICB2b2x1bWU6IGNvbXN3YXBEYXRhID8gYCQke2NvbXN3YXBEYXRhLnZvbHVtZTFkfWAgOiBcIkxvYWRpbmcuLi5cIixcbiAgICAgIHZvbHVtZTdkOiBjb21zd2FwRGF0YSA/IGAkJHtjb21zd2FwRGF0YS52b2x1bWU3ZH1gIDogXCJMb2FkaW5nLi4uXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29tc3dhcC5pb1wiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmV4Y2hhbmdlQ29tcG9uZW50LCBcInotNDAgYmctYmx1ZS01MCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbWQgcC0zIG1heC13LTN4bCBteC1hdXRvIG92ZXJmbG93LXgtYXV0b1wiKX0+XG4gICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXJlZC01MDBcIj5FcnJvcjoge2Vycm9yfTwvZGl2Pn1cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy50YWJsZSwgXCJyb3VuZGVkLW1kIHctZnVsbFwiKX0+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPiM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkVYQ0hBTkdFPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5MQVNUIFBSSUNFPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj4yNEggVk9MVU1FPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTYgcHktMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj43RCBWT0xVTUU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTMgbWQ6cHgtNiBweS0zIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPkJVWS9TRUxMPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgICB7ZXhjaGFuZ2VEYXRhLm1hcCgoZXhjaGFuZ2UsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPEV4Y2hhbmdlUm93IGtleT17aWR4fSBleGNoYW5nZT17ZXhjaGFuZ2V9IGluZGV4PXtpZHh9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiRXhjaGFuZ2VSb3ciLCJleGNoYW5nZSIsImluZGV4IiwidHIiLCJjbGFzc05hbWUiLCJ0ZCIsImRpdiIsImltZyIsInNyYyIsImxvZ28iLCJhbHQiLCJuYW1lIiwicHJpY2UiLCJ2b2x1bWUiLCJ2b2x1bWU3ZCIsImEiLCJocmVmIiwibGluayIsIkV4Y2hhbmdlQ29tcG9uZW50IiwiY29tc3dhcERhdGEiLCJzZXRDb21zd2FwRGF0YSIsImV4Y2hhbmdlRGF0YSIsInNldEV4Y2hhbmdlRGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEV4Y2hhbmdlc0RhdGEiLCJkZXhTY3JlZW5lclVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ1bmlzd2FwRGF0YSIsImpzb24iLCJ1bmlzd2FwUGFpciIsInBhaXJzIiwidW5pc3dhcEV4Y2hhbmdlIiwicGFyc2VGbG9hdCIsInByaWNlVXNkIiwidG9GaXhlZCIsImgyNCIsInRvTG9jYWxlU3RyaW5nIiwidXJsIiwic2V0RXhjaGFuZ2VzIiwiY29uc29sZSIsIkVycm9yIiwibWVzc2FnZSIsIlN0cmluZyIsInRva2VuQWRkcmVzcyIsImZvcm1hdE1hcmtldENhcCIsIm1hcmtldENhcCIsIm1hcmtldENhcEludCIsInBhcnNlSW50IiwiZXhjaGFuZ2VzIiwidm9sdW1lMWQiLCJleGNoYW5nZUNvbXBvbmVudCIsInRhYmxlIiwidGhlYWQiLCJ0aCIsInRib2R5IiwibWFwIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/exchanges/components/exchange-component.tsx\n"));

/***/ })

});