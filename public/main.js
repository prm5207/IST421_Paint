(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inventory/inventory.component */ "./src/app/components/inventory/inventory.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_brush_brush_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/brush/brush.component */ "./src/app/components/brush/brush.component.ts");
/* harmony import */ var _components_paint_paint_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/paint/paint.component */ "./src/app/components/paint/paint.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_roller_roller_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/roller/roller.component */ "./src/app/components/roller/roller.component.ts");
/* harmony import */ var _components_roller_detail_roller_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/roller-detail/roller-detail.component */ "./src/app/components/roller-detail/roller-detail.component.ts");
/* harmony import */ var _components_roller_create_roller_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/roller-create/roller-create.component */ "./src/app/components/roller-create/roller-create.component.ts");
/* harmony import */ var _components_roller_edit_roller_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/roller-edit/roller-edit.component */ "./src/app/components/roller-edit/roller-edit.component.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _components_paint_create_paint_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/paint-create/paint-create.component */ "./src/app/components/paint-create/paint-create.component.ts");
/* harmony import */ var _components_paint_edit_paint_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/paint-edit/paint-edit.component */ "./src/app/components/paint-edit/paint-edit.component.ts");
/* harmony import */ var _components_paint_detail_paint_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/paint-detail/paint-detail.component */ "./src/app/components/paint-detail/paint-detail.component.ts");
/* harmony import */ var _components_brush_create_brush_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/brush-create/brush-create.component */ "./src/app/components/brush-create/brush-create.component.ts");
/* harmony import */ var _components_brush_detail_brush_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/brush-detail/brush-detail.component */ "./src/app/components/brush-detail/brush-detail.component.ts");
/* harmony import */ var _components_brush_edit_brush_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/brush-edit/brush-edit.component */ "./src/app/components/brush-edit/brush-edit.component.ts");
/* harmony import */ var _components_roller_pan_roller_pan_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/roller-pan/roller-pan.component */ "./src/app/components/roller-pan/roller-pan.component.ts");
/* harmony import */ var _components_roller_pan_create_roller_pan_create_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/roller-pan-create/roller-pan-create.component */ "./src/app/components/roller-pan-create/roller-pan-create.component.ts");
/* harmony import */ var _components_roller_pan_detail_roller_pan_detail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/roller-pan-detail/roller-pan-detail.component */ "./src/app/components/roller-pan-detail/roller-pan-detail.component.ts");
/* harmony import */ var _components_roller_pan_edit_roller_pan_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/roller-pan-edit/roller-pan-edit.component */ "./src/app/components/roller-pan-edit/roller-pan-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], data: { cart: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"] } },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
    { path: 'inventory', component: _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_16__["InventoryComponent"] },
    { path: 'shopping-cart', component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"] },
    { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__["CheckoutComponent"] },
    { path: 'brush', component: _components_brush_brush_component__WEBPACK_IMPORTED_MODULE_19__["BrushComponent"], data: { title: 'Brush List' } },
    { path: 'brush-create', component: _components_brush_create_brush_create_component__WEBPACK_IMPORTED_MODULE_31__["BrushCreateComponent"], data: { title: 'Create Brush' } },
    { path: 'brush-detail/:id', component: _components_brush_detail_brush_detail_component__WEBPACK_IMPORTED_MODULE_32__["BrushDetailComponent"], data: { title: 'Detail Brush' } },
    { path: 'brush-edit/:id', component: _components_brush_edit_brush_edit_component__WEBPACK_IMPORTED_MODULE_33__["BrushEditComponent"], data: { title: 'Edit Brush' } },
    { path: 'paint', component: _components_paint_paint_component__WEBPACK_IMPORTED_MODULE_20__["PaintComponent"], data: { title: 'Paint List' } },
    { path: 'roller', component: _components_roller_roller_component__WEBPACK_IMPORTED_MODULE_23__["RollerComponent"], data: { title: 'Roller List' } },
    { path: 'roller-create', component: _components_roller_create_roller_create_component__WEBPACK_IMPORTED_MODULE_25__["RollerCreateComponent"], data: { title: 'Create Roller' } },
    { path: 'roller-edit/:id', component: _components_roller_edit_roller_edit_component__WEBPACK_IMPORTED_MODULE_26__["RollerEditComponent"], data: { title: 'Edit Roller' } },
    { path: 'roller-detail/:id', component: _components_roller_detail_roller_detail_component__WEBPACK_IMPORTED_MODULE_24__["RollerDetailComponent"], data: { title: 'Paint Details' } },
    { path: 'paints', component: _components_paint_paint_component__WEBPACK_IMPORTED_MODULE_20__["PaintComponent"], data: { title: 'Paint List' } },
    { path: 'paint-details/:id', component: _components_paint_detail_paint_detail_component__WEBPACK_IMPORTED_MODULE_30__["PaintDetailComponent"], data: { title: 'Paint Details' } },
    { path: 'paint-create', component: _components_paint_create_paint_create_component__WEBPACK_IMPORTED_MODULE_28__["PaintCreateComponent"], data: { title: 'Create Paint' } },
    { path: 'paint-edit/:id', component: _components_paint_edit_paint_edit_component__WEBPACK_IMPORTED_MODULE_29__["PaintEditComponent"], data: { title: 'Edit Paint' } },
    { path: 'roller-pan', component: _components_roller_pan_roller_pan_component__WEBPACK_IMPORTED_MODULE_34__["RollerPanComponent"], data: { title: 'Roller List' } },
    { path: 'roller-pan-detail/:id', component: _components_roller_pan_detail_roller_pan_detail_component__WEBPACK_IMPORTED_MODULE_36__["RollerPanDetailComponent"], data: { title: 'Roller Details' } },
    { path: 'roller-pan-create', component: _components_roller_pan_create_roller_pan_create_component__WEBPACK_IMPORTED_MODULE_35__["RollerPanCreateComponent"], data: { title: 'Create Roller' } },
    { path: 'roller-pan-edit/:id', component: _components_roller_pan_edit_roller_pan_edit_component__WEBPACK_IMPORTED_MODULE_37__["RollerPanEditComponent"], data: { title: 'Edit Roller' } },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_16__["InventoryComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"],
                _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__["CheckoutComponent"],
                _components_brush_brush_component__WEBPACK_IMPORTED_MODULE_19__["BrushComponent"],
                _components_brush_create_brush_create_component__WEBPACK_IMPORTED_MODULE_31__["BrushCreateComponent"],
                _components_paint_paint_component__WEBPACK_IMPORTED_MODULE_20__["PaintComponent"],
                _components_roller_roller_component__WEBPACK_IMPORTED_MODULE_23__["RollerComponent"],
                _components_roller_detail_roller_detail_component__WEBPACK_IMPORTED_MODULE_24__["RollerDetailComponent"],
                _components_roller_create_roller_create_component__WEBPACK_IMPORTED_MODULE_25__["RollerCreateComponent"],
                _components_roller_edit_roller_edit_component__WEBPACK_IMPORTED_MODULE_26__["RollerEditComponent"],
                _components_paint_create_paint_create_component__WEBPACK_IMPORTED_MODULE_28__["PaintCreateComponent"],
                _components_paint_edit_paint_edit_component__WEBPACK_IMPORTED_MODULE_29__["PaintEditComponent"],
                _components_paint_detail_paint_detail_component__WEBPACK_IMPORTED_MODULE_30__["PaintDetailComponent"],
                _components_brush_detail_brush_detail_component__WEBPACK_IMPORTED_MODULE_32__["BrushDetailComponent"],
                _components_brush_edit_brush_edit_component__WEBPACK_IMPORTED_MODULE_33__["BrushEditComponent"],
                _components_roller_pan_roller_pan_component__WEBPACK_IMPORTED_MODULE_34__["RollerPanComponent"],
                _components_roller_pan_create_roller_pan_create_component__WEBPACK_IMPORTED_MODULE_35__["RollerPanCreateComponent"],
                _components_roller_pan_detail_roller_pan_detail_component__WEBPACK_IMPORTED_MODULE_36__["RollerPanDetailComponent"],
                _components_roller_pan_edit_roller_pan_edit_component__WEBPACK_IMPORTED_MODULE_37__["RollerPanEditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_items_service__WEBPACK_IMPORTED_MODULE_27__["CartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/brush-create/brush-create.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/brush-create/brush-create.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/brush-create/brush-create.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/brush-create/brush-create.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/brush']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"brushForm\" (ngSubmit)=\"onFormSubmit(brushForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"PartNumber\" formControlName=\"PartNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Brand\" formControlName=\"Brand\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Material\" formControlName=\"Material\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Size\" formControlName=\"Size\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Quantity\" formControlName=\"Quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"Price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!brushForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/brush-create/brush-create.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/brush-create/brush-create.component.ts ***!
  \*******************************************************************/
/*! exports provided: BrushCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushCreateComponent", function() { return BrushCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrushCreateComponent = /** @class */ (function () {
    function BrushCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.PartNumber = '';
        this.Brand = '';
        this.Material = '';
        this.Size = '';
    }
    BrushCreateComponent.prototype.ngOnInit = function () {
        this.brushForm = this.formBuilder.group({
            'PartNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Material': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Size': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BrushCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postBrush(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/brush-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BrushCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brush-create',
            template: __webpack_require__(/*! ./brush-create.component.html */ "./src/app/components/brush-create/brush-create.component.html"),
            styles: [__webpack_require__(/*! ./brush-create.component.css */ "./src/app/components/brush-create/brush-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BrushCreateComponent);
    return BrushCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/brush-detail/brush-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/brush-detail/brush-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 500px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/brush-detail/brush-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/brush-detail/brush-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/brush']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h2>{{brush['PartNumber']}}</h2></mat-card-title>\r\n\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <dl>\r\n      <dt>PartNumber:</dt>\r\n      <dd>{{brush.PartNumber}}</dd>\r\n      <dt>Brand:</dt>\r\n      <dd>{{brush.Brand}}</dd>\r\n      <dt>Material:</dt>\r\n      <dd>{{brush.Material}}</dd>\r\n      <dt>Size:</dt>\r\n      <dd>{{brush.Size}}</dd>\r\n      <dt>Quantity:</dt>\r\n      <dd>{{brush.Quantity}}</dd>\r\n      <dt>Price:</dt>\r\n      <dd>{{brush.Price}}</dd>\r\n    </dl>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/brush-edit', brush._id]\"><mat-icon>edit</mat-icon></a>\r\n    <a mat-raised-button color=\"warn\" (click)=\"deleteBrush(brush._id)\"><mat-icon>delete</mat-icon></a>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/brush-detail/brush-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/brush-detail/brush-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: BrushDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushDetailComponent", function() { return BrushDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrushDetailComponent = /** @class */ (function () {
    function BrushDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.brush = {};
    }
    BrushDetailComponent.prototype.ngOnInit = function () {
        this.getBrushDetails(this.route.snapshot.params['id']);
    };
    BrushDetailComponent.prototype.getBrushDetails = function (id) {
        var _this = this;
        this.api.getBrush(id)
            .subscribe(function (data) {
            console.log(data);
            _this.brush = data;
        });
    };
    BrushDetailComponent.prototype.deleteBrush = function (id) {
        var _this = this;
        this.api.deleteBrush(id)
            .subscribe(function (res) {
            _this.router.navigate(['/brush']);
        }, function (err) {
            console.log(err);
        });
    };
    BrushDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brush-detail',
            template: __webpack_require__(/*! ./brush-detail.component.html */ "./src/app/components/brush-detail/brush-detail.component.html"),
            styles: [__webpack_require__(/*! ./brush-detail.component.css */ "./src/app/components/brush-detail/brush-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BrushDetailComponent);
    return BrushDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/brush-edit/brush-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/brush-edit/brush-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/brush-edit/brush-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/brush-edit/brush-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/brush']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"brushForm\" (ngSubmit)=\"onFormSubmit(brushForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"PartNumber\" formControlName=\"PartNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Brand\" formControlName=\"Brand\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Material\" formControlName=\"Material\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Size\" formControlName=\"Size\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Quantity\" formControlName=\"Quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"Price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!brushForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/brush-edit/brush-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/brush-edit/brush-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: BrushEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushEditComponent", function() { return BrushEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrushEditComponent = /** @class */ (function () {
    function BrushEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.PartNumber = '';
        this.Brand = '';
        this.Material = '';
        this.Size = '';
    }
    BrushEditComponent.prototype.ngOnInit = function () {
        this.getBrush(this.route.snapshot.params['id']);
        this.brushForm = this.formBuilder.group({
            'PartNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Material': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Size': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BrushEditComponent.prototype.getBrush = function (id) {
        var _this = this;
        this.api.getBrush(id).subscribe(function (data) {
            _this.id = data._id;
            _this.brushForm.setValue({
                PartNumber: data.PartNumber,
                Brand: data.Brand,
                Material: data.Material,
                Size: data.Size,
                Quantity: data.Quantity,
                Price: data.Price,
            });
        });
    };
    BrushEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateBrush(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/brush-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BrushEditComponent.prototype.paintDetails = function () {
        this.router.navigate(['/brush-detail', this.id]);
    };
    BrushEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brush-edit',
            template: __webpack_require__(/*! ./brush-edit.component.html */ "./src/app/components/brush-edit/brush-edit.component.html"),
            styles: [__webpack_require__(/*! ./brush-edit.component.css */ "./src/app/components/brush-edit/brush-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BrushEditComponent);
    return BrushEditComponent;
}());



/***/ }),

/***/ "./src/app/components/brush/brush.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/brush/brush.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n}\r\n\r\n.isbn-col {\r\n  flex: 0 0 100px !important;\r\n  white-space: unset !important;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/brush/brush.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/brush/brush.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/brush-create']\"><mat-icon>add</mat-icon></a>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <table mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"PartNumber\">\r\n      <th mat-header-cell *matHeaderCellDef> Part Number </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.PartNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"Brand\">\r\n      <th mat-header-cell *matHeaderCellDef> Brand </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Brand}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Author Column -->\r\n    <ng-container matColumnDef=\"Material\">\r\n      <th mat-header-cell *matHeaderCellDef> Material </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Material}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Size Column -->\r\n    <ng-container matColumnDef=\"Size\">\r\n      <th mat-header-cell *matHeaderCellDef> Size </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Size}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Quantity Column -->\r\n    <ng-container matColumnDef=\"Quantity\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantity </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Quantity}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Price Column -->\r\n    <ng-container matColumnDef=\"Price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Price}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/brush-detail/', row._id]\"></tr>  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/brush/brush.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/brush/brush.component.ts ***!
  \*****************************************************/
/*! exports provided: BrushComponent, BrushDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushComponent", function() { return BrushComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushDataSource", function() { return BrushDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrushComponent = /** @class */ (function () {
    function BrushComponent(api) {
        this.api = api;
        this.displayedColumns = ['PartNumber', 'Brand', 'Material', 'Size', 'Quantity', 'Price'];
        this.dataSource = new BrushDataSource(this.api);
    }
    BrushComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getBrushes()
            .subscribe(function (res) {
            _this.brushes = res;
            console.log(res);
            _this.brushes = res;
        }, function (err) {
            console.log(err);
        });
    };
    BrushComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brush',
            template: __webpack_require__(/*! ./brush.component.html */ "./src/app/components/brush/brush.component.html"),
            styles: [__webpack_require__(/*! ./brush.component.css */ "./src/app/components/brush/brush.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BrushComponent);
    return BrushComponent;
}());

var BrushDataSource = /** @class */ (function (_super) {
    __extends(BrushDataSource, _super);
    function BrushDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    BrushDataSource.prototype.connect = function () {
        return this.api.getBrushes();
    };
    BrushDataSource.prototype.disconnect = function () {
    };
    return BrushDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"checkoutSuccess\">\r\n  <div class=\"alert alert-success\" role=\"alert\">\r\n    Your check out has been complete.\r\n  </div>\r\n  <button [routerLink]=\"['/dashboard']\" class=\"btn btn-secondary\">Go to Home Page</button>\r\n</div>\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\" *ngIf=\"!checkoutSuccess\">\r\n    <div class=\"col-md-4 order-md-2 mb-4\">\r\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n        <span class=\"text-muted\">Your cart</span>\r\n        <span class=\"badge badge-secondary badge-pill\">{{totalItems}}</span>\r\n      </h4>\r\n      <ul class=\"list-group mb-3\">\r\n        <li *ngFor=\"let item of items\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n          <div>\r\n            <h6 class=\"my-0\">{{item.name}}</h6>\r\n            <small class=\"text-muted\"></small>\r\n          </div>\r\n          <span class=\"text-muted\">${{item.price}}</span>\r\n        </li>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n          <div class=\"text-success\">\r\n            <h6 class=\"my-0\">shipping Cost</h6>\r\n\r\n          </div>\r\n          <span class=\"text-success\">$6.90</span>\r\n        </li>\r\n        <li class=\"list-group-item d-flex justify-content-between\">\r\n          <span>Total (USD)</span>\r\n          <strong>{{totalPrice + 6.90| number: '1.2-2'}}</strong>\r\n        </li>\r\n      </ul>\r\n\r\n      <form class=\"card p-2\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\r\n          <div class=\"input-group-append\">\r\n            <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-8 order-md-1\">\r\n      <h4 class=\"mb-3\">Billing address</h4>\r\n      <form class=\"needs-validation\" novalidate=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"firstName\">First name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\">\r\n            <div class=\"invalid-feedback\">\r\n              Valid first name is required.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"lastName\">Last name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\">\r\n            <div class=\"invalid-feedback\">\r\n              Valid last name is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"username\">Username</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">@</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required=\"\">\r\n            <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n              Your username is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\r\n          <div class=\"invalid-feedback\">\r\n            Please enter a valid email address for shipping updates.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"address\">Address</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required=\"\">\r\n          <div class=\"invalid-feedback\">\r\n            Please enter your shipping address.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n          <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\r\n          <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5 mb-3\">\r\n            <label for=\"country\">Country</label>\r\n            <select class=\"custom-select d-block w-100\" id=\"country\" required=\"\">\r\n              <option value=\"\">Choose...</option>\r\n              <option>United States</option>\r\n            </select>\r\n            <div class=\"invalid-feedback\">\r\n              Please select a valid country.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"state\">State</label>\r\n            <select class=\"custom-select d-block w-100\" id=\"state\" required=\"\">\r\n              <option value=\"\">Choose...</option>\r\n              <option>California</option>\r\n            </select>\r\n            <div class=\"invalid-feedback\">\r\n              Please provide a valid state.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 mb-3\">\r\n            <label for=\"zip\">Zip</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\">\r\n            <div class=\"invalid-feedback\">\r\n              Zip code required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mb-4\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\r\n          <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\r\n          <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\r\n        </div>\r\n        <hr class=\"mb-4\">\r\n\r\n        <h4 class=\"mb-3\">Payment</h4>\r\n\r\n        <div class=\"d-block my-3\">\r\n          <div class=\"custom-control custom-radio\">\r\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\">\r\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio\">\r\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\r\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio\">\r\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\r\n            <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"cc-name\">Name on card</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\r\n            <small class=\"text-muted\">Full name as displayed on card</small>\r\n            <div class=\"invalid-feedback\">\r\n              Name on card is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"cc-number\">Credit card number</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\r\n            <div class=\"invalid-feedback\">\r\n              Credit card number is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 mb-3\">\r\n            <label for=\"cc-expiration\">Expiration</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\r\n            <div class=\"invalid-feedback\">\r\n              Expiration date required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 mb-3\">\r\n            <label for=\"cc-expiration\">CVV</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\r\n            <div class=\"invalid-feedback\">\r\n              Security code required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mb-4\">\r\n        <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"checkout()\">Continue to checkout</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/items.service */ "./src/app/services/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(_cartService) {
        var _this = this;
        this.checkoutSuccess = false;
        this.totalPrice = 0;
        this.items = _cartService.getItems();
        this.totalItems = this.items.length;
        this.items.map(function (item) { return _this.totalPrice += item.price; });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.checkout = function () {
        this.checkoutSuccess = true;
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let item of items\">\r\n    <div class=\"card h-100\">\r\n      <img class=\"card-img-top\" src='{{item.image}}' alt=\"\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">\r\n          {{item.title}}\r\n        </h4>\r\n        <h5>${{item.price}}</h5>\r\n        <p class=\"card-text\"> {{item.description}}\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;</small>\r\n        \r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"addToCart(item)\">Add to Cart</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-12 text-right\" style=\"position: fixed; bottom: 0;\">\r\n      <button class=\"btn btn-lg btn-block btn-success text-uppercase\" [routerLink]=\"['/shopping-cart']\" >Shopping Cart</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/components/dashboard/data.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_cartService) {
        this._cartService = _cartService;
        this.items = _data__WEBPACK_IMPORTED_MODULE_2__["default"].items;
        this.paintColors = _data__WEBPACK_IMPORTED_MODULE_2__["default"].paintColors;
        // this.addItem=_cartService.addItem
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.addToCart = function (item) {
        this._cartService.addItem(item);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/data.js":
/*!**********************************************!*\
  !*** ./src/app/components/dashboard/data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    items:[
        {
            title:'Valspar Signature Flat Latex Paint',
            price: 32.98,
            description: 'Easily covers existing colors and provides a smooth, even finish. Ideal for low-traffic areas of your home such as living rooms, dinning rooms and bedrooms',
            image: 'https://mobileimages.lowes.com/product/converted/042397/042397610066lg.jpg'
        },
        {
            title:'Valspar 2000 Eggshell Pastel Base Latex Paint',
            price: 35.98,
            description: 'Durable paint + primer offers great coverage over existing colors, with time-saving primer built right in.',
            image: 'https://mobileimages.lowes.com/product/converted/042397/042397593710lg.jpg'
        },
        {
            title:'Sherwin-Williams Semi-gloss Tint Base Paint ',
            price: 38.99,
            description: 'Ideal for high-moisture, high traffic areas of your home such as kitchens, bathrooms and laundry rooms. Applies easily in just one coat, guaranteed; One-coat coverage backed by our Lifetime Warranty',
            image: 'https://mobileimages.lowes.com/product/converted/035777/035777879658lg.jpg'
        },
        {
            title:'Blue Hawk 3-Pack Polyester Flat And Angle 2.5-in Paint Brush',
            price: 14.50,
            description: 'Professional quality tapered filaments for smooth painted finish',
            image: 'https://mobileimages.lowes.com/product/converted/732087/732087909142lg.jpg'
        },
        {
            title:'Project Source 9-Pack Foam Flat 3-in Paint Brush',
            price: 5.98,
            description: 'Set includes three each of a 1-in, 2-in and 3-in brushes. Brush head equipped for better paint absorption. Can be used with all types of paints and stains.',
            image: 'https://mobileimages.lowes.com/product/converted/692773/6927732900337.jpg'
        },
        {
            title:'Project Source 3-Pack Utility Polyester Flat And Angle 3-in Paint Brush ',
            price: 8.97,
            description: 'Can be used with all types of paints and stains. Set contains a 2-in. angle brush, a 2-in. flat cut brush and a 3-in. flat cut brush. Ideal for medium projects touch ups.',
            image: 'https://mobileimages.lowes.com/product/converted/692773/6927732970149lg.jpg'
        },
        {
            title:'Wagner Smart Roller 7.25-in Inner-Fed Paint Roller ',
            price: 24.99,
            description: 'Plastic handle has an integrated paint reservoir that eliminates need for paint tray. Polyester knit roller cover is compatible with water-based and oil-based paints and stains. Internally fed 9 inches x 3/8 inches roller provides continuous, even paint coverage',
            image: 'https://mobileimages.lowes.com/product/converted/024964/024964224685.jpg'
        },
        {
            title:' WHIZZ 6-in Cabinet and Door Foam Mini Paint Roller ',
            price: 5.98,
            description: 'Ideal for use on cabinets and doors. Provides for a smooth finish. Made with high density foam',
            image: 'https://mobileimages.lowes.com/product/converted/732087/732087976465.jpg'
        },
        {
            title:' WHIZZ 4-in MICROLON Walls and Ceilings Synthetic Blend Mini Paint Roller',
            price: 14.98,
            description: `MICROLON™ is new fabric technology that can only be found on WHIZZ rollers. Engineered for today's premium paints and paint plus primers. Works great with all primers and are a great choice when using flat, eggshell and satin sheens`,
            image: 'https://mobileimages.lowes.com/product/converted/732087/732087960006.jpg'
        },
    ],
    brushes:[
        {
            title:'Valspar Signature Flat Latex Paint',
            price: 1.97,
            material: 'wood',
            size: '3 inches'
        },
        {
            name:'brush 2',
            price: 1.99,
            material: 'wood',
            size: '3 inches'
        },
        {
            name:'brush 3',
            price: 2.99,
            material: 'wood',
            size: '3 inches'
        }
    ]
});

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Smith's Paint Shop</h1>\r\n  <p class=\"lead\">Welcome to our custom Paint Company ERP test</p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\r\n    <a class=\"btn btn-info\" [routerLink]=\"['/login']\">Login</a>\r\n  </div>\r\n  <div>\r\n    <a class=\"btn btn-danger\" [routerLink]=\"['/inventory']\">Inventory</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h3>Who we are</h3>\r\n    <p>Smith's Paint Shop founded in 2018 by Patrick, Rafael, Soeb, Jhalak, Chanrath, and Amrish. Starting in Abington as a single location, we have expanded to over 4 locations across the Philadelphia area. We are a customer service based company with expert service who can help you bring your design to life with our premium brand paint and paint accessories.  </p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Our mission</h3>\r\n    <p>Provide premium paint and paint accessories to both families and businesses all over the United States.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Partnered Brands</h3>\r\n    <p>We have various premium brands to decorate your house or business including Valspar, Sherwin-Williams, Blue Hawk, Project Source, Wagner, and Whizz</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory/inventory.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron text-center\">\r\n  <h1>Smith's Paint Inventory</h1>\r\n  <p class=\"lead\">Welcome to our custom Paint Company ERP</p>\r\n  <div>\r\n    <a class=\"btn btn-danger\" [routerLink]=\"['/brush']\">Brush</a>\r\n    <a class=\"btn btn-danger\" [routerLink]=\"['/paint']\">Paint</a>\r\n    <a class=\"btn btn-danger\" [routerLink]=\"['/roller']\">Roller</a>\r\n    <a class=\"btn btn-danger\" [routerLink]=\"['/roller-pan']\">Roller Pan</a>\r\n  </div>\r\n</div>\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.ts ***!
  \*************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/components/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/components/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\r\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label for=\"Password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n          </label>\r\n        </div>\r\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">Smith's Paint Shop</a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink] = \"['/']\">Home</a></li>\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-right\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink] = \"['/login']\">Login</a></li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink] = \"['/register']\">Register</a></li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink] = \"['/shopping-cart']\">Shopping Cart</a></li>\r\n\r\n        </ul>\r\n      </div><!--/.nav-collapse -->\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/paint-create/paint-create.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/paint-create/paint-create.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/paint-create/paint-create.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/paint-create/paint-create.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/paint']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"paintForm\" (ngSubmit)=\"onFormSubmit(paintForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"itemNumber\" formControlName=\"itemNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"color\" formControlName=\"color\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"quantity\" formControlName=\"quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!paintForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/paint-create/paint-create.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/paint-create/paint-create.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaintCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintCreateComponent", function() { return PaintCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaintCreateComponent = /** @class */ (function () {
    function PaintCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.color = '';
    }
    PaintCreateComponent.prototype.ngOnInit = function () {
        this.paintForm = this.formBuilder.group({
            'itemNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'color': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    PaintCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postPaint(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/paint-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PaintCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paint-create',
            template: __webpack_require__(/*! ./paint-create.component.html */ "./src/app/components/paint-create/paint-create.component.html"),
            styles: [__webpack_require__(/*! ./paint-create.component.css */ "./src/app/components/paint-create/paint-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PaintCreateComponent);
    return PaintCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/paint-detail/paint-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/paint-detail/paint-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 500px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/paint-detail/paint-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/paint-detail/paint-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/paint']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h2>{{paint['itemNumber']}}</h2></mat-card-title>\r\n\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <dl>\r\n      <dt>ItemNumber:</dt>\r\n      <dd>{{paint.itemNumber}}</dd>\r\n      <dt>Color:</dt>\r\n      <dd>{{paint.color}}</dd>\r\n      <dt>Quantity:</dt>\r\n      <dd>{{paint.quantity}}</dd>\r\n      <dt>Price:</dt>\r\n      <dd>{{paint.price}}</dd>\r\n    </dl>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/paint-edit', paint._id]\"><mat-icon>edit</mat-icon></a>\r\n    <a mat-raised-button color=\"warn\" (click)=\"deletePaint(paint._id)\"><mat-icon>delete</mat-icon></a>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/paint-detail/paint-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/paint-detail/paint-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaintDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintDetailComponent", function() { return PaintDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaintDetailComponent = /** @class */ (function () {
    function PaintDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.paint = {};
    }
    PaintDetailComponent.prototype.ngOnInit = function () {
        this.getPaintDetails(this.route.snapshot.params['id']);
    };
    PaintDetailComponent.prototype.getPaintDetails = function (id) {
        var _this = this;
        this.api.getPaint(id)
            .subscribe(function (data) {
            console.log(data);
            _this.paint = data;
        });
    };
    PaintDetailComponent.prototype.deletePaint = function (id) {
        var _this = this;
        this.api.deletePaint(id)
            .subscribe(function (res) {
            _this.router.navigate(['/paints']);
        }, function (err) {
            console.log(err);
        });
    };
    PaintDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paint-detail',
            template: __webpack_require__(/*! ./paint-detail.component.html */ "./src/app/components/paint-detail/paint-detail.component.html"),
            styles: [__webpack_require__(/*! ./paint-detail.component.css */ "./src/app/components/paint-detail/paint-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PaintDetailComponent);
    return PaintDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/paint-edit/paint-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/paint-edit/paint-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/paint-edit/paint-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/paint-edit/paint-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/paint']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"paintForm\" (ngSubmit)=\"onFormSubmit(paintForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"itemNumber\" formControlName=\"itemNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"color\" formControlName=\"color\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"quantity\" formControlName=\"quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!paintForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/paint-edit/paint-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/paint-edit/paint-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: PaintEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintEditComponent", function() { return PaintEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaintEditComponent = /** @class */ (function () {
    function PaintEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.color = '';
    }
    PaintEditComponent.prototype.ngOnInit = function () {
        this.getPaint(this.route.snapshot.params['id']);
        this.paintForm = this.formBuilder.group({
            'itemNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'color': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    PaintEditComponent.prototype.getPaint = function (id) {
        var _this = this;
        this.api.getPaint(id).subscribe(function (data) {
            _this.id = data._id;
            _this.paintForm.setValue({
                itemNumber: data.itemNumber,
                color: data.color,
                quantity: data.quantity,
                price: data.price
            });
        });
    };
    PaintEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updatePaint(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/paint-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PaintEditComponent.prototype.paintDetails = function () {
        this.router.navigate(['/paint-details', this.id]);
    };
    PaintEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paint-edit',
            template: __webpack_require__(/*! ./paint-edit.component.html */ "./src/app/components/paint-edit/paint-edit.component.html"),
            styles: [__webpack_require__(/*! ./paint-edit.component.css */ "./src/app/components/paint-edit/paint-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PaintEditComponent);
    return PaintEditComponent;
}());



/***/ }),

/***/ "./src/app/components/paint/paint.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/paint/paint.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n}\r\n\r\n.isbn-col {\r\n  flex: 0 0 100px !important;\r\n  white-space: unset !important;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/paint/paint.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/paint/paint.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/paint-create']\"><mat-icon>add</mat-icon></a>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <table mat-table #table [dataSource]=\"dataSourcePaint\">\r\n\r\n    <!-- Title Colum -->\r\n    <ng-container matColumnDef=\"itemNumber\">\r\n      <th mat-header-cell *matHeaderCellDef> Item Number </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.itemNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"color\">\r\n      <th mat-header-cell *matHeaderCellDef> Color </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.color}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Author Column -->\r\n    <ng-container matColumnDef=\"quantity\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantity </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Size Column -->\r\n    <ng-container matColumnDef=\"price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/paint-details/', row._id]\"></tr>\r\n\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/paint/paint.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/paint/paint.component.ts ***!
  \*****************************************************/
/*! exports provided: PaintComponent, PaintDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintComponent", function() { return PaintComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintDataSource", function() { return PaintDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaintComponent = /** @class */ (function () {
    function PaintComponent(api) {
        this.api = api;
        this.displayedColumns = ['itemNumber', 'color', 'quantity', 'price'];
        this.dataSourcePaint = new PaintDataSource(this.api);
    }
    PaintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getPaints()
            .subscribe(function (res) {
            _this.paints = res;
            console.log(res);
            _this.paints = res;
        }, function (err) {
            console.log(err);
        });
    };
    PaintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paint',
            template: __webpack_require__(/*! ./paint.component.html */ "./src/app/components/paint/paint.component.html"),
            styles: [__webpack_require__(/*! ./paint.component.css */ "./src/app/components/paint/paint.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], PaintComponent);
    return PaintComponent;
}());

var PaintDataSource = /** @class */ (function (_super) {
    __extends(PaintDataSource, _super);
    function PaintDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    PaintDataSource.prototype.connect = function () {
        return this.api.getPaints();
    };
    PaintDataSource.prototype.disconnect = function () {
    };
    return PaintDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something Went Wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-create/roller-create.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/roller-create/roller-create.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/roller-create/roller-create.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/roller-create/roller-create.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"rollerForm\" (ngSubmit)=\"onFormSubmit(rollerForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"PartNumber\" formControlName=\"PartNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Brand\" formControlName=\"Brand\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Material\" formControlName=\"Material\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Size\" formControlName=\"Size\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Quantity\" formControlName=\"Quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"Price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!rollerForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/roller-create/roller-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/roller-create/roller-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: RollerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerCreateComponent", function() { return RollerCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RollerCreateComponent = /** @class */ (function () {
    function RollerCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.PartNumber = '';
        this.Brand = '';
        this.Material = '';
        this.Size = '';
    }
    RollerCreateComponent.prototype.ngOnInit = function () {
        this.rollerForm = this.formBuilder.group({
            'PartNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Material': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Size': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RollerCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postRoller(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/roller-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    RollerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roller-create',
            template: __webpack_require__(/*! ./roller-create.component.html */ "./src/app/components/roller-create/roller-create.component.html"),
            styles: [__webpack_require__(/*! ./roller-create.component.css */ "./src/app/components/roller-create/roller-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RollerCreateComponent);
    return RollerCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-detail/roller-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/roller-detail/roller-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/roller-detail/roller-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/roller-detail/roller-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h2>{{roller['PartNumber']}}</h2></mat-card-title>\r\n\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <dl>\r\n      <dt>PartNumber:</dt>\r\n      <dd>{{roller.PartNumber}}</dd>\r\n      <dt>Brand:</dt>\r\n      <dd>{{roller.Brand}}</dd>\r\n      <dt>Material:</dt>\r\n      <dd>{{roller.Material}}</dd>\r\n      <dt>Size:</dt>\r\n      <dd>{{roller.Size}}</dd>\r\n      <dt>Quantity:</dt>\r\n      <dd>{{roller.Quantity}}</dd>\r\n      <dt>Price:</dt>\r\n      <dd>{{roller.Price}}</dd>\r\n    </dl>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-edit', roller._id]\"><mat-icon>edit</mat-icon></a>\r\n    <a mat-raised-button color=\"warn\" (click)=\"deleteRoller(roller._id)\"><mat-icon>delete</mat-icon></a>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/roller-detail/roller-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/roller-detail/roller-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: RollerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerDetailComponent", function() { return RollerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RollerDetailComponent = /** @class */ (function () {
    function RollerDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.roller = {};
    }
    RollerDetailComponent.prototype.ngOnInit = function () {
        this.getRollerDetails(this.route.snapshot.params['id']);
    };
    RollerDetailComponent.prototype.getRollerDetails = function (id) {
        var _this = this;
        this.api.getRoller(id)
            .subscribe(function (data) {
            console.log(data);
            _this.roller = data;
        });
    };
    RollerDetailComponent.prototype.deleteRoller = function (id) {
        var _this = this;
        this.api.deleteRoller(id)
            .subscribe(function (res) {
            _this.router.navigate(['/roller']);
        }, function (err) {
            console.log(err);
        });
    };
    RollerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roller-detail',
            template: __webpack_require__(/*! ./roller-detail.component.html */ "./src/app/components/roller-detail/roller-detail.component.html"),
            styles: [__webpack_require__(/*! ./roller-detail.component.css */ "./src/app/components/roller-detail/roller-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RollerDetailComponent);
    return RollerDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-edit/roller-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/roller-edit/roller-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/roller-edit/roller-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/roller-edit/roller-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"rollerForm\" (ngSubmit)=\"onFormSubmit(rollerForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"PartNumber\" formControlName=\"PartNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Brand\" formControlName=\"Brand\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Material\" formControlName=\"Material\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Size\" formControlName=\"Size\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Quantity\" formControlName=\"Quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"Price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!rollerForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/roller-edit/roller-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/roller-edit/roller-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: RollerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerEditComponent", function() { return RollerEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RollerEditComponent = /** @class */ (function () {
    function RollerEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.PartNumber = '';
        this.Brand = '';
        this.Material = '';
        this.Size = '';
    }
    RollerEditComponent.prototype.ngOnInit = function () {
        this.getRoller(this.route.snapshot.params['id']);
        this.rollerForm = this.formBuilder.group({
            'PartNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Material': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Size': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RollerEditComponent.prototype.getRoller = function (id) {
        var _this = this;
        this.api.getRoller(id).subscribe(function (data) {
            _this.id = data._id;
            _this.rollerForm.setValue({
                PartNumber: data.PartNumber,
                Brand: data.Brand,
                Material: data.Material,
                Size: data.Size,
                Quantity: data.Quantity,
                Price: data.Price,
            });
        });
    };
    RollerEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateRoller(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/roller-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    RollerEditComponent.prototype.rollerDetails = function () {
        this.router.navigate(['/roller-detail', this.id]);
    };
    RollerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roller-edit',
            template: __webpack_require__(/*! ./roller-edit.component.html */ "./src/app/components/roller-edit/roller-edit.component.html"),
            styles: [__webpack_require__(/*! ./roller-edit.component.css */ "./src/app/components/roller-edit/roller-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RollerEditComponent);
    return RollerEditComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-pan-create/roller-pan-create.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/roller-pan-create/roller-pan-create.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan-create/roller-pan-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/roller-pan-create/roller-pan-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-pan']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"rollerpanForm\" (ngSubmit)=\"onFormSubmit(rollerpanForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"PartNumber\" formControlName=\"PartNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Material\" formControlName=\"Material\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Size\" formControlName=\"Size\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Quantity\" formControlName=\"Quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"Price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!rollerpanForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan-create/roller-pan-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/roller-pan-create/roller-pan-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RollerPanCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerPanCreateComponent", function() { return RollerPanCreateComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RollerPanCreateComponent = /** @class */ (function () {
    function RollerPanCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.PartNumber = '';
        this.Material = '';
        this.Size = '';
    }
    RollerPanCreateComponent.prototype.ngOnInit = function () {
        this.rollerpanForm = this.formBuilder.group({
            'PartNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Material': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Size': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RollerPanCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postRollerPan(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/roller-pan-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    RollerPanCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roller-pan-create',
            template: __webpack_require__(/*! ./roller-pan-create.component.html */ "./src/app/components/roller-pan-create/roller-pan-create.component.html"),
            styles: [__webpack_require__(/*! ./roller-pan-create.component.css */ "./src/app/components/roller-pan-create/roller-pan-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RollerPanCreateComponent);
    return RollerPanCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-pan-detail/roller-pan-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/roller-pan-detail/roller-pan-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/roller-pan-detail/roller-pan-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/roller-pan-detail/roller-pan-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-pan']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title><h2>{{rollerpan['PartNumber']}}</h2></mat-card-title>\r\n\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <dl>\r\n      <dt>PartNumber:</dt>\r\n      <dd>{{rollerpan.PartNumber}}</dd>\r\n      <dt>Material:</dt>\r\n      <dd>{{rollerpan.Material}}</dd>\r\n      <dt>Size:</dt>\r\n      <dd>{{rollerpan.Size}}</dd>\r\n      <dt>Quantity:</dt>\r\n      <dd>{{rollerpan.Quantity}}</dd>\r\n      <dt>Price:</dt>\r\n      <dd>{{rollerpan.Price}}</dd>\r\n    </dl>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-pan-edit', rollerpan._id]\"><mat-icon>edit</mat-icon></a>\r\n    <a mat-raised-button color=\"warn\" (click)=\"deleteRollerPan(rollerpan._id)\"><mat-icon>delete</mat-icon></a>\r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan-detail/roller-pan-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/roller-pan-detail/roller-pan-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RollerPanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerPanDetailComponent", function() { return RollerPanDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RollerPanDetailComponent = /** @class */ (function () {
    function RollerPanDetailComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.rollerpan = {};
    }
    RollerPanDetailComponent.prototype.ngOnInit = function () {
        this.getRollerPanDetails(this.route.snapshot.params['id']);
    };
    RollerPanDetailComponent.prototype.getRollerPanDetails = function (id) {
        var _this = this;
        this.api.getRollerPan(id)
            .subscribe(function (data) {
            console.log(data);
            _this.rollerpan = data;
        });
    };
    RollerPanDetailComponent.prototype.deleteRollerPan = function (id) {
        var _this = this;
        this.api.deleteRollerPan(id)
            .subscribe(function (res) {
            _this.router.navigate(['/roller-pan']);
        }, function (err) {
            console.log(err);
        });
    };
    RollerPanDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roller-pan-detail',
            template: __webpack_require__(/*! ./roller-pan-detail.component.html */ "./src/app/components/roller-pan-detail/roller-pan-detail.component.html"),
            styles: [__webpack_require__(/*! ./roller-pan-detail.component.css */ "./src/app/components/roller-pan-detail/roller-pan-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RollerPanDetailComponent);
    return RollerPanDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-pan-edit/roller-pan-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/roller-pan-edit/roller-pan-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan-edit/roller-pan-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/roller-pan-edit/roller-pan-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-pan']\"><mat-icon>list</mat-icon></a>\r\n</div>\r\n<form [formGroup]=\"rollerpanForm\" (ngSubmit)=\"onFormSubmit(rollerpanForm.value)\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"PartNumber\" formControlName=\"PartNumber\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Material\" formControlName=\"Material\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Size\" formControlName=\"Size\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Quantity\" formControlName=\"Quantity\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Price\" formControlName=\"Price\">\r\n  </mat-form-field>\r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!rollerpanForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n  </div>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan-edit/roller-pan-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/roller-pan-edit/roller-pan-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: RollerPanEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerPanEditComponent", function() { return RollerPanEditComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RollerPanEditComponent = /** @class */ (function () {
    function RollerPanEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.PartNumber = '';
        this.Material = '';
        this.Size = '';
    }
    RollerPanEditComponent.prototype.ngOnInit = function () {
        this.getRollerPan(this.route.snapshot.params['id']);
        this.rollerpanForm = this.formBuilder.group({
            'PartNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Material': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Size': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RollerPanEditComponent.prototype.getRollerPan = function (id) {
        var _this = this;
        this.api.getRollerPan(id).subscribe(function (data) {
            _this.id = data._id;
            _this.rollerpanForm.setValue({
                PartNumber: data.PartNumber,
                Material: data.Material,
                Size: data.Size,
                Quantity: data.Quantity,
                Price: data.Price,
            });
        });
    };
    RollerPanEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.updateRollerPan(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/roller-pan-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    RollerPanEditComponent.prototype.rollerPanDetails = function () {
        this.router.navigate(['/roller-pan-detail', this.id]);
    };
    RollerPanEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roller-pan-edit',
            template: __webpack_require__(/*! ./roller-pan-edit.component.html */ "./src/app/components/roller-pan-edit/roller-pan-edit.component.html"),
            styles: [__webpack_require__(/*! ./roller-pan-edit.component.css */ "./src/app/components/roller-pan-edit/roller-pan-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RollerPanEditComponent);
    return RollerPanEditComponent;
}());



/***/ }),

/***/ "./src/app/components/roller-pan/roller-pan.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/roller-pan/roller-pan.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  overflow: auto;\r\n}\r\n\r\n.isbn-col {\r\n  flex: 0 0 100px !important;\r\n  white-space: unset !important;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan/roller-pan.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/roller-pan/roller-pan.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-pan-create']\"><mat-icon>add</mat-icon></a>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <table mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"PartNumber\">\r\n      <th mat-header-cell *matHeaderCellDef> Part Number </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.PartNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Author Column -->\r\n    <ng-container matColumnDef=\"Material\">\r\n      <th mat-header-cell *matHeaderCellDef> Material </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Material}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Size Column -->\r\n    <ng-container matColumnDef=\"Size\">\r\n      <th mat-header-cell *matHeaderCellDef> Size </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Size}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Quantity Column -->\r\n    <ng-container matColumnDef=\"Quantity\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantity </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Quantity}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Price Column -->\r\n    <ng-container matColumnDef=\"Price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Price}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/roller-pan-detail/', row._id]\"></tr>  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/roller-pan/roller-pan.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/roller-pan/roller-pan.component.ts ***!
  \***************************************************************/
/*! exports provided: RollerPanComponent, RollerPanDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerPanComponent", function() { return RollerPanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerPanDataSource", function() { return RollerPanDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RollerPanComponent = /** @class */ (function () {
    function RollerPanComponent(api) {
        this.api = api;
        this.displayedColumns = ['PartNumber', 'Material', 'Size', 'Quantity', 'Price'];
        this.dataSource = new RollerPanDataSource(this.api);
    }
    RollerPanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getRollerPans()
            .subscribe(function (res) {
            _this.rollerpans = res;
            console.log(res);
            _this.rollerpans = res;
        }, function (err) {
            console.log(err);
        });
    };
    RollerPanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roller-pan',
            template: __webpack_require__(/*! ./roller-pan.component.html */ "./src/app/components/roller-pan/roller-pan.component.html"),
            styles: [__webpack_require__(/*! ./roller-pan.component.css */ "./src/app/components/roller-pan/roller-pan.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], RollerPanComponent);
    return RollerPanComponent;
}());

var RollerPanDataSource = /** @class */ (function (_super) {
    __extends(RollerPanDataSource, _super);
    function RollerPanDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    RollerPanDataSource.prototype.connect = function () {
        return this.api.getRollerPans();
    };
    RollerPanDataSource.prototype.disconnect = function () {
    };
    return RollerPanDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/components/roller/roller.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/roller/roller.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n    overflow: auto;\r\n  }\r\n  \r\n  .isbn-col {\r\n    flex: 0 0 100px !important;\r\n    white-space: unset !important;\r\n  }\r\n  \r\n  .button-row {\r\n    margin: 10px 0;\r\n  }"

/***/ }),

/***/ "./src/app/components/roller/roller.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/roller/roller.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/roller-create']\"><mat-icon>add</mat-icon></a>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <table mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"PartNumber\">\r\n      <th mat-header-cell *matHeaderCellDef> Part Number </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.PartNumber}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Title Column -->\r\n    <ng-container matColumnDef=\"Brand\">\r\n      <th mat-header-cell *matHeaderCellDef> Brand </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Brand}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Author Column -->\r\n    <ng-container matColumnDef=\"Material\">\r\n      <th mat-header-cell *matHeaderCellDef> Material </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Material}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Size Column -->\r\n    <ng-container matColumnDef=\"Size\">\r\n      <th mat-header-cell *matHeaderCellDef> Size </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Size}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Quantity Column -->\r\n    <ng-container matColumnDef=\"Quantity\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantity </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Quantity}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Price Column -->\r\n    <ng-container matColumnDef=\"Price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Price}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/roller-detail/', row._id]\"></tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/roller/roller.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/roller/roller.component.ts ***!
  \*******************************************************/
/*! exports provided: RollerComponent, RollerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerComponent", function() { return RollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerDataSource", function() { return RollerDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RollerComponent = /** @class */ (function () {
    function RollerComponent(api) {
        this.api = api;
        this.displayedColumns = ['PartNumber', 'Brand', 'Material', 'Size', 'Quantity', 'Price'];
        this.dataSource = new RollerDataSource(this.api);
    }
    RollerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getRollers()
            .subscribe(function (res) {
            console.log(res);
            _this.roller = res;
        }, function (err) {
            console.log(err);
        });
    };
    RollerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roller',
            template: __webpack_require__(/*! ./roller.component.html */ "./src/app/components/roller/roller.component.html"),
            styles: [__webpack_require__(/*! ./roller.component.css */ "./src/app/components/roller/roller.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], RollerComponent);
    return RollerComponent;
}());

var RollerDataSource = /** @class */ (function (_super) {
    __extends(RollerDataSource, _super);
    function RollerDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    RollerDataSource.prototype.connect = function () {
        return this.api.getRollers();
    };
    RollerDataSource.prototype.disconnect = function () {
    };
    return RollerDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2 class=\"page-header\" align=\"center\">Shopping Cart</h2>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\"> </th>\r\n                            <th scope=\"col\">Product</th>\r\n                            <th scope=\"col\">Available</th>\r\n                            <th scope=\"col\" class=\"text-center\">Quantity</th>\r\n                            <th scope=\"col\" class=\"text-right\">Price</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <h1 *ngIf=\"items.length==0\"></h1>\r\n                    <tbody *ngIf=\"items.length>0\">\r\n                        <tr *ngFor=\"let item of items\">\r\n                            <td><img style=\"height:40px;\" src=\"{{item.image}}\"> </td>\r\n                            <td>{{item.price}}</td>\r\n                            <td>In stock</td>\r\n                            <td>1</td>\r\n                            <td class=\"text-right\">${{item.price}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td>Sub-Total</td>\r\n                            <td class=\"text-right\">{{totalPrice| number: '1.2-2'}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td>Shipping</td>\r\n                            <td class=\"text-right\">$6.90 </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td><strong>Total</strong></td>\r\n                            <td class=\"text-right\"><strong>{{totalPrice + 6.90| number: '1.2-2'}}</strong></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col mb-2\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12  col-md-6\">\r\n                    <button class=\"btn btn-lg  btn-block btn-light\" [routerLink]=\"['/dashboard']\">Continue Shopping</button>\r\n                </div>\r\n                <div class=\"col-sm-12 col-md-6 text-right\">\r\n                    <button class=\"btn btn-lg btn-block btn-success text-uppercase\" [routerLink]=\"['/checkout']\" >Checkout</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-md-4 list-group\">\r\n            <ul style=\"list-style-type:none\" *ngFor=\"let item of items\">\r\n            <li>item:{{item.title}} </li>\r\n            <li>price: {{item.price}}</li>\r\n            </ul>\r\n            <li>Items in cart: {{totalItems}}</li>\r\n            <li>Total:{{totalPrice}} </li>\r\n            <div>\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['/checkout']\">Checkout</a>\r\n            </div>\r\n    </div>\r\n</div>\r\n -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/items.service */ "./src/app/services/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(_cartService) {
        var _this = this;
        this.totalPrice = 0;
        this.items = _cartService.getItems();
        this.totalItems = this.items.length;
        this.items.map(function (item) { return _this.totalPrice += item.price; });
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiBrush = "/brush";
var apiPaint = "/paint";
var apiRoller = "/roller";
var apiRollerPan = "/rollerpan";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getBrushes = function () {
        return this.http.get(apiBrush, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBrush = function (id) {
        var url = apiBrush + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postBrush = function (data) {
        return this.http.post(apiBrush, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBrush = function (id, data) {
        var url = apiBrush + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBrush = function (id) {
        var url = apiBrush + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getPaints = function () {
        return this.http.get(apiPaint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getPaint = function (id) {
        var url = apiPaint + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postPaint = function (data) {
        return this.http.post(apiPaint, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updatePaint = function (id, data) {
        var url = apiPaint + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deletePaint = function (id) {
        var url = apiPaint + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRollers = function () {
        return this.http.get(apiRoller, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRoller = function (id) {
        var url = apiRoller + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postRoller = function (data) {
        return this.http.post(apiRoller, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateRoller = function (id, data) {
        var url = apiRoller + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteRoller = function (id) {
        var url = apiRoller + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRollerPans = function () {
        return this.http.get(apiRollerPan, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getRollerPan = function (id) {
        var url = apiRollerPan + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postRollerPan = function (data) {
        return this.http.post(apiRollerPan, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateRollerPan = function (id, data) {
        var url = apiRollerPan + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteRollerPan = function (id) {
        var url = apiRollerPan + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/items.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CartService = /** @class */ (function () {
    function CartService() {
        this.items = [];
    }
    CartService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateBrush = function (brush) {
        if (!brush.PartNumber || !brush.Price || !brush.Material || !brush.Quantity || !brush.Size) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Patrick\Desktop\IST421_Paint\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map