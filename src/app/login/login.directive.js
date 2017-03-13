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
var LoginComponent = (function () {
    function LoginComponent() {
        this.message = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngAfterContentChecked = function () {
        if (!this.first) {
            if (!this.nama)
                this.message.emit("Name must be filled");
            else if (!this.password)
                this.message.emit("Password empty");
            else if (!this.nameValidate(this.nama))
                this.message.emit("Name invalid");
            else if (!this.passValidate(this.password))
                this.message.emit("Password invalid");
            else
                this.message.emit("Login Success");
        }
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "nama", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoginComponent.prototype, "first", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginComponent.prototype, "message", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n        <h2>Login</h2>\n        <input id = \"name\" type=\"text\" placeholder=\"Insert name here\"/>\n        <input id = \"pass\" type=\"password\" placeholder=\"Insert password here\">\n        <input type=\"button\" (click) = onYouGo() value=\"Hey\"> \n        <login-app [nama] = \"name\" [password] = \"pass\" [first] = \"first\" (message) = \"msg=($event)\"></login-app>\n        <p> {{msg}} </p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.directive.js.map