import EditCVPage from "@/pages/mypage/cvManagemant/edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/mypage/edit-cv/$id")({
	component: EditCVPage,
});
