/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/[id]/route";
exports.ids = ["app/api/products/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/products/[id]/route.js":
/*!****************************************!*\
  !*** ./app/api/products/[id]/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// JSON dosyasının yolu\nconst productsFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"app/constants/bigCardProducts.json\");\nasync function PUT(request, { params }) {\n    try {\n        const { id } = await params;\n        const updatedProduct = await request.json();\n        // Mevcut ürünleri oku\n        const productsData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(productsFilePath, \"utf8\");\n        const products = JSON.parse(productsData);\n        // Ürünü bul ve güncelle\n        const productIndex = products.findIndex((p)=>p.id === parseInt(id));\n        if (productIndex === -1) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Ürün bulunamadı\"\n            }, {\n                status: 404\n            });\n        }\n        // Ürünü güncelle\n        products[productIndex] = {\n            ...products[productIndex],\n            ...updatedProduct\n        };\n        // Dosyaya kaydet\n        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(productsFilePath, JSON.stringify(products, null, 2));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Ürün başarıyla güncellendi\",\n            product: products[productIndex]\n        });\n    } catch (error) {\n        console.error(\"Product update error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Sunucu hatası\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(request, { params }) {\n    try {\n        const { id } = await params;\n        // Mevcut ürünleri oku\n        const productsData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(productsFilePath, \"utf8\");\n        const products = JSON.parse(productsData);\n        // Ürünü bul\n        const product = products.find((p)=>p.id === parseInt(id));\n        if (!product) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Ürün bulunamadı\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product);\n    } catch (error) {\n        console.error(\"Product get error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Sunucu hatası\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3RzL1tpZF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUN2QjtBQUNJO0FBRXhCLHVCQUF1QjtBQUN2QixNQUFNRyxtQkFBbUJELGdEQUFTLENBQ2hDRyxRQUFRQyxHQUFHLElBQ1g7QUFHSyxlQUFlQyxJQUFJQyxPQUFPLEVBQUUsRUFBRUMsTUFBTSxFQUFFO0lBQzNDLElBQUk7UUFDRixNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHLE1BQU1EO1FBQ3JCLE1BQU1FLGlCQUFpQixNQUFNSCxRQUFRSSxJQUFJO1FBRXpDLHNCQUFzQjtRQUN0QixNQUFNQyxlQUFlWixzREFBZSxDQUFDRSxrQkFBa0I7UUFDdkQsTUFBTVksV0FBV0MsS0FBS0MsS0FBSyxDQUFDSjtRQUU1Qix3QkFBd0I7UUFDeEIsTUFBTUssZUFBZUgsU0FBU0ksU0FBUyxDQUFDLENBQUNDLElBQU1BLEVBQUVWLEVBQUUsS0FBS1csU0FBU1g7UUFFakUsSUFBSVEsaUJBQWlCLENBQUMsR0FBRztZQUN2QixPQUFPbEIscURBQVlBLENBQUNZLElBQUksQ0FBQztnQkFBRVUsT0FBTztZQUFrQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdkU7UUFFQSxpQkFBaUI7UUFDakJSLFFBQVEsQ0FBQ0csYUFBYSxHQUFHO1lBQ3ZCLEdBQUdILFFBQVEsQ0FBQ0csYUFBYTtZQUN6QixHQUFHUCxjQUFjO1FBQ25CO1FBRUEsaUJBQWlCO1FBQ2pCVix1REFBZ0IsQ0FBQ0Usa0JBQWtCYSxLQUFLUyxTQUFTLENBQUNWLFVBQVUsTUFBTTtRQUVsRSxPQUFPZixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQ3ZCYyxTQUFTO1lBQ1RDLFNBQVNaLFFBQVEsQ0FBQ0csYUFBYTtRQUNqQztJQUNGLEVBQUUsT0FBT0ksT0FBTztRQUNkTSxRQUFRTixLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPdEIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFVSxPQUFPO1FBQWdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFO0FBQ0Y7QUFFTyxlQUFlTSxJQUFJckIsT0FBTyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUMzQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBRyxNQUFNRDtRQUVyQixzQkFBc0I7UUFDdEIsTUFBTUksZUFBZVosc0RBQWUsQ0FBQ0Usa0JBQWtCO1FBQ3ZELE1BQU1ZLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0o7UUFFNUIsWUFBWTtRQUNaLE1BQU1jLFVBQVVaLFNBQVNlLElBQUksQ0FBQyxDQUFDVixJQUFNQSxFQUFFVixFQUFFLEtBQUtXLFNBQVNYO1FBRXZELElBQUksQ0FBQ2lCLFNBQVM7WUFDWixPQUFPM0IscURBQVlBLENBQUNZLElBQUksQ0FBQztnQkFBRVUsT0FBTztZQUFrQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdkU7UUFFQSxPQUFPdkIscURBQVlBLENBQUNZLElBQUksQ0FBQ2U7SUFDM0IsRUFBRSxPQUFPTCxPQUFPO1FBQ2RNLFFBQVFOLEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3BDLE9BQU90QixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVVLE9BQU87UUFBZ0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckU7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2JhaGFkaXIvRGVza3RvcC9ncmVlbnN0ZXBCYWNrZW5kL2FwcC9hcGkvcHJvZHVjdHMvW2lkXS9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIEpTT04gZG9zeWFzxLFuxLFuIHlvbHVcbmNvbnN0IHByb2R1Y3RzRmlsZVBhdGggPSBwYXRoLmpvaW4oXG4gIHByb2Nlc3MuY3dkKCksXG4gIFwiYXBwL2NvbnN0YW50cy9iaWdDYXJkUHJvZHVjdHMuanNvblwiXG4pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3QsIHsgcGFyYW1zIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCBwYXJhbXM7XG4gICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIC8vIE1ldmN1dCDDvHLDvG5sZXJpIG9rdVxuICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwcm9kdWN0c0ZpbGVQYXRoLCBcInV0ZjhcIik7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBKU09OLnBhcnNlKHByb2R1Y3RzRGF0YSk7XG5cbiAgICAvLyDDnHLDvG7DvCBidWwgdmUgZ8O8bmNlbGxlXG4gICAgY29uc3QgcHJvZHVjdEluZGV4ID0gcHJvZHVjdHMuZmluZEluZGV4KChwKSA9PiBwLmlkID09PSBwYXJzZUludChpZCkpO1xuXG4gICAgaWYgKHByb2R1Y3RJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIsOccsO8biBidWx1bmFtYWTEsVwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuXG4gICAgLy8gw5xyw7xuw7wgZ8O8bmNlbGxlXG4gICAgcHJvZHVjdHNbcHJvZHVjdEluZGV4XSA9IHtcbiAgICAgIC4uLnByb2R1Y3RzW3Byb2R1Y3RJbmRleF0sXG4gICAgICAuLi51cGRhdGVkUHJvZHVjdCxcbiAgICB9O1xuXG4gICAgLy8gRG9zeWF5YSBrYXlkZXRcbiAgICBmcy53cml0ZUZpbGVTeW5jKHByb2R1Y3RzRmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzLCBudWxsLCAyKSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCLDnHLDvG4gYmHFn2FyxLF5bGEgZ8O8bmNlbGxlbmRpXCIsXG4gICAgICBwcm9kdWN0OiBwcm9kdWN0c1twcm9kdWN0SW5kZXhdLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9kdWN0IHVwZGF0ZSBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlN1bnVjdSBoYXRhc8SxXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QsIHsgcGFyYW1zIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCBwYXJhbXM7XG5cbiAgICAvLyBNZXZjdXQgw7xyw7xubGVyaSBva3VcbiAgICBjb25zdCBwcm9kdWN0c0RhdGEgPSBmcy5yZWFkRmlsZVN5bmMocHJvZHVjdHNGaWxlUGF0aCwgXCJ1dGY4XCIpO1xuICAgIGNvbnN0IHByb2R1Y3RzID0gSlNPTi5wYXJzZShwcm9kdWN0c0RhdGEpO1xuXG4gICAgLy8gw5xyw7xuw7wgYnVsXG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHBhcnNlSW50KGlkKSk7XG5cbiAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIsOccsO8biBidWx1bmFtYWTEsVwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3QpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9kdWN0IGdldCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlN1bnVjdSBoYXRhc8SxXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImZzIiwicGF0aCIsInByb2R1Y3RzRmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsIlBVVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJpZCIsInVwZGF0ZWRQcm9kdWN0IiwianNvbiIsInByb2R1Y3RzRGF0YSIsInJlYWRGaWxlU3luYyIsInByb2R1Y3RzIiwiSlNPTiIsInBhcnNlIiwicHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwicCIsInBhcnNlSW50IiwiZXJyb3IiLCJzdGF0dXMiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInByb2R1Y3QiLCJjb25zb2xlIiwiR0VUIiwiZmluZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/products/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_bahadir_Desktop_greenstepBackend_app_api_products_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/products/[id]/route.js */ \"(rsc)/./app/api/products/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/[id]/route\",\n        pathname: \"/api/products/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/[id]/route\"\n    },\n    resolvedPagePath: \"/Users/bahadir/Desktop/greenstepBackend/app/api/products/[id]/route.js\",\n    nextConfigOutput,\n    userland: _Users_bahadir_Desktop_greenstepBackend_app_api_products_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZHVjdHMlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmJhaGFkaXIlMkZEZXNrdG9wJTJGZ3JlZW5zdGVwQmFja2VuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZiYWhhZGlyJTJGRGVza3RvcCUyRmdyZWVuc3RlcEJhY2tlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYmFoYWRpci9EZXNrdG9wL2dyZWVuc3RlcEJhY2tlbmQvYXBwL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdHMvW2lkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZHVjdHMvW2lkXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9iYWhhZGlyL0Rlc2t0b3AvZ3JlZW5zdGVwQmFja2VuZC9hcHAvYXBpL3Byb2R1Y3RzL1tpZF0vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();