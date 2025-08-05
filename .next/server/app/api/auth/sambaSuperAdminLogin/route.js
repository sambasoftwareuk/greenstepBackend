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
exports.id = "app/api/auth/sambaSuperAdminLogin/route";
exports.ids = ["app/api/auth/sambaSuperAdminLogin/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/sambaSuperAdminLogin/route.js":
/*!****************************************************!*\
  !*** ./app/api/auth/sambaSuperAdminLogin/route.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    try {\n        const { username, password } = await request.json();\n        // Environment variables'den kullanıcı bilgilerini al\n        const superAdminUsername = process.env.SUPER_ADMIN_USERNAME;\n        const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD;\n        // Kullanıcı adı kontrolü\n        if (username !== superAdminUsername) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Geçersiz kullanıcı adı veya şifre\"\n            }, {\n                status: 401\n            });\n        }\n        // Şifre kontrolü\n        if (password !== superAdminPassword) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Geçersiz kullanıcı adı veya şifre\"\n            }, {\n                status: 401\n            });\n        }\n        // JWT token oluştur\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n            username: superAdminUsername,\n            role: \"super_admin\",\n            permissions: [\n                \"edit_atoms\",\n                \"edit_molecules\",\n                \"edit_components\",\n                \"edit_users\",\n                \"edit_settings\",\n                \"delete_content\"\n            ]\n        }, process.env.JWT_SECRET, {\n            expiresIn: \"24h\"\n        });\n        // Response oluştur\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Süper Admin girişi başarılı\",\n            user: {\n                username: superAdminUsername,\n                role: \"super_admin\",\n                permissions: [\n                    \"edit_atoms\",\n                    \"edit_molecules\",\n                    \"edit_components\",\n                    \"edit_users\",\n                    \"edit_settings\",\n                    \"delete_content\"\n                ]\n            }\n        }, {\n            status: 200\n        });\n        // HTTP-only cookie olarak token'ı ayarla\n        response.cookies.set(\"auth-token\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"strict\",\n            maxAge: 24 * 60 * 60 * 1000\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Login error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Sunucu hatası\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvc2FtYmFTdXBlckFkbWluTG9naW4vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNaO0FBRXhCLGVBQWVFLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBRWpELHFEQUFxRDtRQUNyRCxNQUFNQyxxQkFBcUJDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CO1FBQzNELE1BQU1DLHFCQUFxQkgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFFM0QseUJBQXlCO1FBQ3pCLElBQUlSLGFBQWFHLG9CQUFvQjtZQUNuQyxPQUFPUCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRU8sT0FBTztZQUFvQyxHQUM3QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsaUJBQWlCO1FBQ2pCLElBQUlULGFBQWFNLG9CQUFvQjtZQUNuQyxPQUFPWCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRU8sT0FBTztZQUFvQyxHQUM3QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsb0JBQW9CO1FBQ3BCLE1BQU1DLFFBQVFkLHdEQUFRLENBQ3BCO1lBQ0VHLFVBQVVHO1lBQ1ZVLE1BQU07WUFDTkMsYUFBYTtnQkFDWDtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1FBQ0gsR0FDQVYsUUFBUUMsR0FBRyxDQUFDVSxVQUFVLEVBQ3RCO1lBQUVDLFdBQVc7UUFBTTtRQUdyQixtQkFBbUI7UUFDbkIsTUFBTUMsV0FBV3JCLHFEQUFZQSxDQUFDTSxJQUFJLENBQ2hDO1lBQ0VnQixTQUFTO1lBQ1RDLE1BQU07Z0JBQ0puQixVQUFVRztnQkFDVlUsTUFBTTtnQkFDTkMsYUFBYTtvQkFDWDtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIO1FBQ0YsR0FDQTtZQUFFSixRQUFRO1FBQUk7UUFHaEIseUNBQXlDO1FBQ3pDTyxTQUFTRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjVixPQUFPO1lBQ3hDVyxVQUFVO1lBQ1ZDLFFBQVFuQixrQkFBeUI7WUFDakNvQixVQUFVO1lBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDekI7UUFFQSxPQUFPUjtJQUNULEVBQUUsT0FBT1IsT0FBTztRQUNkaUIsUUFBUWpCLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU9iLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRU8sT0FBTztRQUFnQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNyRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvYmFoYWRpci9EZXNrdG9wL2dyZWVuc3RlcEJhY2tlbmQvYXBwL2FwaS9hdXRoL3NhbWJhU3VwZXJBZG1pbkxvZ2luL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICAvLyBFbnZpcm9ubWVudCB2YXJpYWJsZXMnZGVuIGt1bGxhbsSxY8SxIGJpbGdpbGVyaW5pIGFsXG4gICAgY29uc3Qgc3VwZXJBZG1pblVzZXJuYW1lID0gcHJvY2Vzcy5lbnYuU1VQRVJfQURNSU5fVVNFUk5BTUU7XG4gICAgY29uc3Qgc3VwZXJBZG1pblBhc3N3b3JkID0gcHJvY2Vzcy5lbnYuU1VQRVJfQURNSU5fUEFTU1dPUkQ7XG5cbiAgICAvLyBLdWxsYW7EsWPEsSBhZMSxIGtvbnRyb2zDvFxuICAgIGlmICh1c2VybmFtZSAhPT0gc3VwZXJBZG1pblVzZXJuYW1lKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiR2XDp2Vyc2l6IGt1bGxhbsSxY8SxIGFkxLEgdmV5YSDFn2lmcmVcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gxZ5pZnJlIGtvbnRyb2zDvFxuICAgIGlmIChwYXNzd29yZCAhPT0gc3VwZXJBZG1pblBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiR2XDp2Vyc2l6IGt1bGxhbsSxY8SxIGFkxLEgdmV5YSDFn2lmcmVcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSldUIHRva2VuIG9sdcWfdHVyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IHN1cGVyQWRtaW5Vc2VybmFtZSxcbiAgICAgICAgcm9sZTogXCJzdXBlcl9hZG1pblwiLFxuICAgICAgICBwZXJtaXNzaW9uczogW1xuICAgICAgICAgIFwiZWRpdF9hdG9tc1wiLFxuICAgICAgICAgIFwiZWRpdF9tb2xlY3VsZXNcIixcbiAgICAgICAgICBcImVkaXRfY29tcG9uZW50c1wiLFxuICAgICAgICAgIFwiZWRpdF91c2Vyc1wiLFxuICAgICAgICAgIFwiZWRpdF9zZXR0aW5nc1wiLFxuICAgICAgICAgIFwiZGVsZXRlX2NvbnRlbnRcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgeyBleHBpcmVzSW46IFwiMjRoXCIgfVxuICAgICk7XG5cbiAgICAvLyBSZXNwb25zZSBvbHXFn3R1clxuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IFwiU8O8cGVyIEFkbWluIGdpcmnFn2kgYmHFn2FyxLFsxLFcIixcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIHVzZXJuYW1lOiBzdXBlckFkbWluVXNlcm5hbWUsXG4gICAgICAgICAgcm9sZTogXCJzdXBlcl9hZG1pblwiLFxuICAgICAgICAgIHBlcm1pc3Npb25zOiBbXG4gICAgICAgICAgICBcImVkaXRfYXRvbXNcIixcbiAgICAgICAgICAgIFwiZWRpdF9tb2xlY3VsZXNcIixcbiAgICAgICAgICAgIFwiZWRpdF9jb21wb25lbnRzXCIsXG4gICAgICAgICAgICBcImVkaXRfdXNlcnNcIixcbiAgICAgICAgICAgIFwiZWRpdF9zZXR0aW5nc1wiLFxuICAgICAgICAgICAgXCJkZWxldGVfY29udGVudFwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgKTtcblxuICAgIC8vIEhUVFAtb25seSBjb29raWUgb2xhcmFrIHRva2VuJ8SxIGF5YXJsYVxuICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KFwiYXV0aC10b2tlblwiLCB0b2tlbiwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAgKiAxMDAwLCAvLyAyNCBzYWF0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiU3VudWN1IGhhdGFzxLFcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiand0IiwiUE9TVCIsInJlcXVlc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwianNvbiIsInN1cGVyQWRtaW5Vc2VybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJTVVBFUl9BRE1JTl9VU0VSTkFNRSIsInN1cGVyQWRtaW5QYXNzd29yZCIsIlNVUEVSX0FETUlOX1BBU1NXT1JEIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b2tlbiIsInNpZ24iLCJyb2xlIiwicGVybWlzc2lvbnMiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidXNlciIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwibWF4QWdlIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/sambaSuperAdminLogin/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_bahadir_Desktop_greenstepBackend_app_api_auth_sambaSuperAdminLogin_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/sambaSuperAdminLogin/route.js */ \"(rsc)/./app/api/auth/sambaSuperAdminLogin/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/sambaSuperAdminLogin/route\",\n        pathname: \"/api/auth/sambaSuperAdminLogin\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/sambaSuperAdminLogin/route\"\n    },\n    resolvedPagePath: \"/Users/bahadir/Desktop/greenstepBackend/app/api/auth/sambaSuperAdminLogin/route.js\",\n    nextConfigOutput,\n    userland: _Users_bahadir_Desktop_greenstepBackend_app_api_auth_sambaSuperAdminLogin_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2FtYmFTdXBlckFkbWluTG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzYW1iYVN1cGVyQWRtaW5Mb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZzYW1iYVN1cGVyQWRtaW5Mb2dpbiUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmJhaGFkaXIlMkZEZXNrdG9wJTJGZ3JlZW5zdGVwQmFja2VuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZiYWhhZGlyJTJGRGVza3RvcCUyRmdyZWVuc3RlcEJhY2tlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYmFoYWRpci9EZXNrdG9wL2dyZWVuc3RlcEJhY2tlbmQvYXBwL2FwaS9hdXRoL3NhbWJhU3VwZXJBZG1pbkxvZ2luL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NhbWJhU3VwZXJBZG1pbkxvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9zYW1iYVN1cGVyQWRtaW5Mb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9zYW1iYVN1cGVyQWRtaW5Mb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9iYWhhZGlyL0Rlc2t0b3AvZ3JlZW5zdGVwQmFja2VuZC9hcHAvYXBpL2F1dGgvc2FtYmFTdXBlckFkbWluTG9naW4vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&page=%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2FsambaSuperAdminLogin%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();