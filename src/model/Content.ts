/** @format */

export interface ContentItem {
	id: string;
	content: string;
	category:
		| "home-section"
		| "about-section"
		| "story-section"
		| "team-section"
		| "signature-section"
		| "menu-section"
		| "today-menu-section"
		| "footer-section";
	active: boolean | 0 | 1;
	created_at: string;
	updated_at: string;
}
