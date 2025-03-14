/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentations/Home";
import HeaderLayout from "./components/layouts/Header";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
	return (
		<ParallaxProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HeaderLayout />}>
						<Route path='/' element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ParallaxProvider>
	);
};

export default App;
