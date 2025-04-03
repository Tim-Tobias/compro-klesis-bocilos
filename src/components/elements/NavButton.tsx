/** @format */
import { AiOutlineMenu } from "react-icons/ai";
import useScrollPosition from "../../hooks/useScrollPosition";

interface NavButtonProps {
	isBurgerClicked: boolean;
	setIsBurgerClicked: () => void;
}

const NavButton = ({ isBurgerClicked, setIsBurgerClicked }: NavButtonProps) => {
	const scrollY = useScrollPosition();

	return (
		<div
			data-aos='fade-left'
			data-aos-delay='500'
			className='relative'
			onClick={setIsBurgerClicked}>
			{!isBurgerClicked && (
				<AiOutlineMenu className={scrollY > 0 ? "text-black" : "text-white"} />
			)}
		</div>
	);
};

export default NavButton;
