import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Work } from './work';


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
}