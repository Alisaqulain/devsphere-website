export const metadata = {
	title: "Terms of Use | DevSphere Solutions",
	description: "Terms governing the use of DevSphere Solutions’ website and services.",
};

export default function TermsOfUsePage() {
	return (
		<div className="min-h-screen bg-gray-50 px-6 py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
				<p className="mt-3 text-gray-600">Last updated: {new Date().getFullYear()}</p>

				<section className="mt-8 space-y-6">
					<div>
						<h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
						<p className="mt-2 text-gray-600">
							By accessing or using our website and services, you agree to these Terms. If you
							do not agree, please discontinue use.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">2. Use of Services</h2>
						<ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
							<li>You must comply with all applicable laws and regulations.</li>
							<li>You may not misuse our services or attempt to disrupt them.</li>
							<li>All content provided is for informational purposes unless agreed otherwise.</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">3. Intellectual Property</h2>
						<p className="mt-2 text-gray-600">
							All trademarks, logos, and content are the property of their respective owners.
							You may not reproduce or distribute without permission.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">4. Limitation of Liability</h2>
						<p className="mt-2 text-gray-600">
							To the fullest extent permitted by law, DevSphere Solutions shall not be liable
							for indirect, incidental, or consequential damages.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">5. Governing Law</h2>
						<p className="mt-2 text-gray-600">
							These Terms are governed by the laws of India, without regard to conflict of
							law principles.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">6. Contact</h2>
						<p className="mt-2 text-gray-600">
							Questions? Email us at <a href="mailto:info@devspheresolutions.in" className="text-blue-600 underline">info@devspheresolutions.in</a>.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}


