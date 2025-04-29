import ApplyJobPage from "@/pages/mypage/applications/apply";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/mypage/apply")({
	component: ApplyJobPage,
});
