/** @format */

import { useEffect } from "react";

export const useSmoothScroll = () => {
	useEffect(() => {
		let scrollY = window.scrollY;
		let targetScrollY = scrollY;
		let isScrolling = false;

		const ease = 2; // Semakin kecil, semakin berat scroll-nya

		const updateScroll = () => {
			if (!isScrolling) return;
			scrollY += (targetScrollY - scrollY) * ease;
			window.scrollTo(0, scrollY);

			if (Math.abs(targetScrollY - scrollY) > 0.5) {
				requestAnimationFrame(updateScroll);
			} else {
				isScrolling = false;
			}
		};

		const handleScroll = (event: WheelEvent) => {
			event.preventDefault();
			targetScrollY += event.deltaY;
			targetScrollY = Math.max(
				0,
				Math.min(targetScrollY, document.body.scrollHeight - window.innerHeight)
			);
			if (!isScrolling) {
				isScrolling = true;
				requestAnimationFrame(updateScroll);
			}
		};

		window.addEventListener("wheel", handleScroll, { passive: false });

		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, []);
};
