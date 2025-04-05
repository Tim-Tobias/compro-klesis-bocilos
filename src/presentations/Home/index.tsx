/** @format */

import Jumbotron from "./JumbotronSection";
import Ambience from "./AmbienceSection";
import Signature from "./SignatureSection";
// import Team from "./TeamSection";
import Menu from "./MenuSection";
import { ImageItem } from "../../model/Image";
import { lazy } from "react";

const Story = lazy(() => import("./AboutSection"));

const Home = ({ images }: { images: ImageItem[] }) => {
	return (
		<>
			<Jumbotron images={images} />
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
