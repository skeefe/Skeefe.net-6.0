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
    var WorkListComponent;
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
            WorkListComponent = (function () {
                function WorkListComponent(service, route, router) {
                    this.service = service;
                    this.route = route;
                    this.router = router;
                }
                WorkListComponent.prototype.isSelected = function (work) {
                    return work.id === this.selectedId;
                };
                WorkListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        _this.selectedId = params['id'];
                        _this.service.getWorks()
                            .then(function (works) { return _this.works = works; });
                    });
                };
                WorkListComponent.prototype.onSelect = function (work) {
                    this.selectedId = work.id;
                    this.router.navigate([work.id], { relativeTo: this.route });
                };
                WorkListComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/Work/work-list.htm'
                    }), 
                    __metadata('design:paramtypes', [work_service_1.WorkService, router_1.ActivatedRoute, router_1.Router])
                ], WorkListComponent);
                return WorkListComponent;
            }());
            exports_1("WorkListComponent", WorkListComponent);
        }
    }
});

//# sourceMappingURL=work-list.component.js.map
