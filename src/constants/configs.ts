export const configs = {
	APP_ENV: import.meta.env["VITE_PUBLIC_ENV"],
	API_DOMAIN: import.meta.env["VITE_API_URL"],
	DOMAIN: import.meta.env["VITE_PUBLIC_APP_DOMAIN"],
	DOMAIN_SSL: import.meta.env["VITE_PUBLIC_APP_DOMAIN_SSL"],
	SECRET_TWITTER: import.meta.env["VITE_PUBLIC_SECRET_TWITTER"],
	KEY_TWITTER: import.meta.env["VITE_PUBLIC_KEY_TWITTER"],
	AWS_DOWNLOAD: import.meta.env["VITE_PUBLIC_AWS_DOWNLOAD"],
	CLIENT_ID_LINE: import.meta.env["VITE_PUBLIC_CLIENT_ID_LINE"],
	CLIENT_ID_YAHOO: import.meta.env["VITE_PUBLIC_CLIENT_ID_YAHOO"],
	GA_TAG: import.meta.env["VITE_PUBLIC_GA_TAG"],
	CONTRACT_ADDRESS: import.meta.env["VITE_PUBLIC_CONTRACT_ADDRESS"],
	NODE_ENV: import.meta.env["MODE"],
};
