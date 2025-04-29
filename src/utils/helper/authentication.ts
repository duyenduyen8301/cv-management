import Cookies from "js-cookie";
import { QueryKey } from "@/constants/index";
import { ROUTERS } from "@/constants/router";
import _ from "lodash";
import { configs } from "@/constants/configs";
import { queryClient } from "@/App";
import { useNavigate } from "@tanstack/react-router";
import i18n from "i18next";

export const logout = (disableRouter?: boolean) => {
	const navigate = useNavigate();
	Cookies.remove("token");
	Cookies.remove("refreshToken");
	Cookies.remove("isFirstLogin");
	queryClient.setQueryData([QueryKey.PROFILE], null);

	if (!disableRouter) {
		navigate({ to: ROUTERS.HOME });
	}
};

export const handleErrorMessage = (error: any, toast: any) => {
	if (error.notShowError) return;

	if (configs.APP_ENV !== "prod") {
		// tslint:disable-next-line: no-console
	}
	toast({
		variant: "destructive",
		description: getErrorMessage(error),
	});
};

export const getErrorMessage = (error: any) => {
	if (error?.response?.data?.errorCode === "Invalid_Input") {
		return i18n.t("login.loginFailed");
	}
	if (
		error?.response?.data?.errorMessage &&
		Array.isArray(error?.response?.data?.errorMessage) &&
		error?.response?.data?.errorMessage?.length > 0
	) {
		return error?.response?.data?.errorMessage[0];
	}
	return (
		error?.response?.data?.errorMessage ||
		error?.message ||
		i18n.t("common.somethingWentWrong")
	);
};
