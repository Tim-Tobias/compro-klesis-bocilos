/** @format */

import { cn } from "../../common/utils";

interface SeparatorProps {
	classnames?: string;
}

const Separator = (props: SeparatorProps) => {
	const { classnames } = props;

	return <div className={cn("w-full h-[1px] bg-black", classnames)}></div>;
};

export default Separator;
