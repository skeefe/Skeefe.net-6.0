import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Work, WorkService } from './work.service';

@Injectable()
export class WorkDetailResolve implements Resolve<Work> {
	constructor(private cs: WorkService, private router: Router) { }

	resolve(route: ActivatedRouteSnapshot): Promise<Work> | boolean {
		let id = route.params['id'];

		return this.cs.getWork(id).then(work => {
			if (work) {
				return work;
			} else { // id not found
				this.router.navigate(['/work']);
				return false;
			}
		});
	}
}