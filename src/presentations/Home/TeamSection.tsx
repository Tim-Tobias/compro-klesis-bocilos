/** @format */
import { useEffect, useState } from "react";
import { ContentItem } from "../../model/Content";
import { ImageItem } from "../../model/Image";
import axios from "../../services/axios-client";

const Team = () => {
	const [content, setContent] = useState<ContentItem>();
	const [images, setImages] = useState<ImageItem[]>([]);

	useEffect(() => {
		const fetchHomeSection = async () => {
			try {
				const res = await axios.get("/team-section");
				const data = res.data.content;
				const images = res.data.images;

				setContent(data);
				setImages(images);
			} catch (error) {
				console.log(error);
			}
		};

		fetchHomeSection();
	}, []);

	return (
		<div className='relative w-full lg:h-screen overflow-hidden py-18 px-5'>
			<h1
				data-aos='fade-down'
				data-aos-delay='600'
				className='text-6xl text-center'>
				The <span className='text-[#3674b5]'>Team</span>
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-start mt-10'>
				<div className='flex w-full justify-center items-center'>
					{images.map((item, index) => (
						<img
							key={index}
							data-aos='fade-down'
							alt={item.description}
							data-aos-delay={index * 600}
							className='w-[80px] transition-all lg:w-[150px] h-[250px] lg:h-[450px] object-cover hover:scale-105'
							src={item.file_path}
						/>
					))}
				</div>

				{content && (
					<div
						className='w-[80%] mx-auto lg:mx-0 mt-10 lg:mt-0 text-center lg:text-left'
						data-aos='fade-left'
						data-aos-delay='800'
						dangerouslySetInnerHTML={{ __html: String(content?.content) }}
					/>
				)}
			</div>
		</div>
	);
};

export default Team;
