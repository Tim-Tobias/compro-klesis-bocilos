/** @format */

import Story from "./AboutSection";
import Jumbotron from "./JumbotronSection";
import Ambience from "./AmbienceSection";
import Signature from "./SignatureSection";
import Team from "./TeamSection";

const Home = () => {
	return (
		<>
			<Jumbotron />
			<Story />
			<Signature />
			<Team />
			<Ambience />
			<div className='w-full h-screen'></div>
		</>
	);
};

export default Home;
