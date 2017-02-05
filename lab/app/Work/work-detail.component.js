System.register(['@angular/core', '@angular/router', './work.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, work_service_1;
    var WorkDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (work_service_1_1) {
                work_service_1 = work_service_1_1;
            }],
        execute: function() {
            WorkDetailComponent = (function () {
                function WorkDetailComponent(route, router, service) {
                    this.route = route;
                    this.router = router;
                    this.service = service;
                }
                WorkDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.data.forEach(function (data) {
                        _this.work = data.work;
                    });
                };
                WorkDetailComponent.prototype.ngAfterViewInit = function () {
                    //Trigger Flickity on page load.
                    this.service.triggerFlickity();
                };
                WorkDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/Work/work-detail.htm'
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, work_service_1.WorkService])
                ], WorkDetailComponent);
                return WorkDetailComponent;
            }());
            exports_1("WorkDetailComponent", WorkDetailComponent);
        }
    }
});

//# sourceMappingURL=work-detail.component.js.map
