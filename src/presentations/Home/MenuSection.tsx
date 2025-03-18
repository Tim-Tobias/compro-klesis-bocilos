/** @format */

import { useState } from "react";
import CategoryFilter from "../../components/elements/CategoryFilter";

const categories = [
	"All",
	"Signature",
	"Artisan Tea",
	"Breakfast",
	"Appetizer",
	"Main Course",
	"Dessert",
	"Download Menu Here",
];

const Menu = () => {
	const [activeCategory, setActiveCategory] = useState<string>("All");

	return (
		<div className='text-center space-y-5 py-32'>
			<h1 className='text-6xl text-center' data-aos='fade-right'>
				Today's <span className='text-[#3674b5]'>Menu</span>
			</h1>

			<CategoryFilter
				categories={categories}
				activeCategory={activeCategory}
				onSelectCategory={setActiveCategory}
			/>
		</div>
	);
};

export default Menu;
