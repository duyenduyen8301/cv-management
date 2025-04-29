import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import {
	ChevronLeft,
	ChevronRight,
	Send,
	Briefcase,
	FileText,
	FileCheck,
	MessageSquare,
	CheckCircle,
} from "lucide-react";

export default function ApplyJobPage() {
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(20);

	// Mock data
	const jobs = [
		{
			id: 1,
			title: "Senior Software Engineer",
			company: "Tech Innovate",
			location: "New York, NY",
			type: "Full-time",
		},
		{
			id: 2,
			title: "Full Stack Developer",
			company: "Global Solutions",
			location: "Remote",
			type: "Contract",
		},
		{
			id: 3,
			title: "Frontend Engineer",
			company: "NextWave",
			location: "San Francisco, CA",
			type: "Full-time",
		},
		{
			id: 4,
			title: "Backend Developer",
			company: "Innovate Design",
			location: "Austin, TX",
			type: "Full-time",
		},
	];

	const cvs = [
		{ id: 1, title: "Software Engineer CV", lastUpdated: "April 15, 2023" },
		{ id: 2, title: "Frontend Developer CV", lastUpdated: "March 10, 2023" },
	];

	// Form state
	const [formData, setFormData] = useState({
		jobId: "",
		cvId: "",
		coverLetter: "",
		additionalQuestions: {
			yearsOfExperience: "",
			relevantSkills: "",
			salaryExpectations: "",
			startDate: "",
			relocate: false,
			workAuthorization: "",
			referral: "",
			additionalInfo: "",
		},
		agreeToTerms: false,
	});

	const totalSteps = 5;

	const handleNext = () => {
		if (step < totalSteps) {
			setStep(step + 1);
			setProgress(Math.min(100, ((step + 1) / totalSteps) * 100));
		} else {
			// Submit application
			handleSubmit();
		}
	};

	const handlePrevious = () => {
		if (step > 1) {
			setStep(step - 1);
			setProgress(Math.max(0, ((step - 1) / totalSteps) * 100));
		}
	};

	const handleSubmit = () => {
		// In a real app, you would submit the application to an API
		console.log("Application Data:", formData);

		// Redirect to the applications page
		router.navigate({ to: "/mypage/applications" });
	};

	const isStepValid = () => {
		switch (step) {
			case 1:
				return !!formData.jobId;
			case 2:
				return !!formData.cvId;
			case 3:
				return !!formData.coverLetter;
			case 4:
				return (
					!!formData.additionalQuestions.yearsOfExperience &&
					!!formData.additionalQuestions.relevantSkills &&
					!!formData.additionalQuestions.salaryExpectations
				);
			case 5:
				return formData.agreeToTerms;
			default:
				return true;
		}
	};

	return (
		<>
			<div className="container py-8">
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-darkgreen">Apply for Job</h1>
						<p className="text-darkgreen/70">
							Complete the application process to apply for a job
						</p>
					</div>
					<Button
						variant="outline"
						onClick={() => router.navigate({ to: "/mypage/applications" })}
						className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
					>
						<ChevronLeft className="mr-2 h-4 w-4" />
						Back to Applications
					</Button>
				</div>

				<Card className="mb-6">
					<CardContent className="p-6">
						<div className="mb-6">
							<div className="flex justify-between items-center mb-2">
								<span className="text-sm font-medium text-darkgreen">
									Application Progress
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

						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 1 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									<Briefcase className="h-5 w-5" />
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Select Job
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
									<FileText className="h-5 w-5" />
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Select CV
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
									<MessageSquare className="h-5 w-5" />
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Cover Letter
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
									<FileCheck className="h-5 w-5" />
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">
										Questions
									</p>
								</div>
							</div>
							<div
								className={`flex-1 h-1 mx-4 ${step >= 5 ? "bg-darkgreen" : "bg-gray-200"}`}
							></div>
							<div className="flex items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${step >= 5 ? "bg-darkgreen" : "bg-gray-300"}`}
								>
									<CheckCircle className="h-5 w-5" />
								</div>
								<div className="ml-2">
									<p className="text-sm font-medium text-darkgreen">Review</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-6">
						{/* Step 1: Select Job */}
						{step === 1 && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold text-darkgreen">
									Select a Job to Apply For
								</h2>
								<p className="text-darkgreen/70">
									Choose from the available job openings below:
								</p>

								<div className="space-y-4">
									<RadioGroup
										value={formData.jobId}
										onValueChange={(value) =>
											setFormData({ ...formData, jobId: value })
										}
									>
										{jobs.map((job) => (
											<div
												key={job.id}
												className="flex items-start space-x-3 border border-darkgreen/20 rounded-lg p-4 hover:border-darkgreen transition-colors"
											>
												<RadioGroupItem
													value={job.id.toString()}
													id={`job-${job.id}`}
													className="mt-1"
												/>
												<div className="flex-1">
													<label
														htmlFor={`job-${job.id}`}
														className="font-medium text-darkgreen cursor-pointer"
													>
														{job.title}
													</label>
													<p className="text-darkgreen/70">{job.company}</p>
													<div className="flex items-center mt-2 text-sm text-darkgreen/60">
														<span>{job.location}</span>
														<span className="mx-2">•</span>
														<span>{job.type}</span>
													</div>
												</div>
											</div>
										))}
									</RadioGroup>
								</div>
							</div>
						)}

						{/* Step 2: Select CV */}
						{step === 2 && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold text-darkgreen">
									Select a CV
								</h2>
								<p className="text-darkgreen/70">
									Choose which CV you want to submit with your application:
								</p>

								<div className="space-y-4">
									<RadioGroup
										value={formData.cvId}
										onValueChange={(value) =>
											setFormData({ ...formData, cvId: value })
										}
									>
										{cvs.map((cv) => (
											<div
												key={cv.id}
												className="flex items-start space-x-3 border border-darkgreen/20 rounded-lg p-4 hover:border-darkgreen transition-colors"
											>
												<RadioGroupItem
													value={cv.id.toString()}
													id={`cv-${cv.id}`}
													className="mt-1"
												/>
												<div className="flex-1">
													<label
														htmlFor={`cv-${cv.id}`}
														className="font-medium text-darkgreen cursor-pointer"
													>
														{cv.title}
													</label>
													<p className="text-sm text-darkgreen/60 mt-1">
														Last updated: {cv.lastUpdated}
													</p>
												</div>
											</div>
										))}
									</RadioGroup>

									<div className="pt-4 border-t border-darkgreen/10">
										<Button
											variant="outline"
											onClick={() =>
												router.navigate({ to: "/mypage/create-cv" })
											}
											className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
										>
											Create a New CV
										</Button>
									</div>
								</div>
							</div>
						)}

						{/* Step 3: Cover Letter */}
						{step === 3 && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold text-darkgreen">
									Cover Letter
								</h2>
								<p className="text-darkgreen/70">
									Write a cover letter to introduce yourself and explain why
									you're a good fit for this position:
								</p>

								<div>
									<Textarea
										value={formData.coverLetter}
										onChange={(e) =>
											setFormData({ ...formData, coverLetter: e.target.value })
										}
										placeholder="Dear Hiring Manager,

I am writing to express my interest in the [Position] role at [Company]. With my background in..."
										className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[300px]"
									/>
									<p className="text-sm text-darkgreen/60 mt-2">
										A good cover letter should be concise (250-400 words) and
										highlight your relevant skills and experience.
									</p>
								</div>
							</div>
						)}

						{/* Step 4: Additional Questions */}
						{step === 4 && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold text-darkgreen">
									Additional Questions
								</h2>
								<p className="text-darkgreen/70">
									Please answer the following questions to complete your
									application:
								</p>

								<div className="space-y-6">
									<div>
										<Label
											htmlFor="yearsOfExperience"
											className="text-darkgreen font-medium mb-2 block"
										>
											How many years of relevant experience do you have? *
										</Label>
										<Select
											value={formData.additionalQuestions.yearsOfExperience}
											onValueChange={(value) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														yearsOfExperience: value,
													},
												})
											}
										>
											<SelectTrigger
												id="yearsOfExperience"
												className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
											>
												<SelectValue placeholder="Select years of experience" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="0-1">Less than 1 year</SelectItem>
												<SelectItem value="1-3">1-3 years</SelectItem>
												<SelectItem value="3-5">3-5 years</SelectItem>
												<SelectItem value="5-7">5-7 years</SelectItem>
												<SelectItem value="7-10">7-10 years</SelectItem>
												<SelectItem value="10+">10+ years</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div>
										<Label
											htmlFor="relevantSkills"
											className="text-darkgreen font-medium mb-2 block"
										>
											What relevant skills do you have for this position? *
										</Label>
										<Textarea
											id="relevantSkills"
											value={formData.additionalQuestions.relevantSkills}
											onChange={(e) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														relevantSkills: e.target.value,
													},
												})
											}
											placeholder="List your relevant technical and soft skills..."
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[120px]"
										/>
									</div>

									<div>
										<Label
											htmlFor="salaryExpectations"
											className="text-darkgreen font-medium mb-2 block"
										>
											What are your salary expectations? *
										</Label>
										<Input
											id="salaryExpectations"
											value={formData.additionalQuestions.salaryExpectations}
											onChange={(e) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														salaryExpectations: e.target.value,
													},
												})
											}
											placeholder="e.g., $80,000 - $100,000 per year"
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										/>
									</div>

									<div>
										<Label
											htmlFor="startDate"
											className="text-darkgreen font-medium mb-2 block"
										>
											When can you start?
										</Label>
										<Select
											value={formData.additionalQuestions.startDate}
											onValueChange={(value) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														startDate: value,
													},
												})
											}
										>
											<SelectTrigger
												id="startDate"
												className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
											>
												<SelectValue placeholder="Select availability" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="immediately">Immediately</SelectItem>
												<SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
												<SelectItem value="2-4 weeks">2-4 weeks</SelectItem>
												<SelectItem value="1-2 months">1-2 months</SelectItem>
												<SelectItem value="3+ months">3+ months</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div>
										<div className="flex items-center space-x-2 mb-4">
											<Checkbox
												id="relocate"
												checked={formData.additionalQuestions.relocate}
												onCheckedChange={(checked) =>
													setFormData({
														...formData,
														additionalQuestions: {
															...formData.additionalQuestions,
															relocate: !!checked,
														},
													})
												}
											/>
											<label
												htmlFor="relocate"
												className="text-sm text-darkgreen"
											>
												I am willing to relocate for this position
											</label>
										</div>
									</div>

									<div>
										<Label
											htmlFor="workAuthorization"
											className="text-darkgreen font-medium mb-2 block"
										>
											Are you legally authorized to work in the country where
											this job is located?
										</Label>
										<Select
											value={formData.additionalQuestions.workAuthorization}
											onValueChange={(value) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														workAuthorization: value,
													},
												})
											}
										>
											<SelectTrigger
												id="workAuthorization"
												className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
											>
												<SelectValue placeholder="Select work authorization status" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="yes">Yes</SelectItem>
												<SelectItem value="no">No</SelectItem>
												<SelectItem value="sponsor">
													Yes, but I require sponsorship
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div>
										<Label
											htmlFor="referral"
											className="text-darkgreen font-medium mb-2 block"
										>
											How did you hear about this position?
										</Label>
										<Input
											id="referral"
											value={formData.additionalQuestions.referral}
											onChange={(e) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														referral: e.target.value,
													},
												})
											}
											placeholder="e.g., LinkedIn, Company Website, Referral"
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
										/>
									</div>

									<div>
										<Label
											htmlFor="additionalInfo"
											className="text-darkgreen font-medium mb-2 block"
										>
											Is there anything else you'd like to share about your
											application?
										</Label>
										<Textarea
											id="additionalInfo"
											value={formData.additionalQuestions.additionalInfo}
											onChange={(e) =>
												setFormData({
													...formData,
													additionalQuestions: {
														...formData.additionalQuestions,
														additionalInfo: e.target.value,
													},
												})
											}
											placeholder="Add any additional information you'd like the hiring manager to know..."
											className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen min-h-[120px]"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Step 5: Review & Submit */}
						{step === 5 && (
							<div className="space-y-6">
								<h2 className="text-xl font-semibold text-darkgreen">
									Review & Submit
								</h2>
								<p className="text-darkgreen/70">
									Please review your application before submitting:
								</p>

								<div className="space-y-6">
									<div className="border border-darkgreen/20 rounded-lg p-4">
										<h3 className="font-medium text-darkgreen mb-2">
											Selected Job
										</h3>
										<p className="text-darkgreen/70">
											{
												jobs.find((job) => job.id.toString() === formData.jobId)
													?.title
											}{" "}
											at{" "}
											{
												jobs.find((job) => job.id.toString() === formData.jobId)
													?.company
											}
										</p>
									</div>

									<div className="border border-darkgreen/20 rounded-lg p-4">
										<h3 className="font-medium text-darkgreen mb-2">
											Selected CV
										</h3>
										<p className="text-darkgreen/70">
											{
												cvs.find((cv) => cv.id.toString() === formData.cvId)
													?.title
											}
										</p>
									</div>

									<div className="border border-darkgreen/20 rounded-lg p-4">
										<h3 className="font-medium text-darkgreen mb-2">
											Cover Letter
										</h3>
										<p className="text-darkgreen/70 whitespace-pre-line">
											{formData.coverLetter.length > 150
												? formData.coverLetter.substring(0, 150) + "..."
												: formData.coverLetter}
										</p>
										<Button
											variant="link"
											onClick={() => setStep(3)}
											className="p-0 h-auto text-darkgreen hover:text-darkgreen/80"
										>
											Edit Cover Letter
										</Button>
									</div>

									<div className="border border-darkgreen/20 rounded-lg p-4">
										<h3 className="font-medium text-darkgreen mb-2">
											Additional Questions
										</h3>
										<div className="space-y-2">
											<p className="text-darkgreen/70">
												<span className="font-medium">
													Years of Experience:
												</span>{" "}
												{formData.additionalQuestions.yearsOfExperience}
											</p>
											<p className="text-darkgreen/70">
												<span className="font-medium">
													Salary Expectations:
												</span>{" "}
												{formData.additionalQuestions.salaryExpectations}
											</p>
											<p className="text-darkgreen/70">
												<span className="font-medium">Start Date:</span>{" "}
												{formData.additionalQuestions.startDate ||
													"Not specified"}
											</p>
											<p className="text-darkgreen/70">
												<span className="font-medium">
													Willing to Relocate:
												</span>{" "}
												{formData.additionalQuestions.relocate ? "Yes" : "No"}
											</p>
										</div>
										<Button
											variant="link"
											onClick={() => setStep(4)}
											className="p-0 h-auto text-darkgreen hover:text-darkgreen/80"
										>
											Edit Answers
										</Button>
									</div>

									<div className="pt-4">
										<div className="flex items-center space-x-2 mb-4">
											<Checkbox
												id="agreeToTerms"
												checked={formData.agreeToTerms}
												onCheckedChange={(checked) =>
													setFormData({ ...formData, agreeToTerms: !!checked })
												}
											/>
											<label
												htmlFor="agreeToTerms"
												className="text-sm text-darkgreen"
											>
												I confirm that all the information provided is accurate
												and complete. I understand that any false statements or
												omissions may disqualify me from consideration for
												employment.
											</label>
										</div>
									</div>
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
									disabled={!isStepValid()}
									className="bg-darkgreen hover:bg-darkgreen/90"
								>
									Next
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							) : (
								<Button
									onClick={handleSubmit}
									disabled={!isStepValid()}
									className="bg-darkgreen hover:bg-darkgreen/90"
								>
									Submit Application
									<Send className="ml-2 h-4 w-4" />
								</Button>
							)}
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
