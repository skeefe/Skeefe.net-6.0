import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WorkModule } from "./Work/work.module";
import { SkillsetModule } from './Skillset/skillset.module';


@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		JsonpModule,
		WorkModule,
		SkillsetModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }