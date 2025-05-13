/** @format */

export interface ImageItem {
	id: string;
	name: string;
	description: string;
	file_path: string;
	category:
		| "home-section"
		| "about-section"
		| "story-section"
		| "team-section"
		| "signature-section"
		| "menu-section"
		| "today-menu-section"
		| "footer-section";
	type: "image" | "background";
	order: number;
	active: boolean | 0 | 1;
	created_at: string;
	updated_at: string;
	highlight: boolean | 0 | 1;
}
