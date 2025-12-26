# HD Medical Group Website

A modern, responsive website for HD Medical Group, showcasing AI-powered cardiovascular diagnostics and medical devices. Built with Next.js for optimal performance and SEO.

## About the Application

HD Medical Group is a global leader in AI-enabled cardiovascular health innovation. This website serves as a marketing platform to:

- Showcase innovative medical devices like AI-powered stethoscopes with integrated EKG
- Provide information about cardiac diagnostics at the point of care
- Offer resources and contact information for healthcare professionals
- Feature company information and mission

The application consists of static pages with client-side interactivity, including:
- **Homepage**: Hero section, product features, testimonials, mailing list signup
- **Products Page**: Detailed product information with interactive features
- **About Us**: Company story and mission
- **Contact Us**: Contact form and information
- **Resources**: Additional materials and documentation

## Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router for server-side rendering and routing
- **React 19** - Latest React with concurrent features and hooks
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **Turbopack** - Fast bundler for development (replaces Webpack)

### Additional Libraries
- **Lucide React** - Modern icon library for consistent UI elements
- **Bootstrap Icons** - Additional icon set loaded via CDN
- **clsx** - Utility for conditional CSS classes
- **Vercel Analytics** - Web analytics and tracking

### Development Tools
- **ESLint** - Code linting with Next.js core web vitals rules
- **PostCSS** - CSS processing with Autoprefixer
- **Geist Font** - Modern typography from Vercel

## Project Structure

```
hd-medical/
├── public/
│   ├── images/                    # Static images and assets
│   └── icons/                     # Icon files
├── src/
│   └── app/
│       ├── components/            # Reusable React components
│       │   ├── Header.jsx         # Navigation header
│       │   └── Footer.jsx         # Site footer
│       ├── globals.css            # Global styles
│       ├── layout.js              # Root layout component
│       ├── page.js                # Homepage
│       ├── aboutus/
│       │   └── page.js            # About us page
│       ├── contactus/
│       │   └── page.js            # Contact page
│       ├── product/
│       │   └── page.js            # Products page
│       └── resource/
│           └── page.js            # Resources page
├── package.json                   # Dependencies and scripts
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── jsconfig.json                 # JavaScript configuration
├── postcss.config.mjs            # PostCSS configuration
└── eslint.config.mjs             # ESLint configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended: latest LTS)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hd-medical
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The application will automatically reload when you make changes to the code.

## Development Workflow

### Available Scripts

- `npm run dev` - Start development server with Turbopack (fast hot reload)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

### Code Conventions

- **Client Components**: Use `'use client'` directive for components using React hooks or browser APIs
- **Path Aliases**: Import from `@/*` (maps to `./src/*`)
- **Styling**: Tailwind CSS utilities with custom theme extensions
- **Icons**: Lucide React for primary icons, Bootstrap icons for additional needs
- **Images**: Next.js Image component with optimized loading and remote patterns
- **Colors**: Consistent color palette with primary blue (`#0E1C3C`) and orange (`#FA6404`)

### Key Features Implementation

- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Scroll Animations**: Intersection Observer for performance-optimized animations
- **Modal Popups**: Backdrop blur effects for mailing list and other interactions
- **SEO Optimization**: Rich metadata for social sharing and search engines
- **Analytics**: Vercel Analytics for user tracking and insights

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy using the build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

The site is configured for the domain `hdmedicalgroup.com` with proper SEO metadata.

## Contributing

1. Follow the established code conventions
2. Use meaningful commit messages
3. Test changes locally before pushing
4. Ensure responsive design works across devices
5. Maintain accessibility standards

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vercel Platform](https://vercel.com/docs)

For questions or support, contact the development team.
