import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { Skill } from './skill';
import { SkillCategory } from './skill';
import { SkillsetService } from './skillset.service';


@Component({
    templateUrl: './app/Skillset/skillset.htm'
})

export class SkillsetComponent implements OnInit {

	constructor(private skillsetService: SkillsetService) { }

	skillset: Skill[];

	//Return All Skills.
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

	//Return Selected Skill Category
	loadCategorySkills(skillCategory: string) {
		return this.skillsetService.getSkillset()
			.map(skillset => skillset.filter(skill => SkillCategorySearch(skillCategory, skill.category)))
			.subscribe(
				skillset => this.skillset = skillset,
				err => {
					console.log(err);
				}
			);
	}

	//Return Strongest Skills
	loadStrongestSkills(skillLevel: number) {
		return this.skillsetService.getSkillset()
			.map(skillset => skillset.filter(skill => skill.level >= skillLevel))
			.subscribe(
				skillset => this.skillset = skillset,
				err => {
					console.log(err);
				}
			);
	}

}

//Check if Skill exists in cateogry
function SkillCategorySearch(skill, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].title === skill) { return true; }
    }
    return false;
}