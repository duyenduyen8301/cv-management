import CreateCVPage from "@/pages/mypage/cvManagemant/create";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/mypage/create-cv")({
	component: CreateCVPage,
});
