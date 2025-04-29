import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@tanstack/react-router";
import { ChevronLeft, FileText, ListFilter, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { FormField, FormItem } from "../ui/form";
import useSearchParam from "@/hooks/useSearchParam";
import {
	benefits,
	education,
	experience,
	industries,
	jobTypes,
	languages,
	locations,
	salary,
	technologies,
	workModes,
} from "@/utils/mockData";
interface SearchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const formSchema = z.object({
	keywords: z.string().min(1),
	jobType: z.optional(z.string()),
	industry: z.optional(z.string()),
	experience: z.optional(z.string()),
	location: z.optional(z.string()),
	workMode: z.optional(z.string()),
	benefits: z.array(z.string()).default([]),
	salary: z.optional(z.string()),
	skills: z.array(z.string()).default([]),
	education: z.optional(z.string()),
	language: z.array(z.string()).default([]),
});

// Make sure the component is properly exported as a client component
export function SearchModal({ isOpen, onClose }: SearchModalProps) {
	const [searchMode, setSearchMode] = useState<"text" | "step">("text");
	const [step, setStep] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const { onSearch, onClear } = useSearchParam();
	const router = useRouter();
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			keywords: "",
			jobType: "",
			industry: "",
			experience: "",
			location: "",
			workMode: "",
			benefits: [],
			salary: "",
			skills: [],
			education: "",
			language: [],
		},
	});
	const handleTextSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.navigate({ to: "/cvs", params: { q: searchQuery } });
			onClose();
			onSearch({
				keywords: searchQuery,
			});
		}
	};

	const handleNext = () => {
		if (step < 3) {
			setStep(step + 1);
		} else {
			handleCVSearch();
		}
	};

	const handlePrevious = () => {
		if (step > 1) {
			setStep(step - 1);
		} else {
			onClear();
			onClose();
		}
	};

	const handleCVSearch = () => {
		onSearch(form.getValues());
		router.navigate({ to: "/cvs" });
		onClose();
	};

	const stepLabels = ["Job Information", "Work Details", "Additional Filters"];

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="lg:max-w-[600px] p-0 overflow-hidden bg-white rounded-lg">
				<div className="p-6">
					<Tabs
						defaultValue="text"
						value={searchMode}
						onValueChange={(value) => {
							setSearchMode(value as "text" | "step");
							setStep(1); // Reset step when changing modes
						}}
						className="w-full mt-6"
					>
						<TabsList className="grid grid-cols-2 w-full mb-6 bg-[#f5f3e8] p-1 rounded-md">
							<TabsTrigger
								value="text"
								className={`flex items-center gap-2 rounded-md ${searchMode === "step" ? "bg-[#f5f3e8] data-[state=active]:bg-[#f5f3e8]" : "bg-white data-[state=active]:bg-white"}`}
							>
								<FileText size={16} />
								<span className="text-darkgreen">Text Search</span>
							</TabsTrigger>
							<TabsTrigger
								value="step"
								className={`flex items-center gap-2 rounded-md ${searchMode === "text" ? "bg-[#f5f3e8] data-[state=active]:bg-[#f5f3e8]" : "bg-white data-[state=active]:bg-white"}`}
							>
								<ListFilter size={16} />
								<span className="text-darkgreen">Step-by-Step</span>
							</TabsTrigger>
						</TabsList>

						<TabsContent value="text" className="space-y-4">
							{/* <form onSubmit={handleTextSearch} className="flex gap-2">
								<div className="relative flex-1">
									<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-darkgreen/50 h-5 w-5" />
									<Input
										placeholder="E.g., Experienced React developer with 5+ years in e-commerce"
										className="pl-10 border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
								</div>
								<Button
									type="submit"
									className="bg-darkgreen hover:bg-darkgreen/90"
								>
									Search
								</Button>
							</form>
							<p className="text-xs text-darkgreen/70">
								Be specific about skills, experience level, and industry to get
								better results
							</p> */}

							<div>
								<Button
									onClick={() => {
										router.navigate({ to: "/chat" });
									}}
									variant="outline"
									className="w-full border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
								>
									<Search className="mr-2 h-4 w-4" />
									Chat with our AI assistant
								</Button>
							</div>
						</TabsContent>

						<TabsContent value="step" className="space-y-4">
							<div className="px-6 py-4 border-b">
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<div
											className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${step >= 1 ? "bg-darkgreen" : "bg-gray-300"}`}
										>
											1
										</div>
										<div className="ml-2">
											<p className="text-sm font-medium text-darkgreen">
												Job Information
											</p>
										</div>
									</div>
									<div
										className={`flex-1 h-1 mx-4 ${step >= 2 ? "bg-darkgreen" : "bg-gray-200"}`}
									></div>
									<div className="flex items-center">
										<div
											className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${step >= 2 ? "bg-darkgreen" : "bg-gray-300"}`}
										>
											2
										</div>
										<div className="ml-2">
											<p className="text-sm font-medium text-darkgreen">
												Work Details
											</p>
										</div>
									</div>
									<div
										className={`flex-1 h-1 mx-4 ${step >= 3 ? "bg-darkgreen" : "bg-gray-200"}`}
									></div>
									<div className="flex items-center">
										<div
											className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${step >= 3 ? "bg-darkgreen" : "bg-gray-300"}`}
										>
											3
										</div>
										<div className="ml-2">
											<p className="text-sm font-medium text-darkgreen">
												Additional Filters
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
								<AnimatePresence mode="wait">
									<form onSubmit={form.handleSubmit(handleCVSearch)}>
										{step === 1 && (
											<motion.div
												key="step1"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: 20 }}
												transition={{ duration: 0.3 }}
											>
												<Suspense
													fallback={<div>Loading search options...</div>}
												>
													<div className="space-y-6">
														<div>
															<Label
																htmlFor="keywords"
																className="text-darkgreen font-medium mb-2 block"
															>
																Keywords
															</Label>
															<div className="relative">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width="20"
																	height="20"
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="currentColor"
																	strokeWidth="2"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	className="absolute left-3 top-1/2 -translate-y-1/2 text-darkgreen/50"
																>
																	<circle cx="11" cy="11" r="8" />
																	<path d="m21 21-4.3-4.3" />
																</svg>
																<FormField
																	control={form.control}
																	name="keywords"
																	render={({ field }) => (
																		<FormItem onChange={field.onChange}>
																			<Input
																				id="keywords"
																				placeholder="Job title, skills, or keywords"
																				className="pl-10 border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
																				{...field}
																			/>
																		</FormItem>
																	)}
																/>
															</div>
														</div>

														<div>
															<Label
																htmlFor="job-type"
																className="text-darkgreen font-medium mb-2 block"
															>
																Job Type
															</Label>
															<FormField
																control={form.control}
																name="jobType"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<rect
																							width="18"
																							height="18"
																							x="3"
																							y="3"
																							rx="2"
																							ry="2"
																						/>
																						<path d="M9 17v-4" />
																						<path d="M12 17v-2" />
																						<path d="M15 17v-6" />
																						<path d="M9 9h.01" />
																					</svg>
																					<SelectValue placeholder="Select job type" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{jobTypes.map((jobType) => (
																					<SelectItem
																						key={jobType}
																						value={jobType}
																					>
																						{jobType}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>

														<div>
															<Label
																htmlFor="industry"
																className="text-darkgreen font-medium mb-2 block"
															>
																Industry
															</Label>
															<FormField
																control={form.control}
																name="industry"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
																					</svg>
																					<SelectValue placeholder="Select industry" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{industries.map((industry) => (
																					<SelectItem
																						key={industry}
																						value={industry}
																					>
																						{industry}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>

														<div>
															<Label
																htmlFor="experience"
																className="text-darkgreen font-medium mb-2 block"
															>
																Experience Level
															</Label>
															<FormField
																control={form.control}
																name="experience"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<circle cx="12" cy="12" r="10" />
																						<polyline points="12 6 12 12 16 14" />
																					</svg>
																					<SelectValue placeholder="Select experience level" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{experience.map((experience) => (
																					<SelectItem
																						key={experience}
																						value={experience}
																					>
																						{experience}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>
													</div>
												</Suspense>
											</motion.div>
										)}

										{step === 2 && (
											<motion.div
												key="step2"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												<Suspense
													fallback={<div>Loading search options...</div>}
												>
													<div className="space-y-6">
														<div>
															<Label
																htmlFor="location"
																className="text-darkgreen font-medium mb-2 block"
															>
																Location
															</Label>
															<FormField
																control={form.control}
																name="location"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
																						<circle cx="12" cy="10" r="3" />
																					</svg>
																					<SelectValue placeholder="Select location" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{locations.map((location) => (
																					<SelectItem
																						key={location}
																						value={location}
																					>
																						{location}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>

														<div>
															<Label
																htmlFor="work-mode"
																className="text-darkgreen font-medium mb-2 block"
															>
																Work Mode
															</Label>
															<FormField
																control={form.control}
																name="workMode"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
																						<path d="M12 14v7" />
																						<path d="M9 18h6" />
																					</svg>
																					<SelectValue placeholder="Select work mode" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{workModes.map((workMode) => (
																					<SelectItem
																						key={workMode}
																						value={workMode}
																					>
																						{workMode}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>

														<div>
															<Label className="text-darkgreen font-medium mb-2 block">
																Benefits
															</Label>
															<div className="grid grid-cols gap-4">
																<div className="space-y-2">
																	<FormField
																		control={form.control}
																		name="benefits"
																		render={({ field }) => (
																			<FormItem>
																				<div className="grid grid-cols-2 gap-4">
																					{benefits.map((benefit) => (
																						<div
																							key={benefit}
																							className="flex items-center space-x-2"
																						>
																							<Checkbox
																								id={benefit}
																								onCheckedChange={(checked) => {
																									if (checked) {
																										field.onChange([
																											...field.value,
																											benefit,
																										]);
																									} else {
																										field.onChange(
																											field.value.filter(
																												(value: string) =>
																													value !== benefit
																											)
																										);
																									}
																								}}
																							/>
																							<label
																								htmlFor={benefit}
																								className="text-sm text-darkgreen"
																							>
																								{benefit}
																							</label>
																						</div>
																					))}
																				</div>
																			</FormItem>
																		)}
																	/>
																</div>
															</div>
														</div>
													</div>
												</Suspense>
											</motion.div>
										)}

										{step === 3 && (
											<motion.div
												key="step3"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												<Suspense
													fallback={<div>Loading search options...</div>}
												>
													<div className="space-y-6">
														<div>
															<Label
																htmlFor="salary-range"
																className="text-darkgreen font-medium mb-2 block"
															>
																Expected Salary Range
															</Label>
															<FormField
																control={form.control}
																name="salary"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<circle cx="12" cy="12" r="10" />
																						<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
																						<path d="M12 18V6" />
																					</svg>
																					<SelectValue placeholder="Select salary range" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{salary.map((salary) => (
																					<SelectItem
																						key={salary}
																						value={salary}
																					>
																						{salary}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>

														<div>
															<Label className="text-darkgreen font-medium mb-2 block">
																Skills
															</Label>
															<div className="border border-darkgreen/20 rounded-md p-4 max-h-40 overflow-y-auto">
																<FormField
																	control={form.control}
																	name="skills"
																	render={({ field }) => (
																		<FormItem>
																			<div className="grid grid-cols-3 gap-y-2">
																				{technologies.map((technology) => (
																					<div className="flex items-center space-x-2">
																						<Checkbox
																							id={technology}
																							onCheckedChange={(checked) => {
																								if (!!checked) {
																									field.onChange([
																										...field.value,
																										technology,
																									]);
																								} else {
																									field.onChange(
																										field.value.filter(
																											(value: string) =>
																												value !== technology
																										)
																									);
																								}
																							}}
																						/>
																						<label
																							htmlFor={technology}
																							className="text-sm text-darkgreen"
																						>
																							{technology}
																						</label>
																					</div>
																				))}
																			</div>
																		</FormItem>
																	)}
																/>
															</div>
														</div>

														<div>
															<Label
																htmlFor="education-level"
																className="text-darkgreen font-medium mb-2 block"
															>
																Education Level
															</Label>
															<FormField
																control={form.control}
																name="education"
																render={({ field }) => (
																	<FormItem onChange={field.onChange}>
																		<Select>
																			<SelectTrigger className="w-full border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen">
																				<div className="flex items-center">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="18"
																						height="18"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="2"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="mr-2 text-darkgreen/50"
																					>
																						<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
																						<path d="M6 12v5c3 3 9 3 12 0v-5" />
																					</svg>
																					<SelectValue placeholder="Select education level" />
																				</div>
																			</SelectTrigger>
																			<SelectContent>
																				{education.map((education) => (
																					<SelectItem
																						key={education}
																						value={education}
																					>
																						{education}
																					</SelectItem>
																				))}
																			</SelectContent>
																		</Select>
																	</FormItem>
																)}
															/>
														</div>

														<div>
															<Label className="text-darkgreen font-medium mb-2 block">
																Languages
															</Label>
															<div className="border border-darkgreen/20 rounded-md p-4">
																<FormField
																	control={form.control}
																	name="language"
																	render={({ field }) => (
																		<FormItem>
																			<div className="grid grid-cols-3 gap-y-2">
																				{languages.map((language) => (
																					<div className="flex items-center space-x-2">
																						<Checkbox
																							id={language}
																							onCheckedChange={(checked) => {
																								if (checked) {
																									field.onChange([
																										...field.value,
																										language,
																									]);
																								} else {
																									field.onChange(
																										field.value.filter(
																											(value: string) =>
																												value !== language
																										)
																									);
																								}
																							}}
																						/>
																						<label
																							htmlFor={language}
																							className="text-sm text-darkgreen"
																						>
																							{language}
																						</label>
																					</div>
																				))}
																			</div>
																		</FormItem>
																	)}
																/>
															</div>
														</div>
													</div>
												</Suspense>
											</motion.div>
										)}
									</form>
								</AnimatePresence>
							</div>

							<div className="px-6 py-4 border-t flex justify-between">
								<Button
									variant="outline"
									onClick={handlePrevious}
									className="flex items-center gap-2"
								>
									<ChevronLeft size={16} />
									{step === 1 ? "Cancel" : "Back"}
								</Button>
								<Button onClick={handleNext} className="bg-darkgreen">
									{step === 3 ? (
										<div className="flex items-center w-full">
											Search CVs
											<Search className="ml-2 h-4 w-4" />
										</div>
									) : (
										<div className="flex items-center">
											Next
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="ml-2"
											>
												<path d="m9 18 6-6-6-6" />
											</svg>
										</div>
									)}
								</Button>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default SearchModal;
