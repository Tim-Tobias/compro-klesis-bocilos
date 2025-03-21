/** @format */

import { useState } from "react";
import CategoryFilter from "../../components/elements/CategoryFilter";
import HeroImageTwo from "../../assets/home/home-2.jpg";

const categories = [
	"SIGNATURE",
	"ARTISAN TEA",
	"BREAKFAST",
	"APPETIZER",
	"MAIN COURSE",
	"DESSERT",
];

const menuData = [
	{ id: 1, name: "Salmon Dish", image: HeroImageTwo, category: "SIGNATURE" },
	{ id: 2, name: "Vegan Platter", image: HeroImageTwo, category: "APPETIZER" },
	{ id: 3, name: "Pancakes", image: HeroImageTwo, category: "BREAKFAST" },
	{ id: 4, name: "Steak", image: HeroImageTwo, category: "MAIN COURSE" },
];

const Menu = () => {
	const [activeCategory, setActiveCategory] = useState<string>("ALL");

	const filteredItems =
		activeCategory === "ALL"
			? menuData
			: menuData.filter(item => item.category === activeCategory);

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

			<div className='p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[1000px] mx-auto lg:mt-20'>
				{filteredItems.map(item => (
					<div
						key={item.id}
						className='flex items-center space-x-4 border-b pb-4'>
						<img
							src={item.image}
							alt={item.name}
							className='w-20 h-20 object-cover rounded-md'
						/>
						<p className='text-lg font-serif'>{item.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
