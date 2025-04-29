import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import CTA_IMAGE from "@/assets/images/sample-img-2.png";
export default function CtaSection() {
	const features = [
		"Access to thousands of verified candidates",
		"Advanced search and filtering tools",
		"Direct contact with candidates",
		"Dedicated support from our team",
	];

	return (
		<section className="py-16">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-darkgreen mb-4">
							Ready to Find Your Perfect Candidates?
						</h2>
						<p className="text-darkgreen/70 mb-6">
							Join thousands of companies that have streamlined their
							recruitment process with RecruitPro
						</p>

						<div className="space-y-4 mb-8">
							{features.map((feature, index) => (
								<div key={index} className="flex items-center gap-3">
									<div className="w-5 h-5 rounded-full bg-accent2 flex items-center justify-center">
										<Check className="h-3 w-3 text-white" />
									</div>
									<span className="text-darkgreen">{feature}</span>
								</div>
							))}
						</div>

						<Button className="bg-darkgreen hover:bg-darkgreen/90">
							Get Started Free
						</Button>
					</div>

					<div className="relative">
						<div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center">
								<img
									src={CTA_IMAGE}
									alt="CTA Image"
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
