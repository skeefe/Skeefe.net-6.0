import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Skill } from './skill';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkillsetService {
	// Resolve HTTP using the constructor
	constructor(private http: Http) { }

	private skillsetData = 'data/skillset.json'; //

	// Fetch all Skills
	getSkillset(): Observable<Skill[]> {
		return this.http.get(this.skillsetData)
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}