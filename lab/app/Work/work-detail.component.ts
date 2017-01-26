import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Work } from './work';

declare var $: any;

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

	ngAfterViewInit() {
		//Trigger Flickity.
		$('.carousel').flickity({
			imagesLoaded: true,
			cellSelector: '.carousel__slide',
			percentPosition: false
		});
	}

	gotoWork() {
		let workID = this.work ? this.work.id : null;
		this.router.navigate(['../', { id: workID }], { relativeTo: this.route });
	}
}