/** @format */

import { create } from "zustand";
import { ContentItem } from "../model/Content";
import { ImageItem } from "../model/Image";
import axios from "../services/axios-client";

interface TeamSectionState {
	content: ContentItem | null;
	images: ImageItem[];
	fetchTeamSection: () => Promise<void>;
}

export const useTeamSectionStore = create<TeamSectionState>(set => ({
	content: null,
	images: [],
	fetchTeamSection: async () => {
		try {
			const res = await axios.get("/team-section");
			const data = res.data.content;
			const images = res.data.images;

			set({ content: data, images });
		} catch (error) {
			console.log(error);
		}
	},
}));
