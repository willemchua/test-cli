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
var children_component_1 = require('../children/children.component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    ;
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.ChildComponent = new children_component_1.ChildComponent();
        this.nama = this.ChildComponent.message;
    };
    __decorate([
        core_1.ViewChild(children_component_1.ChildComponent), 
        __metadata('design:type', children_component_1.ChildComponent)
    ], HomeComponent.prototype, "ChildComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-app',
            template: "\n            <h1> Hello, {{nama}}</h1>\n            <child-component> </child-component>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map