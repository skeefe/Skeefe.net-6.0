import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkService } from './work.service';

import { WorkListBaseComponent } from './work-list-base.component';
import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';
import { WorkDetailBaseComponent } from './work-detail-base.component';

import { WorkRoutingModule } from './work-routing.module';

@NgModule({
	imports: [
		CommonModule,
		WorkRoutingModule
	],
	declarations: [
		WorkListBaseComponent,
		WorkListComponent,
		WorkDetailComponent,
		WorkDetailBaseComponent
	],
	providers: [
		WorkService
	]
})

export class WorkModule { }