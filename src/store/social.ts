/** @format */

import { create } from "zustand";
import axios from "../services/axios-client";
import { SocialMedia } from "../model/SocialMedia";

interface SocialMediaState {
	socialMedias: SocialMedia[];
	isLoading: boolean;
	error: string | null;
	fetchSocialMedia: () => Promise<void>;
}

export const useSocialMediaStore = create<SocialMediaState>(set => ({
	socialMedias: [],
	isLoading: false,
	error: null,
	fetchSocialMedia: async () => {
		set({ isLoading: true, error: null });

		try {
			const res = await axios.get("/social-media");
			set({ socialMedias: res.data.social_media, isLoading: false });
		} catch (error: any) {
			set({ error: error.message, isLoading: false });
		}
	},
}));
