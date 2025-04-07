/** @format */

import Jumbotron from "./JumbotronSection";
import Team from "./TeamSection";
import { ImageItem } from "../../model/Image";
import Story from "./AboutSection";
import Signature from "./SignatureSection";
import Ambience from "./AmbienceSection";
import Menu from "./MenuSection";

const Home = ({ images }: { images: ImageItem[] }) => {
	return (
		<>
			<Jumbotron images={images} />
			<Story />
			<Signature />
			<Team />
			<Ambience />
			<Menu />
		</>
	);
};

export default Home;
