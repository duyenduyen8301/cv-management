import { ReactNode } from "react";
import { Outlet } from "@tanstack/react-router";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Toaster } from "sonner";

interface AppLayoutProps {
	children?: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<Header />
			<div className=" min-h-screen">{children || <Outlet />}</div>
			<Toaster />
			<Footer />
		</>
	);
}
