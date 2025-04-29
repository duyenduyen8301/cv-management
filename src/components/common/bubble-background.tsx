import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bubble {
	id: number;
	size: number;
	x: number;
	y: number;
	duration: number;
	delay: number;
	color: string;
}

export function BubbleBackground() {
	const [bubbles, setBubbles] = useState<Bubble[]>([]);

	useEffect(() => {
		// Generate bubbles in different quadrants to avoid overlap
		// const colors = [
		//   "rgba(47, 74, 70, 0.6)",
		//   "rgba(248, 184, 60, 0.6)",
		//   "rgba(241, 91, 80, 0.5)",
		//   "rgba(75, 139, 91, 0.5)",
		// ]

		const colors = [
			"radial-gradient(circle, rgba(47, 74, 70, 0.6) 0%, rgba(47, 74, 70, 0.1) 70%)",
			"radial-gradient(circle, rgba(248, 184, 60, 0.6) 0%, rgba(248, 184, 60, 0.1) 70%)",
			"radial-gradient(circle, rgba(241, 91, 80, 0.5) 0%, rgba(241, 91, 80, 0.1) 70%)",
			"radial-gradient(circle, rgba(75, 139, 91, 0.5) 0%, rgba(75, 139, 91, 0.1) 70%)",
		];

		// Position bubbles in different quadrants
		const quadrants = [
			{ xMin: 5, xMax: 40, yMin: 5, yMax: 40 }, // Top-left
			{ xMin: 60, xMax: 95, yMin: 5, yMax: 40 }, // Top-right
			{ xMin: 5, xMax: 40, yMin: 60, yMax: 95 }, // Bottom-left
			{ xMin: 60, xMax: 95, yMin: 60, yMax: 95 }, // Bottom-right
		];

		const newBubbles: Bubble[] = [];

		// Create exactly 4 bubbles, one in each quadrant
		for (let i = 0; i < 4; i++) {
			const quadrant = quadrants[i];
			newBubbles.push({
				id: i,
				size: Math.random() * 80 + 70, // 70-150px
				x: Math.random() * (quadrant.xMax - quadrant.xMin) + quadrant.xMin,
				y: Math.random() * (quadrant.yMax - quadrant.yMin) + quadrant.yMin,
				duration: Math.random() * 1.5 + 1, // 1-2.5 seconds (faster)
				delay: Math.random() * 0.5, // 0-0.5 second delay (shorter than before)
				color: colors[i], // Each bubble gets a different color
			});
		}
		setBubbles(newBubbles);
	}, []);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{bubbles.map((bubble) => (
				<motion.div
					key={bubble.id}
					className="absolute rounded-full"
					style={{
						width: bubble.size,
						height: bubble.size,
						left: `${bubble.x}%`,
						top: `${bubble.y}%`,
						background: bubble.color,
						zIndex: 0,
					}}
					animate={{
						x: [
							Math.random() * 40 - 20,
							Math.random() * 40 - 20,
							Math.random() * 40 - 20,
						], // Increased movement range
						y: [
							Math.random() * 40 - 20,
							Math.random() * 40 - 20,
							Math.random() * 40 - 20,
						], // Increased movement range
					}}
					transition={{
						duration: bubble.duration,
						delay: bubble.delay,
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "reverse",
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
}
