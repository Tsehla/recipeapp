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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  ------------------------------------- ->\n    HEADER WITH SLIDER  + MAIN NAVIGATION\n<!- -------------------------------------- -->\n\n<div id = 'main_header_container'>\n    <div id = 'navi_en_logo_container'><!-- navigation -->\n        <div id = 'navi_container'>\n            <div id = 'header_logo'>\n                <p style=\"width: auto;\"><b>Hello</b>food</p>\n            </div>\n            <div id = 'navi_intro'>\n                <p style=\"\" ><a href='' class ='nav_links' id = \"nav_link_intro\">Intro</a></p>\n            </div>\n            <div id = 'navi_recipe'>\n                <p style=\"\"><a href=\"recipe\" class ='nav_links' id = \"nav_link_recipe\">Recipe</a></p>\n            </div>\n            <div id = 'navi_gallery'>\n                <p style=\"\"><a href=\"gallery\" class ='nav_links' id = \"nav_link_gallery\">Gallery</a></p>\n            </div>\n             <div id = 'navi_contact'>\n                 <p style=\"\"><a href=\"contact\" class ='nav_links' id = \"nav_link_contact\">Contact</a></p>\n            </div>\n            \n        </div>\n    \n    \n    </div>\n    <div id = 'slider_contents'><!-- slidershow -->\n        <h1 id = 'slider_heading'></h1>\n        <p id = 'slider_text'></p>\n        <button id = 'slider_content_button'>\n            Read More\n        </button>\n    \n    </div>\n\n<!-- section link -->\n<a href='#start_content'>\n    <div id = 'section_triangle' style=\"position: absolute; top: 93.5vh; margin-left: 45vw;  width: 0; height: 0; border-left: 10vh solid transparent; border-right: 10vh solid transparent; border-bottom: 9vh solid white; cursor: pointer\"><p style=\"color: black; position: relative; top: 0px; right: 5px\">&or;</p></div>\n</a>\n\n</div>\n<div id = 'mobile_navi'(click) ='toogle_mobile_nav_menu()'><i class=\"fas fa-bars\"></i></div>\n\n<!-- ------------------------------------------------------ ->\n                        changable content\n<!- ------------------------------------------------------ -->\n<div style ='height: auto;width: auto; background-color: #f6f6f6'>\n    <a name='start_content'></a>\n<router-outlet></router-outlet>\n    \n<!-- router-outlet name = 'gallery'></router-outlet -->\n\n</div>\n<!-- ------------------------------------------------------- ->\n                            footer \n<!- ------------------------------------------------------- -->\n\n<div id = 'footer_container'>\n    <div id = 'footer'>\n        <div id = 'footer_logo'><b>Hello</b>food</div>\n        <div id = 'footer_number'>+27 21 555 5555</div>\n        <div id = 'footer_email'>info@hellocomputer.com</div>\n        <div id = 'footer_social_media'>\n            <span><i class=\"fab fa-twitter\" style='border: 1px solid grey; border-radius: 50%; background-color: darkgray; color :dimgray;  margin: 0px 3px 0px 3px'></i></span>\n            <span><i class=\"fab fa-facebook-f\" style='border: 1px solid grey; border-radius: 50%; background-color: darkgray; color :dimgray;  margin: 0px 3px 0px 3px'></i></span>\n            <span><i class=\"fab fa-instagram\" style='border: 1px solid grey; border-radius: 50%; background-color: darkgray; color :dimgray; margin: 0px 3px 0px 3px'></i></span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------- navigation -------------- */\n/*navi buttons */\n/*{\r\n    border: 1px solid brown;\r\n}*/\na {\n  text-decoration: none;\n  text-shadow: 3px 3px 6px black; }\n.nav_links {\n  color: snow; }\n#main_header_container {\n  width: 100%;\n  height: 100vh;\n  color: snow;\n  box-shadow: 4px 4px 4px grey; }\n#navi_en_logo_container {\n  width: 100%;\n  height: auto; }\n#navi_container {\n  width: 90%;\n  height: 5vh;\n  margin-left: 5%;\n  padding-top: 5vh; }\n#navi_container #header_logo {\n    display: inline-block;\n    width: 15%;\n    height: auto;\n    float: left;\n    text-align: center; }\n#navi_container #header_logo p {\n      margin: 0px;\n      padding: 0px;\n      width: 100%;\n      height: 100%; }\n#navi_container #navi_intro {\n    display: inline-block;\n    width: 11%;\n    height: auto;\n    float: right;\n    margin-right: 1%;\n    text-align: center;\n    border-bottom: 0px solid red;\n    cursor: pointer; }\n#navi_container #navi_intro p {\n      margin: 0px;\n      padding: 0px;\n      width: 100%;\n      height: 100%; }\n#navi_container #navi_recipe {\n    display: inline-block;\n    width: 11%;\n    height: auto;\n    float: right;\n    margin-right: 1%;\n    text-align: center;\n    border-bottom: 0px solid red;\n    cursor: pointer; }\n#navi_container #navi_recipe p {\n      margin: 0px;\n      padding: 0px;\n      width: 100%;\n      height: 100%; }\n#navi_container #navi_gallery {\n    display: inline-block;\n    width: 11%;\n    height: auto;\n    float: right;\n    margin-right: 1%;\n    text-align: center;\n    border-bottom: 0px solid red;\n    cursor: pointer; }\n#navi_container #navi_gallery p {\n      margin: 0px;\n      padding: 0px;\n      width: 100%;\n      height: 100%; }\n#navi_container #navi_contact {\n    display: inline-block;\n    width: 11%;\n    height: auto;\n    float: right;\n    margin-right: 1%;\n    text-align: center;\n    border-bottom: 0px solid red;\n    /*used to show current page*/\n    cursor: pointer; }\n#navi_container #navi_contact p {\n      margin: 0px;\n      padding: 0px;\n      width: 100%;\n      height: 100%; }\n#mobile_navi {\n  width: 5vh;\n  height: 5.5vh;\n  position: absolute;\n  right: 3%;\n  top: 3%;\n  color: snow;\n  font-size: 5vh;\n  display: none;\n  text-shadow: 3px 3px 3px black; }\n/* navi text */\n#slider_contents {\n  height: auto;\n  width: 45vw;\n  margin-top: 20vh;\n  margin-left: 9vw; }\n#slider_contents h1 {\n    width: 97%;\n    height: auto;\n    margin: 1%; }\n#slider_contents p {\n    width: 97%;\n    height: auto;\n    margin: 1%; }\n#slider_contents button {\n    width: 20vh;\n    height: 5vh;\n    margin: 1%;\n    background: transparent;\n    border: 2px aliceblue solid;\n    color: aliceblue; }\n/* -------------------- footer ------------------ */\n/* control on break point !important */\n#footer_container {\n  width: 100vw;\n  height: 4vh;\n  padding-top: 8vh;\n  margin-bottom: 8vh; }\n#footer {\n  width: 100vw;\n  height: 4vh;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 4vh; }\n#footer_logo {\n  width: 100px;\n  height: 100%;\n  float: left;\n  display: inline-block;\n  margin-left: 5vw; }\n#footer_number {\n  width: 150px;\n  height: 4vh;\n  float: right;\n  display: inline-block;\n  margin-right: 5vw;\n  margin-left: 1%; }\n#footer_email {\n  width: 200px;\n  height: 100%;\n  float: right;\n  display: inline-block;\n  margin-right: 1%;\n  margin-left: 1%; }\n#footer_social_media {\n  width: 100px;\n  height: 100%;\n  float: right;\n  display: inline-block;\n  margin-right: 1%;\n  margin-left: 1%; }\n@media only screen and (max-width: 541px) {\n  #mobile_navi {\n    display: block; }\n  #navi_container {\n    width: 100%;\n    height: auto; }\n    #navi_container #header_logo {\n      display: block;\n      width: 100%;\n      height: auto;\n      float: left;\n      text-align: left; }\n    #navi_container #navi_intro {\n      display: block;\n      width: 100%;\n      height: 1px;\n      float: left;\n      margin-top: Calc(50%/4);\n      position: relative;\n      background-color: lightgray;\n      height: 6vh;\n      vertical-align: middle;\n      line-height: 6vh;\n      display: none; }\n    #navi_container #navi_recipe {\n      display: block;\n      width: 100%;\n      height: auto;\n      float: left;\n      margin-top: Calc(50%/4);\n      position: relative;\n      background-color: lightgray;\n      height: 6vh;\n      vertical-align: middle;\n      line-height: 6vh;\n      display: none; }\n    #navi_container #navi_gallery {\n      display: block;\n      width: 100%;\n      height: auto;\n      float: left;\n      margin-top: Calc(50%/4);\n      position: relative;\n      background-color: lightgray;\n      height: 6vh;\n      vertical-align: middle;\n      line-height: 6vh;\n      display: none; }\n    #navi_container #navi_contact {\n      display: block;\n      width: 100%;\n      height: auto;\n      float: left;\n      margin-top: Calc(50%/4);\n      position: relative;\n      background-color: lightgray;\n      height: 6vh;\n      vertical-align: middle;\n      line-height: 6vh;\n      display: none; }\n  #footer_logo {\n    display: block;\n    width: 100vw;\n    margin: 1vw; }\n  #footer_number {\n    display: block;\n    width: 100vw;\n    margin: 1vw; }\n  #footer_email {\n    display: block;\n    width: 100vw;\n    margin: 1vw; }\n  #footer_social_media {\n    display: block !important;\n    width: 100vw;\n    margin: 1vw; } }\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
    }
    // ------ header ------
    //page current location
    AppComponent.prototype.nav_links_colouring = function () {
        document.getElementById('nav_link_intro').style.color = 'black';
        document.getElementById('nav_link_recipe').style.color = 'black';
        document.getElementById('nav_link_gallery').style.color = 'black';
        document.getElementById('nav_link_contact').style.color = 'black';
    };
    AppComponent.prototype.set_navi_current_loca = function () {
        if (window.location.pathname == '/') {
            document.getElementById('navi_intro').style.borderWidth = '1px';
        }
        if (window.location.pathname == '/gallery') {
            document.getElementById('navi_gallery').style.borderWidth = '1px';
            document.getElementById('slider_contents').style.display = 'none';
            document.getElementById('section_triangle').style.display = 'none';
            document.getElementById('main_header_container').style.height = '0vh';
            document.getElementById('main_header_container').style.color = 'black';
            this.nav_links_colouring();
        }
        if (window.location.pathname == '/contact') {
            document.getElementById('navi_contact').style.borderWidth = '1px';
            document.getElementById('slider_contents').style.display = 'none';
            document.getElementById('section_triangle').style.display = 'none';
            document.getElementById('main_header_container').style.height = '0vh';
            document.getElementById('main_header_container').style.color = 'black';
            this.nav_links_colouring();
        }
        if (window.location.pathname == '/recipe') {
            document.getElementById('navi_recipe').style.borderWidth = '1px';
            document.getElementById('slider_contents').style.display = 'none';
            document.getElementById('section_triangle').style.display = 'none';
            document.getElementById('main_header_container').style.height = '0vh';
            document.getElementById('main_header_container').style.color = 'black';
            this.nav_links_colouring();
        }
    };
    // mobile nav menu toggle
    AppComponent.prototype.toogle_mobile_nav_menu = function () {
        this.toggler_show();
    };
    AppComponent.prototype.toggler_hide = function () {
        document.getElementById('navi_intro').style.display = 'none';
        document.getElementById('navi_recipe').style.display = 'none';
        document.getElementById('navi_gallery').style.display = 'none';
        document.getElementById('navi_contact').style.display = 'none';
    };
    AppComponent.prototype.toggler_show = function () {
        document.getElementById('navi_intro').style.display = 'block';
        document.getElementById('navi_recipe').style.display = 'block';
        document.getElementById('navi_gallery').style.display = 'block';
        document.getElementById('navi_contact').style.display = 'block';
    };
    //image loader
    AppComponent.prototype.image_funct = function () {
        //slider image
        //default on start
        this.http.get('http://localhost:3000/api/imagelist')
            .subscribe(function (data) {
            var length = Object.keys(data).length;
            document.getElementById('main_header_container').style.backgroundPosition = 'center';
            document.getElementById('main_header_container').style.backgroundSize = 'cover';
            document.getElementById('main_header_container').style.backgroundImage = 'url(http://localhost:3000/' + data[0].file.url + ')';
            // slider
            document.getElementById('slider_heading').innerHTML = data[0].name;
            document.getElementById('slider_text').innerHTML = data[0].descripion;
            document.getElementById('slider_content_button').onclick = function () {
                alert(data[0].descripion);
            };
            //slider changer
            var counter = 1;
            setInterval(function () {
                document.getElementById('main_header_container').style.backgroundPosition = 'center';
                document.getElementById('main_header_container').style.backgroundSize = 'cover';
                document.getElementById('main_header_container').style.backgroundImage = 'url(http://localhost:3000/' + data[counter].file.url + ')';
                // slider
                document.getElementById('slider_heading').innerHTML = data[counter].name;
                document.getElementById('slider_text').innerHTML = data[counter].descripion;
                document.getElementById('slider_content_button').onclick = function () {
                    alert(data[counter].descripion);
                };
                counter = counter + 1;
                if (counter == length) {
                    counter = 0;
                }
            }, 6000);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        // current page
        this.set_navi_current_loca();
        //call image api
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(this.image_funct());
        /*---------------------------
     
        
        -----------------------------*/
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _startcomponents_startcomponents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./startcomponents/startcomponents.component */ "./src/app/startcomponents/startcomponents.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _startcomponents_startcomponents_component__WEBPACK_IMPORTED_MODULE_8__["StartcomponentsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    //intro page links
                    { path: '', component: _startcomponents_startcomponents_component__WEBPACK_IMPORTED_MODULE_8__["StartcomponentsComponent"] },
                    //recipe page
                    { path: 'recipe', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"] },
                    //gallery page
                    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
                    //contact page
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n    input {\n        width: 50%;\n        height: 7vh;\n        margin: 1%;\n        margin-left: 25%;\n    }\n    button {\n        width: 50.5%;\n        height: 8vh;\n        margin-left: 1%;\n        margin-left: 25%;\n    }\n\n</style>\n<div style ='height: auto;width: auto; background-color: #f6f6f6'>\n<h2 style = 'color : gold; text-align: center' id = 'contact_heading'>Contact</h2>\n<div id = 'input_container'>\n<input type = 'name' #name placeholder = 'Please enter your name' id = 'name'><br>\n<input type = 'email' #email placeholder = 'Please enter you email' id ='email'><br>\n<input type = 'number' #number placeholder = 'Please enter you contact number' id = 'number'><br>\n<button (click) = 'input_box(name.value, email.value, number.value)'>Send</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#input_container {\n  height: 29vw; }\n\n#contact_heading {\n  margin-top: 15vh; }\n\n@media only screen and (max-width: 541px) {\n  #input_container {\n    height: 70vw; }\n  #contact_heading {\n    margin-top: 8vh; } }\n\n@media only screen and (min-width: 542px) and (max-width: 900px) {\n  #input_container {\n    height: 45vw; } }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
    }
    ContactComponent.prototype.input_box = function (name, email, number) {
        if (name == '' || name == ' ') {
            document.getElementById('name').style.borderColor = 'red';
            return alert("Please fill name");
        }
        if (email.includes('@') == false || email.includes('.') == false) {
            document.getElementById('email').style.borderColor = 'red';
            return alert("Incorrect email format");
        }
        if (number.length < 10 || number.length > 12) {
            document.getElementById('number').style.borderColor = 'red';
            return alert("Please check your number");
        }
        //console.log(name, email, number);
        //http://127.0.0.1:3000/api/contact?name=tsehla&contact=0719010014&Email=tsehla2@gmail.com
        var url = 'http://127.0.0.1:3000/api/contact?name=' + name + '&contact=' + number + '&Email=' + email;
        this.http.get(url).subscribe(function (data) {
            console.log(data);
            document.getElementById('contact_heading').innerHTML = 'Request Submitted';
        }, function (error) {
            document.getElementById('contact_heading').innerHTML = 'Error, please retry';
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style ='height: auto;width: auto; background-color: #f6f6f6'>\n<h2 style=\"color: gold; text-align: center; margin-top: 15vh\" id = 'gallery_heading'>Gallery</h2>\n<div id = 'gallery_content'></div>\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gallery_content {\n  width: 100vw;\n  /*height: 250vh*/ }\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(http) {
        this.http = http;
        this.http.get('http://127.0.0.1:3000/api/imagelist').subscribe(function (data) {
            var data_array_length = Object.keys(data).length;
            var controlled_array_length = data_array_length;
            var item_counter = 0;
            var image_height = 50;
            var image_width = 40;
            //let image_name = data[item_counter].name;
            if (window.location.pathname == '/') {
                if (data_array_length > 3) {
                    controlled_array_length = 4; //show only four images at home page
                }
            }
            var image_container_div_size = 90; //set image div height
            while (item_counter < controlled_array_length) {
                // implement float left; heigh small; float right; height big//float left height big; float right; height small
                var left_image_height = void 0;
                var right_image_height = void 0;
                if (item_counter % 2 == 0) {
                    left_image_height = 60;
                    right_image_height = 30;
                    console.log("fisrt left " + left_image_height);
                    console.log("first right " + right_image_height);
                }
                else if (item_counter % 2 == 1) {
                    left_image_height = 30;
                    right_image_height = 60;
                    console.log("second left " + left_image_height);
                    console.log("second right " + right_image_height);
                }
                jquery__WEBPACK_IMPORTED_MODULE_2__('#gallery_content').append("<div id ='gallery_image_" + item_counter + "' style = \"display : inline-block; float : left; margin : 1%; box-shadow : 3px 3px 6px black;\"></div>");
                document.getElementById("gallery_image_" + item_counter).style.backgroundImage = 'url(http://localhost:3000/' + data[item_counter].file.url + ')';
                document.getElementById("gallery_image_" + item_counter).style.backgroundSize = 'cover';
                document.getElementById("gallery_image_" + item_counter).style.backgroundPosition = 'middle';
                document.getElementById("gallery_image_" + item_counter).style.backgroundRepeat = 'no-repeat';
                jquery__WEBPACK_IMPORTED_MODULE_2__('#gallery_image_' + item_counter).append("<p style = 'color : white; position : relative; text-shadow : 2px 2px 5px red' >" + (function () {
                    if (window.location.pathname == '/') {
                        document.getElementById('gallery_image_' + item_counter).onclick = function () { window.open('gallery?id=gallery_image_' + item_counter, '_self'); }; //add link to homepage images//scroll to image clicked
                        document.getElementById('gallery_image_' + item_counter).style.cursor = 'pointer';
                        return '';
                    }
                    return data[item_counter].name; //add image name to gallery page images
                })() + "</p>");
                if (item_counter == 1) {
                    document.getElementById("gallery_image_" + item_counter).style.marginTop = '10%'; //add spacer on the second image to be shown
                }
                //-------------------------------------------   
                //---------------------------------------------------- 
                if (item_counter % 2 == 0) {
                    document.getElementById("gallery_content").style.height = image_container_div_size + 'vh';
                    document.getElementById("gallery_image_" + item_counter).style.width = image_width + '%';
                    document.getElementById("gallery_image_" + item_counter).style.height = left_image_height + 'vh';
                    document.getElementById("gallery_image_" + item_counter).style.position = 'relative';
                    document.getElementById("gallery_image_" + item_counter).style.cssFloat = 'left';
                    document.getElementById("gallery_image_" + item_counter).style.marginLeft = '9%';
                    image_container_div_size = image_container_div_size + left_image_height;
                }
                if (item_counter % 2 == 1) {
                    document.getElementById("gallery_image_" + item_counter).style.width = image_width + '%';
                    document.getElementById("gallery_image_" + item_counter).style.height = right_image_height + 'vh';
                    document.getElementById("gallery_image_" + item_counter).style.position = 'relative';
                    document.getElementById("gallery_image_" + item_counter).style.cssFloat = 'right';
                    document.getElementById("gallery_image_" + item_counter).style.marginRight = '9%';
                }
                item_counter = item_counter + 1;
                if (window.location.pathname == '/gallery') {
                    if (item_counter == controlled_array_length - 1) {
                        var gallery_image = window.location.search.replace(/%20/g, ' ').split('=');
                        window.scrollTo(0, document.getElementById(gallery_image[1]).offsetTop / 2); //devide by to to get approx position
                    }
                }
            }
            // console.log(data);
            //alert('fix footer on this page make it not break');
        }, function (error) { console.log(error); });
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style ='height: auto;width: auto; background-color: #f6f6f6'>\n<h2 style=\"color: gold; text-align: center; margin-top: 15vh\">The Recipe</h2>\n<div id = 'recipe_container'></div>\n</div>"

/***/ }),

/***/ "./src/app/recipe/recipe.component.scss":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#recipe_container {\n  width: 80%;\n  height: auto;\n  margin-left: 10%; }\n"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(http) {
        this.http = http;
        http.get('http://localhost:3000/api/recipes').subscribe(function (data) {
            var data_array_length = Object.keys(data).length;
            if (window.location.pathname == '/') {
                if (data_array_length < 6) {
                }
                else {
                    data_array_length = 4;
                }
            }
            //console.log(data);
            var recipe_count = 0;
            while (recipe_count < data_array_length) {
                var recipe_content = "<hr>\n                            <div id = '" + data[recipe_count].name + "'><!-- used as positioner --></div>\n                            <h3 id = 'recipe_" + recipe_count + "' class = 'recipe_heading'>" +
                    data[recipe_count].name +
                    "</h3>\n                            <p class = 'recipe_description'>" +
                    data[recipe_count].description +
                    "</p>";
                jquery__WEBPACK_IMPORTED_MODULE_2__('#recipe_container').append(recipe_content);
                if (window.location.pathname == '/') {
                    document.getElementById('recipe_' + recipe_count).style.cursor = 'pointer';
                    document.getElementById('recipe_' + recipe_count).onclick = function () {
                        window.open('recipe?name=' + data[recipe_count].name, '_self'); //error issue sending other names than last. method change necessary
                    };
                }
                if (window.location.pathname == '/recipe') {
                    var ingredints = Object.keys(data[recipe_count].ingredients).length;
                    var ingredients_count = 0;
                    jquery__WEBPACK_IMPORTED_MODULE_2__('#recipe_container').append("<ul>"); //ordered list misbehaving
                    while (ingredients_count < ingredints) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#recipe_container').append("<li>" + data[recipe_count].ingredients[ingredients_count] + "</li>");
                        ingredients_count = ingredients_count + 1;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2__('#recipe_container').append("</ul>");
                    jquery__WEBPACK_IMPORTED_MODULE_2__('#recipe_container').append("<p>" + data[recipe_count].method + "</p>");
                }
                recipe_count = recipe_count + 1;
                if (recipe_count == data_array_length) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('#recipe_container').append("<hr>");
                    if (window.location.pathname == '/recipe') {
                        var clicked_recipe = window.location.search.replace(/%20/g, ' ').split('=');
                        if (clicked_recipe[0] == '') {
                        }
                        else {
                            window.scrollTo(0, document.getElementById(clicked_recipe[1]).offsetTop);
                            //console.log(document.getElementById(clicked_recipe[1]).offsetTop);
                        }
                    }
                }
            }
        }, function (error) { console.log(error); });
    }
    RecipeComponent.prototype.ngOnInit = function () {
    };
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.scss */ "./src/app/recipe/recipe.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/startcomponents/startcomponents.component.html":
/*!****************************************************************!*\
  !*** ./src/app/startcomponents/startcomponents.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-recipe></app-recipe>\n<app-gallery></app-gallery>\n\n\n"

/***/ }),

/***/ "./src/app/startcomponents/startcomponents.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/startcomponents/startcomponents.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/startcomponents/startcomponents.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/startcomponents/startcomponents.component.ts ***!
  \**************************************************************/
/*! exports provided: StartcomponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartcomponentsComponent", function() { return StartcomponentsComponent; });
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

var StartcomponentsComponent = /** @class */ (function () {
    function StartcomponentsComponent() {
    }
    StartcomponentsComponent.prototype.ngOnInit = function () {
    };
    StartcomponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-startcomponents',
            template: __webpack_require__(/*! ./startcomponents.component.html */ "./src/app/startcomponents/startcomponents.component.html"),
            styles: [__webpack_require__(/*! ./startcomponents.component.scss */ "./src/app/startcomponents/startcomponents.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StartcomponentsComponent);
    return StartcomponentsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tsehla Nkhi\Documents\webDev\hellocomputer\hellochallenge\angularfront\recipewebapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map