System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Work, WORKS, worksPromise, WorkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Work = (function () {
                function Work(id, title, url) {
                    this.id = id;
                    this.title = title;
                    this.url = url;
                }
                return Work;
            }());
            exports_1("Work", Work);
            //import { Work } from './work';
            //import { WorkService } from './work.service';
            //I assume this should come from a JSON file/feed.
            WORKS = [
                new Work('Rugby', 'Rugby.com.au', 'http://www.rugby.com.au'),
                new Work('Sydney7s', 'Sydney 7s', 'http://www.sydney7s.com.au'),
                new Work('CornerstoneDigital', 'Cornerstone Digital', 'http://cornerstone-digital.com.au'),
                new Work('RSLPoppyShop', 'RSL Poppy Shop', 'https://poppyshop.org.au/')
            ];
            worksPromise = Promise.resolve(WORKS);
            WorkService = (function () {
                function WorkService() {
                }
                WorkService.prototype.getWorks = function () { return worksPromise; };
                WorkService.prototype.getWork = function (id) {
                    return worksPromise
                        .then(function (works) { return works.find(function (work) { return work.id === id; }); });
                };
                WorkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WorkService);
                return WorkService;
            }());
            exports_1("WorkService", WorkService);
        }
    }
});

//# sourceMappingURL=work.service.js.map
