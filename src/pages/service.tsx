import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BubbleBackground } from "@/components/common/bubble-background";

export default function ServicesPage() {
	const services = [
		{
			title: "CV Database Access",
			description:
				"Get unlimited access to our extensive database of qualified candidates across various industries.",
			features: [
				"Search and filter by skills, experience, location",
				"Download candidate profiles",
				"Save favorite candidates",
				"Receive matching candidate alerts",
			],
			icon: "database",
			color: "bg-accent2", // Green
		},
		{
			title: "Job Posting",
			description:
				"Post your job openings on our platform to reach thousands of qualified candidates.",
			features: [
				"Unlimited job postings",
				"Featured job listings",
				"Applicant tracking system",
				"Analytics and reporting",
			],
			icon: "briefcase",
			color: "bg-accent1", // Yellow/orange
		},
		{
			title: "Recruitment Services",
			description:
				"Let our expert recruiters help you find the perfect candidates for your open positions.",
			features: [
				"Dedicated recruitment consultant",
				"Candidate screening and shortlisting",
				"Interview scheduling",
				"Offer negotiation support",
			],
			icon: "users",
			color: "bg-accent3", // Red/coral
		},
		{
			title: "Employer Branding",
			description:
				"Enhance your employer brand to attract top talent to your organization.",
			features: [
				"Company profile customization",
				"Branded career page",
				"Social media promotion",
				"Employer reviews management",
			],
			icon: "building",
			color: "bg-darkgreen", // Dark green
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
			},
		},
	};

	return (
		<>
			<main className="overflow-hidden">
				{/* Hero Section */}
				<section className="bg-beige text-darkgreen py-20 pt-[150px] relative">
					<BubbleBackground />
					<div className="container mx-auto px-4 relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="max-w-3xl mx-auto text-center"
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Our Recruitment Services
							</h1>
							<p className="text-xl mb-8">
								We provide comprehensive recruitment solutions to help you find
								the best talent for your organization.
							</p>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button className="bg-darkgreen text-white hover:bg-darkgreen/90 text-lg px-8 py-6">
									Get Started
								</Button>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Services Section */}
				<section className="py-20 bg-lightcream">
					<div className="container mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-3xl font-bold text-darkgreen mb-4">
								Our Services
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								We offer a range of recruitment services to meet your hiring
								needs, from job postings to full-service recruitment.
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-2 gap-8"
						>
							{services.map((service, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									whileHover={{ y: -10, transition: { duration: 0.3 } }}
									className="bg-white rounded-lg shadow-lg p-8 transition-all border border-gray-100"
								>
									<div className="mb-4">
										<div
											className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white mb-4`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="28"
												height="28"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-white"
											>
												{service.icon === "database" && (
													<>
														<ellipse cx="12" cy="5" rx="9" ry="3" />
														<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
														<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
													</>
												)}
												{service.icon === "briefcase" && (
													<>
														<rect
															width="20"
															height="14"
															x="2"
															y="7"
															rx="2"
															ry="2"
														/>
														<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
													</>
												)}
												{service.icon === "users" && (
													<>
														<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
														<circle cx="9" cy="7" r="4" />
														<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
														<path d="M16 3.13a4 4 0 0 1 0 7.75" />
													</>
												)}
												{service.icon === "building" && (
													<>
														<rect
															width="16"
															height="20"
															x="4"
															y="2"
															rx="2"
															ry="2"
														/>
														<path d="M9 22v-4h6v4" />
														<path d="M8 6h.01" />
														<path d="M16 6h.01" />
														<path d="M12 6h.01" />
														<path d="M12 10h.01" />
														<path d="M12 14h.01" />
														<path d="M16 10h.01" />
														<path d="M16 14h.01" />
														<path d="M8 10h.01" />
														<path d="M8 14h.01" />
													</>
												)}
											</svg>
										</div>
										<h3 className="text-xl font-bold text-darkgreen mb-2">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-4">{service.description}</p>
									</div>
									<ul className="space-y-2">
										{service.features.map((feature, idx) => (
											<motion.li
												key={idx}
												className="flex items-start"
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ delay: idx * 0.1 }}
												viewport={{ once: true }}
											>
												<CheckCircle className="h-5 w-5 text-accent2 mr-2 flex-shrink-0 mt-0.5" />
												<span className="text-gray-700">{feature}</span>
											</motion.li>
										))}
									</ul>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-3xl font-bold text-darkgreen mb-4">
								How It Works
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Our simple process makes it easy to find the right candidates
								for your open positions.
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									step: "1",
									title: "Create an Account",
									description:
										"Sign up for an account and complete your company profile to get started.",
									color: "bg-accent1",
								},
								{
									step: "2",
									title: "Post a Job or Search CVs",
									description:
										"Post your job openings or search our database for qualified candidates.",
									color: "bg-accent2",
								},
								{
									step: "3",
									title: "Connect with Candidates",
									description:
										"Contact candidates directly or receive applications for your job postings.",
									color: "bg-accent3",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className="text-center"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2, duration: 0.5 }}
								>
									<motion.div
										className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-darkgreen text-2xl font-bold mx-auto mb-4`}
										whileHover={{ scale: 1.1, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										{item.step}
									</motion.div>
									<h3 className="text-xl font-bold text-darkgreen mb-2">
										{item.title}
									</h3>
									<p className="text-gray-600">{item.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 bg-beige text-darkgreen relative">
					<BubbleBackground />
					<div className="container mx-auto px-4 relative z-10">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="max-w-3xl mx-auto text-center"
						>
							<h2 className="text-3xl font-bold mb-6">
								Ready to Find Your Next Great Hire?
							</h2>
							<p className="text-xl mb-8">
								Join thousands of companies that have found top talent through
								our platform.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button className="bg-darkgreen text-white hover:bg-darkgreen/90 text-lg px-8 py-6 w-full sm:w-auto">
										Get Started
									</Button>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										variant="outline"
										className="border-darkgreen text-darkgreen hover:bg-darkgreen/10 text-lg px-8 py-6 w-full sm:w-auto"
									>
										Contact Sales
									</Button>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
		</>
	);
}
