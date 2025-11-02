# 🚀 Hamid Sadim - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)](https://prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Een moderne, volledig responsive portfolio website gebouwd met Next.js 16, Tailwind CSS en Prisma. Toont projecten, vaardigheden en persoonlijke informatie op een professionele en visueel aantrekkelijke manier.

![Portfolio Preview](./public/images/utkarsh-img.webp)

## ✨ Features

### 🎨 Design & UX

- **Moderne UI** - Clean design met shadcn/ui componenten
- **Responsive Design** - Perfect op alle apparaten (mobile, tablet, desktop)
- **Dark/Light Mode** - Automatische theme switching
- **Smooth Animations** - Framer Motion voor vloeiende overgangen
- **Accessibility First** - WCAG compliant met screen reader support

### 🛠️ Technologieën

- **Frontend Skills** - React, Next.js, TypeScript, Tailwind CSS
- **Backend Skills** - Node.js, Prisma, SQLite, REST APIs
- **Tools** - Git, VS Code, Figma, Docker, Vercel
- **Development Practices** - Responsive Design, Accessibility, Performance

### 📊 Database Features

- **Prisma ORM** - Type-safe database queries
- **SQLite Database** - Lokale development database
- **Dynamic Content** - Projecten en skills uit database
- **Seed Scripts** - Eenvoudige data populatie

### 🔧 Developer Experience

- **TypeScript** - Volledige type veiligheid
- **ESLint** - Code kwaliteit en consistentie
- **Next.js 16** - Latest features met Turbopack
- **Hot Reload** - Instant development feedback

## 🏗️ Tech Stack

### Frontend

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Backend & Database

- **ORM:** Prisma
- **Database:** SQLite (development) / PostgreSQL (production)
- **API:** Next.js API Routes

### Development Tools

- **Package Manager:** npm
- **Version Control:** Git
- **Deployment:** Vercel
- **Code Quality:** ESLint, TypeScript

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

### Vercel (Recommended)

1. **Connect Repository**

   - Import project op [Vercel](https://vercel.com)
   - Connect je GitHub repository

2. **Environment Variables**

   ```env
   NEXT_PUBLIC_SITE_URL=https://jouw-portfolio.vercel.app
   DATABASE_URL=your_production_database_url
   ```

3. **Deploy**
   - Vercel detecteert automatisch Next.js
   - Database migrations runnen automatisch

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🔧 Configuration

### Environment Variables

| Variable               | Description                | Default                 |
| ---------------------- | -------------------------- | ----------------------- |
| `DATABASE_URL`         | Database connection string | `file:./dev.db`         |
| `NEXT_PUBLIC_SITE_URL` | Site base URL              | `http://localhost:3000` |

### Database Schema

Het project gebruikt Prisma met de volgende modellen:

- **User** - Persoonlijke informatie en social links
- **Project** - Portfolio projecten met tags
- **SkillCategory** - Vaardigheid categorieën
- **Skill** - Individuele vaardigheden

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

- Website: [Portfolio](https://hamid-sadim-portfolio.vercel.app)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/hamid-sadim)
- Email: [Email](mailto:hamid@example.com)

---

⭐ **Star dit project** als je het nuttig vindt!
