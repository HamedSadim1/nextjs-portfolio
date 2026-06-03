# 🚀 Hamid Sadim - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-blue?style=for-the-badge&logo=vercel)](https://hamedsadim-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.8.0-2D3748)](https://prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Een moderne, volledig responsive portfolio website gebouwd met Next.js 16, Tailwind CSS en Prisma. Toont projecten, vaardigheden en persoonlijke informatie op een professionele en visueel aantrekkelijke manier met **100% type safety** en moderne glassmorphism effecten.

![Portfolio Preview](./public/images/avatar.webp)

## ✨ Features

### 🎨 Design & UX

- **Moderne UI** - Clean design met shadcn/ui componenten en glassmorphism effecten
- **Responsive Design** - Perfect op alle apparaten (mobile, tablet, desktop)
- **Dark/Light Mode** - Automatische theme switching met smooth transitions
- **Smooth Animations** - Framer Motion voor vloeiende overgangen en micro-interactions
- **Accessibility First** - WCAG compliant met screen reader support en keyboard navigation
- **Performance Optimized** - Next.js 16 met Turbopack voor razendsnelle builds

### 🛠️ Technologieën

- **Frontend Skills** - React 19, Next.js 16, TypeScript 6.0, Tailwind CSS 4.3.0
- **Backend Skills** - Node.js, Prisma 7.8.0, SQLite, REST APIs
- **Tools** - Git, VS Code, Figma, Docker, Vercel, Turbopack
- **Development Practices** - Type Safety (0% any types), Accessibility, Performance, Modern CSS

### 📊 Database Features

- **Prisma ORM** - 100% type-safe database queries met generated types
- **SQLite Database** - Lokale development database met libSQL adapter
- **Dynamic Content** - Projecten en skills uit database met error boundaries
- **Seed Scripts** - Eenvoudige data populatie voor development

### 🔧 Developer Experience

- **TypeScript Strict Mode** - Volledige type veiligheid zonder any types
- **ESLint + Prettier** - Code kwaliteit en consistent formatting
- **Next.js 16** - Latest features met Turbopack en App Router
- **Hot Reload** - Instant development feedback
- **Error Boundaries** - Graceful error handling in productie

## 🆕 Recent Updates

### v1.0.0 - Complete Type Safety & Modern UI

- ✅ **100% Type Safety** - Eliminated all `any` types, strict TypeScript configuration
- ✅ **Glassmorphism Effects** - Modern glass-like UI components with backdrop blur
- ✅ **Enhanced Error Handling** - Comprehensive error boundaries and fallback UI
- ✅ **Performance Optimizations** - Turbopack integration and optimized builds
- ✅ **Prisma 7.8.0** - Latest Prisma with libSQL adapter for better performance
- ✅ **Tailwind CSS 4.3.0** - Latest Tailwind with improved utilities
- ✅ **Production Ready** - Fully tested build pipeline and deployment

## 🏗️ Tech Stack

### Frontend

- **Framework:** Next.js 16.2.7 (App Router + Turbopack)
- **Language:** TypeScript 6.0 (Strict Mode)
- **Styling:** Tailwind CSS 4.3.0
- **Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion 12.40.0
- **Icons:** Lucide React

### Backend & Database

- **ORM:** Prisma 7.8.0
- **Database:** SQLite (development) / PostgreSQL (production)
- **Adapter:** libSQL (high-performance SQLite)
- **API:** Next.js API Routes (Server Components)

### Development Tools

- **Package Manager:** npm
- **Version Control:** Git
- **Deployment:** Vercel (GitHub Actions CI/CD)
- **Code Quality:** ESLint, Prettier, TypeScript
- **Testing:** TypeScript Compiler (strict mode)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm of yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HamedSadim1/nextjs-portfolio.git
   cd nextjs-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev

   # Seed the database with sample data
   npx prisma db seed
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

6. **Open in Browser**

   ```text
   http://localhost:3000
   ```

## 📁 Project Structure## 📁 Project Structure

```text
nextjs-portfolio/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts               # Database seeding
│   └── migrations/           # Database migrations
├── public/
│   └── images/               # Static images
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── utils.ts          # Utility functions
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── AnimatedHero.tsx  # Hero section with animations
│   │   ├── AnimatedProjectGrid.tsx # Projects grid
│   │   ├── Card.tsx          # Project card component
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── Skills.tsx        # Skills display component
│   │   └── Provider/         # Context providers
│   └── lib/
│       ├── prisma.ts         # Prisma client
│       └── fetchUser.ts      # Data fetching utilities
├── .env.example              # Environment variables template
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma studio    # Open Prisma Studio
npx prisma migrate dev # Run migrations
npx prisma db seed   # Seed database
npx prisma generate  # Generate Prisma client
```

## 🌐 Deployment

### Vercel (Automatisch - Aanbevolen)

Dit project heeft automatische deployment naar Vercel via GitHub Actions.

#### 📋 Setup Steps

