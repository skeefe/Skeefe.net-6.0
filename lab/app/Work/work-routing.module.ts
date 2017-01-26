import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkListBaseComponent } from './work-list-base.component';
import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';
import { WorkDetailBaseComponent } from './work-detail-base.component';

import { WorkDetailResolve } from './work-detail-resolve.service';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: WorkListBaseComponent,
				children: [
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
								component: WorkDetailBaseComponent,
								redirectTo: '/Work/Rugby'
							}
						]
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