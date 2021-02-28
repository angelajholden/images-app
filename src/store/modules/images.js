import api from "../../api/imgur";
// import qs from "qs";
// import { router } from "../../main";

const state = {
	images: [],
};

const getters = {
	allImages: (state) => state.images,
};

const actions = {
	async fetchImages({ rootState }) {
		const { token } = rootState.auth;
		const response = await api.fetchImages(token);
		console.log(response);
	},
};

const mutations = {
	setImages: (state, images) => {
		state.images = images;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
