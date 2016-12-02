System.register(['@angular/core', '@angular/router', './work-list-base.component', './work-list.component', './work-detail.component', './work-detail-base.component', './work-detail-resolve.service'], function(exports_1, context_1) {
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
    var core_1, router_1, work_list_base_component_1, work_list_component_1, work_detail_component_1, work_detail_base_component_1, work_detail_resolve_service_1;
    var WorkRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (work_list_base_component_1_1) {
                work_list_base_component_1 = work_list_base_component_1_1;
            },
            function (work_list_component_1_1) {
                work_list_component_1 = work_list_component_1_1;
            },
            function (work_detail_component_1_1) {
                work_detail_component_1 = work_detail_component_1_1;
            },
            function (work_detail_base_component_1_1) {
                work_detail_base_component_1 = work_detail_base_component_1_1;
            },
            function (work_detail_resolve_service_1_1) {
                work_detail_resolve_service_1 = work_detail_resolve_service_1_1;
            }],
        execute: function() {
            WorkRoutingModule = (function () {
                function WorkRoutingModule() {
                }
                WorkRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forChild([
                                {
                                    path: '',
                                    component: work_list_base_component_1.WorkListBaseComponent,
                                    children: [
                                        {
                                            path: '',
                                            component: work_list_component_1.WorkListComponent,
                                            children: [
                                                {
                                                    path: ':id',
                                                    component: work_detail_component_1.WorkDetailComponent,
                                                    resolve: {
                                                        work: work_detail_resolve_service_1.WorkDetailResolve
                                                    }
                                                },
                                                {
                                                    path: '',
                                                    component: work_detail_base_component_1.WorkDetailBaseComponent
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ])
                        ],
                        exports: [
                            router_1.RouterModule
                        ],
                        providers: [
                            work_detail_resolve_service_1.WorkDetailResolve
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WorkRoutingModule);
                return WorkRoutingModule;
            }());
            exports_1("WorkRoutingModule", WorkRoutingModule);
        }
    }
});

//# sourceMappingURL=work-routing.module.js.map
