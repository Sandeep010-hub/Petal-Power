# 🌿 Petal Power – AI-Native Premium Plant Catalog Platform

Petal Power is a high-performance, pixel-perfect e-commerce and curated plant catalog application built using an AI-native development workflow. The platform features an advanced asymmetric layout system, premium glassmorphic micro-interactions, fluid responsive scaling, and robust architectural patterns designed to handle production-grade traffic with zero layout regressions.

---

## 🚀 Key Features & Architectural Highlights

- **⚡ Next.js 14 App Router Framework:** Built leveraging modern React server architecture with production-ready TypeScript types and configurations.
- **🧩 Isolated Route Groups:** Decoupled structure separating core marketing experiences (`(marketing)`) from authentication pipelines (`(auth)`), ensuring optimal performance and clean separation of concerns.
- **📐 Asymmetric Design Matrix:** Implements cutting-edge grid layouts with optical-illusion hero sections and unbalanced Bento Grid layouts for premium product showcase.
- **🛡️ Failsafe Production Asset Delivery:** Advanced `SafeImage` wrapper optimizing images via `next/image` with runtime error handling for graceful fallbacks.
- **🔄 Global React Context Management:** Centralized state orchestration for dynamic micro-interactions including cart updates, scroll-locking modals, and notification toasts.
- **📱 100% Responsive Design:** Mobile-first implementation with fluid typography, responsive grids, and adaptive navigation patterns.

---

## 📁 Project Structure

```
Petal-Power/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx              # Authentication page
│   ├── (marketing)/
│   │   ├── layout.tsx                # Global layout with navbar & footer
│   │   ├── page.tsx                  # Landing page
│   │   ├── shop/page.tsx             # Product catalog
│   │   ├── blog/page.tsx             # Plant care guides
│   │   └── contact/page.tsx          # Contact form
│   ├── globals.css                   # Global styles
│   └── error.tsx                     # Error boundary
├── components/
│   ├── Navbar.tsx                    # Navigation bar
│   ├── Hero.tsx                      # Hero section
│   ├── ProductGrid.tsx               # Product display grid
│   ├── BentoGrid.tsx                 # Featured products bento
│   ├── FooterSection.tsx             # Footer with newsletter
│   ├── VideoModal.tsx                # Modal component
│   ├── Toast.tsx                     # Notification system
│   └── SafeImage.tsx                 # Optimized image wrapper
├── context/
│   └── AppContext.tsx                # Global state management
├── public/                           # Static assets
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies & scripts
```

---

## 🛠️ Tech Stack & Dependencies

| Component | Technology |
|-----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Image Optimization** | next/image |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sandeep010-hub/Petal-Power.git
cd Petal-Power
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

This optimizes static assets, validates types, and outputs a production-ready bundle.

---

## 🎨 Design System

### Color Palette

| Token | Hex Value | Purpose |
|-------|-----------|---------|
| **Primary Dark** | `#0a1c12` | Main backgrounds, headers |
| **Brand Cream** | `#fdfbf7` | Secondary backgrounds |
| **Accent Green** | `#10b981` | Buttons, tags, interactive elements |
| **Pure White** | `#ffffff` | Text, glass morphism containers |

### Typography & Spacing

The design system uses Tailwind CSS utility-first approach with custom theme extensions configured in `tailwind.config.ts` for consistent spacing, sizing, and responsive breakpoints.

---

## 📊 Language Composition

- **TypeScript:** 97.3%
- **JavaScript:** 1.6%
- **CSS:** 1.1%

---

## 🔄 Global State Management

The application uses React Context API (`AppContext.tsx`) for managing:
- Shopping cart state
- User notifications
- Modal visibility
- UI preferences

---

## 📱 Responsive Design

The platform is fully responsive and tested across:
- Mobile (320px - 640px)
- Tablet (641px - 1024px)
- Desktop (1025px+)

All components use Tailwind CSS responsive prefixes (`sm:`, `md:`, `lg:`) for optimal display across devices.

---

## 🚀 Performance Optimizations

- **Next.js Image Optimization:** Automatic image resizing and format optimization
- **Code Splitting:** Route-based code splitting with App Router
- **Static Generation:** SSG for marketing pages where applicable
- **Lazy Loading:** Components and images load on demand
- **CSS-in-JS:** Tailwind CSS for minimal CSS bundle size

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run linting checks
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source software. See the LICENSE file for details.

---

## 📧 Contact & Support

For questions or support, please reach out through:
- GitHub Issues: [Create an Issue](https://github.com/Sandeep010-hub/Petal-Power/issues)
- Contact Page: Visit the [contact page](http://localhost:3000/contact) in the application

---

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies and best practices in frontend development.

**Happy coding! 🌱**
