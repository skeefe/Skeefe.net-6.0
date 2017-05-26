import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./Home/Home.component";
import { AboutComponent } from "./About/about.component";
import { SkillsetComponent } from "./Skillset/skillset.component";
import { ContactComponent } from "./Contact/Contact.component";
import { ThankYouComponent } from "./Contact/thankyou.component";
import { Error404Component } from "./Error/Error404.component";

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '',
				pathMatch: 'full',
				component: HomeComponent
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
				component: AboutComponent
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
				component: SkillsetComponent
			},
			{
				path: 'skillset',
				redirectTo: '/Skillset'
			},
			{
				path: 'Contact',
				component: ContactComponent
			},
			{
				path: 'contact',
				redirectTo: '/Contact'
			},
			{
				path: 'Contact/Thank-You',
				component: ThankYouComponent
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
				component: Error404Component
			}
		]),
	],
	exports: [
		RouterModule
	],
	declarations: [
		HomeComponent,
		AboutComponent,
		ContactComponent,
		ThankYouComponent,
		Error404Component
	]
})

export class AppRoutingModule { }