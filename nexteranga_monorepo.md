# 🏗️ NexTerangaStack - Architecture Monorepo

Structure complète du monorepo avec gestion de versions fluide

---

## 📁 Structure du projet

```
nexteranga-stack/
├── .github/                          # GitHub Actions & Workflows
│   ├── workflows/
│   │   ├── ci.yml                    # Tests & Linting
│   │   ├── release.yml               # Releases automatiques
│   │   └── deploy.yml                # Déploiements
│   └── ISSUE_TEMPLATE/
│
├── apps/                             # Applications
│   ├── web/                          # App principale Next.js
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── sign-in/
│   │   │   │   ├── sign-up/
│   │   │   │   ├── verify-email/
│   │   │   │   └── reset-password/
│   │   │   ├── (dashboard)/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── profile/
│   │   │   │   ├── settings/
│   │   │   │   └── billing/
│   │   │   ├── (marketing)/
│   │   │   │   ├── page.tsx         # Landing page
│   │   │   │   ├── pricing/
│   │   │   │   ├── about/
│   │   │   │   └── contact/
│   │   │   ├── api/
│   │   │   │   ├── auth/[...all]/
│   │   │   │   ├── uploadthing/
│   │   │   │   └── webhooks/
│   │   │   │       ├── stripe/
│   │   │   │       └── pawapay/
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── marketing/
│   │   │   └── payments/
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── public/
│   │   ├── .env.example
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   ├── docs/                         # Documentation site (Nextra/Mintlify)
│   │   ├── pages/
│   │   │   ├── index.mdx
│   │   │   ├── getting-started/
│   │   │   ├── authentication/
│   │   │   ├── payments/
│   │   │   └── deployment/
│   │   ├── public/
│   │   ├── package.json
│   │   └── next.config.js
│   │
│   └── cli/                          # CLI Tool pour scaffolding
│       ├── src/
│       │   ├── commands/
│       │   │   ├── init.ts
│       │   │   ├── add.ts
│       │   │   └── deploy.ts
│       │   ├── templates/
│       │   ├── utils/
│       │   └── index.ts
│       ├── bin/
│       │   └── nexteranga.js
│       ├── package.json
│       └── tsconfig.json
│
├── packages/                         # Packages partagés
│   ├── ui/                           # Composants shadcn/ui partagés
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/              # shadcn components
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   └── ...
│   │   │   │   ├── auth/
│   │   │   │   │   ├── login-form.tsx
│   │   │   │   │   ├── signup-form.tsx
│   │   │   │   │   └── social-buttons.tsx
│   │   │   │   ├── payments/
│   │   │   │   │   ├── payment-method-selector.tsx
│   │   │   │   │   ├── mobile-money-form.tsx
│   │   │   │   │   └── stripe-checkout.tsx
│   │   │   │   └── dashboard/
│   │   │   ├── hooks/
│   │   │   ├── lib/
│   │   │   │   └── utils.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   ├── auth/                         # Better Auth configuration
│   │   ├── src/
│   │   │   ├── index.ts             # Auth instance
│   │   │   ├── client.ts            # Client-side auth
│   │   │   ├── config.ts            # Configuration
│   │   │   ├── plugins/             # Custom plugins
│   │   │   └── types.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── database/                     # Prisma & Database
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   ├── migrations/
│   │   │   └── seed.ts
│   │   ├── src/
│   │   │   ├── client.ts            # Prisma client singleton
│   │   │   ├── types.ts             # Generated types
│   │   │   └── utils.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── payments/                     # Payment integrations
│   │   ├── src/
│   │   │   ├── stripe/
│   │   │   │   ├── index.ts
│   │   │   │   ├── checkout.ts
│   │   │   │   ├── webhooks.ts
│   │   │   │   └── subscriptions.ts
│   │   │   ├── pawapay/
│   │   │   │   ├── index.ts
│   │   │   │   ├── deposit.ts
│   │   │   │   ├── webhooks.ts
│   │   │   │   └── status.ts
│   │   │   ├── wave/
│   │   │   │   ├── index.ts
│   │   │   │   └── checkout.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── emails/                       # Email templates (React Email)
│   │   ├── src/
│   │   │   ├── templates/
│   │   │   │   ├── welcome.tsx
│   │   │   │   ├── verify-email.tsx
│   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── payment-success.tsx
│   │   │   │   └── mfa-code.tsx
│   │   │   ├── components/
│   │   │   ├── utils/
│   │   │   │   └── send.ts          # Resend integration
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── storage/                      # UploadThing & File management
│   │   ├── src/
│   │   │   ├── uploadthing.ts
│   │   │   ├── router.ts
│   │   │   ├── hooks.ts
│   │   │   └── types.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── config/                       # Configurations partagées
│   │   ├── eslint/
│   │   │   └── index.js
│   │   ├── typescript/
│   │   │   ├── base.json
│   │   │   ├── nextjs.json
│   │   │   └── react.json
│   │   ├── tailwind/
│   │   │   └── index.js
│   │   └── package.json
│   │
│   └── utils/                        # Utilitaires partagés
│       ├── src/
│       │   ├── cn.ts                # Class name merger
│       │   ├── format.ts            # Formatters
│       │   ├── validation.ts        # Validators
│       │   └── constants.ts
│       ├── package.json
│       └── tsconfig.json
│
├── tooling/                          # Outils de développement
│   ├── scripts/
│   │   ├── setup.sh                 # Initial setup
│   │   ├── generate-env.ts          # Generate .env files
│   │   └── deploy-preview.sh
│   └── generators/                   # Code generators
│       └── plop/
│
├── .changeset/                       # Changesets pour versioning
│   ├── config.json
│   └── README.md
│
├── .husky/                           # Git hooks
│   ├── pre-commit
│   └── commit-msg
│
├── .vscode/                          # VS Code settings
│   ├── settings.json
│   ├── extensions.json
│   └── launch.json
│
├── node_modules/
├── .editorconfig
├── .env.example
├── .gitignore
├── .npmrc
├── biome.json                        # Biome config (ou ESLint)
├── commitlint.config.js
├── LICENSE
├── package.json                      # Root package.json
├── pnpm-workspace.yaml              # PNPM workspaces
├── README.md
├── renovate.json                     # Dependency updates
├── turbo.json                        # Turborepo config
└── tsconfig.json                     # Root TypeScript config
```

