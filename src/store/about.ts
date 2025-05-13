/** @format */
import { ContentItem } from "../model/Content";
import { create } from "zustand";
import axios from "../services/axios-client";
import DOMPurify from "dompurify";
import { ImageItem } from "../model/Image";

interface AboutStore {
	background: ImageItem | null;
	content: ContentItem | null;
	isLoading: boolean;
	error: string | null;
	fetchAboutSection: () => Promise<void>;
}

export const useAboutStore = create<AboutStore>(set => ({
	background: null,
	content: null,
	isLoading: false,
	error: null,

	fetchAboutSection: async () => {
		set({ isLoading: true, error: null });

		try {
			const res = await axios.get("/about-section");
			const image = res.data.image;
			const content = res.data.content;

			const cleanHtml = DOMPurify.sanitize(content.content);
			content.content = cleanHtml;

			set({
				background: image,
				content,
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
