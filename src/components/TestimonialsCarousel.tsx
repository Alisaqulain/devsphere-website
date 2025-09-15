"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Amit Verma",
		role: "Founder — BrightCart",
		feedback:
			"DevSphere transformed our vision into a scalable MVP in just 8 weeks, exceeding our expectations.",
	},
	{
		name: "Neha Sharma",
		role: "Product Lead — FinEdge",
		feedback:
			"Their team delivered clean code and seamless communication, making our project a success.",
	},
	{
		name: "Rahul Patel",
		role: "CTO — TechTrend",
		feedback:
			"The UI/UX design and cloud integration were top-notch, driving our user engagement.",
	},
	{
		name: "Ali",
		role: "Laptop Secure",
		feedback:
			"Ali ensured our laptops and systems were completely secure, giving us peace of mind for our business operations.",
	},
	{
		name: "Shazy Zaidi",
		role: "The Accessory Center",
		feedback:
			"DevSphere guided us in creating a seamless online presence, driving more sales and engagement.",
	},
];

export default function TestimonialsCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, align: "start" },
		[Autoplay({ delay: 4000 })]
	);

	useEffect(() => {
		if (emblaApi) {
			// Carousel ready
		}
	}, [emblaApi]);

	return (
		<section className="py-12 sm:py-20 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

			<div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-8 sm:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4">
						What Our{" "}
						<span className="text-gradient">Clients Say</span>
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Stories of innovation, trust, and success shared by our partners
					</p>
				</div>

				{/* Carousel */}
				<div className="relative">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex gap-5 sm:gap-8 lg:gap-10 items-stretch">
							{testimonials.map((t, index) => (
								<div
									key={index}
									className="
          flex-shrink-0
          basis-[90%]
          sm:basis-[46%]
          lg:basis-[30%]
          h-auto
          group glass p-4 sm:p-7 lg:p-9 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300
          flex flex-col justify-between
        "
								>
									{/* Quote Icon */}
									<Quote className="h-6 w-6 sm:h-7 sm:w-7 text-primary/30 mb-2 sm:mb-3" />

									{/* Feedback */}
									<p className="text-sm sm:text-base md:text-lg italic text-muted-foreground mb-3 sm:mb-5 leading-relaxed flex-1">
										“{t.feedback}”
									</p>

									{/* Client Info */}
									<div className="flex items-center gap-3 sm:gap-4 mt-2">
										<div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg sm:text-xl">
											{t.name.charAt(0)}
										</div>
										<div>
											<span className="block font-semibold text-foreground text-sm sm:text-base">
												{t.name}
											</span>
											<span className="block text-xs sm:text-sm text-muted-foreground">
												{t.role}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={() => emblaApi?.scrollPrev()}
						className="absolute left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-primary/10 hover:bg-primary/20 z-10"
					>
						<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
					</button>
					<button
						onClick={() => emblaApi?.scrollNext()}
						className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-primary/10 hover:bg-primary/20 z-10"
					>
						<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
					</button>
				</div>
			</div>
		</section>
	);
}
