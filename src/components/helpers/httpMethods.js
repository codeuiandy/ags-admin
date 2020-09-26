import axios from "axios";
import { getToken } from "./authService";
import { hideLoader } from "../helpers/loader";
import { NotificationManager } from "react-notifications";

const token = getToken();
const AUTHORIZATION = "authorization";
// export const baseUrl = 'https://api-9to5chick.herokuapp.com'
// export const baseUrl = 'http://127.0.0.1:8080'

// const http = axios.create({
//   baseURL: 'http://127.0.0.1:8080/api',
//   // baseURL: '/api',
//   headers: { Authorization: token },
// });

export let baseUrl = "https://www.timmzy.com/api/v1/rest-auth/";
// export let baseUrl = "https://api-9to5chick.herokuapp.com";

if (process.env.REACT_APP_NODE_ENV === "development") {
	baseUrl = "http://127.0.0.1:8080";
}

export const httpPost = async (url, postBody) => {
	try {
		const { data } = await axios.post(`${baseUrl}${url}`, postBody, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};

export const httpGet = async (url) => {
	try {
		const { data } = await axios.get(`${baseUrl}/api${url}`, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		if (error.response.data.code === 401 && error.response.data.message === 'Unauthorized, Your token is invalid or expired') {
			NotificationManager.error(
				error.response.data.message || "Something went wrong. Please retry.",
				"Oops!",
				3000
			);
			localStorage.removeItem("api_token");
			return window.location.href = '/login';
		} else {
			return error;
		}
	}
};

export const httpPatch = async (url, postBody) => {
	try {
		const { data } = await axios.patch(`${baseUrl}/api${url}`, postBody, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};

export const httpDelete = async (url, postBody) => {
	try {
		const { data } = await axios.delete(`${baseUrl}/api${url}`, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};
