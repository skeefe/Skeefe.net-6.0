import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Work } from './work';


declare var $: any;

@Injectable()
export class WorkService {
	constructor(private http: Http) { }

	private workData = 'data/work.json';

	//Return all Work
	getWorks(): Observable<Work[]> {
		return this.http.get(this.workData)
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	//Return selected Work
	getWork(workID: string) {
		return this.getWorks()
		.map(works => works.filter(work => work.id === workID));
	}

	//Trigger Flickity
	triggerFlickity() {
		$('.carousel').flickity({
			imagesLoaded: true,
			cellSelector: '.carousel__slide',
			percentPosition: true,
			groupCells: true
		});
	}

	//Destroy Flickity
	destroyFlickity() {
		$('.carousel').flickity('destroy');
	}

	//Reload Flickity
	reloadFlickity() {
		this.destroyFlickity();
		setTimeout(function() { //Rewrite this - should not use a timeout. The issue I have not been able to setup a callback function for the ngFor on the Carousel element.
			//this.triggerFlickity(); //Unable to call this function from within the timeout.
			$('.carousel').flickity({
				imagesLoaded: true,
				cellSelector: '.carousel__slide',
				percentPosition: true,
				groupCells: true
			});
		}, 50);
	}

	//Set active classes.
	activeWork(selectedWork) {
		//Remove old active state.
		$('#work-list option[selected="selected"]').removeAttr('selected');
		$('#work-list li.active').removeClass('active');

		//Add new active state.
		$('#work-list option[value="' + selectedWork + '"]').attr('selected', 'selected');
		$('#work-list li[data-work="' + selectedWork + '"]').addClass('active');
	}
}