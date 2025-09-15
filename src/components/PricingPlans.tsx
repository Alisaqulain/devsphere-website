"use client";

import { Rocket, TrendingUp, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
	{
		icon: Rocket,
		title: "MVP",
		price: "From ₹75k",
		description: "Perfect for startups looking to launch quickly.",
		button: "Get Started",
		gradient: "from-primary to-tech-violet",
	},
	{
		icon: TrendingUp,
		title: "Growth",
		price: "From ₹2.5L",
		description: "Ideal for businesses scaling their digital presence.",
		button: "Get Started",
		gradient: "from-accent to-cyber-pink",
		featured: true,
	},
	{
		icon: Building2,
		title: "Scale",
		price: "Custom Quote",
		description: "Tailored solutions for enterprise-grade projects.",
		button: "Get Started",
		gradient: "from-electric-blue to-primary",
	},
];

export default function PricingPlans() {
	return (
		<section className="py-12 sm:py-16 md:py-20 relative">
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

			<div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-10 sm:mb-14 md:mb-16"
				>
					<h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4">
						Flexible{" "}
						<span className="text-gradient">Pricing Plans</span>
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Choose a plan that fits your needs, or contact us for a custom
						solution.
					</p>
				</motion.div>

				{/* Plans Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
					{plans.map((plan, index) => {
						const Icon = plan.icon;
						return (
							<motion.div
								key={plan.title}
								initial={{ opacity: 0, y: 50, scale: 0.95 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								whileHover={{ scale: 1.05 }}
								className={`group relative glass rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
									plan.featured
										? "border-primary/50 scale-105 shadow-xl shadow-primary/20"
										: "border-primary/10 hover:border-primary/40"
								}`}
							>
								{/* Glow effect */}
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300"
									style={{
										background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
									}}
								/>

								<div className="relative flex flex-col items-center text-center space-y-4 sm:space-y-6">
									{/* Icon */}
									<div
										className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}
									>
										<Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
									</div>

									{/* Title & Price */}
									<div>
										<h3 className="text-lg sm:text-xl font-semibold text-foreground">
											{plan.title}
										</h3>
										<p className="text-xl sm:text-2xl font-bold text-gradient mt-1 sm:mt-2">
											{plan.price}
										</p>
									</div>

									{/* Description */}
									<p className="text-sm sm:text-base text-muted-foreground">
										{plan.description}
									</p>

									{/* CTA */}
									<motion.button
										whileHover={{ scale: 1.08 }}
										whileTap={{ scale: 0.95 }}
										className="w-full py-2 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
									>
										{plan.button}
									</motion.button>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
