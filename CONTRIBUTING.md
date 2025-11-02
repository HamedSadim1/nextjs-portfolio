# 🤝 Contributing to Hamid Sadim Portfolio

Bedankt voor je interesse in het bijdragen aan mijn portfolio project! Ik waardeer alle bijdragen die helpen om dit project te verbeteren.

## 📋 Hoe Bijdragen

### 🚀 Quick Start

1. **Fork** deze repository
2. **Clone** je fork: `git clone https://github.com/YOUR_USERNAME/nextjs-portfolio.git`
3. **Installeer dependencies**: `npm install`
4. **Start development server**: `npm run dev`
5. **Maak je changes**
6. **Commit je changes**: `git commit -m "Add feature/fix"`
7. **Push naar je fork**: `git push origin main`
8. **Maak een Pull Request**

### 🐛 Bug Reports

Als je een bug vindt, maak dan een [Bug Report](https://github.com/HamedSadim1/nextjs-portfolio/issues/new?template=bug-report.md) aan met:

- Duidelijke beschrijving van het probleem
- Stappen om het te reproduceren
- Verwachte gedrag
- Screenshots (indien van toepassing)
- Je environment details

### ✨ Feature Requests

Voor nieuwe features, gebruik de [Feature Request](https://github.com/HamedSadim1/nextjs-portfolio/issues/new?template=feature-request.md) template.

### 🔧 Development Guidelines

#### Code Style

- Gebruik **TypeScript** voor alle nieuwe code
- Volg de bestaande code style (ESLint config)
- Gebruik betekenisvolle variabele- en functienamen
- Voeg JSDoc comments toe voor complexe functies

#### Commits

- Gebruik duidelijke commit berichten
- Begin met een emoji voor de categorie:
  - ✨ `:sparkles:` voor nieuwe features
  - 🐛 `:bug:` voor bug fixes
  - 📝 `:memo:` voor documentatie
  - 🎨 `:art:` voor styling/UI changes
  - 🔧 `:wrench:` voor configuration changes

#### Pull Requests

- Gebruik de PR template
- Zorg dat alle tests slagen
- Update documentatie indien nodig
- Voeg screenshots toe voor UI changes

### 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build check
npm run build
```

### 📚 Project Structure

```text
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   └── Icons/          # Custom icon components
├── lib/                # Utility functions and configurations
└── styles/             # Global styles and Tailwind config
```

### 🎯 Areas for Contribution

- **Nieuwe componenten**: Skills, testimonials, blog section
- **UI/UX verbeteringen**: Animaties, responsive design
- **Accessibility**: Screen reader support, keyboard navigation
- **Performance**: Code splitting, lazy loading
- **Documentation**: README updates, code comments

### 📞 Contact

Voor vragen over bijdragen:

- Open een [Discussion](https://github.com/HamedSadim1/nextjs-portfolio/discussions)
- Of neem contact op via [LinkedIn](https://linkedin.com/in/hamid-sadim)

---

**Let op:** Dit is een portfolio project voor demonstratie doeleinden. Voor productie gebruik, zorg voor proper security practices en environment variable management.
