/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		// Needed for fully static export so <Image> renders as <img>
		unoptimized: true,
	},
};

export default nextConfig;
  