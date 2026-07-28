# Personal Portfolio

A modern, performant, and accessible portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** Light terminal (single theme)
- **Forms:** React Hook Form + Zod
- **Toasts:** Sonner
- **Analytics:** Vercel Analytics, Speed Insights
- **Blog:** next-mdx-remote
- **Database:** Prisma + PostgreSQL (optional)
- **Email:** Resend (optional)
- **Package Manager:** pnpm

## Features

- 🖥️ Terminal-inspired design with light theme
- 🎨 Green-on-light color palette with premium aesthetic
- ⚡ Excellent performance (targeting 100 Lighthouse scores)
- ♿ WCAG AA accessible
- 📱 Fully responsive
- 🎞 Smooth animations with Framer Motion
- 🔍 SEO optimized with structured data
- 📝 MDX blog with category/tag filtering
- 📧 Contact form (Resend integration ready)
- 📄 Projects with filtering and search
- 📊 Skills with progress indicators
- 🏢 Experience timeline
- 📜 Certificates showcase
- 👤 About page with detailed bio
- 🔗 Social links
- 📋 Resume download

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm (npm install -g pnpm)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd personal-portfolio

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable                            | Description                  | Required         |
| ----------------------------------- | ---------------------------- | ---------------- |
| `NEXT_PUBLIC_APP_URL`               | Your app URL                 | Yes              |
| `DATABASE_URL`                      | PostgreSQL connection string | For DB features  |
| `RESEND_API_KEY`                    | Resend API key               | For contact form |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key        | For auth         |
| `CLERK_SECRET_KEY`                  | Clerk secret key             | For auth         |

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog list + [slug]
│   ├── certificates/      # Certificates page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, FeaturedProjects, etc.
│   └── ui/                # Button, Badge, etc.
├── data/                  # Site data, projects, skills, etc.
├── hooks/                 # Custom hooks
├── lib/                   # Utilities
├── styles/                # Global CSS
└── types/                 # TypeScript types
```

## Customization

### Content

Edit the files in `src/data/` to update your personal information:

- `site.ts` - Site configuration and navigation
- `projects.ts` - Project portfolio
- `skills.ts` - Skills and technologies
- `experience.ts` - Work experience
- `certificates.ts` - Certifications
- `testimonials.ts` - Testimonials
- `blog-posts.ts` - Blog articles

### Styling

- `src/styles/globals.css` - Global styles and theme variables
- Tailwind CSS classes used throughout components

### Images

Place your images in `public/images/`. Update image references in the data files.

## Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm format     # Format code with Prettier
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Manual Build

```bash
pnpm build
pnpm start
```

## Performance Optimization

- Images optimized with `next/image`
- Fonts loaded with `next/font`
- Package imports optimized
- Code splitting enabled
- Static page generation where possible
- Lazy loading for below-fold content

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Proper heading hierarchy
- Color contrast compliance (WCAG AA)

## License

MIT

## Author

Reynaldo - [@csreynaldo](https://github.com/csreynaldo)
