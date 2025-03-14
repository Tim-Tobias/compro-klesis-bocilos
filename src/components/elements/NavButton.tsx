/** @format */
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import useScrollPosition from "../../hooks/useScrollPosition";

interface NavButtonProps {
	isBurgerClicked: boolean;
	setIsBurgerClicked: () => void;
}

const NavButton = ({ isBurgerClicked, setIsBurgerClicked }: NavButtonProps) => {
	const scrollY = useScrollPosition();

	return (
		<div className='relative z-10' onClick={setIsBurgerClicked}>
			{isBurgerClicked ? (
				<AiOutlineClose />
			) : (
				<AiOutlineMenu className={scrollY > 0 ? "text-black" : "text-white"} />
			)}
		</div>
	);
};

export default NavButton;