---

## 🛠️ Configuration des fichiers clés

### 📦 `package.json` (Root)

```json
{
  "name": "nexteranga-stack",
  "version": "0.0.0",
  "private": true,
  "description": "Next-gen authentication boilerplate with African spirit",
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "format": "biome format --write .",
    "typecheck": "turbo run typecheck",
    "clean": "turbo run clean && rm -rf node_modules",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "turbo run build --filter=!./apps/docs && changeset publish",
    "db:generate": "turbo run db:generate",
    "db:push": "turbo run db:push",
    "db:migrate": "turbo run db:migrate",
    "db:studio": "pnpm --filter @nexteranga/database db:studio"
  },
  "devDependencies": {
    "@biomejs/biome": "^1.9.4",
    "@changesets/cli": "^2.27.1",
    "@commitlint/cli": "^19.0.0",
    "@commitlint/config-conventional": "^19.0.0",
    "husky": "^9.0.0",
    "turbo": "^2.3.0",
    "typescript": "^5.6.0"
  },
  "packageManager": "pnpm@9.0.0",
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  }
}
```

### 🔄 `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**", "build/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    },
    "typecheck": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "db:generate": {
      "cache": false
    },
    "db:push": {
      "cache": false
    },
    "db:migrate": {
      "cache": false
    },
    "clean": {
      "cache": false
    }
  }
}
```

### 📝 `pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
  - "tooling/*"
```

### 🔀 `.changeset/config.json`

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["@nexteranga/docs"]
}
```

---

## 📦 Packages individuels

### 📱 `packages/ui/package.json`

