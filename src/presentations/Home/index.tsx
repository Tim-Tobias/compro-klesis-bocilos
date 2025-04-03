/** @format */

import Story from "./AboutSection";
import Jumbotron from "./JumbotronSection";
import Ambience from "./AmbienceSection";
import Signature from "./SignatureSection";
import Team from "./TeamSection";
import Menu from "./MenuSection";

const Home = () => {
	return (
		<>
			<Jumbotron />
			<Story />
			<Signature />
			<div className='py-5'></div>
			{/* <Team /> */}
			<Ambience />
			<Menu />
		</>
	);
};

export default Home;
