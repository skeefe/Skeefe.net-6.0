//Work Model
export class Work {
	id: string;
	title: string;
	url: string;
	launched: string;
	company: string;
	client: string;
	screenshots: ScreenShots[];
	summary: string;
	workskills: WorkSkills[];
}

export class ScreenShots {
	file: string;
	caption: string;
}

export class WorkSkills {
	title: string;
}