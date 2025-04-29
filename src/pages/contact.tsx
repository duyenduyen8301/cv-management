import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { BubbleBackground } from "@/components/common/bubble-background";
import IframeMap from "@/components/map/iframe-map";

export default function ContactPage() {
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
				<section className="bg-beige text-darkgreen py-20 pt-[150px] relative overflow-hidden">
					<BubbleBackground />
					<div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Contact Us
							</h1>
							<p className="text-xl mb-8">
								At RecruitPro, we are always here to help you. If you have any
								questions, feedback, or just need assistance, please don't
								hesitate to reach out to us.
							</p>

							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="space-y-6"
							>
								<motion.div
									variants={itemVariants}
									className="flex items-start"
								>
									<div className="bg-darkgreen/30 p-3 rounded-full mr-4">
										<Phone className="h-6 w-6 text-darkgreen" />
									</div>
									<div>
										<h3 className="font-medium text-lg">Phone:</h3>
										<p>(888) 123-4567</p>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex items-start"
								>
									<div className="bg-darkgreen/30 p-3 rounded-full mr-4">
										<Mail className="h-6 w-6 text-darkgreen" />
									</div>
									<div>
										<h3 className="font-medium text-lg">Email:</h3>
										<p>support@recruitpro.com</p>
									</div>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="flex items-start"
								>
									<div className="bg-darkgreen/30 p-3 rounded-full mr-4">
										<MapPin className="h-6 w-6 text-darkgreen" />
									</div>
									<div>
										<h3 className="font-medium text-lg">Address:</h3>
										<p>
											123 Tran Hung Dao Street
											<br />
											Hoan Kiem District, Hanoi, Vietnam
										</p>
									</div>
								</motion.div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<Card className="bg-white shadow-xl border-0">
								<CardContent className="p-6">
									<h2 className="text-2xl font-bold text-darkgreen mb-6">
										Get in Touch
									</h2>
									<form className="space-y-4">
										<div>
											<label
												htmlFor="fullName"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Full Name
											</label>
											<Input
												id="fullName"
												placeholder="John Smith"
												className="w-full border-gray-300"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Email
											</label>
											<Input
												id="email"
												type="email"
												placeholder="you@example.com"
												className="w-full border-gray-300"
											/>
										</div>

										<div>
											<label
												htmlFor="address"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Address
											</label>
											<Input
												id="address"
												placeholder="123 Example St."
												className="w-full border-gray-300"
											/>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Your Message
											</label>
											<Textarea
												id="message"
												placeholder="Type your message..."
												className="w-full border-gray-300 min-h-[120px]"
											/>
										</div>

										<div className="text-xs text-gray-500">
											By submitting this form, you agree to our terms and
											conditions and our Privacy Policy which explains how we
											may use your data.
										</div>

										<motion.div
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
										>
											<Button className="w-full bg-darkgreen hover:bg-darkgreen/90 text-white">
												Send
											</Button>
										</motion.div>
									</form>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</section>

				{/* Business Hours Section */}
				<section className="py-16 bg-lightcream">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<h2 className="text-2xl font-bold text-darkgreen mb-6 flex items-center">
									<Clock className="h-6 w-6 mr-2 text-accent2" />
									Business Hours
								</h2>
								<ul className="space-y-3 text-darkgreen">
									<motion.li
										className="flex justify-between items-center pb-2 border-b border-gray-200"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.1 }}
									>
										<span className="font-medium">Monday - Friday:</span>
										<span>9:00am - 5:00pm EST</span>
									</motion.li>
									<motion.li
										className="flex justify-between items-center pb-2 border-b border-gray-200"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2 }}
									>
										<span className="font-medium">Saturday:</span>
										<span>10:00am - 2:00pm EST</span>
									</motion.li>
									<motion.li
										className="flex justify-between items-center pb-2 border-b border-gray-200"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 }}
									>
										<span className="font-medium">Sunday:</span>
										<span>Closed</span>
									</motion.li>
								</ul>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<h2 className="text-2xl font-bold text-darkgreen mb-6">
									Social Media:
								</h2>
								<p className="mb-4 text-darkgreen">
									Stay up to date with the latest news and updates by following
									us on Twitter and LinkedIn.
								</p>
								<div className="flex space-x-4 text-darkgreen">
									<motion.a
										href="#"
										className="flex items-center text-darkgreen hover:text-accent3 transition-colors"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Twitter className="h-5 w-5 mr-2" />
										<span>@RecruitPro</span>
									</motion.a>
									<motion.a
										href="#"
										className="flex items-center text-darkgreen hover:text-accent2 transition-colors"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Linkedin className="h-5 w-5 mr-2" />
										<span>RecruitPro Hiring</span>
									</motion.a>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Map Section */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<motion.h2
							className="text-2xl font-bold text-darkgreen mb-6 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							Find Us in Hanoi, Vietnam
						</motion.h2>
						<motion.div
							className="h-[500px] rounded-lg overflow-hidden shadow-lg"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<IframeMap title="RecruitPro Office in Hanoi, Vietnam" />
						</motion.div>
						<p className="text-center mt-4 text-gray-600">
							Our Vietnam office is located in the heart of Hanoi. Feel free to
							visit us during business hours!
						</p>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-16 bg-beige text-darkgreen relative">
					<BubbleBackground />
					<div className="container mx-auto px-4 relative z-10">
						<motion.h2
							className="text-2xl font-bold text-darkgreen mb-6 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							Frequently Asked Questions
						</motion.h2>
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="max-w-3xl mx-auto"
						>
							{[
								{
									question: "How quickly can I expect a response?",
									answer:
										"We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our customer support line.",
								},
								{
									question: "Do you offer technical support?",
									answer:
										"Yes, we offer technical support for all our products and services. You can reach our technical support team via email or phone.",
								},
								{
									question: "Can I schedule a demo of your platform?",
									answer:
										"You can schedule a demo by filling out the contact form or by calling our sales team directly.",
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
