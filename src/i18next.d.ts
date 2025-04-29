import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import vi from 'locales/vi.json';
// import en from 'locales/en.json';
import ja from "@/assets/locales/ja/translation.json";

/**
 * @description Fix ant design button text 2 character, add space after
 */
function fixAntDesignButtonText(data: any) {
	Object.keys(data).forEach((key) => {
		if (typeof data[key] === "string" && data[key].length === 2) {
			data[key] += " ";
		} else if (typeof data[key] === "object") {
			fixAntDesignButtonText(data[key]);
		}
	});
}
fixAntDesignButtonText(ja);

i18n
	.use(initReactI18next)
	// .use(LanguageDetector)
	.init({
		fallbackLng: "ja",
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		resources: {
			// vi: { translation: vi },
			// en: { translation: en },
			ja: { translation: ja },
		},
	});
