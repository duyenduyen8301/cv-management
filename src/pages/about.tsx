import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { BubbleBackground } from "@/components/common/bubble-background";

export default function AboutPage() {
	const teamMembers = [
		{
			name: "Diane Lansdowne",
			role: "Founder, CEO",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Ray Milbourne",
			role: "Technical Director",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Caroline Bloome",
			role: "Product Marketing Manager",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Gladys Kariminda",
			role: "Content Manager",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Monica Ribeiro",
			role: "Designer",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Sofia Manzano",
			role: "Customer Experience",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Sibabale Rubusana",
			role: "Digital Marketing Manager",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
		{
			name: "Lizzie Rose",
			role: "Customer Experience",
			avatar: "/placeholder.svg?height=200&width=200",
			social: {
				linkedin: "#",
				twitter: "#",
			},
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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

	const values = [
		{
			title: "Customer First",
			description:
				"We put our customers at the center of everything we do. Their success is our success.",
			color: "bg-accent1", // Yellow/orange
		},
		{
			title: "Innovation",
			description:
				"We're constantly innovating and improving our platform to provide the best possible experience.",
			color: "bg-accent2", // Green
		},
		{
			title: "Transparency",
			description:
				"We believe in being transparent with our customers, partners, and team members.",
			color: "bg-accent3", // Red/coral
		},
		{
			title: "Diversity & Inclusion",
			description:
				"We celebrate diversity and create an inclusive environment where everyone can thrive.",
			color: "bg-accent1", // Yellow/orange
		},
		{
			title: "Quality",
			description:
				"We're committed to delivering high-quality products and services that exceed expectations.",
			color: "bg-accent2", // Green
		},
		{
			title: "Collaboration",
			description:
				"We believe that the best results come from working together as a team.",
			color: "bg-accent3", // Red/coral
		},
	];

	return (
		<>
			<main className="overflow-hidden">
				{/* Hero Section */}
				<section className="bg-beige text-darkgreen py-20 pt-[150px] relative overflow-hidden">
					<BubbleBackground />
					<div className="container mx-auto px-4 relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="max-w-3xl"
						>
							<h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
								WHO WE ARE
							</h2>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								For founders,{" "}
								<span className="text-darkgreen">by founders</span>
							</h1>
							<p className="text-xl mb-8">
								At RecruitPro, we believe every team excels in its own unique
								way. But existing software options are too rigid, and enforce
								their own way of thinking on teams.
							</p>
							<p className="text-xl mb-8">
								We started RecruitPro to build a tool that adapts to you, and
								your team. However you prefer to work, RecruitPro evolves with
								your company - as you grow your team, RecruitPro grows right
								alongside you so you can build a more interconnected company.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Mission Section */}
				<section className="py-20 bg-lightcream">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								<img
									src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250402_1628_Gi%E1%BB%9Bi%20Thi%E1%BB%87u%20Tuy%E1%BB%83n%20D%E1%BB%A5ng_simple_compose_01jqtx9gmbfpe8tb7q5vrke827-3Gv2lCXJ2OWpCVVpFaXkdDbWISlvOq.png"
									alt="Team collaboration"
									className="rounded-lg shadow-lg"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								<h2 className="text-3xl font-bold text-darkgreen mb-6">
									Project management shared across the entire company
								</h2>
								<p className="text-lg text-gray-600 mb-6">
									Our goal is to empower founders to build companies without
									taking on restrictive debt or giving up ownership interest. We
									designed RecruitPro to enable access to non-dilutive capital
									based on the health of your business—not based on who you
									know.
								</p>
								<p className="text-lg text-gray-600 mb-6">
									We believe that the future of work is remote, and that the
									best teams are built with diversity in mind. RecruitPro helps
									you find and hire the best talent, regardless of location.
								</p>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button className="bg-darkgreen text-white hover:bg-darkgreen/90">
										Learn More
									</Button>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Values Section */}
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
								Our Values
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								These core values guide everything we do at RecruitPro, from
								product development to customer service.
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
						>
							{values.map((value, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									whileHover={{ y: -10, transition: { duration: 0.3 } }}
									className="bg-white p-8 rounded-lg shadow-md border border-gray-100 overflow-hidden"
								>
									<div
										className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center text-white mb-4`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
											<polyline points="22 4 12 14.01 9 11.01" />
										</svg>
									</div>
									<h3 className="text-xl font-bold text-darkgreen mb-2">
										{value.title}
									</h3>
									<p className="text-gray-600">{value.description}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				{/* Team Section */}
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
								Our Awesome Team
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Meet the talented individuals who make RecruitPro possible.
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
						>
							{teamMembers.map((member, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									whileHover={{ y: -10, transition: { duration: 0.3 } }}
									className="text-center"
								>
									<motion.div
										whileHover={{ scale: 1.1 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-white shadow-lg">
											<AvatarImage src={member.avatar} alt={member.name} />
											<AvatarFallback className="bg-darkgreen text-white text-xl">
												{member.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>
									</motion.div>
									<h3 className="text-xl font-bold text-darkgreen mb-1">
										{member.name}
									</h3>
									<p className="text-gray-600 mb-3">{member.role}</p>
									<div className="flex justify-center space-x-3">
										<a
											href={member.social.linkedin}
											className="text-gray-500 hover:text-darkgreen transition-colors"
										>
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
											>
												<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
												<rect width="4" height="12" x="2" y="9" />
												<circle cx="4" cy="4" r="2" />
											</svg>
										</a>
										<a
											href={member.social.twitter}
											className="text-gray-500 hover:text-darkgreen transition-colors"
										>
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
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
											</svg>
										</a>
									</div>
								</motion.div>
							))}
						</motion.div>
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
							<h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
							<p className="text-xl mb-8">
								We're always looking for talented individuals to join our team.
								Check out our open positions.
							</p>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button className="bg-darkgreen text-white hover:bg-darkgreen/90 text-lg px-8 py-6">
									View Open Positions
								</Button>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</main>
		</>
	);
}
