/** @format */

import { useEffect, useState } from "react";
import CategoryFilter from "../../components/elements/CategoryFilter";
import { MenuItem } from "../../model/Menu";
import { useBlogStore } from "../../store/blog";
import { Link } from "react-router-dom";

const Blog = () => {
	const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
	const { categories, blogs, setActiveCategory, activeCategory } =
		useBlogStore();

	useEffect(() => {
		if (selectedItem) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [selectedItem]);

	return (
		<div id="blog" className='text-center space-y-5 py-32'>
			<h1 className='text-6xl text-center' data-aos='fade-right'>
				Blog
			</h1>

			<CategoryFilter
				categories={categories}
				activeCategory={activeCategory}
				onSelectCategory={setActiveCategory}
			/>

			<div className='p-5 grid grid-cols-1 lg:grid-cols-3 max-w-[1000px] mx-auto lg:mt-20'>
				{blogs.map((item, index) => (
					<div
						key={index}
						className='relative group cursor-pointer overflow-hidden shadow-md'>
						<Link to={`/blog/${item.id}`}>
							<img
								src={item.image}
								alt={item.title}
								className='object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105'
							/>

							<div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300' />

							<h1 className='absolute bottom-2 left-2 text-white text-2xl bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								{item.title}
							</h1>
						</Link>
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

export default Blog;
