//Skill Model
export class Skill {
	title: string;
	score: number;
	level: string;
	core: boolean;
	categories: SkillCategory[];
}

export class SkillCategory {
	title: string;
}