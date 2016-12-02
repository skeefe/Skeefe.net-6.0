import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Work } from './work.service';

//import { Work, WorkService } from './work.service'; // Think this is wrong.
//import { DialogService }  from '../dialog.service'; //Don't think I need this.


@Component({
	templateUrl: './app/Work/work-detail.htm'
})

export class WorkDetailComponent implements OnInit {
	work: Work;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.route.data.forEach((data: { work: Work }) => {
			this.work = data.work;
		});
	}

	gotoWork() {
		let workID = this.work ? this.work.id : null;
		// Pass along the work id if available
		// so that the WorkListComponent can select that work.
		// Add a totally useless `sdk` parameter for kicks.
		// Relative navigation back to the work list.
		this.router.navigate(['../', { id: workID }], { relativeTo: this.route });
	}
}