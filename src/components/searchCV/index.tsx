import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
	ChevronUp,
	ChevronDown,
	GraduationCap,
	Languages,
	DollarSign,
	Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
	industries,
	jobTypes,
	locations,
	technologies,
	education,
	languages,
	salary,
	benefits,
} from "@/utils/mockData";
import { useQueryClient } from "@tanstack/react-query";
import { SearchParams } from "@/interfaces";
import { getYears } from "@/utils";
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
export default function FilterSidebar() {
	const queryClient = useQueryClient();
	const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
	const searchParams = queryClient.getQueryData<SearchParams>(["searchParams"]);
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			keywords: searchParams?.keywords || "",
			jobType: searchParams?.jobType || "",
			industry: searchParams?.industry || "",
			experience: searchParams?.experience || "",
			location: searchParams?.location || "",
			workMode: searchParams?.workMode || "",
			benefits: searchParams?.benefits || [],
			salary: searchParams?.salary || "",
			skills: searchParams?.skills || [],
			education: searchParams?.education || "",
			language: searchParams?.language || [],
		},
	});

	return (
		<Card className="bg-white border-darkgreen/10 shadow-sm h-auto">
			<CardContent className="p-6">
				<div className="space-y-6">
					<div>
						<h3 className="font-medium mb-4 text-darkgreen">Search</h3>
						<div className="relative">
							<FormField
								control={form.control}
								name="keywords"
								render={({ field }) => (
									<FormItem onChange={field.onChange}>
										<Input
											value={field.value}
											placeholder="Search for candidates..."
											className="pl-10 border-darkgreen/20"
										/>
									</FormItem>
								)}
							/>
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-darkgreen/50 h-4 w-4" />
						</div>
					</div>
					<div>
						<h3 className="font-medium mb-4 text-darkgreen">Job Type</h3>
						<FormField
							control={form.control}
							name="jobType"
							render={({ field }) => (
								<FormItem>
									<Select onValueChange={field.onChange} value={field.value}>
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
												<SelectItem key={jobType} value={jobType}>
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
						<h3 className="font-medium mb-4 text-darkgreen">Industry</h3>
						<FormField
							control={form.control}
							name="industry"
							render={({ field }) => (
								<FormItem>
									<Select onValueChange={field.onChange} value={field.value}>
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
												<SelectItem key={industry} value={industry}>
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
						<h3 className="font-medium mb-4 text-darkgreen">Experience</h3>
						<div className="space-y-6">
							<div className="space-y-2">
								<div className="flex justify-between">
									<Label className="text-darkgreen">Years</Label>
									<span className="text-sm text-darkgreen/70">
										{getYears(searchParams?.experience || "").length > 1
											? `${getYears(searchParams?.experience || "")[0]}-${getYears(searchParams?.experience || "")[1]}+ years`
											: "0-10+ years"}
									</span>
								</div>
								{getYears(searchParams?.experience || "").length > 1 ? (
									<Slider
										defaultValue={[
											getYears(searchParams?.experience || "")
												? getYears(searchParams?.experience || "")[0]
												: 0,
											getYears(searchParams?.experience || "")
												? getYears(searchParams?.experience || "")[1]
												: 0,
										]}
										min={0}
										max={10}
										step={1}
									/>
								) : (
									<Slider defaultValue={[0, 10]} min={0} max={10} step={1} />
								)}
							</div>
						</div>
					</div>
					<div>
						<h3 className="font-medium mb-4 text-darkgreen">Location</h3>
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<Select onValueChange={field.onChange} value={field.value}>
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
												<SelectItem key={location} value={location}>
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
						<h3 className="font-medium mb-4 text-darkgreen">Skills</h3>
						<div className="space-y-2">
							<FormField
								control={form.control}
								name="skills"
								render={({ field }) => (
									<FormItem>
										<div className="grid grid-cols-2 gap-y-2">
											{technologies.map((technology) => (
												<div
													key={technology}
													className="flex items-center space-x-2"
												>
													<Checkbox
														id={technology}
														checked={field.value.includes(technology)}
														onCheckedChange={(checked) => {
															if (!!checked) {
																field.onChange([...field.value, technology]);
															} else {
																field.onChange(
																	field.value.filter(
																		(value: string) => value !== technology
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

					<Button
						variant="outline"
						onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
						className="w-full flex items-center justify-center gap-2 border-darkgreen/20 text-darkgreen"
					>
						{showAdvancedFilters ? (
							<>
								<ChevronUp className="h-4 w-4" />
								Hide Advanced Filters
							</>
						) : (
							<>
								<ChevronDown className="h-4 w-4" />
								Show Advanced Filters
							</>
						)}
					</Button>

					<AnimatePresence>
						{showAdvancedFilters && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="space-y-6 overflow-hidden"
							>
								{/* Education */}
								<div>
									<div className="flex items-center gap-2 mb-4">
										<GraduationCap className="h-4 w-4 text-darkgreen" />
										<h3 className="font-medium text-darkgreen">
											Education Level
										</h3>
									</div>
									<FormField
										control={form.control}
										name="education"
										render={({ field }) => (
											<FormItem>
												<Select
													onValueChange={field.onChange}
													value={field.value}
												>
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
															<SelectItem key={education} value={education}>
																{education}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
								</div>

								{/* Languages */}
								<div>
									<div className="flex items-center gap-2 mb-4">
										<Languages className="h-4 w-4 text-darkgreen" />
										<h3 className="font-medium text-darkgreen">Languages</h3>
									</div>
									<div className=" gap-2">
										<FormField
											control={form.control}
											name="language"
											render={({ field }) => (
												<FormItem>
													<div className="grid grid-cols-2 gap-y-2">
														{languages.map((language) => (
															<div className="flex items-center space-x-2">
																<Checkbox
																	id={language}
																	checked={field.value.includes(language)}
																	onCheckedChange={(checked) => {
																		if (checked) {
																			field.onChange([
																				...field.value,
																				language,
																			]);
																		} else {
																			field.onChange(
																				field.value.filter(
																					(value: string) => value !== language
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

								{/* Salary Range */}
								<div>
									<div className="flex items-center gap-2 mb-4">
										<DollarSign className="h-4 w-4 text-darkgreen" />
										<h3 className="font-medium text-darkgreen">Salary Range</h3>
									</div>
									<FormField
										control={form.control}
										name="salary"
										render={({ field }) => (
											<FormItem>
												<Select
													onValueChange={field.onChange}
													value={field.value}
												>
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
															<SelectItem key={salary} value={salary}>
																{salary}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
								</div>

								{/* Benefits */}
								<div>
									<h3 className="font-medium mb-4 text-darkgreen">Benefits</h3>
									<div className=" gap-2">
										<FormField
											control={form.control}
											name="benefits"
											render={({ field }) => (
												<FormItem onChange={field.onChange}>
													<div className="grid grid-cols-2 gap-4">
														{benefits.map((benefit) => (
															<div
																key={benefit}
																className="flex items-center space-x-2"
															>
																<Checkbox
																	id={benefit}
																	checked={field.value.includes(benefit)}
																	onCheckedChange={(checked) => {
																		if (checked) {
																			field.onChange([...field.value, benefit]);
																		} else {
																			field.onChange(
																				field.value.filter(
																					(value: string) => value !== benefit
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
							</motion.div>
						)}
					</AnimatePresence>

					<Button className="w-full bg-darkgreen hover:bg-darkgreen/90">
						Apply Filters
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
