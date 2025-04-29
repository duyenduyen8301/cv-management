import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { MobileSidebar } from "@/components/common/mobile-sidebar";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "@tanstack/react-router";
import { Filter } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import FilterSidebar from "@/components/searchCV";
import { Progress } from "@/components/ui/progress";

export default function SearchResultsPage() {
	const queryClient = useQueryClient();

	const [searchResults, setSearchResults] = useState([
		{
			id: 1,
			name: "John Smith",
			position: "Senior Software Engineer",
			experience: "8 years",
			location: "New York, USA",
			skills: ["JavaScript", "React", "Node.js", "TypeScript"],
			matchPercentage: 95,
		},
		{
			id: 2,
			name: "Emily Johnson",
			position: "UX/UI Designer",
			experience: "5 years",
			location: "San Francisco, USA",
			skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
			matchPercentage: 85,
		},
		{
			id: 3,
			name: "Michael Chen",
			position: "Product Manager",
			experience: "6 years",
			location: "Seattle, USA",
			skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
			matchPercentage: 75,
		},
		{
			id: 4,
			name: "Sarah Williams",
			position: "Marketing Specialist",
			experience: "4 years",
			location: "Chicago, USA",
			skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
			matchPercentage: 65,
		},
		{
			id: 5,
			name: "David Rodriguez",
			position: "Data Scientist",
			experience: "7 years",
			location: "Austin, USA",
			skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
			matchPercentage: 55,
		},
		{
			id: 6,
			name: "Lisa Kim",
			position: "Financial Analyst",
			experience: "5 years",
			location: "Boston, USA",
			skills: ["Financial Modeling", "Excel", "Forecasting", "Budgeting"],
			matchPercentage: 45,
		},
		{
			id: 7,
			name: "James Wilson",
			position: "HR Manager",
			experience: "9 years",
			location: "Denver, USA",
			skills: ["Recruitment", "Employee Relations", "Training", "Compliance"],
			matchPercentage: 35,
		},
		{
			id: 8,
			name: "Olivia Martinez",
			position: "Project Manager",
			experience: "6 years",
			location: "Miami, USA",
			skills: [
				"Project Planning",
				"Risk Management",
				"Stakeholder Management",
				"Scrum",
			],
			matchPercentage: 25,
		},
	]);

	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="container px-4 sm:px-6 py-8 pt-20">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Desktop Filter Sidebar */}
					<div className="hidden lg:block lg:col-span-1">
						<FilterSidebar />
					</div>

					{/* Mobile Filter Sidebar */}
					<div className="lg:hidden fixed z-40 left-4 top-20">
						<MobileSidebar
							side="left"
							className="w-[85%] max-w-[320px] bg-white overflow-y-auto"
							triggerClassName="bg-white text-darkgreen border-darkgreen/20"
						>
							<FilterSidebar />
						</MobileSidebar>
					</div>

					<div className="lg:col-span-3 col-span-1">
						<div className="flex justify-between items-center mb-6 flex-wrap gap-4">
							<div className="flex items-center gap-2">
								<div className="lg:hidden">
									<Button
										variant="outline"
										size="sm"
										className="flex items-center gap-2 border-darkgreen/20 text-darkgreen"
									>
										<Filter className="h-4 w-4" />
										Filters
									</Button>
								</div>
								<p className="text-darkgreen/70">
									Showing {searchResults.length} results
								</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-darkgreen/70 hidden sm:inline">
									Sort by:
								</span>
								<Select defaultValue="match">
									<SelectTrigger className="w-[180px] border-darkgreen/20">
										<SelectValue placeholder="Sort by" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="match">Match Percentage</SelectItem>
										<SelectItem value="recent">Most Recent</SelectItem>
										<SelectItem value="experience-high">
											Experience (High to Low)
										</SelectItem>
										<SelectItem value="experience-low">
											Experience (Low to High)
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className="space-y-4">
							{searchResults.map((result) => (
								<Card
									key={result.id}
									className="overflow-hidden border-darkgreen/10 hover:shadow-md transition-shadow"
								>
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row gap-6">
											<div className="flex flex-col items-center md:items-start">
												<Avatar className="h-20 w-20 mb-2">
													{/* <AvatarImage src={result.avatar || "/placeholder.svg"} alt={result.name} /> */}
													<AvatarFallback className="bg-gradient-to-br from-accent1 to-accent2 text-darkgreen text-sm font-bold">
														{result.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>
												<div className="w-full flex flex-col items-center">
													<div className="flex items-center justify-center mb-1 w-full">
														<span className="text-sm font-medium mr-2">
															Match:
														</span>
														<span
															className={`text-sm font-bold ${
																result.matchPercentage >= 90
																	? "text-green-600"
																	: result.matchPercentage >= 80
																		? "text-green-500"
																		: result.matchPercentage >= 70
																			? "text-yellow-600"
																			: "text-orange-500"
															}`}
														>
															{result.matchPercentage}%
														</span>
													</div>
													<Progress
														value={result.matchPercentage}
														className="h-1.5 w-full mb-3"
														//   indicatorClassName={
														// 	result.matchPercentage >= 90
														// 	  ? "bg-green-600"
														// 	  : result.matchPercentage >= 80
														// 		? "bg-green-500"
														// 		: result.matchPercentage >= 70
														// 		  ? "bg-yellow-600"
														// 		  : "bg-orange-500"
														//   }
													/>
													<Link href={`/cv-detail/${result.id}`}>
														<Button
															variant="outline"
															size="sm"
															className="w-full md:w-auto border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
														>
															View Profile
														</Button>
													</Link>
												</div>
											</div>
											<div className="flex-1">
												<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
													<h3 className="font-semibold text-lg text-darkgreen">
														{result.name}
													</h3>
													<p className="text-darkgreen/70">{result.location}</p>
												</div>
												<p className="font-medium mb-2 text-darkgreen">
													{result.position}
												</p>
												<p className="text-sm text-darkgreen/70 mb-4">
													<span className="inline-flex items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															className="mr-1"
														>
															<circle cx="12" cy="12" r="10" />
															<polyline points="12 6 12 12 16 14" />
														</svg>
														{result.experience} experience
													</span>
												</p>
												<div className="flex flex-wrap gap-2">
													{result.skills.map((skill, index) => (
														<Badge
															key={index}
															variant="outline"
															className="text-xs bg-white text-darkgreen border-darkgreen/20"
														>
															{skill}
														</Badge>
													))}
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
						<div className="mt-8">
							<Pagination>
								<PaginationContent>
									<PaginationItem>
										<PaginationPrevious
											href="#"
											className="text-darkgreen hover:text-accent2"
										/>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink
											href="#"
											isActive
											className="bg-darkgreen text-white hover:bg-darkgreen/90"
										>
											1
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink
											href="#"
											className="text-darkgreen hover:text-accent2"
										>
											2
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink
											href="#"
											className="text-darkgreen hover:text-accent2"
										>
											3
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationEllipsis className="text-darkgreen" />
									</PaginationItem>
									<PaginationItem>
										<PaginationNext
											href="#"
											className="text-darkgreen hover:text-accent2"
										/>
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
