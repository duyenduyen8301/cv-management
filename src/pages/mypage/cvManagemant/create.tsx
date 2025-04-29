import { useState, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
	PlusCircle,
	Trash2,
	ChevronLeft,
	ChevronRight,
	Save,
	CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/useToast";

// Mock data for demonstration
const mockCVData = {
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
			description: "",
		},
		{
			name: "Google Cloud Professional Developer",
			issuer: "Google",
			date: "2020-03",
			description: "",
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

export default function CreateCVPage() {
	const router = useRouter();
	const { toast } = useToast();
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(20);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [useMockData, setUseMockData] = useState(false);

	// Form state
	const [formData, setFormData] = useState({
		// Personal Information
		fullName: "",
		jobTitle: "",
		email: "",
		phone: "",
		location: "",
		website: "",
		linkedin: "",
		github: "",
		summary: "",

		// Experience
		experiences: [
			{
				position: "",
				company: "",
				location: "",
				startDate: "",
				endDate: "",
				current: false,
				description: "",
				technologies: [] as string[],
			},
		],

		// Education
		education: [
			{
				degree: "",
				institution: "",
				location: "",
				startDate: "",
				endDate: "",
				description: "",
			},
		],

		// Skills
		skills: [{ name: "", level: 75 }],

		// Languages
		languages: [{ name: "", level: "Beginner" }],

		// Certifications
		certifications: [{ name: "", issuer: "", date: "", description: "" }],

		// Projects
		projects: [
			{ name: "", description: "", technologies: [] as string[], link: "" },
		],

		// Preferences
		hourlyRate: "",
		availability: "",
		remoteWork: true,
		relocate: false,
		preferredLocations: [] as string[],
		visaStatus: "",
	});

	// Load mock data if checkbox is checked
	useEffect(() => {
		if (useMockData) {
			setFormData(mockCVData);
		} else {
			setFormData({
				fullName: "",
				jobTitle: "",
				email: "",
				phone: "",
				location: "",
				website: "",
				linkedin: "",
				github: "",
				summary: "",
				experiences: [
					{
						position: "",
						company: "",
						location: "",
						startDate: "",
						endDate: "",
						current: false,
						description: "",
						technologies: [],
					},
				],
				education: [
					{
						degree: "",
						institution: "",
						location: "",
						startDate: "",
						endDate: "",
						description: "",
					},
				],
				skills: [{ name: "", level: 75 }],
				languages: [{ name: "", level: "Beginner" }],
				certifications: [{ name: "", issuer: "", date: "", description: "" }],
				projects: [{ name: "", description: "", technologies: [], link: "" }],
				hourlyRate: "",
				availability: "",
				remoteWork: true,
				relocate: false,
				preferredLocations: [],
				visaStatus: "",
			});
		}
	}, [useMockData]);

	const totalSteps = 6;

	const validateStep = (step: number) => {
		const stepErrors: Record<string, string> = {};
		let isValid = true;

		switch (step) {
			case 1: // Personal Information
				if (!formData.fullName.trim()) {
					stepErrors.fullName = "Full name is required";
					isValid = false;
				}
				if (!formData.jobTitle.trim()) {
					stepErrors.jobTitle = "Job title is required";
					isValid = false;
				}
				if (!formData.email.trim()) {
					stepErrors.email = "Email is required";
					isValid = false;
				} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
					stepErrors.email = "Invalid email format";
					isValid = false;
				}
				if (!formData.phone.trim()) {
					stepErrors.phone = "Phone number is required";
					isValid = false;
				}
				if (!formData.location.trim()) {
					stepErrors.location = "Location is required";
					isValid = false;
				}
				if (!formData.summary.trim()) {
					stepErrors.summary = "Professional summary is required";
					isValid = false;
				}
				break;

			case 2: // Work Experience
				formData.experiences.forEach((exp, index) => {
					if (!exp.position.trim()) {
						stepErrors[`experiences.${index}.position`] =
							"Job title is required";
						isValid = false;
					}
					if (!exp.company.trim()) {
						stepErrors[`experiences.${index}.company`] = "Company is required";
						isValid = false;
					}
					if (!exp.startDate) {
						stepErrors[`experiences.${index}.startDate`] =
							"Start date is required";
						isValid = false;
					}
					if (!exp.current && !exp.endDate) {
						stepErrors[`experiences.${index}.endDate`] =
							"End date is required if not current job";
						isValid = false;
					}
					if (!exp.description.trim()) {
						stepErrors[`experiences.${index}.description`] =
							"Description is required";
						isValid = false;
					}
				});
				break;

			case 3: // Education
				formData.education.forEach((edu, index) => {
					if (!edu.degree.trim()) {
						stepErrors[`education.${index}.degree`] = "Degree is required";
						isValid = false;
					}
					if (!edu.institution.trim()) {
						stepErrors[`education.${index}.institution`] =
							"Institution is required";
						isValid = false;
					}
					if (!edu.startDate) {
						stepErrors[`education.${index}.startDate`] =
							"Start date is required";
						isValid = false;
					}
					if (!edu.endDate) {
						stepErrors[`education.${index}.endDate`] = "End date is required";
						isValid = false;
					}
				});
				break;

			case 4: // Skills & Languages
				let hasValidSkill = false;
				formData.skills.forEach((skill) => {
					if (skill.name.trim()) {
						hasValidSkill = true;
					}
				});
				if (!hasValidSkill) {
					stepErrors.skills = "At least one skill is required";
					isValid = false;
				}

				let hasValidLanguage = false;
				formData.languages.forEach((lang) => {
					if (lang.name.trim()) {
						hasValidLanguage = true;
					}
				});
				if (!hasValidLanguage) {
					stepErrors.languages = "At least one language is required";
					isValid = false;
				}
				break;

			case 5: // Projects
				formData.projects.forEach((project, index) => {
					if (!project.name.trim()) {
						stepErrors[`projects.${index}.name`] = "Project name is required";
						isValid = false;
					}
					if (!project.description.trim()) {
						stepErrors[`projects.${index}.description`] =
							"Description is required";
						isValid = false;
					}
				});
				break;

			case 6: // Preferences
				// No required fields in preferences
				break;
		}

		setErrors(stepErrors);
		return isValid;
	};

	const handleNext = () => {
		if (validateStep(step)) {
			if (step < totalSteps) {
				setStep(step + 1);
				setProgress(Math.min(100, ((step + 1) / totalSteps) * 100));
				window.scrollTo(0, 0);
			} else {
				// Submit form
				handleSubmit();
			}
		} else {
			toast({
				title: "Validation Error",
				description: "Please fix the errors before proceeding.",
				variant: "destructive",
			});
		}
	};

	const handlePrevious = () => {
		if (step > 1) {
			setStep(step - 1);
			setProgress(Math.max(0, ((step - 1) / totalSteps) * 100));
			window.scrollTo(0, 0);
		}
	};

	const handleSubmit = async () => {
		setLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// In a real app, you would save the CV data to a database
		console.log("CV Data:", formData);

		toast({
			title: "CV Created Successfully!",
			description: "Your CV has been saved and is now visible to employers.",
			variant: "default",
		});

		setLoading(false);

		// Redirect to the CVs page
		router.navigate({ to: "/mypage/cv-management" });
	};

	const handleInputChange = (
		section: string,
		field: string,
		value: any,
		index: number | null = null
	) => {
		if (index !== null) {
			// Handle array fields
			setFormData((prev) => {
				const newData = { ...prev };
				if (
					newData[section as keyof typeof newData] &&
					Array.isArray(newData[section as keyof typeof newData])
				) {
					const arrayField = newData[section as keyof typeof newData] as any[];
					if (arrayField[index]) {
						arrayField[index][field] = value;
					}
				}
				return newData;
			});
		} else {
			// Handle simple fields
			setFormData((prev) => ({
				...prev,
				[field]: value,
			}));
		}
	};

	const addItem = (section: string) => {
		setFormData((prev) => {
			const newData = { ...prev };

			// Add a new empty item based on the section
			if (section === "experiences") {
				(newData.experiences as any[]).push({
					position: "",
					company: "",
					location: "",
					startDate: "",
					endDate: "",
					current: false,
					description: "",
					technologies: [],
				});
			} else if (section === "education") {
				(newData.education as any[]).push({
					degree: "",
					institution: "",
					location: "",
					startDate: "",
					endDate: "",
					description: "",
				});
			} else if (section === "skills") {
				(newData.skills as any[]).push({ name: "", level: 75 });
			} else if (section === "languages") {
				(newData.languages as any[]).push({ name: "", level: "Beginner" });
			} else if (section === "certifications") {
				(newData.certifications as any[]).push({
					name: "",
					issuer: "",
					date: "",
					description: "",
				});
			} else if (section === "projects") {
				(newData.projects as any[]).push({
					name: "",
					description: "",
					technologies: [],
					link: "",
				});
			}

			return newData;
		});
	};

	const removeItem = (section: string, index: number) => {
		setFormData((prev) => {
			const newData = { ...prev };
			if (
				newData[section as keyof typeof newData] &&
				Array.isArray(newData[section as keyof typeof newData])
			) {
				const arrayField = newData[section as keyof typeof newData] as any[];
				arrayField.splice(index, 1);

				// Ensure there's always at least one item
				if (arrayField.length === 0) {
					if (section === "experiences") {
						arrayField.push({
							position: "",
							company: "",
							location: "",
							startDate: "",
							endDate: "",
							current: false,
							description: "",
							technologies: [],
						});
					} else if (section === "education") {
						arrayField.push({
							degree: "",
							institution: "",
							location: "",
							startDate: "",
							endDate: "",
							description: "",
						});
					} else if (section === "skills") {
						arrayField.push({ name: "", level: 75 });
					} else if (section === "languages") {
						arrayField.push({ name: "", level: "Beginner" });
					} else if (section === "certifications") {
						arrayField.push({
							name: "",
							issuer: "",
							date: "",
							description: "",
						});
					} else if (section === "projects") {
						arrayField.push({
							name: "",
							description: "",
							technologies: [],
							link: "",
						});
					}
				}
			}
			return newData;
		});
	};

	const getErrorMessage = (field: string) => {
		return errors[field] || "";
	};

	const hasError = (field: string) => {
		return !!errors[field];
	};

	return (
		<>
			<div className="container py-8">
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-darkgreen">Create New CV</h1>
						<p className="text-darkgreen/70">
							Build a professional CV to showcase your skills and experience
						</p>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="useMockData"
								checked={useMockData}
								onCheckedChange={(checked) =>
									setUseMockData(checked as boolean)
								}
							/>
							<label
								htmlFor="useMockData"
								className="text-sm text-darkgreen cursor-pointer"
							>
								Use Demo Data
							</label>
						</div>
						<Button
							variant="outline"
							onClick={() => router.navigate({ to: "/mypage/cv-management" })}
							className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
						>
							<ChevronLeft className="mr-2 h-4 w-4" />
							Back
						</Button>
					</div>
				</div>

				<Card className="mb-6">
					<CardContent className="p-6">
						<div className="mb-6">
							<div className="flex justify-between items-center mb-2">
								<span className="text-sm font-medium text-darkgreen">
									Progress
								</span>
								<span className="text-sm text-darkgreen/70">
									{Math.round(progress)}%
								</span>
							</div>
							<Progress value={progress} className="h-2 bg-darkgreen/10">
								<div
									className="h-full bg-darkgreen rounded-full"
									style={{ width: `${progress}%` }}
								></div>
							</Progress>
						</div>

						<div className="flex items-center justify-between mb-6 overflow-x-auto py-2">
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 1 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									{step > 1 ? <CheckCircle className="h-5 w-5" /> : 1}
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Personal Info
									</p>
								</div>
							</div>
							<div
								className={`flex-1 h-1 mx-4 ${step >= 2 ? "bg-darkgreen" : "bg-gray-200"}`}
							></div>
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 2 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									{step > 2 ? <CheckCircle className="h-5 w-5" /> : 2}
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Experience
									</p>
								</div>
							</div>
							<div
								className={`flex-1 h-1 mx-4 ${step >= 3 ? "bg-darkgreen" : "bg-gray-200"}`}
							></div>
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 3 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									{step > 3 ? <CheckCircle className="h-5 w-5" /> : 3}
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Education
									</p>
								</div>
							</div>
							<div
								className={`flex-1 h-1 mx-4 ${step >= 4 ? "bg-darkgreen" : "bg-gray-200"}`}
							></div>
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 4 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									{step > 4 ? <CheckCircle className="h-5 w-5" /> : 4}
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">Skills</p>
								</div>
							</div>
							<div
								className={`flex-1 h-1 mx-4 ${step >= 5 ? "bg-darkgreen" : "bg-gray-200"}`}
							></div>
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 5 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									{step > 5 ? <CheckCircle className="h-5 w-5" /> : 5}
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">Projects</p>
								</div>
							</div>
							<div
								className={`flex-1 h-1 mx-4 ${step >= 6 ? "bg-darkgreen" : "bg-gray-200"}`}
							></div>
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 6 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									6
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Preferences
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Rest of the component remains the same */}
				{/* For brevity, I'm not including the entire form rendering code here */}
				{/* The key fixes are in the type definitions and function implementations above */}

				<Card>
					<CardContent className="p-6">
						{/* Form content based on steps */}
						{/* This part remains the same */}

						{step === 1 && (
							<div className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="fullName"
											className="text-darkgreen font-medium mb-2 block"
										>
											Full Name *
										</Label>
										<Input
											id="fullName"
											value={formData.fullName}
											onChange={(e) =>
												setFormData({ ...formData, fullName: e.target.value })
											}
											placeholder="John Smith"
											className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError("fullName") ? "border-red-500" : ""}`}
											required
										/>
										{hasError("fullName") && (
											<p className="text-red-500 text-sm mt-1">
												{getErrorMessage("fullName")}
											</p>
										)}
									</div>

									<div>
										<Label
											htmlFor="jobTitle"
											className="text-darkgreen font-medium mb-2 block"
										>
											Job Title *
										</Label>
										<Input
											id="jobTitle"
											value={formData.jobTitle}
											onChange={(e) =>
												setFormData({ ...formData, jobTitle: e.target.value })
											}
											placeholder="Senior Software Engineer"
											className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError("jobTitle") ? "border-red-500" : ""}`}
											required
										/>
										{hasError("jobTitle") && (
											<p className="text-red-500 text-sm mt-1">
												{getErrorMessage("jobTitle")}
											</p>
										)}
									</div>

									<div>
										<Label
											htmlFor="email"
											className="text-darkgreen font-medium mb-2 block"
										>
											Email *
										</Label>
										<Input
											id="email"
											type="email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder="john.smith@example.com"
											className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError("email") ? "border-red-500" : ""}`}
											required
										/>
										{hasError("email") && (
											<p className="text-red-500 text-sm mt-1">
												{getErrorMessage("email")}
											</p>
										)}
									</div>

									<div>
										<Label
											htmlFor="phone"
											className="text-darkgreen font-medium mb-2 block"
										>
											Phone *
										</Label>
										<Input
											id="phone"
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
											placeholder="+1 (555) 123-4567"
											className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError("phone") ? "border-red-500" : ""}`}
											required
										/>
										{hasError("phone") && (
											<p className="text-red-500 text-sm mt-1">
												{getErrorMessage("phone")}
											</p>
										)}
									</div>

									<div>
										<Label
											htmlFor="location"
											className="text-darkgreen font-medium mb-2 block"
										>
											Location *
										</Label>
										<Input
											id="location"
											value={formData.location}
											onChange={(e) =>
												setFormData({ ...formData, location: e.target.value })
											}
											placeholder="New York, NY"
											className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError("location") ? "border-red-500" : ""}`}
											required
										/>
										{hasError("location") && (
											<p className="text-red-500 text-sm mt-1">
												{getErrorMessage("location")}
											</p>
										)}
									</div>

									<div>
										<Label
											htmlFor="website"
											className="text-darkgreen font-medium mb-2 block"
										>
											Website
										</Label>
										<Input
											id="website"
											value={formData.website}
											onChange={(e) =>
												setFormData({ ...formData, website: e.target.value })
											}
											placeholder="www.johnsmith.dev"
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										/>
									</div>

									<div>
										<Label
											htmlFor="linkedin"
											className="text-darkgreen font-medium mb-2 block"
										>
											LinkedIn
										</Label>
										<Input
											id="linkedin"
											value={formData.linkedin}
											onChange={(e) =>
												setFormData({ ...formData, linkedin: e.target.value })
											}
											placeholder="linkedin.com/in/johnsmith"
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										/>
									</div>

									<div>
										<Label
											htmlFor="github"
											className="text-darkgreen font-medium mb-2 block"
										>
											GitHub
										</Label>
										<Input
											id="github"
											value={formData.github}
											onChange={(e) =>
												setFormData({ ...formData, github: e.target.value })
											}
											placeholder="github.com/johnsmith"
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										/>
									</div>
								</div>

								<div>
									<Label
										htmlFor="summary"
										className="text-darkgreen font-medium mb-2 block"
									>
										Professional Summary *
									</Label>
									<Textarea
										id="summary"
										value={formData.summary}
										onChange={(e) =>
											setFormData({ ...formData, summary: e.target.value })
										}
										placeholder="Experienced software engineer with expertise in building scalable web applications..."
										className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[150px] ${hasError("summary") ? "border-red-500" : ""}`}
										required
									/>
									{hasError("summary") && (
										<p className="text-red-500 text-sm mt-1">
											{getErrorMessage("summary")}
										</p>
									)}
									<p className="text-sm text-darkgreen/60 mt-2">
										Write a brief summary of your professional background,
										skills, and career goals.
									</p>
								</div>
							</div>
						)}

						{/* Step 2: Work Experience */}
						{step === 2 && (
							<div className="space-y-8">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-semibold text-darkgreen">
										Work Experience
									</h2>
									<Button
										onClick={() => addItem("experiences")}
										className="bg-darkgreen hover:bg-darkgreen/90"
									>
										<PlusCircle className="mr-2 h-4 w-4" />
										Add Experience
									</Button>
								</div>

								{formData.experiences.map((experience, index) => (
									<div
										key={index}
										className="border border-darkgreen/20 rounded-lg p-6 space-y-6 relative"
									>
										<div className="absolute top-4 right-4">
											{formData.experiences.length > 1 && (
												<Button
													variant="ghost"
													size="icon"
													onClick={() => removeItem("experiences", index)}
													className="text-red-500 hover:text-red-700 hover:bg-red-50"
												>
													<Trash2 className="h-5 w-5" />
												</Button>
											)}
										</div>

										<h3 className="text-lg font-medium text-darkgreen">
											Experience {index + 1}
										</h3>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<Label
													htmlFor={`position-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Job Title *
												</Label>
												<Input
													id={`position-${index}`}
													value={experience.position}
													onChange={(e) =>
														handleInputChange(
															"experiences",
															"position",
															e.target.value,
															index
														)
													}
													placeholder="Senior Software Engineer"
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`experiences.${index}.position`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`experiences.${index}.position`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(`experiences.${index}.position`)}
													</p>
												)}
											</div>

											<div>
												<Label
													htmlFor={`company-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Company *
												</Label>
												<Input
													id={`company-${index}`}
													value={experience.company}
													onChange={(e) =>
														handleInputChange(
															"experiences",
															"company",
															e.target.value,
															index
														)
													}
													placeholder="TechCorp Inc."
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`experiences.${index}.company`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`experiences.${index}.company`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(`experiences.${index}.company`)}
													</p>
												)}
											</div>

											<div>
												<Label
													htmlFor={`location-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Location
												</Label>
												<Input
													id={`location-${index}`}
													value={experience.location}
													onChange={(e) =>
														handleInputChange(
															"experiences",
															"location",
															e.target.value,
															index
														)
													}
													placeholder="New York, NY"
													className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
												/>
											</div>

											<div className="flex space-x-4">
												<div className="flex-1">
													<Label
														htmlFor={`startDate-${index}`}
														className="text-darkgreen font-medium mb-2 block"
													>
														Start Date *
													</Label>
													<Input
														id={`startDate-${index}`}
														type="month"
														value={experience.startDate}
														onChange={(e) =>
															handleInputChange(
																"experiences",
																"startDate",
																e.target.value,
																index
															)
														}
														className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`experiences.${index}.startDate`) ? "border-red-500" : ""}`}
														required
													/>
													{hasError(`experiences.${index}.startDate`) && (
														<p className="text-red-500 text-sm mt-1">
															{getErrorMessage(
																`experiences.${index}.startDate`
															)}
														</p>
													)}
												</div>

												<div className="flex-1">
													<Label
														htmlFor={`endDate-${index}`}
														className="text-darkgreen font-medium mb-2 block"
													>
														End Date
													</Label>
													<Input
														id={`endDate-${index}`}
														type="month"
														value={experience.endDate}
														onChange={(e) =>
															handleInputChange(
																"experiences",
																"endDate",
																e.target.value,
																index
															)
														}
														className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`experiences.${index}.endDate`) ? "border-red-500" : ""}`}
														disabled={experience.current}
													/>
													{hasError(`experiences.${index}.endDate`) && (
														<p className="text-red-500 text-sm mt-1">
															{getErrorMessage(`experiences.${index}.endDate`)}
														</p>
													)}
												</div>
											</div>

											<div className="md:col-span-2">
												<div className="flex items-center space-x-2 mb-4">
													<Checkbox
														id={`current-${index}`}
														checked={experience.current}
														onCheckedChange={(checked) =>
															handleInputChange(
																"experiences",
																"current",
																checked,
																index
															)
														}
													/>
													<label
														htmlFor={`current-${index}`}
														className="text-sm text-darkgreen"
													>
														I currently work here
													</label>
												</div>
											</div>

											<div className="md:col-span-2">
												<Label
													htmlFor={`description-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Description *
												</Label>
												<Textarea
													id={`description-${index}`}
													value={experience.description}
													onChange={(e) =>
														handleInputChange(
															"experiences",
															"description",
															e.target.value,
															index
														)
													}
													placeholder="Describe your responsibilities, achievements, and the technologies you used..."
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[120px] ${hasError(`experiences.${index}.description`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`experiences.${index}.description`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(
															`experiences.${index}.description`
														)}
													</p>
												)}
											</div>

											<div className="md:col-span-2">
												<Label
													htmlFor={`technologies-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Technologies Used
												</Label>
												<Input
													id={`technologies-${index}`}
													value={experience.technologies.join(", ")}
													onChange={(e) =>
														handleInputChange(
															"experiences",
															"technologies",
															e.target.value
																.split(",")
																.map((tech) => tech.trim()),
															index
														)
													}
													placeholder="React, Node.js, TypeScript, AWS, MongoDB"
													className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
												/>
												<p className="text-sm text-darkgreen/60 mt-2">
													Separate technologies with commas
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{/* Step 3: Education */}
						{step === 3 && (
							<div className="space-y-8">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-semibold text-darkgreen">
										Education
									</h2>
									<Button
										onClick={() => addItem("education")}
										className="bg-darkgreen hover:bg-darkgreen/90"
									>
										<PlusCircle className="mr-2 h-4 w-4" />
										Add Education
									</Button>
								</div>

								{formData.education.map((edu, index) => (
									<div
										key={index}
										className="border border-darkgreen/20 rounded-lg p-6 space-y-6 relative"
									>
										<div className="absolute top-4 right-4">
											{formData.education.length > 1 && (
												<Button
													variant="ghost"
													size="icon"
													onClick={() => removeItem("education", index)}
													className="text-red-500 hover:text-red-700 hover:bg-red-50"
												>
													<Trash2 className="h-5 w-5" />
												</Button>
											)}
										</div>

										<h3 className="text-lg font-medium text-darkgreen">
											Education {index + 1}
										</h3>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<Label
													htmlFor={`degree-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Degree/Certificate *
												</Label>
												<Input
													id={`degree-${index}`}
													value={edu.degree}
													onChange={(e) =>
														handleInputChange(
															"education",
															"degree",
															e.target.value,
															index
														)
													}
													placeholder="Bachelor of Science in Computer Science"
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`education.${index}.degree`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`education.${index}.degree`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(`education.${index}.degree`)}
													</p>
												)}
											</div>

											<div>
												<Label
													htmlFor={`institution-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Institution *
												</Label>
												<Input
													id={`institution-${index}`}
													value={edu.institution}
													onChange={(e) =>
														handleInputChange(
															"education",
															"institution",
															e.target.value,
															index
														)
													}
													placeholder="Stanford University"
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`education.${index}.institution`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`education.${index}.institution`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(`education.${index}.institution`)}
													</p>
												)}
											</div>

											<div>
												<Label
													htmlFor={`edu-location-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Location
												</Label>
												<Input
													id={`edu-location-${index}`}
													value={edu.location}
													onChange={(e) =>
														handleInputChange(
															"education",
															"location",
															e.target.value,
															index
														)
													}
													placeholder="Stanford, CA"
													className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
												/>
											</div>

											<div className="flex space-x-4">
												<div className="flex-1">
													<Label
														htmlFor={`edu-startDate-${index}`}
														className="text-darkgreen font-medium mb-2 block"
													>
														Start Date *
													</Label>
													<Input
														id={`edu-startDate-${index}`}
														type="month"
														value={edu.startDate}
														onChange={(e) =>
															handleInputChange(
																"education",
																"startDate",
																e.target.value,
																index
															)
														}
														className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`education.${index}.startDate`) ? "border-red-500" : ""}`}
														required
													/>
													{hasError(`education.${index}.startDate`) && (
														<p className="text-red-500 text-sm mt-1">
															{getErrorMessage(`education.${index}.startDate`)}
														</p>
													)}
												</div>

												<div className="flex-1">
													<Label
														htmlFor={`edu-endDate-${index}`}
														className="text-darkgreen font-medium mb-2 block"
													>
														End Date *
													</Label>
													<Input
														id={`edu-endDate-${index}`}
														type="month"
														value={edu.endDate}
														onChange={(e) =>
															handleInputChange(
																"education",
																"endDate",
																e.target.value,
																index
															)
														}
														className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`education.${index}.endDate`) ? "border-red-500" : ""}`}
														required
													/>
													{hasError(`education.${index}.endDate`) && (
														<p className="text-red-500 text-sm mt-1">
															{getErrorMessage(`education.${index}.endDate`)}
														</p>
													)}
												</div>
											</div>

											<div className="md:col-span-2">
												<Label
													htmlFor={`edu-description-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Description
												</Label>
												<Textarea
													id={`edu-description-${index}`}
													value={edu.description}
													onChange={(e) =>
														handleInputChange(
															"education",
															"description",
															e.target.value,
															index
														)
													}
													placeholder="Describe your major, achievements, relevant coursework, etc."
													className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[120px]"
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{/* Step 4: Skills & Languages */}
						{step === 4 && (
							<div className="space-y-8">
								<div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-xl font-semibold text-darkgreen">
											Skills
										</h2>
										<Button
											onClick={() => addItem("skills")}
											className="bg-darkgreen hover:bg-darkgreen/90"
										>
											<PlusCircle className="mr-2 h-4 w-4" />
											Add Skill
										</Button>
									</div>

									{hasError("skills") && (
										<p className="text-red-500 text-sm mb-4">
											{getErrorMessage("skills")}
										</p>
									)}

									<div className="space-y-4">
										{formData.skills.map((skill, index) => (
											<div key={index} className="flex items-center space-x-4">
												<div className="flex-1">
													<Input
														value={skill.name}
														onChange={(e) =>
															handleInputChange(
																"skills",
																"name",
																e.target.value,
																index
															)
														}
														placeholder="JavaScript, React, Node.js, etc."
														className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
													/>
												</div>

												<div className="w-32">
													<Select
														value={skill.level.toString()}
														onValueChange={(value) =>
															handleInputChange(
																"skills",
																"level",
																Number.parseInt(value),
																index
															)
														}
													>
														<SelectTrigger className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
															<SelectValue placeholder="Level" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="25">Beginner</SelectItem>
															<SelectItem value="50">Intermediate</SelectItem>
															<SelectItem value="75">Advanced</SelectItem>
															<SelectItem value="100">Expert</SelectItem>
														</SelectContent>
													</Select>
												</div>

												{formData.skills.length > 1 && (
													<Button
														variant="ghost"
														size="icon"
														onClick={() => removeItem("skills", index)}
														className="text-red-500 hover:text-red-700 hover:bg-red-50"
													>
														<Trash2 className="h-5 w-5" />
													</Button>
												)}
											</div>
										))}
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-xl font-semibold text-darkgreen">
											Languages
										</h2>
										<Button
											onClick={() => addItem("languages")}
											className="bg-darkgreen hover:bg-darkgreen/90"
										>
											<PlusCircle className="mr-2 h-4 w-4" />
											Add Language
										</Button>
									</div>

									{hasError("languages") && (
										<p className="text-red-500 text-sm mb-4">
											{getErrorMessage("languages")}
										</p>
									)}

									<div className="space-y-4">
										{formData.languages.map((language, index) => (
											<div key={index} className="flex items-center space-x-4">
												<div className="flex-1">
													<Input
														value={language.name}
														onChange={(e) =>
															handleInputChange(
																"languages",
																"name",
																e.target.value,
																index
															)
														}
														placeholder="English, Spanish, French, etc."
														className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
													/>
												</div>

												<div className="w-32">
													<Select
														value={language.level}
														onValueChange={(value) =>
															handleInputChange(
																"languages",
																"level",
																value,
																index
															)
														}
													>
														<SelectTrigger className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
															<SelectValue placeholder="Level" />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="Beginner">Beginner</SelectItem>
															<SelectItem value="Intermediate">
																Intermediate
															</SelectItem>
															<SelectItem value="Advanced">Advanced</SelectItem>
															<SelectItem value="Fluent">Fluent</SelectItem>
															<SelectItem value="Native">Native</SelectItem>
														</SelectContent>
													</Select>
												</div>

												{formData.languages.length > 1 && (
													<Button
														variant="ghost"
														size="icon"
														onClick={() => removeItem("languages", index)}
														className="text-red-500 hover:text-red-700 hover:bg-red-50"
													>
														<Trash2 className="h-5 w-5" />
													</Button>
												)}
											</div>
										))}
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-xl font-semibold text-darkgreen">
											Certifications
										</h2>
										<Button
											onClick={() => addItem("certifications")}
											className="bg-darkgreen hover:bg-darkgreen/90"
										>
											<PlusCircle className="mr-2 h-4 w-4" />
											Add Certification
										</Button>
									</div>

									<div className="space-y-6">
										{formData.certifications.map((cert, index) => (
											<div
												key={index}
												className="border border-darkgreen/20 rounded-lg p-4 space-y-4 relative"
											>
												<div className="absolute top-4 right-4">
													{formData.certifications.length > 1 && (
														<Button
															variant="ghost"
															size="icon"
															onClick={() =>
																removeItem("certifications", index)
															}
															className="text-red-500 hover:text-red-700 hover:bg-red-50"
														>
															<Trash2 className="h-5 w-5" />
														</Button>
													)}
												</div>

												<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
													<div>
														<Label
															htmlFor={`cert-name-${index}`}
															className="text-darkgreen font-medium mb-2 block"
														>
															Certification Name
														</Label>
														<Input
															id={`cert-name-${index}`}
															value={cert.name}
															onChange={(e) =>
																handleInputChange(
																	"certifications",
																	"name",
																	e.target.value,
																	index
																)
															}
															placeholder="AWS Certified Solutions Architect"
															className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
														/>
													</div>

													<div>
														<Label
															htmlFor={`cert-issuer-${index}`}
															className="text-darkgreen font-medium mb-2 block"
														>
															Issuing Organization
														</Label>
														<Input
															id={`cert-issuer-${index}`}
															value={cert.issuer}
															onChange={(e) =>
																handleInputChange(
																	"certifications",
																	"issuer",
																	e.target.value,
																	index
																)
															}
															placeholder="Amazon Web Services"
															className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
														/>
													</div>

													<div>
														<Label
															htmlFor={`cert-date-${index}`}
															className="text-darkgreen font-medium mb-2 block"
														>
															Date Issued
														</Label>
														<Input
															id={`cert-date-${index}`}
															type="month"
															value={cert.date}
															onChange={(e) =>
																handleInputChange(
																	"certifications",
																	"date",
																	e.target.value,
																	index
																)
															}
															className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
														/>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Step 5: Projects */}
						{step === 5 && (
							<div className="space-y-8">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-semibold text-darkgreen">
										Projects
									</h2>
									<Button
										onClick={() => addItem("projects")}
										className="bg-darkgreen hover:bg-darkgreen/90"
									>
										<PlusCircle className="mr-2 h-4 w-4" />
										Add Project
									</Button>
								</div>

								{formData.projects.map((project, index) => (
									<div
										key={index}
										className="border border-darkgreen/20 rounded-lg p-6 space-y-6 relative"
									>
										<div className="absolute top-4 right-4">
											{formData.projects.length > 1 && (
												<Button
													variant="ghost"
													size="icon"
													onClick={() => removeItem("projects", index)}
													className="text-red-500 hover:text-red-700 hover:bg-red-50"
												>
													<Trash2 className="h-5 w-5" />
												</Button>
											)}
										</div>

										<h3 className="text-lg font-medium text-darkgreen">
											Project {index + 1}
										</h3>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<Label
													htmlFor={`project-name-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Project Name *
												</Label>
												<Input
													id={`project-name-${index}`}
													value={project.name}
													onChange={(e) =>
														handleInputChange(
															"projects",
															"name",
															e.target.value,
															index
														)
													}
													placeholder="E-commerce Platform"
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${hasError(`projects.${index}.name`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`projects.${index}.name`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(`projects.${index}.name`)}
													</p>
												)}
											</div>

											<div>
												<Label
													htmlFor={`project-link-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Project Link
												</Label>
												<Input
													id={`project-link-${index}`}
													value={project.link}
													onChange={(e) =>
														handleInputChange(
															"projects",
															"link",
															e.target.value,
															index
														)
													}
													placeholder="https://github.com/username/project"
													className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
												/>
											</div>

											<div className="md:col-span-2">
												<Label
													htmlFor={`project-description-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Description *
												</Label>
												<Textarea
													id={`project-description-${index}`}
													value={project.description}
													onChange={(e) =>
														handleInputChange(
															"projects",
															"description",
															e.target.value,
															index
														)
													}
													placeholder="Describe the project, your role, and the technologies used..."
													className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[120px] ${hasError(`projects.${index}.description`) ? "border-red-500" : ""}`}
													required
												/>
												{hasError(`projects.${index}.description`) && (
													<p className="text-red-500 text-sm mt-1">
														{getErrorMessage(`projects.${index}.description`)}
													</p>
												)}
											</div>

											<div className="md:col-span-2">
												<Label
													htmlFor={`project-technologies-${index}`}
													className="text-darkgreen font-medium mb-2 block"
												>
													Technologies Used
												</Label>
												<Input
													id={`project-technologies-${index}`}
													value={project.technologies.join(", ")}
													onChange={(e) =>
														handleInputChange(
															"projects",
															"technologies",
															e.target.value
																.split(",")
																.map((tech) => tech.trim()),
															index
														)
													}
													placeholder="React, Node.js, Express, MongoDB, Stripe API"
													className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
												/>
												<p className="text-sm text-darkgreen/60 mt-2">
													Separate technologies with commas
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{/* Step 6: Preferences */}
						{step === 6 && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold text-darkgreen">
									Job Preferences
								</h2>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="hourlyRate"
											className="text-darkgreen font-medium mb-2 block"
										>
											Expected Hourly Rate
										</Label>
										<Input
											id="hourlyRate"
											value={formData.hourlyRate}
											onChange={(e) =>
												setFormData({ ...formData, hourlyRate: e.target.value })
											}
											placeholder="$75 - $95"
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										/>
									</div>

									<div>
										<Label
											htmlFor="availability"
											className="text-darkgreen font-medium mb-2 block"
										>
											Availability
										</Label>
										<Select
											value={formData.availability}
											onValueChange={(value) =>
												setFormData({ ...formData, availability: value })
											}
										>
											<SelectTrigger
												id="availability"
												className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
											>
												<SelectValue placeholder="Select availability" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Immediately">Immediately</SelectItem>
												<SelectItem value="1 week">1 week</SelectItem>
												<SelectItem value="2 weeks">2 weeks</SelectItem>
												<SelectItem value="1 month">1 month</SelectItem>
												<SelectItem value="2 months">2 months</SelectItem>
												<SelectItem value="3+ months">3+ months</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div>
										<Label
											htmlFor="visaStatus"
											className="text-darkgreen font-medium mb-2 block"
										>
											Visa/Work Authorization Status
										</Label>
										<Select
											value={formData.visaStatus}
											onValueChange={(value) =>
												setFormData({ ...formData, visaStatus: value })
											}
										>
											<SelectTrigger
												id="visaStatus"
												className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
											>
												<SelectValue placeholder="Select status" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Citizen">
													Citizen/Permanent Resident
												</SelectItem>
												<SelectItem value="Work Visa">Work Visa</SelectItem>
												<SelectItem value="Student Visa">
													Student Visa
												</SelectItem>
												<SelectItem value="Need Sponsorship">
													Need Sponsorship
												</SelectItem>
												<SelectItem value="Other">Other</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-4">
									<div className="flex items-center space-x-2">
										<Checkbox
											id="remoteWork"
											checked={formData.remoteWork}
											onCheckedChange={(checked) =>
												setFormData({ ...formData, remoteWork: !!checked })
											}
										/>
										<label
											htmlFor="remoteWork"
											className="text-sm text-darkgreen"
										>
											I am open to remote work
										</label>
									</div>

									<div className="flex items-center space-x-2">
										<Checkbox
											id="relocate"
											checked={formData.relocate}
											onCheckedChange={(checked) =>
												setFormData({ ...formData, relocate: !!checked })
											}
										/>
										<label
											htmlFor="relocate"
											className="text-sm text-darkgreen"
										>
											I am willing to relocate
										</label>
									</div>
								</div>

								<div>
									<Label
										htmlFor="preferredLocations"
										className="text-darkgreen font-medium mb-2 block"
									>
										Preferred Locations
									</Label>
									<Input
										id="preferredLocations"
										value={formData.preferredLocations.join(", ")}
										onChange={(e) =>
											setFormData({
												...formData,
												preferredLocations: e.target.value
													.split(",")
													.map((loc) => loc.trim()),
											})
										}
										placeholder="New York, San Francisco, Remote"
										className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
									/>
									<p className="text-sm text-darkgreen/60 mt-2">
										Separate locations with commas
									</p>
								</div>
							</div>
						)}

						<div className="flex justify-between mt-8 pt-6 border-t border-darkgreen/10">
							<Button
								variant="outline"
								onClick={handlePrevious}
								disabled={step === 1}
								className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							>
								<ChevronLeft className="mr-2 h-4 w-4" />
								Previous
							</Button>

							{step < totalSteps ? (
								<Button
									onClick={handleNext}
									className="bg-darkgreen hover:bg-darkgreen/90"
								>
									Next
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							) : (
								<Button
									onClick={handleSubmit}
									className="bg-darkgreen hover:bg-darkgreen/90"
									disabled={loading}
								>
									{loading ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Saving...
										</>
									) : (
										<>
											Save CV
											<Save className="ml-2 h-4 w-4" />
										</>
									)}
								</Button>
							)}
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
