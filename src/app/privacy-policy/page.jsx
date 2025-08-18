export const metadata = {
	title: "Privacy Policy | DevSphere Solutions",
	description: "Learn how DevSphere Solutions collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-gray-50 px-6 py-12">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
				<p className="mt-3 text-gray-600">Last updated: {new Date().getFullYear()}</p>

				<section className="mt-8 space-y-6">
					<div>
						<h2 className="text-xl font-semibold text-gray-800">1. Overview</h2>
						<p className="mt-2 text-gray-600">
							DevSphere Solutions ("we", "us") is committed to protecting your privacy. This
							policy explains what data we collect, how we use it, and your choices.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">2. Information We Collect</h2>
						<ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
							<li>Contact details (name, email, phone) when you submit forms</li>
							<li>Usage data (pages visited, device info) to improve our services</li>
							<li>Project information that you share with us for proposals</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">3. How We Use Information</h2>
						<ul className="mt-2 list-disc pl-6 text-gray-600 space-y-1">
							<li>To respond to enquiries and provide proposals</li>
							<li>To operate, maintain and improve our website and services</li>
							<li>To send important updates related to our engagement</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">4. Data Sharing</h2>
						<p className="mt-2 text-gray-600">
							We do not sell your personal data. We may share it with trusted providers (e.g.,
							hosting, analytics) under confidentiality and only as necessary.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">5. Security</h2>
						<p className="mt-2 text-gray-600">
							We use administrative, technical and physical safeguards to protect data. No
							method of transmission is 100% secure, but we strive for best practices.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">6. Your Rights</h2>
						<p className="mt-2 text-gray-600">
							You may request access, correction or deletion of your personal data. Contact us
							at <a href="mailto:info@devspheresolutions.in" className="text-blue-600 underline">info@devspheresolutions.in</a>.
						</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold text-gray-800">7. Changes</h2>
						<p className="mt-2 text-gray-600">
							We may update this policy from time to time. Material changes will be noted on
							this page.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}


