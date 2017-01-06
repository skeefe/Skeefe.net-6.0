import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Work } from './work';
import { WorkService } from './work.service';

@Injectable()
export class WorkDetailResolve implements Resolve<Work> {
	constructor(
		private WorkService: WorkService,
		private router: Router
	) { }

	resolve(route: ActivatedRouteSnapshot): Observable<any> | boolean {
		let id = route.params['id'];
		return this.WorkService.getWork(id)
		.map(works => {
			if (works) {
				return works[0];
			} else {
				this.router.navigate(['/Work/Rugby']); //Alternatively redirect to a "404 Work" page.
				return false;
			}
		});
	}
}