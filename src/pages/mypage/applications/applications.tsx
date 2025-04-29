import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationsList } from "@/components/mypage/applications-list";
import { Link } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";

export default function ApplicationsPage() {
	return (
		<>
			<div className="p-8">
				<div className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-2xl font-bold text-darkgreen">
							My Applications
						</h1>
						<p className="text-darkgreen/70">
							Track and manage your job applications
						</p>
					</div>
					<Link href="/mypage/apply">
						<Button className="bg-darkgreen hover:bg-darkgreen/90">
							<PlusCircle className="mr-2 h-4 w-4" />
							Apply for Jobs
						</Button>
					</Link>
				</div>

				<Card>
					<CardContent className="p-6">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-semibold text-darkgreen">
								Your Job Applications
							</h2>
							<div className="flex items-center">
								<span className="text-sm text-darkgreen/70 mr-2">
									All Status
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m6 9 6 6 6-6" />
								</svg>
							</div>
						</div>
						<ApplicationsList />
					</CardContent>
				</Card>
			</div>
		</>
	);
}
