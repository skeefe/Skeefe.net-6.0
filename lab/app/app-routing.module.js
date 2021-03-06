System.register(['@angular/core', '@angular/router', "./Home/Home.component", "./About/about.component", "./Skillset/skillset.component", "./Contact/Contact.component", "./Contact/thankyou.component", "./Error/Error404.component"], function(exports_1, context_1) {
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
    var core_1, router_1, Home_component_1, about_component_1, skillset_component_1, Contact_component_1, thankyou_component_1, Error404_component_1;
    var AppRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Home_component_1_1) {
                Home_component_1 = Home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (skillset_component_1_1) {
                skillset_component_1 = skillset_component_1_1;
            },
            function (Contact_component_1_1) {
                Contact_component_1 = Contact_component_1_1;
            },
            function (thankyou_component_1_1) {
                thankyou_component_1 = thankyou_component_1_1;
            },
            function (Error404_component_1_1) {
                Error404_component_1 = Error404_component_1_1;
            }],
        execute: function() {
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            router_1.RouterModule.forRoot([
                                {
                                    path: '',
                                    pathMatch: 'full',
                                    component: Home_component_1.HomeComponent
                                },
                                {
                                    path: 'Home',
                                    redirectTo: '/'
                                },
                                {
                                    path: 'home',
                                    redirectTo: '/'
                                },
                                {
                                    path: 'About',
                                    component: about_component_1.AboutComponent
                                },
                                {
                                    path: 'about',
                                    redirectTo: '/About'
                                },
                                {
                                    path: 'Work',
                                    loadChildren: 'app/Work/work.module#WorkModule',
                                },
                                {
                                    path: 'work',
                                    redirectTo: '/Work/Rugby'
                                },
                                {
                                    path: 'Skillset',
                                    component: skillset_component_1.SkillsetComponent
                                },
                                {
                                    path: 'skillset',
                                    redirectTo: '/Skillset'
                                },
                                {
                                    path: 'Contact',
                                    component: Contact_component_1.ContactComponent
                                },
                                {
                                    path: 'contact',
                                    redirectTo: '/Contact'
                                },
                                {
                                    path: 'Contact/Thank-You',
                                    component: thankyou_component_1.ThankYouComponent
                                },
                                {
                                    path: 'contact/thank-you',
                                    redirectTo: 'Contact/Thank-You'
                                },
                                {
                                    path: 'Contact/thank-you',
                                    redirectTo: 'Contact/Thank-You'
                                },
                                {
                                    path: 'contact/Thank-You',
                                    redirectTo: 'Contact/Thank-You'
                                },
                                {
                                    path: '**',
                                    component: Error404_component_1.Error404Component
                                }
                            ]),
                        ],
                        exports: [
                            router_1.RouterModule
                        ],
                        declarations: [
                            Home_component_1.HomeComponent,
                            about_component_1.AboutComponent,
                            Contact_component_1.ContactComponent,
                            thankyou_component_1.ThankYouComponent,
                            Error404_component_1.Error404Component
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppRoutingModule);
                return AppRoutingModule;
            }());
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    }
});

//# sourceMappingURL=app-routing.module.js.map
