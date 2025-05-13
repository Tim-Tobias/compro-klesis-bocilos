/** @format */

import { CategoryItem } from "./Category";

export interface MenuItem {
	id: string;
	id_category: string;
	category?: CategoryItem;
	file_path: string;
	name: string;
	created_at: string;
	updated_at: string;
}
