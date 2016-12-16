import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./Home/Home.component";
import { SkillsetComponent } from "./Skillset/skillset.component";
import { ContactComponent } from "./Contact/Contact.component";
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
				path: 'Work',
				loadChildren: 'app/Work/work.module#WorkModule'
			},
			{
				path: 'Skillset',
				component: SkillsetComponent
			},
			{
				path: 'Contact',
				component: ContactComponent
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
		ContactComponent,
		Error404Component
	]
})

export class AppRoutingModule { }