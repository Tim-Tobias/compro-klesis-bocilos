/** @format */

import React from "react";

interface CategoryFilterProps {
	categories: string[];
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
					key={category}
					className={`px-4 cursor-pointer py-2 border border-black text-sm font-semibold transition-all duration-200 ${
						activeCategory === category
							? "bg-[#3674B5] text-white"
							: "hover:bg-gray-100"
					}`}
					onClick={() => onSelectCategory(category)}>
					{category.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default CategoryFilter;
