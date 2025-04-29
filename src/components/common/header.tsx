import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isLoggedIn, logout } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser } from "@/lib/auth";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings, Menu, MessageSquare } from "lucide-react";
import { deleteCookie } from "cookies-next";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
	const [pathname, setPathname] = useState(window.location.pathname);
	const router = useRouter();
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState<any>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		setLoggedIn(isLoggedIn());
		setUser(getCurrentUser());
		setMobileMenuOpen(false); // Close mobile menu on route change
	}, [pathname]);

	const getInitials = (name: string) => {
		if (!name) return "U";
		return name
			.split(" ")
			.map((part) => part[0])
			.join("")
			.toUpperCase()
			.substring(0, 2);
	};

	const handleLogout = async () => {
		await logout();
		deleteCookie("auth");
		router.navigate({ to: "/login" });
	};

	const navItems = [
		{ name: "Home", href: "/" },
		{
			name: "Chat JD",
			href: "/chat",
			icon: <MessageSquare className="h-4 w-4 mr-1" />,
		},
		{ name: "CVs", href: "/cvs" },
		{ name: "Services", href: "/services" },
		{ name: "Pricing", href: "/pricing" },
		{ name: "About Us", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header className="bg-darkgreen text-white py-4 fixed top-0 z-50 w-full">
			<div className="container px-4 sm:px-6 mx-auto flex items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="flex items-center gap-2">
						<span className="text-xl font-bold">RecruitPro</span>
					</Link>
					<nav className="hidden md:flex ml-6 gap-6">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium transition-colors hover:text-accent1 ${
									pathname === item.href ? "text-accent1" : "text-white"
								}`}
								onClick={() => setPathname(item.href)}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex items-center gap-2">
					{loggedIn ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="relative h-8 w-8 rounded-full"
								>
									<Avatar className="h-8 w-8">
										<AvatarImage src={user?.avatar} alt={user?.name} />
										<AvatarFallback className="bg-gradient-to-br from-darkgreen to-accent2 text-white text-sm font-bold">
											{getInitials(user?.name)}
										</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56" align="end" forceMount>
								<DropdownMenuLabel className="font-normal">
									<div className="flex flex-col space-y-1">
										<p className="text-sm font-medium leading-none">
											{user?.name}
										</p>
										<p className="text-xs leading-none text-muted-foreground">
											{user?.email}
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={() =>
										router.navigate({ to: "/mypage/applications" })
									}
								>
									<User className="mr-2 h-4 w-4" />
									<span>My Page</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => router.navigate({ to: "/mypage/profile" })}
								>
									<User className="mr-2 h-4 w-4" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => router.navigate({ to: "/mypage/settings" })}
								>
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={handleLogout}>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<>
							<Link href="/login" className="hidden sm:block">
								<Button
									variant="ghost"
									className="text-white hover:text-accent1 hover:bg-transparent"
								>
									Log in
								</Button>
							</Link>
							<Link href="/register" className="hidden sm:block">
								<Button className="bg-accent1 text-darkgreen hover:bg-accent1/90">
									Sign up
								</Button>
							</Link>
						</>
					)}

					{/* Mobile menu */}
					<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="md:hidden text-white border-white"
							>
								<Menu className="h-5 w-5 text-darkgreen" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[80%] max-w-[320px] bg-darkgreen text-white p-0"
						>
							<div className="flex flex-col h-full">
								<div className="p-6 border-b border-white/10">
									{loggedIn ? (
										<div className="flex items-center gap-4">
											<Avatar className="h-10 w-10">
												<AvatarImage
													src={user?.avatar || "/placeholder.svg"}
													alt={user?.name}
												/>
												<AvatarFallback className="bg-gradient-to-br from-accent1 to-accent2 text-darkgreen text-sm font-bold">
													{getInitials(user?.name)}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium">{user?.name}</p>
												<p className="text-xs text-white/70">{user?.email}</p>
											</div>
										</div>
									) : (
										<div className="flex gap-4">
											<Link href="/login" className="flex-1">
												<Button
													variant="outline"
													className="w-full border-white text-white hover:bg-white/10"
												>
													Log in
												</Button>
											</Link>
											<Link href="/register" className="flex-1">
												<Button className="w-full bg-accent1 text-darkgreen hover:bg-accent1/90">
													Sign up
												</Button>
											</Link>
										</div>
									)}
								</div>

								<nav className="flex flex-col p-6 space-y-1 overflow-y-auto">
									{navItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={`py-3 px-4 rounded-md ${
												pathname === item.href
													? "bg-white/10 text-accent1"
													: "text-white hover:bg-white/5"
											}`}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</nav>

								{loggedIn && (
									<div className="mt-auto p-6 border-t border-white/10">
										<Button
											variant="ghost"
											className="w-full justify-start text-white hover:bg-white/10"
											onClick={() => {
												handleLogout();
												setMobileMenuOpen(false);
											}}
										>
											<LogOut className="mr-2 h-4 w-4" />
											Sign Out
										</Button>
									</div>
								)}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
