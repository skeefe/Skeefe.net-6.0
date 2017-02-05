import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Work } from './work';

import { WorkService } from './work.service';


@Component({
	templateUrl: './app/Work/work-detail.htm'
})

export class WorkDetailComponent implements OnInit, AfterViewInit {
	work: Work;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service: WorkService
	) { }

	ngOnInit() {
		this.route.data.forEach((data: { work: Work }) => {
			this.work = data.work;
		});
	}

	ngAfterViewInit() {
		//Trigger Flickity on page load.
		this.service.triggerFlickity();
	}

}