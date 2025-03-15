/** @format */
import ChefOne from "../../assets/chefs/chefs-1.jpg";
import ChefTwo from "../../assets/chefs/chefs-2.jpg";
import ChefThree from "../../assets/chefs/chefs-3.jpg";

const chefs = [ChefOne, ChefTwo, ChefThree];

const Team = () => {
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
					{chefs.map((item, index) => (
						<img
							data-aos='fade-down'
							data-aos-delay={index * 600}
							className='w-[80px] transition-all lg:w-[150px] h-[250px] lg:h-[450px] object-cover hover:scale-105'
							src={item}
						/>
					))}
				</div>

				<div className='w-[80%] mx-auto lg:mx-0 mt-10 lg:mt-0 text-center lg:text-left'>
					<p data-aos='fade-left' data-aos-delay='800'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
						tempore suscipit ut doloremque velit fugiat voluptatem quia itaque
						nam. Ducimus fugit quaerat harum officia inventore, ut ipsa in,
						corporis repellendus expedita, numquam quam animi architecto minus
						id laborum excepturi vel dolores vitae nemo eius voluptatem omnis.
						Necessitatibus laboriosam eaque delectus!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Team;
