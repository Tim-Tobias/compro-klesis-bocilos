/** @format */

"use client";

import {
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	motion,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

interface ParallaxTextProps {
	children: string;
	baseVelocity: number;
	direction: number;
	classnames?: string;
}

const ParallaxText = ({
	children,
	baseVelocity = 100,
	direction,
	classnames,
}: ParallaxTextProps) => {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 300,
	});
	const skewVelocity = useSpring(scrollVelocity, {
		stiffness: 100,
		damping: 30,
	});

	const skewVelocityFactor = useTransform(skewVelocity, [-500, 500], [-30, 30]);
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);

	useAnimationFrame((_t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<motion.div
			initial={{ x: direction, opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					delay: 2,
					duration: 1,
					easings: "ease",
				},
			}}
			className='m-0 flex flex-nowrap whitespace-nowrap leading-[0.8] tracking-[-2px]'>
			<motion.div
				style={{ x }}
				className={`flex flex-nowrap whitespace-nowrap font-semibold uppercase ${classnames}`}>
				<motion.span className='mx-[20px] h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full bg-[#8c8c8c]'></motion.span>
				<motion.span
					style={{ skew: skewVelocityFactor }}
					className='mr-10 block w-full h-full'>
					{children}{" "}
				</motion.span>
				<motion.span
					style={{ skew: skewVelocityFactor }}
					className='mr-10 block w-full h-full'>
					{children}{" "}
				</motion.span>
				<motion.span
					style={{ skew: skewVelocityFactor }}
					className='mr-10 block w-full h-full'>
					{children}{" "}
				</motion.span>
				<motion.span
					style={{ skew: skewVelocityFactor }}
					className='mr-10 block w-full h-full'>
					{children}{" "}
				</motion.span>
			</motion.div>
		</motion.div>
	);
};

export default ParallaxText;
