System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var WorkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WorkService = (function () {
                function WorkService(http) {
                    this.http = http;
                    this.workData = 'data/work.json';
                }
                //Return all Work
                WorkService.prototype.getWorks = function () {
                    return this.http.get(this.workData)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                //Return selected Work
                WorkService.prototype.getWork = function (workID) {
                    return this.getWorks()
                        .map(function (works) { return works.filter(function (work) { return work.id === workID; }); });
                };
                //Trigger Flickity
                WorkService.prototype.triggerFlickity = function () {
                    $('.carousel').flickity({
                        imagesLoaded: true,
                        cellSelector: '.carousel__slide',
                        percentPosition: false
                    });
                };
                //Reload Flickity
                WorkService.prototype.reloadFlickity = function () {
                    this.destroyFlickity();
                    setTimeout(function () {
                        //this.triggerFlickity(); //Unable to call this function from within the timeout.
                        $('.carousel').flickity({
                            imagesLoaded: true,
                            cellSelector: '.carousel__slide',
                            percentPosition: false
                        });
                    }, 100);
                };
                //Destroy Flickity
                WorkService.prototype.destroyFlickity = function () {
                    $('.carousel').flickity('destroy');
                };
                //Set active classes.
                WorkService.prototype.activeWork = function (selectedWork) {
                    //Remove old active state.
                    $('#work-list option[selected="selected"]').removeAttr('selected');
                    $('#work-list li.active').removeClass('active');
                    //Add new active state.
                    $('#work-list option[value="' + selectedWork + '"]').attr('selected', 'selected');
                    $('#work-list li[data-work="' + selectedWork + '"]').addClass('active');
                    console.log($('#work-list option[value="' + selectedWork + '"]').length);
                    console.log($('#work-list option').length);
                    console.log('Activework');
                };
                WorkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WorkService);
                return WorkService;
            }());
            exports_1("WorkService", WorkService);
        }
    }
});

//# sourceMappingURL=work.service.js.map
