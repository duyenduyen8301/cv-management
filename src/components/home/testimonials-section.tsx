import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	const testimonials = [
		{
			id: 1,
			name: "Jessica Chen",
			position: "CTO, Technovate",
			testimonial:
				"RecruitPro has transformed our hiring process. We found three senior developers in just two weeks, all perfect fits for our team culture and technical requirements.",
			avatar: "/placeholder.svg?height=60&width=60",
			rating: 5,
		},
		{
			id: 2,
			name: "Michael Rodriguez",
			position: "HR Director, Global Solutions",
			testimonial:
				"The quality of candidates we've found through this platform is exceptional. The detailed profiles and skill verifications make it easy to find exactly what we're looking for.",
			avatar: "/placeholder.svg?height=60&width=60",
			rating: 5,
		},
		{
			id: 3,
			name: "Sarah Johnson",
			position: "Founder, NextWave",
			testimonial:
				"As a startup, finding the right talent quickly is crucial. RecruitPro helped us build our entire engineering team in record time, saving us countless hours of recruitment work.",
			avatar: "/placeholder.svg?height=60&width=60",
			rating: 4,
		},
	];

	const handlePrev = () => {
		setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className="py-16">
			<div className="container">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-darkgreen mb-4">
						What Our Clients Say
					</h2>
					<p className="text-darkgreen/70 max-w-2xl mx-auto">
						Hear from companies that have found exceptional talent through our
						platform
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative bg-white p-8 rounded-lg shadow-sm border border-darkgreen/10">
						<div className="absolute -top-5 left-10 text-accent1 text-6xl">
							"
						</div>

						<div className="pt-4">
							<p className="text-lg text-darkgreen/80 italic mb-6">
								{testimonials[activeIndex].testimonial}
							</p>

							<div className="flex items-center">
								<Avatar className="h-12 w-12 mr-4">
									<AvatarImage
										src={testimonials[activeIndex].avatar}
										alt={testimonials[activeIndex].name}
									/>
									<AvatarFallback>
										{testimonials[activeIndex].name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div>
									<h3 className="font-semibold text-darkgreen">
										{testimonials[activeIndex].name}
									</h3>
									<p className="text-sm text-darkgreen/70">
										{testimonials[activeIndex].position}
									</p>
								</div>
								<div className="ml-auto flex">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill={
												i < testimonials[activeIndex].rating
													? "currentColor"
													: "none"
											}
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="text-accent1"
										>
											<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
										</svg>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center mt-8 gap-2">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							onClick={handlePrev}
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
								<path d="m15 18-6-6 6-6" />
							</svg>
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							onClick={handleNext}
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
								<path d="m9 18 6-6-6-6" />
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
