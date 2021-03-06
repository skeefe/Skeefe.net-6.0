System.register(['@angular/core', '@angular/platform-browser', 'rxjs/Rx', './skillset.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, skillset_service_1;
    var SkillsetComponent;
    //Check if Skill exists in cateogry
    function SkillCategorySearch(skill, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].title === skill) {
                return true;
            }
        }
        return false;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (_1) {},
            function (skillset_service_1_1) {
                skillset_service_1 = skillset_service_1_1;
            }],
        execute: function() {
            SkillsetComponent = (function () {
                function SkillsetComponent(title, skillsetService) {
                    this.title = title;
                    this.skillsetService = skillsetService;
                    //Sets the page title.
                    this.title.setTitle('Skillset | Skeefe.net');
                }
                SkillsetComponent.prototype.ngOnInit = function () {
                    this.loadCoreSkills();
                };
                //Return Selected Skill Category
                SkillsetComponent.prototype.loadCategorySkills = function (skillCategory) {
                    var _this = this;
                    return this.skillsetService.getSkillset()
                        .map(function (skillset) { return skillset.filter(function (skill) { return SkillCategorySearch(skillCategory, skill.categories); }); })
                        .subscribe(function (skillset) { return _this.skillset = skillset; }, function (err) {
                        console.log(err);
                    });
                };
                //Return Strongest Skills
                SkillsetComponent.prototype.loadCoreSkills = function () {
                    var _this = this;
                    return this.skillsetService.getSkillset()
                        .map(function (skillset) { return skillset.filter(function (skill) { return skill.core === true; }); })
                        .subscribe(function (skillset) { return _this.skillset = skillset; }, function (err) {
                        console.log(err);
                    });
                };
                //Return All Skills.
                SkillsetComponent.prototype.loadSkillset = function () {
                    var _this = this;
                    return this.skillsetService.getSkillset()
                        .subscribe(function (skillset) { return _this.skillset = skillset; }, function (err) {
                        console.log(err);
                    });
                };
                SkillsetComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/Skillset/skillset.htm'
                    }), 
                    __metadata('design:paramtypes', [platform_browser_1.Title, skillset_service_1.SkillsetService])
                ], SkillsetComponent);
                return SkillsetComponent;
            }());
            exports_1("SkillsetComponent", SkillsetComponent);
        }
    }
});

//# sourceMappingURL=skillset.component.js.map
