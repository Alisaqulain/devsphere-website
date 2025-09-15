"use client";

import { motion } from "framer-motion";
import { Target, Palette, Code2 } from "lucide-react";

const highlights = [
	{
		icon: Target,
		title: "Strategy",
		description:
			"Aligning your vision with actionable roadmaps for maximum impact.",
		gradient: "from-primary to-tech-violet",
	},
	{
		icon: Palette,
		title: "Design",
		description:
			"Creating intuitive, user-centric interfaces that captivate and convert.",
		gradient: "from-accent to-cyber-pink",
	},
	{
		icon: Code2,
		title: "Engineering",
		description:
			"Building scalable, high-performance solutions with modern tech stacks.",
		gradient: "from-electric-blue to-primary",
	},
];

export default function HowDeliverExcellence() {
	return (
		<section className="py-8 sm:py-12 relative">
			{/* Background effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

			<div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="text-center mb-10 sm:mb-14"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
						How we{" "}
						<span className="text-gradient">Deliver Excellence</span>?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						We&apos;re not just developers – we&apos;re your strategic
						technology partners
					</p>
				</motion.div>

				{/* Highlights Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
					{highlights.map((highlight, index) => {
						const IconComponent = highlight.icon;

						// Determine animation direction
						let xDirection = 0;
						let yDirection = 0;

						if (index === 0) xDirection = -100; // left-most
						else if (index === 2) xDirection = 100; // right-most
						else yDirection = 30; // middle card slides from bottom

						return (
							<motion.div
								key={highlight.title}
								initial={{ opacity: 0, x: xDirection, y: yDirection }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								viewport={{ once: true }}
							>
								<div className="group relative glass rounded-2xl p-5 sm:p-6 hover-lift border border-primary/20 hover:border-primary/40 transition-all duration-300">
									{/* Glow effect on hover */}
									<div
										className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
										style={{
											background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
										}}
									/>

									<div className="relative space-y-3 sm:space-y-4">
										{/* Icon with gradient background */}
										<div
											className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${highlight.gradient} flex items-center justify-center`}
										>
											<IconComponent
												className="h-5 w-5 sm:h-6 sm:w-6 text-white"
												aria-hidden="true"
											/>
										</div>

										<div>
											<h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
												{highlight.title}
											</h3>
											<p className="text-xs sm:text-sm text-muted-foreground">
												{highlight.description}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
