# 🚀 Guide de démarrage rapide

## Pour tester l'application localement

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer l'application en mode développement
```bash
npm run dev
```

L'application s'ouvrira automatiquement sur : **http://localhost:5173**

### 3. Modifier le code
- Tous les fichiers sont dans le dossier `src/`
- Les modifications sont visibles en temps réel (hot reload)
- Pas besoin de redémarrer le serveur

## Structure des fichiers principaux

### Pour modifier l'interface :
- `src/App.tsx` - Composant principal
- `src/components/` - Tous les composants

### Pour modifier les configurations des pièces :
- `src/config/productConfigs.ts` - Configurations pour chaque type de pièce

### Pour modifier les styles :
- `src/index.css` - Styles globaux
- `tailwind.config.js` - Configuration TailwindCSS

## Commandes utiles

```bash
# Lancer en développement (avec rechargement automatique)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Vérifier les erreurs de code
npm run lint
```

## 🎯 Test rapide

1. Ouvrez http://localhost:5173
2. Cliquez sur un type de pièce (ex: "Pièce forgée")
3. Explorez les différentes sections
4. Testez l'export PDF (bouton en bas à droite)

## 💡 Astuce

Si vous modifiez un fichier, la page se recharge automatiquement dans le navigateur !

