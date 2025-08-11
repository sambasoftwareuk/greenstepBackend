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
exports.id = "app/api/auth/unified-login/route";
exports.ids = ["app/api/auth/unified-login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/unified-login/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/unified-login/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    try {\n        const { username, password } = await request.json();\n        // Environment variables'den kullanıcı bilgilerini al\n        const adminUsername = process.env.ADMIN_USERNAME;\n        const adminPassword = process.env.ADMIN_PASSWORD;\n        const superAdminUsername = process.env.SUPER_ADMIN_USERNAME;\n        const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD;\n        const directorUsername = process.env.DIRECTOR_USERNAME;\n        const directorPassword = process.env.DIRECTOR_PASSWORD;\n        let user = null;\n        let role = null;\n        let permissions = [];\n        let redirectUrl = null;\n        // Admin kontrolü\n        if (username === adminUsername && password === adminPassword) {\n            user = adminUsername;\n            role = \"admin\";\n            permissions = [\n                \"can_edit\"\n            ]; // Basit yetki, detaylar rolePermissions.json'dan gelecek\n            redirectUrl = \"/admin/urunler\";\n        } else if (username === superAdminUsername && password === superAdminPassword) {\n            user = superAdminUsername;\n            role = \"super_admin\";\n            permissions = [\n                \"can_edit\"\n            ]; // Basit yetki, detaylar rolePermissions.json'dan gelecek\n            redirectUrl = \"/superadmin/urunler\";\n        } else if (username === directorUsername && password === directorPassword) {\n            user = directorUsername;\n            role = \"director\";\n            permissions = [\n                \"can_edit\"\n            ]; // Basit yetki, detaylar rolePermissions.json'dan gelecek\n            redirectUrl = \"/director/urunler\";\n        }\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Geçersiz kullanıcı adı veya şifre\"\n            }, {\n                status: 401\n            });\n        }\n        // JWT token oluştur\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n            username: user,\n            role: role,\n            permissions: permissions\n        }, process.env.JWT_SECRET, {\n            expiresIn: \"24h\"\n        });\n        // Response oluştur\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: `${role.charAt(0).toUpperCase() + role.slice(1)} girişi başarılı`,\n            user: {\n                username: user,\n                role: role,\n                permissions: permissions\n            },\n            redirectUrl: redirectUrl\n        }, {\n            status: 200\n        });\n        // HTTP-only cookie olarak token'ı ayarla\n        response.cookies.set(\"auth-token\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"strict\",\n            maxAge: 24 * 60 * 60 * 1000\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Login error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Sunucu hatası\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvdW5pZmllZC1sb2dpbi9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ1o7QUFFeEIsZUFBZUUsS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7UUFFakQscURBQXFEO1FBQ3JELE1BQU1DLGdCQUFnQkMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1FBQ2hELE1BQU1DLGdCQUFnQkgsUUFBUUMsR0FBRyxDQUFDRyxjQUFjO1FBQ2hELE1BQU1DLHFCQUFxQkwsUUFBUUMsR0FBRyxDQUFDSyxvQkFBb0I7UUFDM0QsTUFBTUMscUJBQXFCUCxRQUFRQyxHQUFHLENBQUNPLG9CQUFvQjtRQUMzRCxNQUFNQyxtQkFBbUJULFFBQVFDLEdBQUcsQ0FBQ1MsaUJBQWlCO1FBQ3RELE1BQU1DLG1CQUFtQlgsUUFBUUMsR0FBRyxDQUFDVyxpQkFBaUI7UUFFdEQsSUFBSUMsT0FBTztRQUNYLElBQUlDLE9BQU87UUFDWCxJQUFJQyxjQUFjLEVBQUU7UUFDcEIsSUFBSUMsY0FBYztRQUVsQixpQkFBaUI7UUFDakIsSUFBSXBCLGFBQWFHLGlCQUFpQkYsYUFBYU0sZUFBZTtZQUM1RFUsT0FBT2Q7WUFDUGUsT0FBTztZQUNQQyxjQUFjO2dCQUFDO2FBQVcsRUFBRSx5REFBeUQ7WUFDckZDLGNBQWM7UUFDaEIsT0FFSyxJQUNIcEIsYUFBYVMsc0JBQ2JSLGFBQWFVLG9CQUNiO1lBQ0FNLE9BQU9SO1lBQ1BTLE9BQU87WUFDUEMsY0FBYztnQkFBQzthQUFXLEVBQUUseURBQXlEO1lBQ3JGQyxjQUFjO1FBQ2hCLE9BRUssSUFBSXBCLGFBQWFhLG9CQUFvQlosYUFBYWMsa0JBQWtCO1lBQ3ZFRSxPQUFPSjtZQUNQSyxPQUFPO1lBQ1BDLGNBQWM7Z0JBQUM7YUFBVyxFQUFFLHlEQUF5RDtZQUNyRkMsY0FBYztRQUNoQjtRQUVBLElBQUksQ0FBQ0gsTUFBTTtZQUNULE9BQU9yQixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRW1CLE9BQU87WUFBb0MsR0FDN0M7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLG9CQUFvQjtRQUNwQixNQUFNQyxRQUFRMUIsd0RBQVEsQ0FDcEI7WUFDRUcsVUFBVWlCO1lBQ1ZDLE1BQU1BO1lBQ05DLGFBQWFBO1FBQ2YsR0FDQWYsUUFBUUMsR0FBRyxDQUFDb0IsVUFBVSxFQUN0QjtZQUFFQyxXQUFXO1FBQU07UUFHckIsbUJBQW1CO1FBQ25CLE1BQU1DLFdBQVcvQixxREFBWUEsQ0FBQ00sSUFBSSxDQUNoQztZQUNFMEIsU0FBUyxHQUNQVixLQUFLVyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLWixLQUFLYSxLQUFLLENBQUMsR0FDM0MsZ0JBQWdCLENBQUM7WUFDbEJkLE1BQU07Z0JBQ0pqQixVQUFVaUI7Z0JBQ1ZDLE1BQU1BO2dCQUNOQyxhQUFhQTtZQUNmO1lBQ0FDLGFBQWFBO1FBQ2YsR0FDQTtZQUFFRSxRQUFRO1FBQUk7UUFHaEIseUNBQXlDO1FBQ3pDSyxTQUFTSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjVixPQUFPO1lBQ3hDVyxVQUFVO1lBQ1ZDLFFBQVEvQixrQkFBeUI7WUFDakNnQyxVQUFVO1lBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDekI7UUFFQSxPQUFPVjtJQUNULEVBQUUsT0FBT04sT0FBTztRQUNkaUIsUUFBUWpCLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU96QixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVtQixPQUFPO1FBQWdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWhhZGlyL0Rlc2t0b3AvZ3JlZW5zdGVwQmFja2VuZC9hcHAvYXBpL2F1dGgvdW5pZmllZC1sb2dpbi9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgLy8gRW52aXJvbm1lbnQgdmFyaWFibGVzJ2RlbiBrdWxsYW7EsWPEsSBiaWxnaWxlcmluaSBhbFxuICAgIGNvbnN0IGFkbWluVXNlcm5hbWUgPSBwcm9jZXNzLmVudi5BRE1JTl9VU0VSTkFNRTtcbiAgICBjb25zdCBhZG1pblBhc3N3b3JkID0gcHJvY2Vzcy5lbnYuQURNSU5fUEFTU1dPUkQ7XG4gICAgY29uc3Qgc3VwZXJBZG1pblVzZXJuYW1lID0gcHJvY2Vzcy5lbnYuU1VQRVJfQURNSU5fVVNFUk5BTUU7XG4gICAgY29uc3Qgc3VwZXJBZG1pblBhc3N3b3JkID0gcHJvY2Vzcy5lbnYuU1VQRVJfQURNSU5fUEFTU1dPUkQ7XG4gICAgY29uc3QgZGlyZWN0b3JVc2VybmFtZSA9IHByb2Nlc3MuZW52LkRJUkVDVE9SX1VTRVJOQU1FO1xuICAgIGNvbnN0IGRpcmVjdG9yUGFzc3dvcmQgPSBwcm9jZXNzLmVudi5ESVJFQ1RPUl9QQVNTV09SRDtcblxuICAgIGxldCB1c2VyID0gbnVsbDtcbiAgICBsZXQgcm9sZSA9IG51bGw7XG4gICAgbGV0IHBlcm1pc3Npb25zID0gW107XG4gICAgbGV0IHJlZGlyZWN0VXJsID0gbnVsbDtcblxuICAgIC8vIEFkbWluIGtvbnRyb2zDvFxuICAgIGlmICh1c2VybmFtZSA9PT0gYWRtaW5Vc2VybmFtZSAmJiBwYXNzd29yZCA9PT0gYWRtaW5QYXNzd29yZCkge1xuICAgICAgdXNlciA9IGFkbWluVXNlcm5hbWU7XG4gICAgICByb2xlID0gXCJhZG1pblwiO1xuICAgICAgcGVybWlzc2lvbnMgPSBbXCJjYW5fZWRpdFwiXTsgLy8gQmFzaXQgeWV0a2ksIGRldGF5bGFyIHJvbGVQZXJtaXNzaW9ucy5qc29uJ2RhbiBnZWxlY2VrXG4gICAgICByZWRpcmVjdFVybCA9IFwiL2FkbWluL3VydW5sZXJcIjtcbiAgICB9XG4gICAgLy8gU3VwZXIgQWRtaW4ga29udHJvbMO8XG4gICAgZWxzZSBpZiAoXG4gICAgICB1c2VybmFtZSA9PT0gc3VwZXJBZG1pblVzZXJuYW1lICYmXG4gICAgICBwYXNzd29yZCA9PT0gc3VwZXJBZG1pblBhc3N3b3JkXG4gICAgKSB7XG4gICAgICB1c2VyID0gc3VwZXJBZG1pblVzZXJuYW1lO1xuICAgICAgcm9sZSA9IFwic3VwZXJfYWRtaW5cIjtcbiAgICAgIHBlcm1pc3Npb25zID0gW1wiY2FuX2VkaXRcIl07IC8vIEJhc2l0IHlldGtpLCBkZXRheWxhciByb2xlUGVybWlzc2lvbnMuanNvbidkYW4gZ2VsZWNla1xuICAgICAgcmVkaXJlY3RVcmwgPSBcIi9zdXBlcmFkbWluL3VydW5sZXJcIjtcbiAgICB9XG4gICAgLy8gRGlyZWN0b3Iga29udHJvbMO8XG4gICAgZWxzZSBpZiAodXNlcm5hbWUgPT09IGRpcmVjdG9yVXNlcm5hbWUgJiYgcGFzc3dvcmQgPT09IGRpcmVjdG9yUGFzc3dvcmQpIHtcbiAgICAgIHVzZXIgPSBkaXJlY3RvclVzZXJuYW1lO1xuICAgICAgcm9sZSA9IFwiZGlyZWN0b3JcIjtcbiAgICAgIHBlcm1pc3Npb25zID0gW1wiY2FuX2VkaXRcIl07IC8vIEJhc2l0IHlldGtpLCBkZXRheWxhciByb2xlUGVybWlzc2lvbnMuanNvbidkYW4gZ2VsZWNla1xuICAgICAgcmVkaXJlY3RVcmwgPSBcIi9kaXJlY3Rvci91cnVubGVyXCI7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiR2XDp2Vyc2l6IGt1bGxhbsSxY8SxIGFkxLEgdmV5YSDFn2lmcmVcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSldUIHRva2VuIG9sdcWfdHVyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9ucyxcbiAgICAgIH0sXG4gICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgeyBleHBpcmVzSW46IFwiMjRoXCIgfVxuICAgICk7XG5cbiAgICAvLyBSZXNwb25zZSBvbHXFn3R1clxuICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IGAke1xuICAgICAgICAgIHJvbGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByb2xlLnNsaWNlKDEpXG4gICAgICAgIH0gZ2lyacWfaSBiYcWfYXLEsWzEsWAsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RVcmw6IHJlZGlyZWN0VXJsLFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG5cbiAgICAvLyBIVFRQLW9ubHkgY29va2llIG9sYXJhayB0b2tlbifEsSBheWFybGFcbiAgICByZXNwb25zZS5jb29raWVzLnNldChcImF1dGgtdG9rZW5cIiwgdG9rZW4sIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcbiAgICAgIG1heEFnZTogMjQgKiA2MCAqIDYwICogMTAwMCwgLy8gMjQgc2FhdFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlN1bnVjdSBoYXRhc8SxXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImp3dCIsIlBPU1QiLCJyZXF1ZXN0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImpzb24iLCJhZG1pblVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsIkFETUlOX1VTRVJOQU1FIiwiYWRtaW5QYXNzd29yZCIsIkFETUlOX1BBU1NXT1JEIiwic3VwZXJBZG1pblVzZXJuYW1lIiwiU1VQRVJfQURNSU5fVVNFUk5BTUUiLCJzdXBlckFkbWluUGFzc3dvcmQiLCJTVVBFUl9BRE1JTl9QQVNTV09SRCIsImRpcmVjdG9yVXNlcm5hbWUiLCJESVJFQ1RPUl9VU0VSTkFNRSIsImRpcmVjdG9yUGFzc3dvcmQiLCJESVJFQ1RPUl9QQVNTV09SRCIsInVzZXIiLCJyb2xlIiwicGVybWlzc2lvbnMiLCJyZWRpcmVjdFVybCIsImVycm9yIiwic3RhdHVzIiwidG9rZW4iLCJzaWduIiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInJlc3BvbnNlIiwibWVzc2FnZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjb29raWVzIiwic2V0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsIm1heEFnZSIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/unified-login/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Funified-login%2Froute&page=%2Fapi%2Fauth%2Funified-login%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Funified-login%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Funified-login%2Froute&page=%2Fapi%2Fauth%2Funified-login%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Funified-login%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_bahadir_Desktop_greenstepBackend_app_api_auth_unified_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/unified-login/route.js */ \"(rsc)/./app/api/auth/unified-login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/unified-login/route\",\n        pathname: \"/api/auth/unified-login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/unified-login/route\"\n    },\n    resolvedPagePath: \"/Users/bahadir/Desktop/greenstepBackend/app/api/auth/unified-login/route.js\",\n    nextConfigOutput,\n    userland: _Users_bahadir_Desktop_greenstepBackend_app_api_auth_unified_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGdW5pZmllZC1sb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnVuaWZpZWQtbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGdW5pZmllZC1sb2dpbiUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmJhaGFkaXIlMkZEZXNrdG9wJTJGZ3JlZW5zdGVwQmFja2VuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZiYWhhZGlyJTJGRGVza3RvcCUyRmdyZWVuc3RlcEJhY2tlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYmFoYWRpci9EZXNrdG9wL2dyZWVuc3RlcEJhY2tlbmQvYXBwL2FwaS9hdXRoL3VuaWZpZWQtbG9naW4vcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvdW5pZmllZC1sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvdW5pZmllZC1sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC91bmlmaWVkLWxvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2JhaGFkaXIvRGVza3RvcC9ncmVlbnN0ZXBCYWNrZW5kL2FwcC9hcGkvYXV0aC91bmlmaWVkLWxvZ2luL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Funified-login%2Froute&page=%2Fapi%2Fauth%2Funified-login%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Funified-login%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Funified-login%2Froute&page=%2Fapi%2Fauth%2Funified-login%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Funified-login%2Froute.js&appDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbahadir%2FDesktop%2FgreenstepBackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();