export interface SearchParams {
	keywords?: string;
	jobType?: string;
	industry?: string;
	experience?: string;
	location?: string;
	workMode?: string;
	benefits?: string[];
	salary?: string;
	skills?: string[];
	education?: string;
	language?: string[];
}

export interface Chat {
	id: string;
	title: string;
	icon: string;
	selected: boolean;
	messages: any[];
}
