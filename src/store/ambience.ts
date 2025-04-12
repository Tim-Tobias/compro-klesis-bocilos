/** @format */

import { create } from "zustand";
import { ImageItem } from "../model/Image";
import axios from "../services/axios-client";
import { FileItem } from "../model/File";

interface AmbienceSectionState {
	images: ImageItem[];
	highlight: ImageItem | null;
	background: ImageItem | null;
	file: FileItem | null;
	fetchMenuSection: () => Promise<void>;
}

export const useAmbienceSectionStore = create<AmbienceSectionState>(set => ({
	images: [],
	highlight: null,
	background: null,
	file: null,
	fetchMenuSection: async () => {
		try {
			const res = await axios.get("/menu-section");
			const data: ImageItem[] = res.data.images;
			const bg = res.data.background;
			const file = res.data.file;

			const highlightedItem = data.find(item => item.highlight === 1) || null;
			const imagesData = data.filter(item => item.highlight !== 1);

			set({
				images: imagesData,
				highlight: highlightedItem,
				background: bg,
				file,
			});
		} catch (error) {
			console.log(error);
		}
	},
}));
