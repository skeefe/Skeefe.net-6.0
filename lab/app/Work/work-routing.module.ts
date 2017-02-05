import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';

import { WorkDetailResolve } from './work-detail-resolve.service';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: WorkListComponent,
				children: [
					{
						path: ':id',
						component: WorkDetailComponent,
						resolve: {
							work: WorkDetailResolve
						}
					},
					{
						path: '',
						component: WorkDetailComponent,
						redirectTo: '/Work/Rugby',
					}
				]
			}
		])
	],
	exports: [
		RouterModule
	],
	providers: [
		WorkDetailResolve
	]
})

export class WorkRoutingModule { }