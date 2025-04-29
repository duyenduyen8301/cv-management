import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
	Download,
	Mail,
	Phone,
	MapPin,
	Globe,
	Linkedin,
	Github,
	Calendar,
	Building,
	GraduationCap,
	Award,
	ArrowLeft,
} from "lucide-react";

// Mock data for demonstration
const cvData = {
	id: "1",
	fullName: "John Smith",
	jobTitle: "Senior Software Engineer",
	email: "john.smith@example.com",
	phone: "+1 (555) 123-4567",
	location: "New York, NY",
	website: "www.johnsmith.dev",
	linkedin: "linkedin.com/in/johnsmith",
	github: "github.com/johnsmith",

	summary:
		"Experienced software engineer with over 8 years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about creating efficient, user-friendly solutions to complex problems.",
	experiences: [
		{
			position: "Senior Software Engineer",
			company: "TechCorp Inc.",
			location: "New York, NY",
			startDate: "2020-01",
			endDate: "",
			current: true,
			description:
				"Lead developer for the company's flagship product, responsible for architecture decisions and implementation of new features. Mentored junior developers and improved system performance by 40%.",
			technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
		},
		{
			position: "Software Engineer",
			company: "WebSolutions LLC",
			location: "Boston, MA",
			startDate: "2017-03",
			endDate: "2019-12",
			current: false,
			description:
				"Developed and maintained multiple client-facing web applications. Implemented CI/CD pipelines and reduced deployment time by 60%.",
			technologies: ["Angular", "Express", "PostgreSQL", "Docker"],
		},
	],
	education: [
		{
			degree: "Master of Science in Computer Science",
			institution: "Stanford University",
			location: "Stanford, CA",
			startDate: "2015-09",
			endDate: "2017-06",
			description:
				"Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
		},
		{
			degree: "Bachelor of Science in Computer Engineering",
			institution: "MIT",
			location: "Cambridge, MA",
			startDate: "2011-09",
			endDate: "2015-05",
			description:
				"Dean's List all semesters. Participated in multiple hackathons and coding competitions.",
		},
	],
	skills: [
		{ name: "JavaScript", level: 100 },
		{ name: "React", level: 100 },
		{ name: "Node.js", level: 75 },
		{ name: "TypeScript", level: 75 },
		{ name: "AWS", level: 50 },
	],
	languages: [
		{ name: "English", level: "Native" },
		{ name: "Spanish", level: "Intermediate" },
		{ name: "French", level: "Beginner" },
	],
	certifications: [
		{
			name: "AWS Certified Solutions Architect",
			issuer: "Amazon Web Services",
			date: "2021-05",
		},
		{
			name: "Google Cloud Professional Developer",
			issuer: "Google",
			date: "2020-03",
		},
	],
	projects: [
		{
			name: "E-commerce Platform",
			description:
				"Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and user authentication.",
			technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
			link: "https://github.com/johnsmith/ecommerce",
		},
		{
			name: "Task Management App",
			description:
				"Developed a task management application with real-time updates using Socket.io. Features include task assignment, deadline tracking, and progress monitoring.",
			technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
			link: "https://github.com/johnsmith/taskmanager",
		},
	],
	hourlyRate: "$75 - $95",
	availability: "2 weeks",
	remoteWork: true,
	relocate: false,
	preferredLocations: ["New York", "Boston", "Remote"],
	visaStatus: "Citizen",
};

