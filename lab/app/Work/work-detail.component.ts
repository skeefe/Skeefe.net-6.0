import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DomSanitizer, Title } from '@angular/platform-browser';

import { Work } from './work';
import { WorkService } from './work.service';

import { SafePipe } from '../safe-pipe';


@Component({
	templateUrl: './app/Work/work-detail.htm'
})

export class WorkDetailComponent implements OnInit, AfterViewInit {
	work: Work;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service: WorkService,
		private sanitized: DomSanitizer,
		private title: Title
	) { }

	ngOnInit() {
		this.route.data.forEach((data: { work: Work }) => { //Doesn't need to be a loop.
			this.work = data.work;
			this.title.setTitle('Work: ' + data.work.title + ' | Skeefe.net');
		});
	}

	ngAfterViewInit() {
		//Trigger Flickity after initial page load.
		this.service.triggerFlickity();
	}

}