/** @format */

import { create } from "zustand";
import { ContentItem } from "../model/Content";
import { ImageItem } from "../model/Image";
import axios from "../services/axios-client";

interface FooterSectionState {
	content: ContentItem | null;
	background: ImageItem | null;
	fetchFooterSection: () => Promise<void>;
}

export const useFooterSectionStore = create<FooterSectionState>(set => ({
	content: null,
	background: null,
	fetchFooterSection: async () => {
		try {
			const res = await axios.get("/footer-section");
			const data = res.data.content;
			const background = res.data.image;

			set({ content: data, background });
		} catch (error) {
			console.log(error);
		}
	},
}));
