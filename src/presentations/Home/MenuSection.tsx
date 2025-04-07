/** @format */

import { useEffect, useState } from "react";
import CategoryFilter from "../../components/elements/CategoryFilter";
import axios from "../../services/axios-client";
import { CategoryItem } from "../../model/Category";
import { MenuItem } from "../../model/Menu";

const Menu = () => {
	const [activeCategory, setActiveCategory] = useState<string>("all");
	const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

	const [categories, setCategories] = useState<CategoryItem[]>([]);
	const [menus, setMenus] = useState<MenuItem[]>([]);

	useEffect(() => {
		const fetchHomeSection = async () => {
			try {
				const res = await axios.get("/categories");
				const data = res.data.categories;

				const newCategories = [{ id: 0, name: "all" }, ...data];

				setCategories(newCategories);
			} catch (error) {
				console.log(error);
			}
		};

		fetchHomeSection();
	}, []);

	useEffect(() => {
		const fetchHomeSection = async () => {
			try {
				const res = await axios.get(`/today-menu?category=${activeCategory}`);
				const data = res.data.menus;

				setMenus(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchHomeSection();
	}, [activeCategory]);

	useEffect(() => {
		if (selectedItem) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [selectedItem]);

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
				{menus.map((item, index) => (
					<div
						onClick={() => setSelectedItem(item)}
						key={index}
						className='flex items-center space-x-4 border-b pb-4 cursor-pointer'>
						<img
							src={item.file_path}
							alt={item.name}
							className='w-20 h-20 object-cover rounded-md'
						/>
						<p className='text-lg font-serif'>{item.name}</p>
					</div>
				))}
			</div>

			{selectedItem && (
				<div className='fixed inset-0 flex items-center justify-center z-50'>
					<div
						onClick={() => setSelectedItem(null)}
						className='bg-black opacity-90 absolute top-0 left-0 w-full h-full'></div>
					<div className='bg-white p-5 rounded-md shadow-lg max-w-[500px] w-full relative'>
						<img
							src={selectedItem.file_path}
							alt={selectedItem.name}
							className='w-full h-auto rounded-md'
						/>
						<p className='mt-3 text-lg font-serif'>{selectedItem.name}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;
