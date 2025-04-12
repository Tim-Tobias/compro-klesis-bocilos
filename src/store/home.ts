/** @format */

import { create } from "zustand";
import { ImageItem } from "../model/Image";
import axios from "../services/axios-client";

interface HomeSectionState {
	images: ImageItem[];
	isLoading: boolean;
	error: string | null;
	fetchHomeImages: () => Promise<void>;
}

export const useHomeSectionStore = create<HomeSectionState>(set => ({
	images: [],
	isLoading: false,
	error: null,
	fetchHomeImages: async () => {
		set({ isLoading: true, error: null });

		try {
			const res = await axios.get("/home-section");
			set({ images: res.data.images, isLoading: false });
		} catch (error: any) {
			set({ error: error.message, isLoading: false });
		}
	},
}));
