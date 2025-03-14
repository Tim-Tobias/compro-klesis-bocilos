/** @format */

import Story from "./AboutSection";
import Jumbotron from "./JumbotronSection";
import Ambience from "./AmbienceSection";
import Signature from "./SignatureSection";

const Home = () => {
	return (
		<>
			<Jumbotron />
			<Story />
			<Signature />
			<div className='w-full h-screen'></div>
			<Ambience />
		</>
	);
};

export default Home;
