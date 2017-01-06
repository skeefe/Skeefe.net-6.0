System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Skill, SkillCategory;
    return {
        setters:[],
        execute: function() {
            //Skill Model
            Skill = (function () {
                function Skill() {
                }
                return Skill;
            }());
            exports_1("Skill", Skill);
            SkillCategory = (function () {
                function SkillCategory() {
                }
                return SkillCategory;
            }());
            exports_1("SkillCategory", SkillCategory);
        }
    }
});

//# sourceMappingURL=skill.js.map
