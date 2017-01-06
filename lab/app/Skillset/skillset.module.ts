import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsetService } from './skillset.service';
import { SkillsetComponent } from './skillset.component';

import { Pipe, PipeTransform } from "@angular/core";
import { OrderBy } from "../sort";


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SkillsetComponent,
		OrderBy
	],
	providers: [
		SkillsetService
	],
	exports: [
		SkillsetComponent
	]
})

export class SkillsetModule { }