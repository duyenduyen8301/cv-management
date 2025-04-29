import type React from "react";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileSidebarProps {
	children: React.ReactNode;
	side?: "left" | "right";
	className?: string;
	triggerClassName?: string;
}

export function MobileSidebar({
	children,
	side = "left",
	className = "",
	triggerClassName = "",
}: MobileSidebarProps) {
	const [open, setOpen] = useState(false);
	const pathname = window.location.pathname;

	// Close sidebar when route changes
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className={`lg:hidden ${triggerClassName}`}
				>
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle filters</span>
				</Button>
			</SheetTrigger>
			<SheetContent side={side} className={`p-0 overflow-y-auto ${className}`}>
				{children}
			</SheetContent>
		</Sheet>
	);
}
