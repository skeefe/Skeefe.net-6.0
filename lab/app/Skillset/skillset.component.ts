import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { Skill } from './skill';
import { SkillsetService } from './skillset.service';


@Component({
    templateUrl: './app/Skillset/skillset.htm'
})

export class SkillsetComponent implements OnInit {

	constructor(private skillsetService: SkillsetService) { }

	skillset: Skill[];

	loadSkillset() {
		this.skillsetService.getSkillset()
		.subscribe(
			skillset => this.skillset = skillset,
			err => {
				console.log(err);
			}
		);
	}

	ngOnInit() {
		this.loadSkillset();
	}

}