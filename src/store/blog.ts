/** @format */

import { create } from "zustand";
import axios from "axios";
import { Blog, BlogCategory } from "../model/Blog";

type BlogStore = {
	categories: BlogCategory[];
	blogs: Blog[];
	loading: boolean;
	activeCategory: string;
	blog: Blog | null;
	fetchBlogCategories: () => Promise<void>;
	fetchBlogs: (category?: string) => Promise<void>;
	fetchBlog: (id: string) => Promise<void>;
	setActiveCategory: (category: string) => void;
};

export const useBlogStore = create<BlogStore>((set, get) => ({
	categories: [],
	blogs: [],
	loading: false,
	activeCategory: "all",
	blog: null,

	fetchBlogCategories: async () => {
		try {
			const res = await axios.get("/blog-categories");
			const data = res.data.categories || [];
			set({ categories: [{ id: 0, name: "all" }, ...data] });
		} catch (err) {
			console.error(err);
		}
	},

	fetchBlogs: async (category = "all") => {
		try {
			set({ loading: true });

			const query = category !== "all" ? `?category=${category}` : "";
			const res = await axios.get(`/blogs${query}`);
			set({ blogs: res.data.blogs || [] });
		} catch (err) {
			console.error(err);
		} finally {
			set({ loading: false });
		}
	},

	fetchBlog: async (id: string) => {
		try {
			set({ loading: true });

			const res = await axios.get(`/blogs/${id}`);

			console.log(res.data);

			set({ blog: res.data.blog });
		} catch (error) {
			console.error(error);
		} finally {
			set({ loading: false });
		}
	},

	setActiveCategory: category => {
		set({ activeCategory: category });
		get().fetchBlogs(category);
	},
}));
