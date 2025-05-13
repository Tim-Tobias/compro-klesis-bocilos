/** @format */

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useBlogStore } from "../../store/blog";
import SkeletonImage from "../../components/elements/SkeletonImage";
import SkeletonTitle from "../../components/elements/SkeletonTitle";
import SkeletonContent from "../../components/elements/SkeletonContent";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BlogDetail = () => {
	const params = useParams();
	const { fetchBlog, blog, loading } = useBlogStore();

	useEffect(() => {
		if (params) {
			fetchBlog(params.id!);
		}
	}, []);

	return (
		<div id='about' className='w-full py-25 relative overflow-hidden'>
			<div className='mx-auto max-w-[1028px] min-h-[400px] text-[#555555] px-5'>
				<Link to='/' className='flex items-center gap-1 hover:underline'>
					<AiOutlineArrowLeft />
					Back
				</Link>

				<div className='w-full mt-5 h-[350px]'>
					{loading ? (
						<SkeletonImage />
					) : (
						<img
							className='w-full h-full object-cover'
							src={blog?.image}
							alt=''
						/>
					)}
				</div>

				{loading ? (
					<div className='mt-3'>
						<SkeletonTitle />
					</div>
				) : (
					<h1 className='text-6xl mt-5' data-aos='fade-right'>
						{blog?.title}
					</h1>
				)}

				{loading ? (
					<div className='mt-3'>
						<SkeletonContent />
						<SkeletonContent />
						<SkeletonContent />
						<SkeletonContent />
					</div>
				) : (
					<div
						className='mt-10'
						data-aos='fade-left'
						data-aos-delay='500'
						dangerouslySetInnerHTML={{ __html: String(blog?.content) }}
					/>
				)}
			</div>
		</div>
	);
};

export default BlogDetail;
