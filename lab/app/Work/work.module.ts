import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkService } from './work.service';

import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';


import { WorkRoutingModule } from './work-routing.module';

@NgModule({
	imports: [
		CommonModule,
		WorkRoutingModule
	],
	declarations: [
		WorkListComponent,
		WorkDetailComponent
	],
	providers: [
		WorkService
	]
})

export class WorkModule { }