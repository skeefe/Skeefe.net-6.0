export class Work {
	constructor(
		public id: string,
		public title: string,
		public url: string
	) { }
}

//import { Work } from './work';
//import { WorkService } from './work.service';

//I assume this should come from a JSON file/feed.
const WORKS = [
	new Work('Rugby', 'Rugby.com.au', 'http://www.rugby.com.au'),
	new Work('Sydney7s', 'Sydney 7s', 'http://www.sydney7s.com.au'),
	new Work('CornerstoneDigital', 'Cornerstone Digital', 'http://cornerstone-digital.com.au'),
	new Work('RSLPoppyShop', 'RSL Poppy Shop', 'https://poppyshop.org.au/')
];

let worksPromise = Promise.resolve(WORKS);

import { Injectable } from '@angular/core';

@Injectable()
export class WorkService {

	getWorks() { return worksPromise; }

	getWork(id: string) {
		return worksPromise
			.then(works => works.find(work => work.id === id));
	}

}