import { motion } from "framer-motion";
import { getInitials } from "@/utils";
export default function StatsSection() {
	const stats = [
		{
			id: 1,
			value: "50,000+",
			label: "Talented Candidates",
			icon: (
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
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
					<circle cx="9" cy="7" r="4" />
					<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
					<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				</svg>
			),
		},
		{
			id: 2,
			value: "10,000+",
			label: "Jobs Filled",
			icon: (
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
					<rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
					<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
				</svg>
			),
		},
		{
			id: 3,
			value: "5,000+",
			label: "Companies Hiring",
			icon: (
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
					<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
					<path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
					<path d="M9 22V12" />
					<path d="M15 22V12" />
				</svg>
			),
		},
		{
			id: 4,
			value: "98%",
			label: "Satisfaction Rate",
			icon: (
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
					<path d="m9 12 2 2 4-4" />
					<path d="M12 3c-1.333 0-2.78.47-4.341 1.41-3 1.8-4.659 4.59-4.659 7.59s1.659 5.79 4.659 7.59C9.22 20.53 10.667 21 12 21s2.78-.47 4.341-1.41c3-1.8 4.659-4.59 4.659-7.59s-1.659-5.79-4.659-7.59C14.78 3.47 13.333 3 12 3Z" />
				</svg>
			),
		},
	];

	const companyLogo = ["NN", "VSA", "JH", "AT", "PI", "TD"];

	return (
		<section className="py-16 bg-darkgreen text-white">
			<div className="container">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
					<p className="text-white/70 max-w-2xl mx-auto">
						Join the thousands of companies that have found exceptional talent
						through our platform
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="stats-card border border-white/10 bg-white/80 backdrop-blur-sm p-4 rounded-md"
						>
							<div className="text-accent1 mb-4">{stat.icon}</div>
							<div className="text-3xl font-bold mb-1 text-darkgreen">
								{stat.value}
							</div>
							<div className="text-darkgreen/70">{stat.label}</div>
						</div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<div className="relative mt-16 w-full overflow-hidden">
						<div className="animate-marquee flex gap-4 md:gap-8">
							{companyLogo.map((i) => (
								<div
									key={i}
									className="w-16 md:w-24 h-10 md:h-12 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0"
								>
									<div className="w-12 md:w-16 h-6 md:h-8 bg-muted bg-gradient-to-br from-darkgreen to-accent2 rounded flex items-center justify-center text-white text-md font-semibold">
										{i}
									</div>
								</div>
							))}
							{/* Repeat for duplicate and triplicate with same responsive classes */}
							{companyLogo.map((i) => (
								<div
									key={`duplicate-${i}`}
									className="w-16 md:w-24 h-10 md:h-12 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0"
								>
									<div className="w-12 md:w-16 h-6 md:h-8 bg-muted bg-gradient-to-br from-darkgreen to-accent2 rounded flex items-center justify-center text-white text-md font-semibold	">
										{i}
									</div>
								</div>
							))}
							{companyLogo.map((i) => (
								<div
									key={`triplicate-${i}`}
									className="w-16 md:w-24 h-10 md:h-12 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0"
								>
									<div className="w-12 md:w-16 h-6 md:h-8 bg-muted bg-gradient-to-br from-darkgreen to-accent2 rounded flex items-center justify-center text-white text-md font-semibold">
										{i}
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
