"use client";
import Head from "next/head";

export default function SEOHead({
	title = "DevSphere Solutions",
	description = "Smart solutions for a smarter world. Web, Mobile and CRM products.",
	keywords = "web development, mobile apps, CRM, devops, cloud",
	url = "https://devspheresolutions.in",
	image = "/logo.png",
	type = "website",
	siteName = "DevSphere Solutions",
	canonical = url,
	twitterHandle = "@devsphere",
	noindex = false,
	jsonLd = [],
}) {
	const robots = noindex ? "noindex, nofollow" : "index, follow";
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="robots" content={robots} />
			<link rel="canonical" href={canonical} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={twitterHandle} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{jsonLd.map((schema, i) => (
				<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
			))}
		</Head>
	);
}

export const buildOrganizationJsonLd = ({
	name = "DevSphere Solutions",
	url = "https://devspheresolutions.in",
	logo = "https://devspheresolutions.in/logo.png",
	sameAs = ["https://www.linkedin.com/", "https://twitter.com/"],
} = {}) => ({
	"@context": "https://schema.org",
	"@type": "Organization",
	name,
	url,
	logo,
	sameAs,
});

export const buildLocalBusinessJsonLd = ({
	name = "DevSphere Solutions",
	url = "https://devspheresolutions.in",
	tel = "+91-9457818861",
	email = "info@devspheresolutions.in",
	street = "Muzaffarnagar",
	locality = "Muzaffarnagar",
	region = "Uttar Pradesh",
	postalCode = "251001",
	country = "IN",
} = {}) => ({
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name,
	url,
	telephone: tel,
	email,
	address: {
		"@type": "PostalAddress",
		streetAddress: street,
		addressLocality: locality,
		addressRegion: region,
		postalCode,
		addressCountry: country,
	},
});

export const buildFaqJsonLd = (faqs = []) => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map(({ q, a }) => ({
		"@type": "Question",
		name: q,
		acceptedAnswer: { "@type": "Answer", text: a },
	})),
});