```json
{
  "name": "@nexteranga/ui",
  "version": "0.1.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*.tsx",
    "./hooks/*": "./src/hooks/*.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.460.0",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "react": "^18.3.1",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

### 🔐 `packages/auth/package.json`

```json
{
  "name": "@nexteranga/auth",
  "version": "0.1.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./client": "./src/client.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "better-auth": "^1.0.0",
    "@better-auth/react": "^1.0.0",
    "@nexteranga/database": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "typescript": "^5.6.3"
  }
}
```

### 🗄️ `packages/database/package.json`

```json
{
  "name": "@nexteranga/database",
  "version": "0.1.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "lint": "biome check .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@prisma/client": "^5.22.0"
  },
  "devDependencies": {
    "prisma": "^5.22.0",
    "typescript": "^5.6.3"
  }
}
```

### 💳 `packages/payments/package.json`

```json
{
  "name": "@nexteranga/payments",
  "version": "0.1.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./stripe": "./src/stripe/index.ts",
    "./pawapay": "./src/pawapay/index.ts",
    "./wave": "./src/wave/index.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "stripe": "^17.3.1",
    "@nexteranga/database": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "typescript": "^5.6.3"
  }
}
```

### 📧 `packages/emails/package.json`

```json
{
  "name": "@nexteranga/emails",
  "version": "0.1.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "dev": "email dev",
    "lint": "biome check .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@react-email/components": "^0.0.25",
    "react-email": "^3.0.1",
    "resend": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "react": "^18.3.1",
    "typescript": "^5.6.3"
  }
}
```

---

## 🚀 Apps individuelles

### 🌐 `apps/web/package.json`

```json
{
  "name": "@nexteranga/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@nexteranga/ui": "workspace:*",
    "@nexteranga/auth": "workspace:*",
    "@nexteranga/database": "workspace:*",
    "@nexteranga/payments": "workspace:*",
    "@nexteranga/emails": "workspace:*",
    "@nexteranga/storage": "workspace:*",
    "uploadthing": "^7.4.0",
    "@uploadthing/react": "^7.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3"
  }
}
```

### 📚 `apps/docs/package.json`

```json
{
  "name": "@nexteranga/docs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3001",
    "build": "next build",
    "start": "next start --port 3001"
  },
  "dependencies": {
    "next": "^15.0.3",
    "nextra": "^3.2.1",
    "nextra-theme-docs": "^3.2.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### 🔧 `apps/cli/package.json`

```json
{
  "name": "@nexteranga/cli",
  "version": "0.1.0",
  "bin": {
    "nexteranga": "./bin/nexteranga.js"
  },
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "commander": "^12.0.0",
    "inquirer": "^10.0.0",
    "ora": "^8.0.0",
    "chalk": "^5.3.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "tsup": "^8.0.0",
    "typescript": "^5.6.3"
  }
}
```

---

## 🔧 Workflows GitHub Actions

### `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm typecheck

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
```

### `.github/workflows/release.yml`

```yaml
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm build
      
      - name: Create Release Pull Request or Publish
        uses: changesets/action@v1
        with:
          publish: pnpm release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 📋 Commandes principales

```bash
# Installation
pnpm install

# Développement
pnpm dev                    # Démarre toutes les apps
pnpm dev --filter=web       # Démarre uniquement l'app web
pnpm dev --filter=docs      # Démarre uniquement la doc

# Build
pnpm build                  # Build tous les packages
pnpm build --filter=web     # Build uniquement l'app web

# Tests
pnpm test
pnpm lint
pnpm typecheck

# Database
pnpm db:generate            # Génère Prisma client
pnpm db:push               # Push schema en dev
pnpm db:migrate            # Crée une migration
pnpm db:studio             # Ouvre Prisma Studio

# Versioning
pnpm changeset             # Crée un changeset
pnpm version-packages      # Version les packages
pnpm release               # Publie les packages

# Nettoyage
pnpm clean                 # Clean node_modules & builds
```

---

## 🎯 Avantages du Monorepo

### ✅ **Gestion des versions**
- Changesets pour semantic versioning
- Releases automatiques via GitHub Actions
- Dépendances internes avec `workspace:*`

### ⚡ **Performance**
- Turborepo pour cache et parallel execution
- Builds incrémentaux
- Remote caching possible

### 🔄 **Partage de code**
- Packages réutilisables
- Configurations partagées
- Types TypeScript unifiés

### 🛠️ **DX (Developer Experience)**
- Hot reload entre packages
- Import direct des packages
- Linting et formatting unifiés

### 📦 **Déploiement**
- Vercel monorepo support natif
- Déploiement indépendant des apps
- Preview deployments automatiques

---

## 🚀 Prochaines étapes

1. **Initialiser le monorepo**
   ```bash
   mkdir nexteranga-stack && cd nexteranga-stack
   pnpm init
   ```

2. **Créer la structure de base**
   ```bash
   mkdir -p apps packages tooling
   ```

3. **Configurer les workspaces**
   - Créer `pnpm-workspace.yaml`
   - Créer `turbo.json`
   - Setup Changesets

4. **Initialiser les packages un par un**

**Voulez-vous que je génère les fichiers de configuration complets ?** 🎯