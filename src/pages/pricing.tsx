import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { BubbleBackground } from "@/components/common/bubble-background";

export default function PricingPage() {
	const plans = [
		{
			name: "Standard",
			description:
				"Perfect for small-scale projects that are just getting started",
			price: {
				monthly: "$16",
				yearly: "$160",
			},
			features: [
				"30 Jobs",
				"Unlimited Resumes",
				"Unlimited Integrations",
				"Automation of recurring tasks",
				"Web, Desktop, iOS, Android apps",
				"GDPR & HIPAA Compliance",
			],
			cta: "Get Started",
			popular: false,
			color: "bg-accent2", // Green
			borderColor: "border-accent2",
		},
		{
			name: "Essential",
			description:
				"Perfect for small-scale projects that are just getting started",
			price: {
				monthly: "$24",
				yearly: "$240",
			},
			features: [
				"Everything in Free, plus:",
				"Unlimited Docs",
				"Real-time comments",
				"Administrator rights",
				"Usage dashboard",
				"Enhanced Single Sign-On",
			],
			cta: "Get Started",
			popular: true,
			color: "bg-accent1", // Yellow/orange
			borderColor: "border-accent1",
		},
		{
			name: "Premium",
			description:
				"Perfect for larger-scale projects that are well-established",
			price: {
				monthly: "$36",
				yearly: "$360",
			},
			features: [
				"Everything in Essential, plus:",
				"Advanced SSO permissions",
				"OpenID SSO",
				"OpenAPI",
				"Onboarding",
			],
			cta: "Get Started",
			popular: false,
			color: "bg-accent3", // Red/coral
			borderColor: "border-accent3",
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
					<div className="container mx-auto px-4 text-center relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								We believe in simple and{" "}
								<span className="text-darkgreen">fair pricing</span>
							</h1>
							<p className="text-xl mb-8 max-w-2xl mx-auto">
								Try out our platform for an unlimited period of time. Explore
								our monthly and yearly plans and pick the one that best suits
								your needs.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Pricing Section */}
				<section className="py-20 bg-lightcream">
					<div className="container mx-auto px-4">
						<Tabs
							defaultValue="monthly"
							className="w-full max-w-3xl mx-auto mb-12"
						>
							<motion.div
								className="flex justify-center mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.5 }}
							>
								<TabsList className="grid w-64 grid-cols-2 bg-white">
									<TabsTrigger
										value="monthly"
										className="data-[state=active]:bg-darkgreen data-[state=active]:text-white"
									>
										Monthly
									</TabsTrigger>
									<TabsTrigger
										value="yearly"
										className="data-[state=active]:bg-darkgreen data-[state=active]:text-white"
									>
										Yearly
									</TabsTrigger>
								</TabsList>
							</motion.div>

							<TabsContent value="monthly">
								<motion.div
									variants={containerVariants}
									initial="hidden"
									animate="visible"
									className="grid grid-cols-1 md:grid-cols-3 gap-8"
								>
									{plans.map((plan, index) => (
										<motion.div
											key={index}
											variants={itemVariants}
											whileHover={{ y: -10, transition: { duration: 0.3 } }}
											className={`${plan.popular ? "relative z-10 scale-105 md:scale-110" : ""}`}
										>
											<Card
												className={`border ${plan.popular ? plan.borderColor + " shadow-xl" : "border-gray-200 shadow-md"} overflow-hidden`}
											>
												{plan.popular && (
													<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkgreen text-white text-xs font-bold px-4 py-1 rounded-full">
														MOST POPULAR
													</div>
												)}
												<div className={`h-2 w-full ${plan.color}`}></div>
												<CardHeader className="pb-0">
													<h3 className="text-xl font-bold text-darkgreen mb-2">
														{plan.name}
													</h3>
													<p className="text-sm text-gray-500 mb-4">
														{plan.description}
													</p>
													<div className="mb-4">
														<span className="text-3xl font-bold text-darkgreen">
															{plan.price.monthly}
														</span>
														<span className="text-gray-500">/month</span>
													</div>
												</CardHeader>
												<CardContent className="pt-0">
													<ul className="space-y-3 mb-6">
														{plan.features.map((feature, idx) => (
															<motion.li
																key={idx}
																className="flex items-start"
																initial={{ opacity: 0, x: -10 }}
																animate={{ opacity: 1, x: 0 }}
																transition={{ delay: idx * 0.1 }}
															>
																<Check className="h-5 w-5 text-accent2 mr-2 flex-shrink-0 mt-0.5" />
																<span className="text-gray-700">{feature}</span>
															</motion.li>
														))}
													</ul>
												</CardContent>
												<CardFooter>
													<motion.div
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														className="w-full"
													>
														<Button
															className={`w-full ${
																plan.popular
																	? "bg-darkgreen hover:bg-darkgreen/90 text-white"
																	: "bg-white text-darkgreen border border-darkgreen hover:bg-darkgreen/10"
															}`}
														>
															{plan.cta}
														</Button>
													</motion.div>
												</CardFooter>
											</Card>
										</motion.div>
									))}
								</motion.div>
							</TabsContent>

							<TabsContent value="yearly">
								<motion.div
									variants={containerVariants}
									initial="hidden"
									animate="visible"
									className="grid grid-cols-1 md:grid-cols-3 gap-8"
								>
									{plans.map((plan, index) => (
										<motion.div
											key={index}
											variants={itemVariants}
											whileHover={{ y: -10, transition: { duration: 0.3 } }}
											className={`${plan.popular ? "relative z-10 scale-105 md:scale-110" : ""}`}
										>
											<Card
												className={`border ${plan.popular ? plan.borderColor + " shadow-xl" : "border-gray-200 shadow-md"} overflow-hidden`}
											>
												{plan.popular && (
													<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkgreen text-white text-xs font-bold px-4 py-1 rounded-full">
														MOST POPULAR
													</div>
												)}
												<div className={`h-2 w-full ${plan.color}`}></div>
												<CardHeader className="pb-0">
													<h3 className="text-xl font-bold text-darkgreen mb-2">
														{plan.name}
													</h3>
													<p className="text-sm text-gray-500 mb-4">
														{plan.description}
													</p>
													<div className="mb-4">
														<span className="text-3xl font-bold text-darkgreen">
															{plan.price.yearly}
														</span>
														<span className="text-gray-500">/year</span>
													</div>
												</CardHeader>
												<CardContent className="pt-0">
													<ul className="space-y-3 mb-6">
														{plan.features.map((feature, idx) => (
															<motion.li
																key={idx}
																className="flex items-start"
																initial={{ opacity: 0, x: -10 }}
																animate={{ opacity: 1, x: 0 }}
																transition={{ delay: idx * 0.1 }}
															>
																<Check className="h-5 w-5 text-accent2 mr-2 flex-shrink-0 mt-0.5" />
																<span className="text-gray-700">{feature}</span>
															</motion.li>
														))}
													</ul>
												</CardContent>
												<CardFooter>
													<motion.div
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														className="w-full"
													>
														<Button
															className={`w-full ${
																plan.popular
																	? "bg-darkgreen hover:bg-darkgreen/90 text-white"
																	: "bg-white text-darkgreen border border-darkgreen hover:bg-darkgreen/10"
															}`}
														>
															{plan.cta}
														</Button>
													</motion.div>
												</CardFooter>
											</Card>
										</motion.div>
									))}
								</motion.div>
							</TabsContent>
						</Tabs>

						<motion.div
							className="text-center max-w-2xl mx-auto mt-12"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<p className="text-gray-600 mb-8">
								All plans come with a 14-day free trial and no long-term
								contracts. Start your free trial today and see for yourself how
								our Saas Hiring Website can help streamline your recruitment
								process.
							</p>

							<div className="mt-12">
								<h3 className="text-2xl font-bold text-darkgreen mb-6">
									Prefer to talk to sales?
								</h3>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
									<div className="relative w-full max-w-md">
										<input
											type="email"
											placeholder="Enter your email address"
											className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkgreen"
										/>
									</div>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button className="bg-darkgreen hover:bg-darkgreen/90 whitespace-nowrap">
											Get Started
										</Button>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-12"
						>
							<h2 className="text-3xl font-bold text-darkgreen mb-4">
								Frequently Asked Questions
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Find answers to common questions about our pricing and plans.
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="max-w-3xl mx-auto"
						>
							{[
								{
									question: "Can I change my plan later?",
									answer:
										"Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be reflected in your next billing cycle.",
								},
								{
									question: "What payment methods do you accept?",
									answer:
										"We accept all major credit cards, including Visa, Mastercard, and American Express. We also accept PayPal for payment.",
								},
								{
									question: "Is there a contract or commitment?",
									answer:
										"No, all our plans are month-to-month or year-to-year with no long-term contracts. You can cancel at any time.",
								},
								{
									question: "Can I get a refund if I'm not satisfied?",
									answer:
										"We offer a 14-day money-back guarantee for all our plans. If you're not satisfied with our service, you can request a refund within 14 days of your purchase.",
								},
								{
									question:
										"Do you offer discounts for non-profits or educational institutions?",
									answer:
										"Yes, we offer special pricing for non-profits, educational institutions, and startups. Please contact our sales team for more information.",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-200"
									whileHover={{ y: -5, transition: { duration: 0.2 } }}
								>
									<h3 className="text-xl font-bold text-darkgreen mb-2">
										{item.question}
									</h3>
									<p className="text-gray-600">{item.answer}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			</main>
		</>
	);
}
