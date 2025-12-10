export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Add any paths you want to hide from Google
    },
    sitemap: 'https://hdmedicalgroup.com/sitemap.xml',
  };
}
