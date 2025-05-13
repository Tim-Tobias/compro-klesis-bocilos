/** @format */

import Jumbotron from "./JumbotronSection";
import Team from "./TeamSection";
import Story from "./AboutSection";
import Signature from "./SignatureSection";
import Gallery from "./GallerySection";
import Ambience from "./AmbienceSection";
import Menu from "./MenuSection";
import Blog from "./BlogSection";

const Home = () => {
	return (
		<>
			<Jumbotron />
			<Story />
			<Signature />
			<Team />
			<Ambience />
			<Blog />
			<Gallery />
			<Menu />
		</>
	);
};

export default Home;
