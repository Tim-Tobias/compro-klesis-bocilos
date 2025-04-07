/* eslint-disable react-hooks/rules-of-hooks */
/** @format */

import { MotionValue, useTransform } from "framer-motion";

export const useSignatureTransforms = (
	scrollYProgress: MotionValue<number>,
	count: number
): MotionValue<string>[] => {
	const transforms: MotionValue<string>[] = [];
	for (let i = 0; i < count; i++) {
		transforms.push(
			useTransform(
				scrollYProgress,
				[0, 1],
				[`${(i + 1) * 100}%`, `${(i + 1) * 14}%`]
			)
		);
	}
	return transforms;
};
