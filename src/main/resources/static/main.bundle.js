webpackJsonp([1,4],{

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(538);


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    githubAuthorizationUrl: 'http://localhost:8080/login',
    userAuthUrl: '/user',
    authorizationRedirectUrl: '/profile',
    GET_API_KEYS_URL: '',
    ADD_API_URL: '',
    DELETE_API_URL: '',
    DELETE_ACCOUNT_URL: '',
    MAX_ALLOWED_API_KEYS: 5
};
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/environment.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(713);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = (function () {
    function RegistrationComponent(authService) {
        this.authService = authService;
        this.checkboxTruthy = false;
        this.userLoggedIn = false;
    }
    //
    RegistrationComponent.prototype.ngOnInit = function () {
        // check local storage for a little somethin somethin
        // this.userLoggedIn = Boolean(localStorage.getItem('userLoggedIn') || false);
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__(833),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/registration.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceWebService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SourceWebService = (function () {
    function SourceWebService(http) {
        this.http = http;
    }
    SourceWebService.prototype.getAPIKeys = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].GET_API_KEYS_URL)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Error retrieving API Keys'); });
    };
    SourceWebService.prototype.addAPIKey = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ADD_API_URL)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Error retrieving API Keys'); });
    };
    SourceWebService.prototype.deleteAPIKey = function (apiKey) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].DELETE_API_URL)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Error deleting API Key'); });
    };
    SourceWebService.prototype.deleteAccount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].DELETE_ACCOUNT_URL)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw('Error deleting account'); });
    };
    SourceWebService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SourceWebService);
    return SourceWebService;
    var _a;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/source-web.service.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsAndConditionsComponent = (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-terms-and-conditions',
            template: __webpack_require__(834),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/terms-and-conditions.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_source_web_service__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(service) {
        this.service = service;
        this.apiKeys = [];
        this.addAnotherAPIKey = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.loadAPIKeys();
    };
    UserProfileComponent.prototype.loadAPIKeys = function () {
        var _this = this;
        // load the API keys for this user
        this.apiKeys = [
            { name: 'APIKey1' },
            { name: 'APIKey2' },
            { name: 'APIKey3' }
        ];
        this.service.getAPIKeys().subscribe(function (response) {
            console.log('getting API keys', response);
            _this.apiKeys = response.keys;
        }, function (error) { return 'ERROR: ' + error; });
        // limit keys to 5
        this.addAnotherAPIKey = (this.apiKeys.length <= __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].MAX_ALLOWED_API_KEYS);
    };
    UserProfileComponent.prototype.deleteAPIKey = function (apiKey) {
        var _this = this;
        console.log('call delete event', apiKey);
        this.service.deleteAPIKey(apiKey).subscribe(function (response) {
            console.log('got add api key response');
            _this.loadAPIKeys();
        }, function (error) { return 'ERROR: ' + error; });
    };
    UserProfileComponent.prototype.addAPIKey = function () {
        var _this = this;
        console.log('call add api key');
        this.service.addAPIKey().subscribe(function (response) {
            console.log('got add api key response');
            _this.loadAPIKeys();
        }, function (error) { return 'ERROR: ' + error; });
    };
    UserProfileComponent.prototype.deleteAccount = function () {
        console.log('call delete account');
    };
    UserProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__(835),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_source_web_service__["a" /* SourceWebService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_source_web_service__["a" /* SourceWebService */]) === 'function' && _a) || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/user-profile.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 537;


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(196);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/main.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Source Files API Web';
        this.activeLinkIndex = 0;
        this.routeLinks = [
            { label: 'Profile', link: 'profile' },
            { label: 'Terms', link: 'terms' },
            { path: 'Registration', component: 'registration' }
        ];
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(function (tab) { return router.url.indexOf(tab.link) !== -1; }));
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(832),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/app.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_source_web_service__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__ = __webpack_require__(471);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__["a" /* RegistrationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */], { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_source_web_service__["a" /* SourceWebService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/app.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__(471);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* unused harmony export routing */




var ROUTES = [
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_1__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES);
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/app.routes.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].userAuthUrl).subscribe(this.router.navigate['/profile'], function (error) { console.log(error); });
    };
    AuthService.prototype.register = function () {
        // navigate to login/authorization entity to register
        window.location.href = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].githubAuthorizationUrl;
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('userLoggedIn');
        this.isLoggedIn = false;
        this.router.navigate(['/']);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/h428219/source/java/source-files-api-web-ui/src/auth.service.js.map

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, ".register-card {\n  margin: auto;\n  max-width: 50%;\n\n  /**/\n  min-height: 300px;\n  height: auto;\n  width: 400px;\n  margin: 150px auto;\n  padding: 10px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, "ol {\n  counter-reset: item;\n  line-height: 150%;\n}\n\nli {\n  display: block;\n  line-height: 2;\n}\n\nli:before {\n  content: counters(item, \".\") \" \";\n  counter-increment: item\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, ".material-icons.red { color: red; }\n.material-icons.green { color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets-row\"\n fxLayout\n fxLayout.xs=\"column\"\n fxLayoutAlign=\"start\"\n fxLayoutWrap=\"wrap\">\n  <nav md-tab-nav-bar>\n      <a md-tab-link\n          *ngFor=\"let routeLink of routeLinks; let i = index\"\n          [routerLink]=\"routeLink.link\"\n          [active]=\"activeLinkIndex === i\"\n          (click)=\"activeLinkIndex = i\">\n           {{routeLink.label}}\n       </a>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-padding layout-margin layout-fill style=\"min-height: 224px;\">\n\n    <div class=\"flex-item\" fxFlex=\"5%\" fxFlex.xs=\"10%\">  </div>\n    Registration works\n\n</div>\n<!-- <div class=\"register-card\">\n  <md-card>\n    <md-card-header>\n      <md-card-title><h1>84.51&deg; Developer</h1></md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <p>\n        Welcome to the 84.51&deg; Developer Console.  To begin to use our API's in\n        your application you must first view and accept our Terms and Conditions below.\n      </p>\n    </md-card-content>\n    <md-card-actions>\n      <md-checkbox\n      [checked]=\"checkboxTruthy\"\n      (change)=\"toggleCheckbox()\">I accept the <a href=\"/#/terms\" target=\"_blank\">Terms and Conditions</a></md-checkbox>\n      <button md-raised-button color=\"primary\" (click)=\"register()\" [disabled]=\"!checkboxTruthy\">REGISTER</button>\n    </md-card-actions>\n  </md-card>\n</div> -->\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-padding layout-margin layout-fill style=\"min-height: 224px;\">\n\n    <div class=\"flex-item\" fxFlex=\"5%\" fxFlex.xs=\"10%\">  </div>\n        <div class=\"flex-item\" fxFlex>\n\n          <h1 class=\"md-display-3\">84.51° Data Set API Terms of Use</h1>\n          <p>\n            THIS 84.51° SOURCE FILES SITE (THE “SITE”) IS OPERATED BY 84.51° LIMITED OR ONE OF 84.51° LIMITED’S WHOLLY OWNED SUBSIDIARIES OR JOINT VENTURE COMPANIES THAT ARE LOCATED IN YOUR MARKET (TOGETHER THE “84.51° GROUP”). THIS IS A LEGAL AGREEMENT BETWEEN YOU AND 84.51° LIMITED STATING THE TERMS THAT GOVERN YOUR USE OF THE SITE AND ANY DATA FILES (“SOURCE FILES”) PROVIDED BY A MEMBER OF THE 84.51° GROUP ON THE SITE. PLEASE READ THIS AGREEMENT BEFORE PRESSING THE \"AGREE\" BUTTON AND CHECKING THE BOX AT THE BOTTOM OF THIS PAGE. BY PRESSING \"AGREE,\" YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS AGREEMENT. IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, PRESS \"CANCEL\" AND YOU WILL BE UNABLE TO ACCESS THE DATA.\n          </p>\n          <h3 class=\"md-headline\">\n            DATA LICENSE AND CONFIDENTIALITY AGREEMENT\n          </h3>\n          <p class=\"md-body-2\">\n            DATA FILES FOR ACADEMIC AND RESEARCH USE ONLY\n          </p>\n\n          <ol class=\"md-body-1\">\n            <li>\n              GRANT OF RIGHTS\n              <ol>\n                <li>\n                  Once this Agreement is accepted, 84.51° may supply Source Files on the Site to you for your use in accordance with and subject to the terms of this Agreement. Once the Source Files are made available to you, you may access the Source Files for your own use as set forth in this Agreement. 84.51° may change, suspend or discontinue providing any Source File to you at any time, and may impose restrictions on certain Source Files offered without notice or liability. “Source Files” as used herein means any data file supplied from time to time to You by 84.51°.\n                </li>\n                <li>\n                  If 84.51° provides you with a Source File, then subject to your compliance with the terms and conditions of this Agreement, 84.51° hereby grants You a non-exclusive, non-transferable right and license to use the Source File only for academic study and research by you (“Authorized Purpose”) and for no other purpose. Except as permitted under this Agreement, you shall not sublicense the Source File or in any way allow access to the Source File or any information or data derived therefrom to any third party. You may disclose the Source File to Individuals who have a need to know such Source Files to accomplish the Authorized Purpose and are advised of the confidentiality of the Source File and other terms of this Agreement (“Approved Individuals”). For example, if you are a professor and in connection therewith desire to share the Source Files with the individuals attending your class, you may disclose the Source Files to your students in the course. Approved Individuals may solely use the Source Files for the Authorized Purposes. Any use outside academic study and research must be approved by 84.51° in writing in advance on a case by case basis.\n                </li>\n                <li>\n                  84.51° and its licensors retain all ownership and/or proprietary rights, including database rights, in and to its intellectual property, the Source Files, the data contained therein and any amendments or enhancements thereto, including any materials developed by You, or on your behalf, which embody or are derived from any Source File obtained hereunder. This Agreement does not grant to You any license under any patents or other intellectual property rights 84.51° may own or control or which may be licensed to 84.51°, other than the limited rights of use expressly granted in this Agreement.\n                </li>\n              </ol>\n            </li>\n            <p></p>\n            <li>\n              YOUR OBLIGATIONS\n              <ol>\n                <li>\n                  You agree not to exploit the Site, or any Source File provided to you in any unauthorized way.\n                </li>\n                <li>\n                  You agree not to use the Source File, data contained therein or information derived from the Source File for any commercial purpose.\n                </li>\n                <li>\n                  You may not decompile, reverse engineer, disassemble, and attempt to derive the source code of any software or security components of the Site or the Source File.\n                </li>\n                <li>\n                  You agree to abide by all notices and restrictions contained in the Source File.\n                </li>\n                <li>\n                  You agree and undertake to procure that any document produced by You incorporating the Source File, data contained therein or information derived from the Source File shall afford to 84.51° a reference in the following form: \"Source: 84.51° [year]\".\n                </li>\n                <li>\n                  You agree and undertake to procure that any document produced by You incorporating the data contained in the Source File or information derived from the Source File shall be free from references to the retailer where the data originated or any division thereof and shall be free from any statistics identifiable as being derived from data sourced from the data originator.\"\n                </li>\n                <li>\n                  You Agree that no document incorporating the Source File or information derived from the Source File shall be made public by or on behalf of You in any media unless such disclosure has first been approved by 84.51°. 84.51° shall be entitled to require You amend, to the extent necessary to protect the confidentiality of 84.51°’s data or other Confidential Information, or prohibit publication of any such document prior to public disclosure.\n                </li>\n                <li>\n                  You shall be responsible for ensuring compliance, by the Approved Individuals, with the provisions of this Agreement and shall be liable for breach of any provision of this Agreement perpetrated by You or the Approved Individuals You undertake to indemnify, defend and hold harmless 84.51° against any and all losses, claims, damages, liabilities, costs and expenses, including reasonable attorney’s fees, arising out of any breach of the terms of this Agreement.\n                </li>\n                <li>\n                  You undertake to notify 84.51° promptly in the event of any actual, suspected or alleged breach of this Agreement by the Approved Individual of which the You are aware.\n                </li>\n                <li>\n                  You shall provide 84.51° with a summary of the manner in which the Source File provided hereunder was utilized by the You and the Approved Individuals, and a copy of any materials developed by the You and the Named Individuals which embody or are derived from any Source File obtained hereunder.\n                </li>\n              </ol>\n            </li>\n            <p></p>\n            <li>\n              CONFIDENTIAL INFORMATION\n              <ol>\n                <li>\n                  You agree that any and all information which is disclosed by a member of the 84.51° group to you in whatever form whether disclosed orally or in writing and whether eye readable, machine readable or in any other form (and specifically including the Source File) and any information derived from such information will be considered and referred to as 84.51° Confidential Information. You will, at all times maintain the confidentiality of any 84.51° Confidential Information acquired by you from 84.51° in the performance of this Agreement, except as expressly permitted under this Agreement.\n                </li>\n                <li>\n                  \"84.51° Confidential Information\" excludes information that:(a) is or falls into the public domain except by reason of default on the part of You;(b) is already known to You without obligation of confidentiality at the date of disclosure in circumstances where You can show the same to be the case from its written records and other information; (c) becomes known to You, otherwise than pursuant to this Agreement, from a third party having the right to make the disclosure who places no obligation of confidence upon You; or (d)is independently developed by You without access to or use of the Confidential Information.\n                </li>\n                <li>\n                  Unless otherwise expressly agreed or permitted in writing by 84.51°, you agree not to disclose, publish, or disseminate any 84.51° Confidential Information to anyone other than to other Approved Individuals and then only to the extent that 84.51° does not otherwise prohibit such disclosure.\n                </li>\n                <li>\n                  Except for your authorized purposes or as otherwise expressly agreed or permitted by 84.51° in writing, you agree not to use 84.51° Confidential Information in any way, including, without limitation, for your own or any third party’s benefit without the prior written approval of an authorized representative of 84.51° in each instance. You further agree to take reasonable precautions to prevent any unauthorized use, disclosure, publication, or dissemination of 84.51° Confidential Information.\n                </li>\n                <li>\n                  You acknowledge that unauthorized disclosure or use of 84.51° Confidential Information could cause irreparable harm and significant injury to 84.51° that may be difficult to ascertain. Accordingly, you agree that 84.51° will have the right to seek immediate injunctive relief to enforce your obligations under this Agreement in addition to any other rights and remedies it may have. If you are required by law, regulation or pursuant to the valid binding order of a court of competent jurisdiction to disclose 84.51° Confidential Information, you may make such disclosure, but only if you have notified 84.51° before making such disclosure and have used commercially reasonable efforts to limit the disclosure and to seek confidential, protective treatment of such information. A disclosure pursuant to the previous sentence will not relieve you of your obligations to hold such information as 84.51° Confidential Information.\n                </li>\n              </ol>\n            </li>\n            <p></p>\n            <li>\n              GENERAL PROVISIONS\n              <ol>\n                <li>\n                  You certify that you are of the legal age of majority in the jurisdiction in which you reside (at least 18 years of age in many countries) and you represent that you are legally permitted to enter into this Agreement.\n                </li>\n                <li>\n                  [The ID and password you use to login to the Site cannot be shared in any way or with any one. You are responsible for maintaining the confidentiality of your ID and password and for any activity in connection with your account.]\n                </li>\n                <li>\n                  Amendment; Communication. 84.51° reserves the right, at its discretion, to modify this Agreement, including any rules and policies at any time. You will be responsible for reviewing and becoming familiar with any such modifications (including new terms and changes, and additional rules, policies, terms and conditions (“Additional Terms”) communicated to you by 84.51°. All Additional Terms are hereby incorporated into this Agreement by this reference and your continued use of the Site will indicate your acceptance of any Additional Terms. In addition, 84.51° may be sending communications to you from time to time. Such communications may be in the form of emails and may include, but not be limited to, technical information, and updates and/or changes regarding your participation on the Site. By agreeing to this Agreement, you consent that 84.51° may provide you with such communications.\n                </li>\n                <li>\n                  Term and Termination. 84.51° may terminate or suspend your access to the Source Files at any time in 84.51°’s sole discretion. Upon any termination, all rights and licenses granted to you by 84.51° will cease, including your right to access the Source Files, and you agree to destroy any and all 84.51° Confidential Information that is in your possession or control. At 84.51°’s request, you agree to provide certification of such destruction to 84.51°.\n                </li>\n                <li>\n                  Independent Development. Nothing in this Agreement will impair 84.51°’s right to develop, acquire, license, market, promote or distribute products, software or technologies that perform the same or similar functions as, or otherwise compete with, any items that you may develop or produce. In the absence of a separate written agreement to the contrary, 84.51° will be free to use any information, suggestions or recommendations you provide to 84.51° pursuant to this Agreement for any purpose, subject to any applicable patents or copyrights.\n                </li>\n                <li>\n                  Use Of 84.51° Trademarks, Logos, etc. You agree not to use any marks belonging or licensed to 84.51° in any way except as expressly authorized in writing by 84.51° in each instance.\n                </li>\n                <li>\n                  No Warranty. 84.51° AND THE OTHER MEMBERS OF THE 84.51° GROUP DO NOT PROMISE THAT THE SITE, SOURCE FILES OR ANY OTHERINFORMATION OR MATERIALS THAT YOU RECEIVE WILL BE ACCURATE, RELIABLE, TIMELY, SECURE, ERROR-FREE OR UNINTERRUPTED, OR THATANY DEFECTS WILL BE CORRECTED. THE SOURCE FILES ARE PROVIDED ON AN “AS-IS” AND “AS- AVAILABLE” BASIS AND THE SERVICE IS SUBJECT TO CHANGE WITHOUT NOTICE. 84.51° DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANYWARRANTIES OF ACCURACY, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. YOU ASSUME TOTAL RESPONSIBILITY AND ALL RISKS FOR YOUR USE OF THE SOURCE FILE, INCLUDING, BUT NOTLIMITED TO, ANY INFORMATION OBTAINED THEREON. YOUR SOLE REMEDY AGAINST 84.51° FOR DISSATISFACTION WITH THE SOURCE FILE IS TO STOP USING THE SERVICE. THIS LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN THE PARTIES.\n                </li>\n                <li>\n                  Disclaimer of Liability. TO THE EXTENT NOT PROHIBITED BY LAW, UNDER NO CIRCUMSTANCES SHALL 84.51° BE LIABLE WITHRESPECT TO THE SERVICE FOR SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING WITHOUT LIMITATION, DAMAGES RESULTING FROM DELAY OF DELIVERY OR FROM LOSS OF PROFITS, DATA, BUSINESS OR GOODWILL, ON ANY THEORY OF LIABILITY, WHETHER ARISING UNDER TORT (INCLUDING NEGLIGENCE), CONTRACT OR OTHERWISE, WHETHER OR NOT 84.51° HASBEEN ADVISED OR IS AWARE OF THE POSSIBILITY OF SUCH DAMAGES. IF, NOTWITHSTANDING ANY OTHER PROVISIONS OF THISAGREEMENT, 84.51° IS FOUND TO BE LIABLE TO YOU FOR ANY DAMAGE OR LOSS THAT ARISES OUT OF OR IS IN ANY WAY CONNECTED TO YOUR USE OF THE SERVICE, 84.51°’S ENTIRE LIABILITY FOR DIRECT DAMAGES UNDER THIS AGREEMENT SHALL BE LIMITED TO FIFTY DOLLARS ($50.00).\n                </li>\n                <li>\n                  Miscellaneous. No delay or failure to take action under this Agreement will constitute a waiver unless expressly waived in writing, signed by a duly authorized representative of 84.51°, and no single waiver will constitute a continuing or subsequent waiver. This Agreement will bind your successors but may not be assigned, in whole or part, by you without the written approval of an authorized representative of 84.51°. Any nonconforming assignment shall be null and void. If any provision is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect and enforceable. This Agreement constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior or contemporaneous understandings regarding such subject matter. No addition to or removal or modification of any of the provisions of this Agreement will be binding upon 84.51° unless made in writing and signed by an authorized representative of 84.51°.\n                </li>\n              </ol>\n            </li>\n          </ol>\n    </div>\n  <div class=\"flex-item\" fxFlex=\"5%\" fxFlex.xs=\"10%\">  </div>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-padding layout-margin layout-fill style=\"min-height: 224px;\">\n    <div flex>\n\n      <h1 class=\"md-display-3\">User Profile</h1>\n      <md-card>\n        <div layout=\"row\" >\n          <div flex>\n              <button md-button md-tooltip=\"Add New API Key\" (click)=\"addAPIKey()\" [disabled]=\"!addAnotherAPIKey\">\n                <md-icon class=\"green\">add</md-icon>\n              </button>\n          </div>\n          <div flex>\n            <h3>API Data Keys for {{githubUserId}}</h3>\n          </div>\n        </div>\n        <div>\n        </div>\n        <table *ngFor=\"let apiKey of apiKeys\" >\n          <tr>\n            <td width=\"80%\">\n              {{ apiKey.name }}\n            </td>\n            <td width=\"20%\">\n              <button md-button md-tooltip=\"Delete this API Key\" (click)=\"deleteAPIKey(apiKey)\" >\n                    <md-icon class=\"red\">delete</md-icon>\n              </button>\n            </td>\n          </tr>\n        </table>\n      </md-card>\n      <p>\n      </p>\n      <md-card>\n        <div class=\"md-headline\">\n          DELETE MY ACCOUNT\n          <button md-fab md-tooltip=\"Delete my account forever.  Cannot undo.\" (click)=\"deleteAccount()\">\n                <md-icon class=\"red\">delete_forever</md-icon>\n          </button>\n        </div>\n\n      </md-card>\n    </div>\n</div>\n"

/***/ })

},[1089]);
//# sourceMappingURL=main.bundle.js.map