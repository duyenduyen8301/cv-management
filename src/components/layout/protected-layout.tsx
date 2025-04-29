import { Navigate, Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "../ui/sidebar";
import { ReactNode } from "react";
import { MobileSidebar } from "../common/mobile-sidebar";

import Sidebar from "../mypage/sidebar";
import AppLayout from "./app-layout";
import { getCurrentUser } from "@/lib/auth";
interface ProtectedLayoutProps {
	children?: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
	const user = getCurrentUser();

	if (!user) {
		return <Navigate to="/login" />;
	}

	return (
		<>
			<AppLayout>
				<SidebarProvider>
					<div className="flex pt-16 w-full">
						{/* Desktop Sidebar */}
						<div className="hidden lg:block">
							<Sidebar />
						</div>

						<div className="lg:hidden fixed z-40 left-4 top-20">
							<MobileSidebar>
								<Sidebar />
							</MobileSidebar>
						</div>

						<main className="flex-1 bg-gray-50 h-full w-full">
							{children || <Outlet />}
						</main>
					</div>
				</SidebarProvider>
			</AppLayout>
		</>
	);
}
