/** @format */

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../common/utils";

const MagneticProvider = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
		const { clientX, clientY } = e;
		const {
			height = 0,
			width = 0,
			left = 0,
			top = 0,
		} = ref.current?.getBoundingClientRect() ?? {};
		const maxDistance = 50;
		const strength = 30;

		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);

		const distance = Math.sqrt(middleX ** 2 + middleY ** 2);
		const radius = Math.min(distance, maxDistance);

		const theta = Math.atan2(middleY, middleX);
		const force = radius / maxDistance;

		const x = Math.cos(theta) * force * strength;
		const y = Math.sin(theta) * force * strength;

		setPosition({ x, y });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			initial={{ x: 0, y: 0 }}
			animate={{ x, y }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className={cn("w-fit", className)}>
			{children}
		</motion.div>
	);
};

export default MagneticProvider;
