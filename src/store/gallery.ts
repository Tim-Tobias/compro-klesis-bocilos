/** @format */

import { create } from "zustand";
import { ImageItem } from "../model/Image";
import axios from "../services/axios-client";

interface GalleryStore {
	images: ImageItem[];
	background: ImageItem | null;
	isLoading: boolean;
	error: string | null;
	fetchGallerySection: () => Promise<void>;
}

export const useGalleryStore = create<GalleryStore>(set => ({
	images: [],
	background: null,
	isLoading: false,
	error: null,

	fetchGallerySection: async () => {
		set({ isLoading: true, error: null });

		try {
			const res = await axios.get("/gallery-section");
			const data = res.data.images;
			const bg = res.data.background;

			set({
				images: data,
				background: bg,
				isLoading: false,
			});
		} catch (error: any) {
			set({
				error: error.message || "Unknown error",
				isLoading: false,
			});
		}
	},
}));
