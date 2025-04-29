import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { getInitials } from "@/utils";

export default function FeaturedCandidates() {
	const featuredCVs = [
		{
			id: 1,
			name: "John Smith",
			position: "Senior Software Engineer",
			experience: "8 years",
			location: "New York, NY",
			skills: ["React", "JavaScript", "TypeScript", "Node.js"],

			rating: 4.9,
		},
		{
			id: 2,
			name: "Sarah Johnson",
			position: "UX/UI Designer",
			experience: "5 years",
			location: "San Francisco, CA",
			skills: ["Figma", "Adobe XD", "User Research", "Sketch"],

			rating: 4.7,
		},
		{
			id: 3,
			name: "Michael Chen",
			position: "Data Scientist",
			experience: "6 years",
			location: "Boston, MA",
			skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],

			rating: 4.8,
		},
		{
			id: 4,
			name: "Emily Rodriguez",
			position: "Product Manager",
			experience: "7 years",
			location: "Austin, TX",
			skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],

			rating: 4.6,
		},
	];

	return (
		<section className="py-16">
			<div className="container">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-darkgreen mb-4">
						Featured Candidates
					</h2>
					<p className="text-darkgreen/70 max-w-2xl mx-auto">
						Discover our top candidates with exceptional skills and experience
						ready to join your team
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredCVs.map((cv) => (
						<Card key={cv.id} className="overflow-hidden border shadow-md">
							<CardContent className="p-6">
								<div className="flex flex-col items-center text-center mb-4">
									<Avatar className="h-20 w-20 mb-4">
										{/* <AvatarImage src={cv?.avatar} alt={cv.name} /> */}
										<AvatarFallback className="bg-gradient-to-br from-darkgreen to-accent2 text-white text-xl font-bold">
											{getInitials(cv.name)}
										</AvatarFallback>
									</Avatar>
									<h3 className="font-semibold text-lg text-darkgreen">
										{cv.name}
									</h3>
									<p className="text-darkgreen/70">{cv.position}</p>
								</div>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
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
											className="text-darkgreen/60"
										>
											<path d="M12 20v-8" />
											<path d="M18 20V10" />
											<path d="M6 20v-4" />
										</svg>
										<span className="text-sm text-darkgreen/70">
											{cv.experience} experience
										</span>
									</div>
									<div className="flex items-center gap-2">
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
											className="text-darkgreen/60"
										>
											<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										<span className="text-sm text-darkgreen/70">
											{cv.location}
										</span>
									</div>
									<div className="flex items-center gap-2">
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
											className="text-darkgreen/60"
										>
											<path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
										</svg>
										<span className="text-sm text-darkgreen/70">
											{cv.rating} rating
										</span>
									</div>
								</div>
								<div className="mt-4 flex flex-wrap gap-2">
									{cv.skills.slice(0, 3).map((skill, index) => (
										<Badge
											key={index}
											variant="outline"
											className="text-xs bg-white text-darkgreen border-darkgreen/20"
										>
											{skill}
										</Badge>
									))}
									{cv.skills.length > 3 && (
										<Badge
											variant="outline"
											className="text-xs bg-white text-darkgreen/60 border-darkgreen/20"
										>
											+{cv.skills.length - 3}
										</Badge>
									)}
								</div>
							</CardContent>
							<CardFooter className="p-6 pt-0">
								<Button
									variant="outline"
									className="w-full border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
									asChild
								>
									<Link href={`/cv/${cv.id}`}>View Profile</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="flex justify-center mt-10">
					<Button className="bg-darkgreen hover:bg-darkgreen/90" asChild>
						<Link href="/cvs">View All Candidates</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
