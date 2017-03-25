import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';

import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';
import { SafePipe } from '../safe-pipe';

import { WorkService } from './work.service';


@NgModule({
	imports: [
		CommonModule,
		WorkRoutingModule
	],
	declarations: [
		WorkListComponent,
		WorkDetailComponent,
		SafePipe
	],
	providers: [
		WorkService
	]
})

export class WorkModule { }