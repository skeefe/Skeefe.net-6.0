System.register(['@angular/core', '@angular/common', './work-routing.module', './work-list.component', './work-detail.component', '../safe-pipe', './work.service'], function(exports_1, context_1) {
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
    var core_1, common_1, work_routing_module_1, work_list_component_1, work_detail_component_1, safe_pipe_1, work_service_1;
    var WorkModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (work_routing_module_1_1) {
                work_routing_module_1 = work_routing_module_1_1;
            },
            function (work_list_component_1_1) {
                work_list_component_1 = work_list_component_1_1;
            },
            function (work_detail_component_1_1) {
                work_detail_component_1 = work_detail_component_1_1;
            },
            function (safe_pipe_1_1) {
                safe_pipe_1 = safe_pipe_1_1;
            },
            function (work_service_1_1) {
                work_service_1 = work_service_1_1;
            }],
        execute: function() {
            WorkModule = (function () {
                function WorkModule() {
                }
                WorkModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            work_routing_module_1.WorkRoutingModule
                        ],
                        declarations: [
                            work_list_component_1.WorkListComponent,
                            work_detail_component_1.WorkDetailComponent,
                            safe_pipe_1.SafePipe
                        ],
                        providers: [
                            work_service_1.WorkService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WorkModule);
                return WorkModule;
            }());
            exports_1("WorkModule", WorkModule);
        }
    }
});

//# sourceMappingURL=work.module.js.map
