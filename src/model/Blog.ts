/** @format */

export interface BlogCategory {
	id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

export interface Blog {
	id: number;
	blog_category_id: string;
	category?: BlogCategory;
	image: string;
	content: string;
	title: string;
	active: boolean;
	created_at: string;
	updated_at: string;
}
