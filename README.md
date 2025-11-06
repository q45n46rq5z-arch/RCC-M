# Simulateur RCC-M

Application web pour la gestion et le contrôle des pièces industrielles selon les normes RCC-M.

## Fonctionnalités

- **Sélection du type de produit** : Pièce forgée, moulée, tôle, tube ou autre
- **Configuration dynamique** : Affichage adaptatif selon le type de pièce sélectionné
- **Contrôles et critères** : Radiographie et ultrasons avec critères de notation
- **Décisions** : Évaluation des défauts et examens surfaciques
- **Dossier de pièce type** : Checklist complète des documents requis
- **Export PDF** : Génération de rapport au format PDF

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Build

```bash
npm run build
```

## Déploiement en ligne (obtenir un lien)

### Option 1 : Vercel (recommandé - le plus simple)

1. **Installer Vercel CLI** (optionnel, ou utiliser l'interface web) :
```bash
npm i -g vercel
```

2. **Déployer** :
```bash
vercel
```
Ou via l'interface web : https://vercel.com
- Connectez votre dépôt GitHub/GitLab
- Vercel détectera automatiquement Vite
- Cliquez sur "Deploy"

3. **Vous obtiendrez un lien** comme : `https://rcc-m-simulateur.vercel.app`

### Option 2 : Netlify

1. **Installer Netlify CLI** (optionnel) :
```bash
npm i -g netlify-cli
```

2. **Déployer** :
```bash
netlify deploy --prod
```
Ou via l'interface web : https://app.netlify.com
- Glissez-déposez le dossier `dist` après `npm run build`
- Ou connectez votre dépôt Git

3. **Vous obtiendrez un lien** comme : `https://rcc-m-simulateur.netlify.app`

### Option 3 : GitHub Pages

1. **Installer gh-pages** :
```bash
npm install --save-dev gh-pages
```

2. **Ajouter dans package.json** :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **Déployer** :
```bash
npm run deploy
```

4. **Activer GitHub Pages** dans les paramètres du dépôt
5. **Lien** : `https://votre-username.github.io/RCC-M`

## Technologies

- React 18
- TypeScript
- Vite
- TailwindCSS
- jsPDF & html2canvas (pour l'export PDF)
- Lucide React (icônes)

## Structure du projet

```
src/
├── components/          # Composants React
│   ├── ProductTypeSelector.tsx
│   ├── ProductConfigurator.tsx
│   ├── ControlCriteria.tsx
│   ├── DecisionSection.tsx
│   ├── PieceTypeDossier.tsx
│   └── ExportButton.tsx
├── config/             # Configurations
│   └── productConfigs.ts
├── types.ts            # Types TypeScript
├── App.tsx             # Composant principal
└── main.tsx            # Point d'entrée
```

