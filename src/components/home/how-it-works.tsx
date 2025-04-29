import HOW_IT_WORKS_IMAGE from "@/assets/images/sample-img.png";

export default function HowItWorks() {
	const steps = [
		{
			id: 1,
			title: "Create an Account",
			description:
				"Sign up for free and complete your company profile to get started.",
		},
		{
			id: 2,
			title: "Search for Candidates",
			description:
				"Use our powerful search tools to find candidates that match your requirements.",
		},
		{
			id: 3,
			title: "Review Profiles",
			description:
				"Browse detailed candidate profiles with skills, experience, and portfolio samples.",
		},
		{
			id: 4,
			title: "Contact & Hire",
			description:
				"Connect with candidates directly and make your hiring decision with confidence.",
		},
	];

	const features = [
		{
			id: 1,
			title: "Verified Candidates",
			description: "All candidates are pre-screened and verified for quality.",
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
					<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
					<path d="m9 12 2 2 4-4" />
				</svg>
			),
		},
		{
			id: 2,
			title: "Dedicated Support",
			description:
				"Our team is available to help you throughout the hiring process.",
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
					<path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
				</svg>
			),
		},
		{
			id: 3,
			title: "Satisfaction Guaranteed",
			description: "Find the right candidate or get your money back.",
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
					<path d="M19.071 13.142 13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657a2 2 0 0 1 0-2.828l5.657-5.657a2 2 0 0 1 2.828 0l5.657 5.657a2 2 0 0 1 0 2.828Z" />
					<circle cx="12" cy="12" r="3" />
				</svg>
			),
		},
	];

	return (
		<section className="py-16">
			<div className="container">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-darkgreen mb-4">
						How It Works
					</h2>
					<p className="text-darkgreen/70 max-w-2xl mx-auto">
						Find and hire top talent in just a few simple steps
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
					<div className="space-y-8">
						{steps.map((step) => (
							<div key={step.id} className="flex gap-4">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkgreen text-white flex items-center justify-center font-bold">
									{step.id}
								</div>
								<div>
									<h3 className="font-semibold text-lg text-darkgreen mb-1">
										{step.title}
									</h3>
									<p className="text-darkgreen/70">{step.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className="relative">
						<div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								<img
									src={HOW_IT_WORKS_IMAGE}
									alt="How It Works"
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className="bg-white p-6 rounded-lg shadow-sm border border-darkgreen/10"
						>
							<div
								className={`feature-icon feature-icon-${index + 1} mb-4 text-darkgreen`}
							>
								{feature.icon}
							</div>
							<h3 className="font-semibold text-lg text-darkgreen mb-2">
								{feature.title}
							</h3>
							<p className="text-darkgreen/70">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
