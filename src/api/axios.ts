import Axios from "axios";
import Cookies from "js-cookie";
import { configs } from "@/constants/configs";
import { logout } from "@/utils/helper/authentication";

const axiosInstance = Axios.create({
	timeout: 3 * 60 * 1000,
	baseURL: configs.API_DOMAIN,
});

let isRefreshing = false;
let failedQueue: any = [];
const processQueue = (error: any, token: string | null | undefined = null) => {
	failedQueue.forEach((prom: any) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});
	failedQueue = [];
};

axiosInstance.interceptors.request.use(
	(config: any) => {
		// eslint-disable-next-line no-param-reassign
		const token = Cookies.get("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: any) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	(response: any) => response,
	async (error: any) => {
		const originalConfig = error.config;

		const { response } = error || {};
		const { data } = response || {};
		const { errorKey } = data || {};

		if (
			["User_Blocked", "Store_Blocked"].includes(
				error?.response?.data?.errorCode
			)
		) {
			logout(true);
			return Promise.reject({ notShowError: true });
		}

		if (error.response.status !== 401) {
			return Promise.reject(error);
		}
		const refreshToken = Cookies.get("refreshToken");
		if (!refreshToken) {
			logout(true);
			return Promise.reject(error);
		}
		if (
			((error.response && error.response.status === 401) ||
				errorKey === "Token_Expired") &&
			!originalConfig.retry
		) {
			if (isRefreshing) {
				try {
					const queuePromise: any = await new Promise(
						(resolve: any, reject: any) => {
							failedQueue.push({ resolve, reject });
						}
					);
					originalConfig.headers.Authorization = `Bearer ${queuePromise.token}`;
					return axiosInstance(originalConfig);
				} catch (err) {
					return Promise.reject(err);
				}
			}
		}
		originalConfig.retry = true;
		isRefreshing = true;
		return Axios.post(`${configs.API_DOMAIN}refresh-token`, {
			refreshToken,
		})
			.then((res: any) => {
				if ([200, 201].includes(res.status)) {
					const data = res.data.data;
					Cookies.set("token", data);
					originalConfig.headers.Authorization = `Bearer ${data}`;
					processQueue(null, data);
					return Axios(originalConfig);
				} else {
					logout();
					return Promise.reject(error);
				}
			})
			.catch((err) => {
				logout();
				processQueue(err, null);
				return Promise.reject(error);
			})
			.finally(() => {
				isRefreshing = false;
			});
	}
);

export default axiosInstance;

export const sendGet = <T = any>(url: string, params?: any) =>
	axiosInstance.get<T>(url, { params }).then((res) => res.data);
export const sendPost = <T = any>(
	url: string,
	params?: any,
	queryParams?: any
) =>
	axiosInstance
		.post<T>(url, params, { params: queryParams })
		.then((res) => res.data);
export const sendPut = (url: string, params?: any) =>
	axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: any) =>
	axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: any) =>
	axiosInstance.delete(url, { params }).then((res) => res.data);
