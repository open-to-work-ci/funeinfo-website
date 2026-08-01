# Figma export import

J'ai généré une page d'aperçu basée sur votre fichier Figma public et placé des assets placeholders dans `public/figma-assets/`.

Remplacement des assets réels:

- Exportez vos images/SVG depuis Figma et placez-les dans `public/figma-assets/` en écrasant les fichiers existants.
- La page d'aperçu est disponible à l'URL `/figma` (route `src/app/figma/page.tsx`).

Lancer le projet (Next.js):

```bash
npm install
npm run dev
```

Remarques:
- Le contenu a été converti automatiquement en structure HTML/CSS basique.
- Pour un rendu pixel-perfect, remplacez les assets et ajustez `src/app/figma/styles.module.css`.
