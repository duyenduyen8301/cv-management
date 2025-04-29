import { ReactNode } from "react";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "../ui/toaster";
import Header from "../common/header";
import Footer from "../common/footer";

interface RootLayoutProps {
	children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50 border-t-4 border-darkgreen">
			<Header />
			<main className="flex-1 pt-16">{children || <Outlet />}</main>
			<Toaster />
			<Footer />
		</div>
	);
}
