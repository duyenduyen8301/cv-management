import { Link } from "@tanstack/react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Bell, User, Settings, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser, type User as AuthUser, logout } from "@/lib/auth";
import { useRouter } from "@tanstack/react-router";

export function Sidebar() {
	const [pathname, setPathname] = useState(window.location.pathname);
	const router = useRouter();
	const [user, setUser] = useState<AuthUser | null>(null);

	useEffect(() => {
		// Get the current user
		const currentUser = getCurrentUser();
		setUser(currentUser);
	}, []);

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((part) => part[0])
			.join("")
			.toUpperCase()
			.substring(0, 2);
	};

	const handleLogout = async () => {
		await logout();
		router.navigate({ to: "/login" });
	};

	const navItems = [
		// {
		// 	title: "My Applications",
		// 	href: "/mypage/applications",
		// 	icon: <Briefcase className="h-5 w-5" />,
		// },
		{
			title: "CV management",
			href: "/mypage/cv-management",
			icon: <FileText className="h-5 w-5" />,
		},
		// {
		// 	title: "Messages",
		// 	href: "/mypage/messages",
		// 	icon: <MessageSquare className="h-5 w-5" />,
		// },
		{
			title: "Notifications",
			href: "/mypage/notifications",
			icon: <Bell className="h-5 w-5" />,
		},
		{
			title: "Profile",
			href: "/mypage/profile",
			icon: <User className="h-5 w-5" />,
		},
		{
			title: "Settings",
			href: "/mypage/settings",
			icon: <Settings className="h-5 w-5" />,
		},
	];

	return (
		<div className="w-64 h-full bg-gradient-to-b from-darkgreen to-darkgreen/90 text-white p-6">
			<div className="flex flex-col h-full">
				<div className="flex flex-col items-center text-center mb-8">
					<Avatar className="h-20 w-20 mb-4 border-2 border-white">
						<AvatarImage src={user?.avatar} alt={user?.name} />
						<AvatarFallback className="bg-gradient-to-br from-accent1 to-accent2 text-darkgreen text-xl font-bold">
							{getInitials(user?.name || "")}
						</AvatarFallback>
					</Avatar>
					<h2 className="font-semibold text-lg text-white">{user?.name}</h2>
					<p className="text-sm text-white/70">{user?.position}</p>
				</div>

				<nav className="space-y-1 mb-8">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setPathname(item.href)}
							className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
								pathname === item.href
									? "bg-white/20 text-white font-medium"
									: "text-white/70 hover:bg-white/10 hover:text-white"
							}`}
						>
							<span className="mr-3 text-white/80">{item.icon}</span>
							{item.title}
						</Link>
					))}
				</nav>

				<div className="mt-auto">
					<div className="bg-white/10 rounded-lg p-4 mb-6">
						<h3 className="font-medium text-white mb-2">Profile Completion</h3>
						<Progress value={85} className="h-2 mb-2 bg-white/20">
							<div
								className="h-full bg-accent1 rounded-full"
								style={{ width: "85%" }}
							></div>
						</Progress>
						<p className="text-xs text-white/70">
							Your profile is 85% complete. Complete your profile to increase
							your chances of getting hired.
						</p>
						<Link href="/mypage/profile">
							<Button
								variant="link"
								className="text-xs text-accent1 p-0 h-auto mt-1"
							>
								Complete Profile →
							</Button>
						</Link>
					</div>

					<Button
						variant="ghost"
						className="w-full justify-start text-white hover:text-white hover:bg-white/10"
						onClick={handleLogout}
					>
						<LogOut className="h-5 w-5 mr-3" />
						Sign Out
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
