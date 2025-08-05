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
exports.id = "app/api/auth/sambaAdminLogin/route";
exports.ids = ["app/api/auth/sambaAdminLogin/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/sambaAdminLogin/route.js":
/*!***********************************************!*\
  !*** ./app/api/auth/sambaAdminLogin/route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    try {\n        const { username, password } = await request.json();\n        // Environment variables'den kullanıcı bilgilerini al\n        const adminUsername = process.env.ADMIN_USERNAME;\n        const adminPassword = process.env.ADMIN_PASSWORD;\n        // Kullanıcı adı kontrolü\n        if (username !== adminUsername) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Geçersiz kullanıcı adı veya şifre\"\n            }, {\n                status: 401\n            });\n        }\n        // Şifre kontrolü\n        if (password !== adminPassword) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Geçersiz kullanıcı adı veya şifre\"\n            }, {\n                status: 401\n            });\n        }\n        // JWT token oluştur\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n            username: adminUsername,\n            role: \"admin\",\n            permissions: [\n                \"edit_atoms\",\n                \"edit_molecules\",\n                \"edit_components\"\n            ]\n        }, process.env.JWT_SECRET, {\n            expiresIn: \"24h\"\n        });\n        // Response oluştur\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Admin girişi başarılı\",\n            user: {\n                username: adminUsername,\n                role: \"admin\",\n                permissions: [\n                    \"edit_atoms\",\n                    \"edit_molecules\",\n                    \"edit_components\"\n                ]\n            },\n            redirectUrl: \"/admin/urunler\"\n        }, {\n            status: 200\n        });\n        // HTTP-only cookie olarak token'ı ayarla\n        response.cookies.set(\"auth-token\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"strict\",\n            maxAge: 24 * 60 * 60 * 1000\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Login error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Sunucu hatası\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvc2FtYmFBZG1pbkxvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDWjtBQUV4QixlQUFlRSxLQUFLQyxPQUFPO0lBQ2hDLElBQUk7UUFDRixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUYsUUFBUUcsSUFBSTtRQUVqRCxxREFBcUQ7UUFDckQsTUFBTUMsZ0JBQWdCQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7UUFDaEQsTUFBTUMsZ0JBQWdCSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7UUFFaEQseUJBQXlCO1FBQ3pCLElBQUlSLGFBQWFHLGVBQWU7WUFDOUIsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FDdEI7Z0JBQUVPLE9BQU87WUFBb0MsR0FDN0M7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGlCQUFpQjtRQUNqQixJQUFJVCxhQUFhTSxlQUFlO1lBQzlCLE9BQU9YLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFTyxPQUFPO1lBQW9DLEdBQzdDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxvQkFBb0I7UUFDcEIsTUFBTUMsUUFBUWQsd0RBQVEsQ0FDcEI7WUFDRUcsVUFBVUc7WUFDVlUsTUFBTTtZQUNOQyxhQUFhO2dCQUFDO2dCQUFjO2dCQUFrQjthQUFrQjtRQUNsRSxHQUNBVixRQUFRQyxHQUFHLENBQUNVLFVBQVUsRUFDdEI7WUFBRUMsV0FBVztRQUFNO1FBR3JCLG1CQUFtQjtRQUNuQixNQUFNQyxXQUFXckIscURBQVlBLENBQUNNLElBQUksQ0FDaEM7WUFDRWdCLFNBQVM7WUFDVEMsTUFBTTtnQkFDSm5CLFVBQVVHO2dCQUNWVSxNQUFNO2dCQUNOQyxhQUFhO29CQUFDO29CQUFjO29CQUFrQjtpQkFBa0I7WUFDbEU7WUFDQU0sYUFBYTtRQUNmLEdBQ0E7WUFBRVYsUUFBUTtRQUFJO1FBR2hCLHlDQUF5QztRQUN6Q08sU0FBU0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBY1gsT0FBTztZQUN4Q1ksVUFBVTtZQUNWQyxRQUFRcEIsa0JBQXlCO1lBQ2pDcUIsVUFBVTtZQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLO1FBQ3pCO1FBRUEsT0FBT1Q7SUFDVCxFQUFFLE9BQU9SLE9BQU87UUFDZGtCLFFBQVFsQixLQUFLLENBQUMsZ0JBQWdCQTtRQUM5QixPQUFPYixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVPLE9BQU87UUFBZ0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckU7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2JhaGFkaXIvRGVza3RvcC9ncmVlbnN0ZXBCYWNrZW5kL2FwcC9hcGkvYXV0aC9zYW1iYUFkbWluTG9naW4vcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIC8vIEVudmlyb25tZW50IHZhcmlhYmxlcydkZW4ga3VsbGFuxLFjxLEgYmlsZ2lsZXJpbmkgYWxcbiAgICBjb25zdCBhZG1pblVzZXJuYW1lID0gcHJvY2Vzcy5lbnYuQURNSU5fVVNFUk5BTUU7XG4gICAgY29uc3QgYWRtaW5QYXNzd29yZCA9IHByb2Nlc3MuZW52LkFETUlOX1BBU1NXT1JEO1xuXG4gICAgLy8gS3VsbGFuxLFjxLEgYWTEsSBrb250cm9sw7xcbiAgICBpZiAodXNlcm5hbWUgIT09IGFkbWluVXNlcm5hbWUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJHZcOnZXJzaXoga3VsbGFuxLFjxLEgYWTEsSB2ZXlhIMWfaWZyZVwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyDFnmlmcmUga29udHJvbMO8XG4gICAgaWYgKHBhc3N3b3JkICE9PSBhZG1pblBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiR2XDp2Vyc2l6IGt1bGxhbsSxY8SxIGFkxLEgdmV5YSDFn2lmcmVcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSldUIHRva2VuIG9sdcWfdHVyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IGFkbWluVXNlcm5hbWUsXG4gICAgICAgIHJvbGU6IFwiYWRtaW5cIixcbiAgICAgICAgcGVybWlzc2lvbnM6IFtcImVkaXRfYXRvbXNcIiwgXCJlZGl0X21vbGVjdWxlc1wiLCBcImVkaXRfY29tcG9uZW50c1wiXSxcbiAgICAgIH0sXG4gICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgeyBleHBpcmVzSW46IFwiMjRoXCIgfVxuICAgICk7XG5cbiAgICAvLyBSZXNwb25zZSBvbHXFn3R1clxuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IFwiQWRtaW4gZ2lyacWfaSBiYcWfYXLEsWzEsVwiLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IGFkbWluVXNlcm5hbWUsXG4gICAgICAgICAgcm9sZTogXCJhZG1pblwiLFxuICAgICAgICAgIHBlcm1pc3Npb25zOiBbXCJlZGl0X2F0b21zXCIsIFwiZWRpdF9tb2xlY3VsZXNcIiwgXCJlZGl0X2NvbXBvbmVudHNcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VXJsOiBcIi9hZG1pbi91cnVubGVyXCIsIC8vIEFkbWluIGnDp2luIMO2emVsIFVSTFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG5cbiAgICAvLyBIVFRQLW9ubHkgY29va2llIG9sYXJhayB0b2tlbifEsSBheWFybGFcbiAgICByZXNwb25zZS5jb29raWVzLnNldChcImF1dGgtdG9rZW5cIiwgdG9rZW4sIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcbiAgICAgIG1heEFnZTogMjQgKiA2MCAqIDYwICogMTAwMCwgLy8gMjQgc2FhdFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlN1bnVjdSBoYXRhc8SxXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImp3dCIsIlBPU1QiLCJyZXF1ZXN0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImpzb24iLCJhZG1pblVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsIkFETUlOX1VTRVJOQU1FIiwiYWRtaW5QYXNzd29yZCIsIkFETUlOX1BBU1NXT1JEIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b2tlbiIsInNpZ24iLCJyb2xlIiwicGVybWlzc2lvbnMiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidXNlciIsInJlZGlyZWN0VXJsIiwiY29va2llcyIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/sambaAdminLogin/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_bahadir_Desktop_greenstepBackend_app_api_auth_sambaAdminLogin_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/sambaAdminLogin/route.js */ \"(rsc)/./app/api/auth/sambaAdminLogin/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/sambaAdminLogin/route\",\n        pathname: \"/api/auth/sambaAdminLogin\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/sambaAdminLogin/route\"\n    },\n    resolvedPagePath: \"/Users/bahadir/Desktop/greenstepBackend/app/api/auth/sambaAdminLogin/route.js\",\n    nextConfigOutput,\n    userland: _Users_bahadir_Desktop_greenstepBackend_app_api_auth_sambaAdminLogin_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2FtYmFBZG1pbkxvZ2luJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGc2FtYmFBZG1pbkxvZ2luJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnNhbWJhQWRtaW5Mb2dpbiUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmJhaGFkaXIlMkZEZXNrdG9wJTJGZ3JlZW5zdGVwQmFja2VuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZiYWhhZGlyJTJGRGVza3RvcCUyRmdyZWVuc3RlcEJhY2tlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYmFoYWRpci9EZXNrdG9wL2dyZWVuc3RlcEJhY2tlbmQvYXBwL2FwaS9hdXRoL3NhbWJhQWRtaW5Mb2dpbi9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9zYW1iYUFkbWluTG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL3NhbWJhQWRtaW5Mb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9zYW1iYUFkbWluTG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYmFoYWRpci9EZXNrdG9wL2dyZWVuc3RlcEJhY2tlbmQvYXBwL2FwaS9hdXRoL3NhbWJhQWRtaW5Mb2dpbi9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();