import { getInitials } from "@/utils";

export default function FeaturedCompanies() {
	const companies = [
		{
			id: 1,
			name: "Technovate",
			industry: "Technology",
			location: "San Francisco, CA",
			openPositions: 12,
			logo: "/placeholder.svg?height=80&width=80",
		},
		{
			id: 2,
			name: "Global Solutions",
			industry: "Consulting",
			location: "New York, NY",
			openPositions: 8,
			logo: "/placeholder.svg?height=80&width=80",
		},
		{
			id: 3,
			name: "NextWave",
			industry: "Software",
			location: "Austin, TX",
			openPositions: 5,
			logo: "/placeholder.svg?height=80&width=80",
		},
		{
			id: 4,
			name: "Innovate Design",
			industry: "Design",
			location: "Seattle, WA",
			openPositions: 3,
			logo: "/placeholder.svg?height=80&width=80",
		},
		{
			id: 5,
			name: "Future Finance",
			industry: "Finance",
			location: "Chicago, IL",
			openPositions: 7,
			logo: "/placeholder.svg?height=80&width=80",
		},
	];

	return (
		<section className="py-16 bg-lightcream">
			<div className="container">
				<div className="flex justify-between items-center mb-12">
					<div>
						<h2 className="text-3xl font-bold text-darkgreen mb-2">
							Featured Companies
						</h2>
						<p className="text-darkgreen/70">
							Top companies that trust our platform for their hiring needs
						</p>
					</div>
					<button className="text-darkgreen font-medium hover:text-accent2 flex items-center gap-2">
						View All Companies
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
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{companies.map((company) => (
						<div
							key={company.id}
							className="bg-white p-6 rounded-lg shadow-sm border border-darkgreen/10"
						>
							<div className="flex flex-col h-full">
								<div className="mb-4">
									<div className="w-16 h-16 bg-darkgreen/5 rounded-md flex items-center justify-center mb-4">
										{getInitials(company.name)}
									</div>
									<h3 className="font-semibold text-darkgreen">
										{company.name}
									</h3>
									<p className="text-sm text-darkgreen/70">
										{company.industry}
									</p>
								</div>
								<div className="mt-auto">
									<div className="flex items-center text-sm text-darkgreen/70 mb-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1"
										>
											<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										{company.location}
									</div>
									<div className="text-sm text-accent2 font-medium">
										{company.openPositions} open positions
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
