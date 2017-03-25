import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Work } from './work';
import { WorkService } from './work.service';


declare var $: any;

@Component({
	templateUrl: './app/Work/work-list.htm'
})

export class WorkListComponent implements OnInit, AfterViewInit {
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
				.subscribe(works => this.works = works);
		});
	}

	ngAfterViewInit() {
		setTimeout(function() { //Rewrite this - should not use a timeout.

			//this.service.activeWork(window.location.pathname.split('/')[2]); //Unable to call from within a timeout.
			var workID = window.location.pathname.split('/')[2];

			//Remove old active state.
			$('#work-list option[selected="selected"]').removeAttr('selected');
			$('#work-list li.active').removeClass('active');

			//Add new active state.
			$('#work-list option[value="' + workID + '"]').attr('selected', 'selected');
			$('#work-list li[data-work="' + workID + '"]').addClass('active');

		}, 50);
	}

	onSelect(workID: String) {
		//this.service.destroyFlickity();
		this.router.navigate([workID], { relativeTo: this.route });
		this.service.activeWork(workID);
		this.service.reloadFlickity();
	}

}