1. **Vercel Account**
   - Ga naar [vercel.com](https://vercel.com) en maak een account
   - Verbind je GitHub account

2. **Vercel Token Genereren**
   - Ga naar [Vercel Dashboard → Settings → Tokens](https://vercel.com/account/tokens)
   - Klik "Create Token"
   - Geef het een naam (bijv. "portfolio-deploy")
   - Kopieer de token

3. **GitHub Secrets Configureren**
   - Ga naar je repository: `github.com/HamedSadim1/nextjs-portfolio`
   - Klik "Settings" → "Secrets and variables" → "Actions"
   - Klik "New repository secret"
   - **Name:** `VERCEL_TOKEN`
   - **Value:** Plak je Vercel token hier
   - Klik "Add secret"

4. **Database voor Production**
   - Gebruik [Prisma Postgres](https://console.prisma.io) of een andere PostgreSQL database
   - Voeg `DATABASE_URL` toe aan Vercel environment variables

5. **Automatische Deployment**
   - Elke push naar `main` branch triggert automatische deployment
   - Check de "Actions" tab op GitHub voor deployment status
   - Je live site: [https://hamedsadim-portfolio.vercel.app/](https://hamedsadim-portfolio.vercel.app/)

#### 🔧 Environment Variables in Vercel

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_SITE_URL=https://hamedsadim-portfolio.vercel.app
```

### Manual Vercel Deployment

```bash
# Installeer Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Troubleshooting Vercel Deployment

#### ❌ "No Production Deployment"

**Oorzaak:** Vercel project niet gekoppeld aan repository of ontbrekende secrets.

**Oplossing:**

1. **Controleer Vercel Project:**
   - Ga naar [vercel.com/dashboard](https://vercel.com/dashboard)
   - Zorg dat project `nextjs-portfolio` bestaat
   - Check of GitHub integration actief is

2. **Controleer GitHub Secrets:**
   - Ga naar repository **Settings** → **Secrets and variables** → **Actions**
   - Controleer of deze secrets bestaan:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`

3. **Vercel Project IDs Verkrijgen:**
   - In Vercel dashboard: **Settings** → **General**
   - Kopieer **Project ID** en **Organization ID**
   - Voeg toe aan GitHub secrets

4. **Trigger Nieuwe Deployment:**

   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```

#### ❌ "Build Failed"

**Oorzaak:** Environment variables ontbreken of build errors.

**Oplossing:**

1. **Environment Variables in Vercel:**
   - Project **Settings** → **Environment Variables**
   - Voeg toe: `DATABASE_URL`

2. **Check Build Logs:**
   - Ga naar **Actions** tab op GitHub
   - Klik op failed run
   - Bekijk error details

#### 🔍 Deployment Status Checken

- **GitHub:** Actions tab → CI/CD Pipeline
- **Vercel:** Dashboard → Deployments
- **Live Site:** Controleer of URL werkt

### Other Platforms

#### Netlify

```bash
npm run build
# Upload .next folder naar Netlify
```

#### Railway / Render

```bash
# Gebruik Dockerfile of build commands
npm run build && npm run start
```

## � Type Safety & Best Practices

Dit project volgt strikte TypeScript best practices voor maximale type veiligheid:

### TypeScript Configuration

- **Strict Mode**: Alle strict TypeScript regels ingeschakeld
- **No Any Types**: 100% any-type free codebase
- **Explicit Types**: Alle variabelen, parameters en returns expliciet getypeerd

### Code Quality Standards

- **ESLint**: Strenge linting regels voor consistentie
- **Prettier**: Automatische code formatting
- **Pre-commit Hooks**: Husky voor kwaliteit controle
- **Error Boundaries**: Graceful error handling in productie

### Database Type Safety

- **Prisma Generated Types**: 100% type-safe database queries
- **Schema Validation**: Strenge database schema definitie
- **Migration Safety**: Type-checked database migrations

### Performance Optimizations

- **Turbopack**: Next.js 16 met razendsnelle builds
- **Tree Shaking**: Alleen gebruikte code in productie build
- **Image Optimization**: Next.js Image component voor optimale loading
- **Bundle Analysis**: Geoptimaliseerde bundle grootte

## 🤝 Contributing

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

### Development Guidelines

- Gebruik TypeScript voor alle nieuwe code
- Volg ESLint regels
- Schrijf betekenisvolle commit messages
- Test je changes grondig

#### 💡 Portfolio-specifieke overwegingen

- **Persoonlijke branding** - Pas namen, foto's en content aan naar je eigen identiteit
- **SEO optimalisatie** - Update meta tags en content voor betere vindbaarheid
- **Analytics** - Voeg tracking toe als gewenst (Google Analytics, etc.)
- **Contact informatie** - Update alle contactgegevens en social media links

#### 📖 Meer informatie

- [MIT License tekst](https://opensource.org/licenses/MIT)
- [Open Source Initiative](https://opensource.org/)
- [Choose a License](https://choosealicense.com/licenses/mit/)

---

**Kort gezegd:** Gebruik dit portfolio als startpunt voor je eigen professionele online aanwezigheid! 🚀

## 🙏 Acknowledgments

- **Next.js Team** - Voor het geweldige framework
- **shadcn** - Voor de mooie UI componenten
- **Prisma Team** - Voor de database ORM
- **Tailwind CSS** - Voor het utility-first CSS framework

## 📞 Contact

### Hamid Sadim

- Website: [Portfolio](https://hamedsadim-portfolio.vercel.app)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/hamid-sadim)
- Email: [Email](mailto:hamid@example.com)
- GitHub: [HamedSadim1](https://github.com/HamedSadim1)

---

⭐ **Star dit project** als je het nuttig vindt!

**Type Safety Score: 100% ✅ | Modern UI: Glassmorphism ✨ | Performance: Optimized 🚀**
