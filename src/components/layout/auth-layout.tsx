import { Outlet } from "@tanstack/react-router";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
interface AuthLayoutProps {
	children?: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className="flex items-center justify-center min-h-sreen">
			<main className="flex-1">
				{children || <Outlet />}
				<Toaster />
			</main>
		</div>
	);
}
