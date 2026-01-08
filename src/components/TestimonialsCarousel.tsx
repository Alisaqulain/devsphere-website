"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Ahmed Al-Mansoori",
		company: "Vega Wealth",
		role: "Chief Executive Officer",
		location: "Dubai, UAE",
		feedback:
			"DevsSphere Solutions delivered a world-class platform that transformed our client engagement. Their strategic approach, attention to detail, and commitment to excellence exceeded our expectations. A truly professional partnership.",
	},
	{
		name: "Rajesh Kumar",
		company: "Krishi Kutumb",
		role: "Founder & Managing Director",
		location: "India",
		feedback:
			"Working with DevsSphere has been exceptional. They understood our business needs from day one and delivered a solution that has significantly improved our operational efficiency. Professional communication and on-time delivery throughout.",
	},
	{
		name: "Sarah Mitchell",
		company: "Auto Excel Pro",
		role: "Operations Director",
		location: "Global",
		feedback:
			"DevsSphere Solutions transformed our business operations with their comprehensive platform. The results speak for themselves — increased efficiency, better customer relationships, and measurable growth. Highly recommended.",
	},
	{
		name: "Mohammed Hassan",
		company: "Dunex Dubai",
		role: "Business Development Manager",
		location: "Dubai, UAE",
		feedback:
			"Outstanding service and delivery. DevsSphere Solutions demonstrated deep understanding of our market and delivered a solution that has become central to our business success. Reliable, professional, and results-driven.",
	},
	{
		name: "Priya Sharma",
		company: "The Accessory Center MZN",
		role: "E-Commerce Director",
		location: "India",
		feedback:
			"Our e-commerce platform has exceeded all expectations. DevsSphere Solutions created a seamless experience that has driven significant sales growth. Their team is responsive, professional, and truly understands business objectives.",
	},
	{
		name: "Dr. James Wilson",
		company: "MPCPCT",
		role: "Chief Technology Officer",
		location: "Global",
		feedback:
			"DevsSphere Solutions delivered a robust healthcare technology platform that has enhanced our patient care capabilities. Their expertise, reliability, and commitment to quality make them an ideal long-term technology partner.",
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
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
						Trusted by Business
						<span className="text-gradient"> Leaders</span>
					</h2>
					<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
						Real feedback from executives and decision-makers who have partnered with us for long-term success
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
									<p className="text-base sm:text-lg md:text-xl text-foreground mb-4 sm:mb-6 leading-relaxed flex-1">
										"{t.feedback}"
									</p>

									{/* Client Info */}
									<div className="flex items-center gap-3 sm:gap-4 mt-4 pt-4 border-t border-white/10">
										<div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg sm:text-xl flex-shrink-0">
											{t.name.charAt(0)}
										</div>
										<div className="flex-1 min-w-0">
											<span className="block font-semibold text-foreground text-base sm:text-lg">
												{t.name}
											</span>
											<span className="block text-sm sm:text-base text-primary font-medium">
												{t.role}
											</span>
											<span className="block text-xs sm:text-sm text-muted-foreground">
												{t.company} • {t.location}
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
