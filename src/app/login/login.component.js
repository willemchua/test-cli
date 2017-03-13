"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(route) {
        this.route = route;
        this.first = true;
    }
    LoginComponent.prototype.onYouGo = function () {
        this.first = false;
        this.name = document.getElementById("name").value;
        this.pass = document.getElementById("pass").value;
        if (!this.first) {
            if (!this.name)
                this.msg = "Name must be filled";
            else if (!this.pass)
                this.msg = "Password empty";
            else if (!this.nameValidate(this.name))
                this.msg = "Name invalid";
            else if (!this.passValidate(this.pass))
                this.msg = "Password invalid";
            else {
                this.msg = "Login Success";
                this.route.navigate(['/home']);
            }
        }
    };
    LoginComponent.prototype.ngAfterContentChecked = function () {
    };
    LoginComponent.prototype.nameValidate = function (name) {
        if (name.match(/^.{10,30}$/))
            return true;
        else
            return false;
    };
    LoginComponent.prototype.passValidate = function (pass) {
        if (pass.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/))
            return true;
        else
            return false;
    };
    LoginComponent.prototype.printName = function () {
        return this.name;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n        <h2>Login</h2>\n        <input id = \"name\" type=\"text\" placeholder=\"Insert name here\"/>\n        <input id = \"pass\" type=\"password\" placeholder=\"Insert password here\">\n        <input type=\"file\" accept=\"image/*\" capture=\"camera\"/>\n        <input type=\"button\" (click) = onYouGo() value=\"Hey\"> \n        <p> {{msg}} </p>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map