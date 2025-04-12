/** @format */

import React from "react";
import { CategoryItem } from "../../model/Category";
import { BlogCategory } from "../../model/Blog";

interface CategoryFilterProps {
	categories: CategoryItem[] | BlogCategory[];
	activeCategory: string;
	onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categories,
	activeCategory,
	onSelectCategory,
}) => {
	return (
		<div className='flex flex-wrap gap-3 justify-center'>
			{categories.map(category => (
				<button
					key={category.id}
					className={`px-4 cursor-pointer py-2 border border-black text-sm font-semibold transition-all duration-200 ${
						activeCategory === category.name
							? "bg-[#3674B5] text-white"
							: "hover:bg-gray-100"
					}`}
					onClick={() => onSelectCategory(category.name)}>
					{category.name.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default CategoryFilter;
