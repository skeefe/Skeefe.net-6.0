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
    var WorkDetailResolve;
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
            WorkDetailResolve = (function () {
                function WorkDetailResolve(WorkService, router) {
                    this.WorkService = WorkService;
                    this.router = router;
                }
                WorkDetailResolve.prototype.resolve = function (route) {
                    var _this = this;
                    var id = route.params['id'];
                    return this.WorkService.getWork(id)
                        .map(function (works) {
                        if (works) {
                            return works[0];
                        }
                        else {
                            _this.router.navigate(['/Work/Rugby']); //Alternatively redirect to a "404 Work" page.
                            return false;
                        }
                    });
                };
                WorkDetailResolve = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [work_service_1.WorkService, router_1.Router])
                ], WorkDetailResolve);
                return WorkDetailResolve;
            }());
            exports_1("WorkDetailResolve", WorkDetailResolve);
        }
    }
});

//# sourceMappingURL=work-detail-resolve.service.js.map
