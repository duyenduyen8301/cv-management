import HeroSection from "@/components/home/hero-section";
import CategoriesSection from "@/components/home/categories-section";
import FeaturedCandidates from "@/components/home/featured-candidates";
import HowItWorks from "@/components/home/how-it-works";
import FeaturedCompanies from "@/components/home/featured-companies";
import TestimonialsSection from "@/components/home/testimonials-section";
import StatsSection from "@/components/home/stats-section";
import CtaSection from "@/components/home/cta-section";

import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="flex flex-col">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<HeroSection />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<CategoriesSection />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<FeaturedCandidates />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<HowItWorks />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<StatsSection />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<FeaturedCompanies />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<TestimonialsSection />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<CtaSection />
			</motion.div>
		</div>
	);
}
