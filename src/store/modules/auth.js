import api from "../../api/imgur";
import qs from "qs";
// in {} bc defined as const in main.js
import { router } from "../../main";

// not at all related to the 'state' parameter of the imgur api url
const state = {
	token: window.localStorage.getItem("imgur_token"),
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
		window.localStorage.setItem("imgur_token", query.access_token);
		// time to let the user loose in the app
		router.push("/");
	},
	logout: ({ commit }) => {
		// mutations.setToken DO NOT DO THIS
		commit("setToken", null);
		window.localStorage.removeItem("imgur_token");
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
