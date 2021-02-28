import api from "../../api/imgur";
import qs from "qs";

// not at all related to the 'state' parameter of the imgur api url
const state = {
	token: null,
};

const getters = {
	isLoggedIn: (state) => !!state.token,
};

const actions = {
	login: () => {
		api.login();
	},
	finalizeLogin: ({ commit }, hash) => {
		const query = qs.parse(hash.replace("#", ""));

		commit("setToken", query.access_token);
	},
	logout: ({ commit }) => {
		// mutations.setToken DO NOT DO THIS
		commit("setToken", null);
	},
};

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
