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

	ngOnInit() {
		this.loadCoreSkills();
	}

	//Return Selected Skill Category
	loadCategorySkills(skillCategory: string) {
		return this.skillsetService.getSkillset()
			.map(skillset => skillset.filter(skill => SkillCategorySearch(skillCategory, skill.categories)))
			.subscribe(
				skillset => this.skillset = skillset,
				err => {
					console.log(err);
				}
			);
	}

	//Return Strongest Skills
	loadCoreSkills() {
		return this.skillsetService.getSkillset()
			.map(skillset => skillset.filter(skill => skill.core === true))
			.subscribe(
				skillset => this.skillset = skillset,
				err => {
					console.log(err);
				}
			);
	}

	//Return All Skills.
	loadSkillset() {
		return this.skillsetService.getSkillset()
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