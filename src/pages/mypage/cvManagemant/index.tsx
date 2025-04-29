import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PlusCircle, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import CVFilters from "@/components/mypage/cvFilter";
import CVCard from "@/components/mypage/cvCard";
import { PaginationCustom } from "@/components/PaginateCustom";

const mockCVs = [
	{
		id: "1",
		title: "Senior Software Engineer CV",
		candidate: "John Smith",
		uploadDate: "April 15, 2023",
		status: "Active",
		type: "Engineer",
		skills: ["React", "Node.js", "TypeScript"],
	},
	{
		id: "2",
		title: "Frontend Developer CV",
		candidate: "Emily Johnson",
		uploadDate: "March 10, 2023",
		status: "Inactive",
		type: "Developer",
		skills: ["JavaScript", "Vue.js", "CSS"],
	},
	{
		id: "3",
		title: "UX Designer CV",
		candidate: "Michael Chen",
		uploadDate: "May 5, 2023",
		status: "Active",
		type: "Designer",
		skills: ["Figma", "UI/UX", "Adobe XD"],
	},
	{
		id: "4",
		title: "Product Manager CV",
		candidate: "Sarah Williams",
		uploadDate: "April 22, 2023",
		status: "Active",
		type: "Manager",
		skills: ["Agile", "Product Strategy", "User Research"],
	},
	{
		id: "5",
		title: "Backend Developer CV",
		candidate: "Alex Rodriguez",
		uploadDate: "May 12, 2023",
		status: "Active",
		type: "Developer",
		skills: ["Python", "Django", "SQL"],
	},
	{
		id: "6",
		title: "Data Scientist CV",
		candidate: "Olivia Wilson",
		uploadDate: "April 28, 2023",
		status: "Active",
		type: "Scientist",
		skills: ["Python", "Machine Learning", "Statistics"],
	},
	{
		id: "7",
		title: "DevOps Engineer CV",
		candidate: "William Lee",
		uploadDate: "May 3, 2023",
		status: "Active",
		type: "Engineer",
		skills: ["Docker", "Kubernetes", "AWS"],
	},
	{
		id: "8",
		title: "Mobile Developer CV",
		candidate: "Sophia Garcia",
		uploadDate: "April 20, 2023",
		status: "Inactive",
		type: "Developer",
		skills: ["React Native", "Swift", "Kotlin"],
	},
	{
		id: "9",
		title: "Backend Developer CV",
		candidate: "Alex Rodriguez",
		uploadDate: "May 12, 2023",
		status: "Active",
		type: "Developer",
		skills: ["Python", "Django", "SQL"],
	},
	{
		id: "10",
		title: "Data Scientist CV",
		candidate: "Olivia Wilson",
		uploadDate: "April 28, 2023",
		status: "Active",
		type: "Scientist",
		skills: ["Python", "Machine Learning", "Statistics"],
	},
	{
		id: "11",
		title: "DevOps Engineer CV",
		candidate: "William Lee",
		uploadDate: "May 3, 2023",
		status: "Active",
		type: "Engineer",
		skills: ["Docker", "Kubernetes", "AWS"],
	},
	{
		id: "12",
		title: "Mobile Developer CV",
		candidate: "Sophia Garcia",
		uploadDate: "April 20, 2023",
		status: "Inactive",
		type: "Developer",
		skills: ["React Native", "Swift", "Kotlin"],
	},
];

export default function CVsPage() {
	const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [skillFilter, setSkillFilter] = useState("all");
	const [typeFilter, setTypeFilter] = useState("all");
	const [cvs, setCvs] = useState(mockCVs);

	// Get all unique skills for filter dropdown
	const allSkills = Array.from(new Set(mockCVs.flatMap((cv) => cv.skills)));

	const filteredCVs = useMemo(() => {
		return cvs.filter((cv) => {
			// Search filter
			const matchesSearch =
				cv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				cv.candidate.toLowerCase().includes(searchQuery.toLowerCase());

			// Status filter
			const matchesStatus =
				statusFilter === "all" ||
				cv.status.toLowerCase() === statusFilter.toLowerCase();

			// Skill filter
			const matchesSkill =
				skillFilter === "all" ||
				cv.skills.some(
					(skill) => skill.toLowerCase() === skillFilter.toLowerCase()
				);

			// Type filter
			const matchesType =
				typeFilter === "all" ||
				cv.type.toLowerCase() === typeFilter.toLowerCase();

			return matchesSearch && matchesStatus && matchesSkill && matchesType;
		});
	}, [cvs, searchQuery, statusFilter, skillFilter, typeFilter]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedFile(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		// In a real app, you would upload the file to your server here
		console.log("Uploading file:", selectedFile);
		setUploadDialogOpen(false);
		setSelectedFile(null);
		// After successful upload, you would refresh the list of CVs
	};

	const handleDelete = (id: string) => {
		setCvs(cvs.filter((cv) => cv.id !== id));
	};

	return (
		<>
			<div className="p-8">
				<div className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-2xl font-bold text-darkgreen">CV Management</h1>
						<p className="text-darkgreen/70">
							Upload, organize, and manage candidate CVs
						</p>
					</div>
					<div className="flex gap-2">
						<Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
							<DialogTrigger asChild>
								<Button className="bg-darkgreen hover:bg-darkgreen/90">
									<Upload className="mr-2 h-4 w-4" />
									Upload CV
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>Upload CV</DialogTitle>
									<DialogDescription>
										Upload a candidate's CV in PDF format. The system will
										automatically extract relevant information.
									</DialogDescription>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="grid gap-2">
										<Label htmlFor="cv-file">CV File (PDF)</Label>
										<Input
											id="cv-file"
											type="file"
											accept=".pdf"
											onChange={handleFileChange}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="candidate-name">Candidate Name</Label>
										<Input
											id="candidate-name"
											placeholder="Enter candidate name"
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="position">Position</Label>
										<Input id="position" placeholder="Enter position" />
									</div>
								</div>
								<DialogFooter>
									<Button
										variant="outline"
										onClick={() => setUploadDialogOpen(false)}
									>
										Cancel
									</Button>
									<Button
										onClick={handleUpload}
										disabled={!selectedFile}
										className="bg-darkgreen hover:bg-darkgreen/90"
									>
										Upload
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>

						<Link href="/mypage/create-cv">
							<Button
								variant="outline"
								className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							>
								<PlusCircle className="mr-2 h-4 w-4" />
								Create CV
							</Button>
						</Link>
					</div>
				</div>
				<CVFilters
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					statusFilter={statusFilter}
					setStatusFilter={setStatusFilter}
					skillFilter={skillFilter}
					setSkillFilter={setSkillFilter}
					typeFilter={typeFilter}
					setTypeFilter={setTypeFilter}
					allSkills={allSkills}
				/>
				<Card className="white border-none shadow-lg">
					<CardContent className="p-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
							{filteredCVs.map((cv) => (
								<CVCard key={cv.id} cv={cv} onDelete={handleDelete} />
							))}
						</div>
						<div className="flex justify-center mt-8">
							<PaginationCustom
								currentPage={1}
								totalPages={10}
								onPageChange={() => {}}
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
