import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Skill } from './skill';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkillsetService {
	constructor(private http: Http) { }

	private skillsetData = 'data/skillset.json';

	// Return all Skills
	getSkillset(): Observable<Skill[]> {
		return this.http.get(this.skillsetData)
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}