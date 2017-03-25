System.register(["@angular/core", '@angular/platform-browser'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1;
    var SafePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            SafePipe = (function () {
                function SafePipe(_sanitizer) {
                    this._sanitizer = _sanitizer;
                }
                SafePipe.prototype.transform = function (value, type) {
                    if (type === void 0) { type = 'html'; }
                    switch (type) {
                        case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
                        case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
                        case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
                        case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
                        case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
                        default: throw new Error("Invalid safe type specified: " + type);
                    }
                };
                SafePipe = __decorate([
                    core_1.Pipe({
                        name: 'safe'
                    }), 
                    __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
                ], SafePipe);
                return SafePipe;
            }());
            exports_1("SafePipe", SafePipe);
        }
    }
});

//# sourceMappingURL=safe-pipe.js.map
