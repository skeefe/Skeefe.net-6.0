//Work Model
export class Work {
	id: string;
	title: string;
	thumbnail: string;
	url: string;
	launched: string;
	company: string;
	companyurl: string;
	client: string;
	screenshots: ScreenShots[];
	summary: string;
	workskills: WorkSkills[];
	//carousel: string;
}

export class ScreenShots {
	file: string;
	caption: string;
}

export class WorkSkills {
	title: string;
}