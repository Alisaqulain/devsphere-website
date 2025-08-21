/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://devspheresolutions.in',
	generateRobotsTxt: true,
	exclude: ['/404', '/_not-found'],
	changefreq: 'weekly',
	priority: 0.7,
	sitemapSize: 7000,
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: '*', disallow: ['/api/*'] },
		],
		additionalSitemaps: ['https://devspheresolutions.in/sitemap.xml'],
	},
};


