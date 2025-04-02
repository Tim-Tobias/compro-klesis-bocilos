/** @format */
import BgAbout from "../../assets/about/home_three_about_bg.png";

const Story = () => {
	return (
		<div id='about' className='w-full py-25 relative overflow-hidden'>
			<div className='mx-auto max-w-[1028px] min-h-[400px] text-[#555555] px-5'>
				<h1 className='text-6xl text-center' data-aos='fade-right'>
					The <span className='text-[#3674b5]'>Story</span>
				</h1>

				<p className='mt-10' data-aos='fade-left' data-aos-delay='500'>
					<span className='text-[70px] leading-none float-left font-semibold'>
						N
					</span>
					othing is more delightful than reminiscing, returning home, and becom-
					ing a carefree child full of love and affection. We believe that home
					should be the most comfortable place for all of us to share stories,
					laughter, and experiences. All stories begin at home, the seed of hope
					and youthful spirit, and they will always return home, where we pause
					for a moment, take a breath, enjoy, and celebrate each step of the
					journey. Home is not just a beginning; it is also a destination.
					That's why Klesis Bocilos is here for you, as a space filled with
					warmth, loving embraces, and a celebration of happiness.
				</p>
			</div>
			<img src={BgAbout} alt='' className='absolute w-full bottom-0 left-0' />
		</div>
	);
};

export default Story;
