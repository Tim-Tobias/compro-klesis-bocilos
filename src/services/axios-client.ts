/** @format */

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use(
	config => {
		if (!axios.defaults.headers['X-TOKEN-AUTH']) {
			config.headers["X-TOKEN-AUTH"] = import.meta.env.VITE_TOKEN_AUTH;
		}
		return config;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);
export default axios;
