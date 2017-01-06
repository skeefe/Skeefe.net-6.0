System.register(['@angular/core', '@angular/common', './skillset.service', './skillset.component', "../sort"], function(exports_1, context_1) {
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
    var core_1, common_1, skillset_service_1, skillset_component_1, sort_1;
    var SkillsetModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (skillset_service_1_1) {
                skillset_service_1 = skillset_service_1_1;
            },
            function (skillset_component_1_1) {
                skillset_component_1 = skillset_component_1_1;
            },
            function (sort_1_1) {
                sort_1 = sort_1_1;
            }],
        execute: function() {
            SkillsetModule = (function () {
                function SkillsetModule() {
                }
                SkillsetModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule
                        ],
                        declarations: [
                            skillset_component_1.SkillsetComponent,
                            sort_1.OrderBy
                        ],
                        providers: [
                            skillset_service_1.SkillsetService
                        ],
                        exports: [
                            skillset_component_1.SkillsetComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SkillsetModule);
                return SkillsetModule;
            }());
            exports_1("SkillsetModule", SkillsetModule);
        }
    }
});

//# sourceMappingURL=skillset.module.js.map
