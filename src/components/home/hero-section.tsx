import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import SearchModal from "@/components/home/search-modal";
import HERO_IMAGE from "@/assets/images/hero-section-img.png";
export default function HeroSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="bg-darkgreen pt-24 pb-16 min-h-[500px] relative">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-4xl md:text-5xl font-bold mb-4 text-white"
						>
							Find the Perfect <span className="text-[#4ade80]">Candidate</span>
							<br />
							for Your Company
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-lg mb-8 text-white/80"
						>
							Search through thousands of professional CVs to find the talent
							that matches your requirements
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="relative max-w-xl"
						>
							<div
								className="flex items-center bg-white rounded-full overflow-hidden pr-2 cursor-pointer"
								onClick={() => setIsModalOpen(true)}
							>
								<input
									type="text"
									placeholder="Search for CVs by job title, skills, or keywords..."
									className="flex-1 py-3 px-5 focus:outline-none text-gray-700"
									readOnly
									onClick={() => setIsModalOpen(true)}
								/>
								<Button
									className="bg-darkgreen hover:bg-darkgreen/90 text-white rounded-full px-6"
									onClick={() => setIsModalOpen(true)}
								>
									Search
								</Button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="flex flex-wrap gap-6 mt-6"
						>
							<div className="flex items-center gap-2">
								<div className="w-5 h-5 rounded-full bg-[#4ade80] flex items-center justify-center">
									<Check className="h-3 w-3 text-darkgreen" />
								</div>
								<span className="text-sm text-white">Verified Profiles</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-5 h-5 rounded-full bg-[#4ade80] flex items-center justify-center">
									<Check className="h-3 w-3 text-darkgreen" />
								</div>
								<span className="text-sm text-white">
									Skilled Professionals
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-5 h-5 rounded-full bg-[#4ade80] flex items-center justify-center">
									<Check className="h-3 w-3 text-darkgreen" />
								</div>
								<span className="text-sm text-white">Fast Hiring</span>
							</div>
						</motion.div>
					</div>

					<div className="hidden lg:flex justify-center">
						<div className="relative w-full max-w-md h-80 md:h-96">
							<div className="absolute inset-0 bg-[#2e413e] rounded-lg shadow-lg overflow-hidden">
								<div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#FFE4B5] opacity-50"></div>
								<div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-[#FFA07A] opacity-50"></div>
								<div className="absolute right-20 bottom-20 w-20 h-20 rounded-full bg-[#98FB98] opacity-50"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<img
										src={HERO_IMAGE}
										alt="Hero Image"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
}
