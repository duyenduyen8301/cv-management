import CVsPage from "@/pages/mypage/cvManagemant";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/mypage/cv-management")({
	component: MyCVLayout,
});

function MyCVLayout() {
	return (
		<div className="w-full max-w-full overflow-x-hidden">
			<CVsPage />

			<Outlet />
		</div>
	);
}
