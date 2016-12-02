import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Work, WorkService } from './work.service';

@Component({
	templateUrl: './app/Work/work-list.htm'
})

export class WorkListComponent implements OnInit {
	works: Work[];
	public selectedId: string;

	constructor(
		private service: WorkService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	isSelected(work: Work) {
		return work.id === this.selectedId;
	}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			this.selectedId = params['id'];
			this.service.getWorks()
				.then(works => this.works = works);
		});
	}

	onSelect(work: Work) {
		this.selectedId = work.id;

		// Navigate with relative link
		this.router.navigate([work.id], { relativeTo: this.route });
	}
}