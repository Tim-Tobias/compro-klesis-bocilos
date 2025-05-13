/** @format */

import { useAboutStore } from "../../store/about";

/** @format */
const Story = () => {
	const { content, background } = useAboutStore();

	return (
		<div id='story' className='w-full py-25 relative overflow-hidden'>
			<div className='mx-auto max-w-[1028px] min-h-[400px] text-[#555555] px-5'>
				<h1 className='text-6xl text-center' data-aos='fade-right'>
					The <span className='text-[#3674b5]'>Story</span>
				</h1>

				{content && (
					<div
						className='mt-10'
						data-aos='fade-left'
						data-aos-delay='500'
						dangerouslySetInnerHTML={{ __html: String(content?.content) }}
					/>
				)}
			</div>
			<img
				src={background?.file_path}
				alt={background?.description}
				className='absolute w-full bottom-0 left-0'
			/>
		</div>
	);
};

export default Story;
