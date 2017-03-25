import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';

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
		private sanitized: DomSanitizer
	) { }

	ngOnInit() {
		this.route.data.forEach((data: { work: Work }) => { //Doesn't need to be a loop.

			/*
			//Build the carousel;
			if (data.work.screenshots.length > 0) {
				//let flickityOptions = "='{"imagesLoaded": true, "cellSelector": ".carousel__slide", "percentPosition": false}'";
				let carousel = "<div class='main-carousel carousel' data-flickity='{" + flickityOptions + "}'>";
				data.work.screenshots.forEach(s => {
					carousel = carousel + `
						<figure class="carousel__slide carousel-cell">
							<img src="` + s.file + `" />
							<figcaption class="copy">` + s.caption + `</figcaption>
						</figure>
					`;
				});
				carousel = carousel + '</div>';
				//data.work.carousel = carousel;
			}
			*/

			this.work = data.work;
		});
	}

	ngAfterViewInit() {
		//Trigger Flickity after initial page load.
		this.service.triggerFlickity();
	}

}