export default function CVDetailPage() {
	//   const params = useParams()
	const [activeTab, setActiveTab] = useState("overview");

	// In a real app, you would fetch the CV data based on the ID
	// const { id } = params
	// const [cv, setCV] = useState(null)
	// useEffect(() => {
	//   const fetchCV = async () => {
	//     const response = await fetch(`/api/cvs/${id}`)
	//     const data = await response.json()
	//     setCV(data)
	//   }
	//   fetchCV()
	// }, [id])

	// For demonstration, we'll use the mock data
	const cv = cvData;

	const formatDate = (dateString: string) => {
		if (!dateString) return "Present";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		});
	};

	return (
		<>
			<main className="bg-lightcream min-h-screen py-12 pt-[120px]">
				<div className="container mx-auto px-4">
					<div className="mb-6">
						<Link
							href="/mypage/cv-management"
							className="inline-flex items-center text-darkgreen hover:text-darkgreen/80 transition-colors"
						>
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back
						</Link>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Left Column - Profile Information */}
						<div className="lg:col-span-1">
							<Card className="bg-white shadow-lg border-0 overflow-hidden">
								<div className="bg-gradient-to-r from-darkgreen to-darkgreen/80 p-6 text-white text-center">
									<Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-white">
										{/* <AvatarImage src={cv?.avatar} alt={cv.fullName} /> */}
										<AvatarFallback className="bg-gradient-to-br from-accent1 to-accent2 text-darkgreen text-4xl font-bold">
											{cv.fullName
												.split(" ")
												.map((part) => part[0])
												.join("")
												.toUpperCase()
												.substring(0, 2)}
										</AvatarFallback>
									</Avatar>
									<h1 className="text-2xl font-bold mb-1">{cv.fullName}</h1>
									<p className="text-white/80 mb-4">{cv.jobTitle}</p>

									<div className="flex justify-center space-x-2">
										<Button
											size="sm"
											variant="outline"
											className="bg-white/10 border-white/20 text-white hover:bg-white/20"
										>
											<Download className="h-4 w-4 mr-1" />
											Download CV
										</Button>
									</div>
								</div>

								<CardContent className="p-6">
									<div className="space-y-6">
										<div>
											<h2 className="text-lg font-semibold text-darkgreen mb-3 border-b border-gray-200 pb-2">
												Contact Information
											</h2>
											<ul className="space-y-3">
												<li className="flex items-start">
													<Mail className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
													<div>
														<p className="text-sm font-medium text-gray-700">
															Email
														</p>
														<a
															href={`mailto:${cv.email}`}
															className="text-darkgreen hover:text-darkgreen/80 transition-colors"
														>
															{cv.email}
														</a>
													</div>
												</li>
												<li className="flex items-start">
													<Phone className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
													<div>
														<p className="text-sm font-medium text-gray-700">
															Phone
														</p>
														<a
															href={`tel:${cv.phone}`}
															className="text-darkgreen hover:text-darkgreen/80 transition-colors"
														>
															{cv.phone}
														</a>
													</div>
												</li>
												<li className="flex items-start">
													<MapPin className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
													<div>
														<p className="text-sm font-medium text-gray-700">
															Location
														</p>
														<p>{cv.location}</p>
													</div>
												</li>
												{cv.website && (
													<li className="flex items-start">
														<Globe className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
														<div>
															<p className="text-sm font-medium text-gray-700">
																Website
															</p>
															<a
																href={`https://${cv.website}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-darkgreen hover:text-darkgreen/80 transition-colors"
															>
																{cv.website}
															</a>
														</div>
													</li>
												)}
												{cv.linkedin && (
													<li className="flex items-start">
														<Linkedin className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
														<div>
															<p className="text-sm font-medium text-gray-700">
																LinkedIn
															</p>
															<a
																href={`https://${cv.linkedin}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-darkgreen hover:text-darkgreen/80 transition-colors"
															>
																{cv.linkedin}
															</a>
														</div>
													</li>
												)}
												{cv.github && (
													<li className="flex items-start">
														<Github className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
														<div>
															<p className="text-sm font-medium text-gray-700">
																GitHub
															</p>
															<a
																href={`https://${cv.github}`}
																target="_blank"
																rel="noopener noreferrer"
																className="text-darkgreen hover:text-darkgreen/80 transition-colors"
															>
																{cv.github}
															</a>
														</div>
													</li>
												)}
											</ul>
										</div>

										<div>
											<h2 className="text-lg font-semibold text-darkgreen mb-3 border-b border-gray-200 pb-2">
												Skills
											</h2>
											<div className="space-y-3">
												{cv.skills.map((skill, index) => (
													<div key={index}>
														<div className="flex justify-between mb-1">
															<span className="text-sm font-medium text-gray-700">
																{skill.name}
															</span>
															<span className="text-xs text-gray-500">
																{skill.level === 25
																	? "Beginner"
																	: skill.level === 50
																		? "Intermediate"
																		: skill.level === 75
																			? "Advanced"
																			: "Expert"}
															</span>
														</div>
														<Progress
															value={skill.level}
															className="h-2 bg-gray-200"
														>
															<div
																className="h-full rounded-full bg-gradient-to-r from-darkgreen to-accent1"
																style={{ width: `${skill.level}%` }}
															></div>
														</Progress>
													</div>
												))}
											</div>
										</div>

										<div>
											<h2 className="text-lg font-semibold text-darkgreen mb-3 border-b border-gray-200 pb-2">
												Languages
											</h2>
											<ul className="space-y-2">
												{cv.languages.map((language, index) => (
													<li
														key={index}
														className="flex justify-between items-center"
													>
														<span className="text-gray-700">
															{language.name}
														</span>
														<Badge
															variant="outline"
															className="bg-darkgreen/10 text-darkgreen border-0"
														>
															{language.level}
														</Badge>
													</li>
												))}
											</ul>
										</div>

										<div>
											<h2 className="text-lg font-semibold text-darkgreen mb-3 border-b border-gray-200 pb-2">
												Job Preferences
											</h2>
											<ul className="space-y-3">
												<li className="flex justify-between">
													<span className="text-sm font-medium text-gray-700">
														Hourly Rate:
													</span>
													<span className="text-darkgreen font-medium">
														{cv.hourlyRate}
													</span>
												</li>
												<li className="flex justify-between">
													<span className="text-sm font-medium text-gray-700">
														Availability:
													</span>
													<span>{cv.availability}</span>
												</li>
												<li className="flex justify-between">
													<span className="text-sm font-medium text-gray-700">
														Remote Work:
													</span>
													<span>{cv.remoteWork ? "Yes" : "No"}</span>
												</li>
												<li className="flex justify-between">
													<span className="text-sm font-medium text-gray-700">
														Willing to Relocate:
													</span>
													<span>{cv.relocate ? "Yes" : "No"}</span>
												</li>
												<li>
													<span className="text-sm font-medium text-gray-700 block mb-1">
														Preferred Locations:
													</span>
													<div className="flex flex-wrap gap-2">
														{cv.preferredLocations.map((location, index) => (
															<Badge
																key={index}
																variant="outline"
																className="bg-darkgreen/5 border-darkgreen/20"
															>
																{location}
															</Badge>
														))}
													</div>
												</li>
												<li className="flex justify-between">
													<span className="text-sm font-medium text-gray-700">
														Visa Status:
													</span>
													<span>{cv.visaStatus}</span>
												</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Right Column - CV Content */}
						<div className="lg:col-span-2">
							<Card className="bg-white shadow-lg border-0 mb-6">
								<CardContent className="p-6">
									<Tabs
										defaultValue="overview"
										className="w-full"
										onValueChange={setActiveTab}
									>
										<TabsList className="bg-darkgreen/10 text-darkgreen mb-6">
											<TabsTrigger
												value="overview"
												className={
													activeTab === "overview"
														? "bg-darkgreen text-white data-[state=active]:bg-darkgreen data-[state=active]:text-white"
														: "text-darkgreen hover:bg-darkgreen/20"
												}
											>
												Overview
											</TabsTrigger>
											<TabsTrigger
												value="experience"
												className={
													activeTab === "experience"
														? "bg-darkgreen text-white data-[state=active]:bg-darkgreen data-[state=active]:text-white"
														: "text-darkgreen hover:bg-darkgreen/20"
												}
											>
												Experience
											</TabsTrigger>
											<TabsTrigger
												value="education"
												className={
													activeTab === "education"
														? "bg-darkgreen text-white data-[state=active]:bg-darkgreen data-[state=active]:text-white"
														: "text-darkgreen hover:bg-darkgreen/20"
												}
											>
												Education
											</TabsTrigger>
											<TabsTrigger
												value="projects"
												className={
													activeTab === "projects"
														? "bg-darkgreen text-white data-[state=active]:bg-darkgreen data-[state=active]:text-white"
														: "text-darkgreen hover:bg-darkgreen/20"
												}
											>
												Projects
											</TabsTrigger>
										</TabsList>

										<TabsContent value="overview" className="mt-0">
											<div className="space-y-8">
												<div>
													<h2 className="text-xl font-bold text-darkgreen mb-4">
														Professional Summary
													</h2>
													<p className="text-gray-700 leading-relaxed">
														{cv.summary}
													</p>
												</div>

												<div>
													<h2 className="text-xl font-bold text-darkgreen mb-4">
														Work Experience
													</h2>
													<div className="space-y-6">
														{cv.experiences
															.slice(0, 2)
															.map((experience, index) => (
																<div
																	key={index}
																	className="relative pl-6 border-l-2 border-darkgreen/20 hover:border-darkgreen transition-colors"
																>
																	<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-darkgreen"></div>
																	<div className="mb-1 flex justify-between">
																		<h3 className="text-lg font-semibold text-darkgreen">
																			{experience.position}
																		</h3>
																		<div className="flex items-center text-sm text-gray-500">
																			<Calendar className="h-4 w-4 mr-1" />
																			<span>
																				{formatDate(experience.startDate)} -{" "}
																				{experience.current
																					? "Present"
																					: formatDate(experience.endDate)}
																			</span>
																		</div>
																	</div>
																	<div className="flex items-center text-gray-600 mb-2">
																		<Building className="h-4 w-4 mr-1" />
																		<span className="font-medium">
																			{experience.company}
																		</span>
																		{experience.location && (
																			<>
																				<span className="mx-2">•</span>
																				<MapPin className="h-4 w-4 mr-1" />
																				<span>{experience.location}</span>
																			</>
																		)}
																	</div>
																	<p className="text-gray-700 mb-3">
																		{experience.description}
																	</p>
																	{experience.technologies &&
																		experience.technologies.length > 0 && (
																			<div className="flex flex-wrap gap-2">
																				{experience.technologies.map(
																					(tech, techIndex) => (
																						<Badge
																							key={techIndex}
																							variant="outline"
																							className="bg-darkgreen/5 border-darkgreen/20"
																						>
																							{tech}
																						</Badge>
																					)
																				)}
																			</div>
																		)}
																</div>
															))}
														{cv.experiences.length > 2 && (
															<Button
																variant="link"
																className="text-darkgreen hover:text-darkgreen/80"
																onClick={() => setActiveTab("experience")}
															>
																View all experience →
															</Button>
														)}
													</div>
												</div>

												<div>
													<h2 className="text-xl font-bold text-darkgreen mb-4">
														Education
													</h2>
													<div className="space-y-6">
														{cv.education.slice(0, 1).map((edu, index) => (
															<div
																key={index}
																className="relative pl-6 border-l-2 border-darkgreen/20 hover:border-darkgreen transition-colors"
															>
																<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-darkgreen"></div>
																<div className="mb-1 flex justify-between">
																	<h3 className="text-lg font-semibold text-darkgreen">
																		{edu.degree}
																	</h3>
																	<div className="flex items-center text-sm text-gray-500">
																		<Calendar className="h-4 w-4 mr-1" />
																		<span>
																			{formatDate(edu.startDate)} -{" "}
																			{formatDate(edu.endDate)}
																		</span>
																	</div>
																</div>
																<div className="flex items-center text-gray-600 mb-2">
																	<GraduationCap className="h-4 w-4 mr-1" />
																	<span className="font-medium">
																		{edu.institution}
																	</span>
																	{edu.location && (
																		<>
																			<span className="mx-2">•</span>
																			<MapPin className="h-4 w-4 mr-1" />
																			<span>{edu.location}</span>
																		</>
																	)}
																</div>
																{edu.description && (
																	<p className="text-gray-700">
																		{edu.description}
																	</p>
																)}
															</div>
														))}
														{cv.education.length > 1 && (
															<Button
																variant="link"
																className="text-darkgreen hover:text-darkgreen/80"
																onClick={() => setActiveTab("education")}
															>
																View all education →
															</Button>
														)}
													</div>
												</div>

												{cv.certifications && cv.certifications.length > 0 && (
													<div>
														<h2 className="text-xl font-bold text-darkgreen mb-4">
															Certifications
														</h2>
														<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
															{cv.certifications.map((cert, index) => (
																<div
																	key={index}
																	className="bg-darkgreen/5 p-4 rounded-lg border border-darkgreen/10 hover:border-darkgreen/30 transition-colors"
																>
																	<div className="flex items-start">
																		<Award className="h-5 w-5 text-darkgreen mr-3 mt-0.5 flex-shrink-0" />
																		<div>
																			<h3 className="font-medium text-darkgreen">
																				{cert.name}
																			</h3>
																			<p className="text-sm text-gray-600">
																				{cert.issuer} • {formatDate(cert.date)}
																			</p>
																		</div>
																	</div>
																</div>
															))}
														</div>
													</div>
												)}
											</div>
										</TabsContent>

										<TabsContent value="experience" className="mt-0">
											<h2 className="text-xl font-bold text-darkgreen mb-6">
												Work Experience
											</h2>
											<div className="space-y-8">
												{cv.experiences.map((experience, index) => (
													<div
														key={index}
														className="relative pl-6 border-l-2 border-darkgreen/20 hover:border-darkgreen transition-colors"
													>
														<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-darkgreen"></div>
														<div className="mb-1 flex justify-between">
															<h3 className="text-lg font-semibold text-darkgreen">
																{experience.position}
															</h3>
															<div className="flex items-center text-sm text-gray-500">
																<Calendar className="h-4 w-4 mr-1" />
																<span>
																	{formatDate(experience.startDate)} -{" "}
																	{experience.current
																		? "Present"
																		: formatDate(experience.endDate)}
																</span>
															</div>
														</div>
														<div className="flex items-center text-gray-600 mb-2">
															<Building className="h-4 w-4 mr-1" />
															<span className="font-medium">
																{experience.company}
															</span>
															{experience.location && (
																<>
																	<span className="mx-2">•</span>
																	<MapPin className="h-4 w-4 mr-1" />
																	<span>{experience.location}</span>
																</>
															)}
														</div>
														<p className="text-gray-700 mb-3">
															{experience.description}
														</p>
														{experience.technologies &&
															experience.technologies.length > 0 && (
																<div className="flex flex-wrap gap-2">
																	{experience.technologies.map(
																		(tech, techIndex) => (
																			<Badge
																				key={techIndex}
																				variant="outline"
																				className="bg-darkgreen/5 border-darkgreen/20"
																			>
																				{tech}
																			</Badge>
																		)
																	)}
																</div>
															)}
													</div>
												))}
											</div>
										</TabsContent>

										<TabsContent value="education" className="mt-0">
											<h2 className="text-xl font-bold text-darkgreen mb-6">
												Education
											</h2>
											<div className="space-y-8">
												{cv.education.map((edu, index) => (
													<div
														key={index}
														className="relative pl-6 border-l-2 border-darkgreen/20 hover:border-darkgreen transition-colors"
													>
														<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-darkgreen"></div>
														<div className="mb-1 flex justify-between">
															<h3 className="text-lg font-semibold text-darkgreen">
																{edu.degree}
															</h3>
															<div className="flex items-center text-sm text-gray-500">
																<Calendar className="h-4 w-4 mr-1" />
																<span>
																	{formatDate(edu.startDate)} -{" "}
																	{formatDate(edu.endDate)}
																</span>
															</div>
														</div>
														<div className="flex items-center text-gray-600 mb-2">
															<GraduationCap className="h-4 w-4 mr-1" />
															<span className="font-medium">
																{edu.institution}
															</span>
															{edu.location && (
																<>
																	<span className="mx-2">•</span>
																	<MapPin className="h-4 w-4 mr-1" />
																	<span>{edu.location}</span>
																</>
															)}
														</div>
														{edu.description && (
															<p className="text-gray-700">{edu.description}</p>
														)}
													</div>
												))}
											</div>
										</TabsContent>

										<TabsContent value="projects" className="mt-0">
											<h2 className="text-xl font-bold text-darkgreen mb-6">
												Projects
											</h2>
											<div className="space-y-6">
												{cv.projects.map((project, index) => (
													<div
														key={index}
														className="bg-darkgreen/5 p-5 rounded-lg border border-darkgreen/10 hover:border-darkgreen/30 transition-colors"
													>
														<div className="flex justify-between items-start mb-2">
															<h3 className="text-lg font-semibold text-darkgreen">
																{project.name}
															</h3>
															{project.link && (
																<a
																	href={project.link}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-sm text-darkgreen hover:text-darkgreen/80 transition-colors"
																>
																	View Project →
																</a>
															)}
														</div>
														<p className="text-gray-700 mb-3">
															{project.description}
														</p>
														{project.technologies &&
															project.technologies.length > 0 && (
																<div className="flex flex-wrap gap-2">
																	{project.technologies.map(
																		(tech, techIndex) => (
																			<Badge
																				key={techIndex}
																				variant="outline"
																				className="bg-darkgreen/10 border-darkgreen/20"
																			>
																				{tech}
																			</Badge>
																		)
																	)}
																</div>
															)}
													</div>
												))}
											</div>
										</TabsContent>
									</Tabs>
								</CardContent>
							</Card>

							<div className="flex justify-between">
								<Button
									variant="outline"
									className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
								>
									<ArrowLeft className="mr-2 h-4 w-4" />
									Previous CV
								</Button>
								<Button
									variant="outline"
									className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
								>
									Next CV
									<ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
