import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsetService } from './skillset.service';
import { SkillsetComponent } from './skillset.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SkillsetComponent
	],
	providers: [
		SkillsetService
	],
	exports:[
		SkillsetComponent
	]
})

export class SkillsetModule { }