import { toast } from "sonner";

export default function useCustomToast() {
	const showInfoToast = (title: string, description?: string) => {
		toast.info(title, {
			description,
			duration: 4000,
			position: "top-center",
			style: { backgroundColor: "#3490dc", color: "#fff" },
		});
	};

	const showErrorToast = (title: string, description?: string) => {
		toast.error(title, {
			description,
			duration: 4000,
			position: "top-center",
			style: { backgroundColor: "#e3342f", color: "#fff" },
		});
	};

	const showSuccessToast = (title: string, description?: string) => {
		toast.success(title, {
			description,
			duration: 4000,
			position: "top-center",
			style: { backgroundColor: "#38c172", color: "#fff" },
		});
	};

	return { showInfoToast, showErrorToast, showSuccessToast };
}
