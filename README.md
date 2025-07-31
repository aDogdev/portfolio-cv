# Portfolio & CV

My personal portfolio and CV built with Astro, following the JSON Resume structure.

## 🚀 Features

- ⚡️ Built with [Astro](https://astro.build/) for maximum performance
- 📝 Structured data following the [JSON Resume](https://jsonresume.org/) schema
- 🌐 Multilingual support (EN/ES)
- 🖨️ Optimized print mode
- 🎨 Minimalist and responsive design
- ⚙️ Easily customizable
- 🔍 Optimized SEO

## 🛠️ Tech Stack

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🏗️ Project Structure

```bash
/
├── public/          # Static assets
├── src/
│   ├── components/  # Astro Components
│   ├── i18n/       # Translation files
│   ├── layouts/    # Page templates
│   ├── pages/      # Site pages
│   ├── styles/     # CSS Styles
│   └── utils/      # Utilities and helpers
```

## 🚀 Quick Start

1. **Dependency installation**

   ```bash
   pnpm install
   ```

2. **Local development**

   ```bash
   pnpm dev
   ```

3. **Build for production**

   ```bash
   pnpm build
   ```

## 🌐 Internationalization

The site supports multiple languages. The translation files are located at `src/i18n/`.

To add a new language:

1. Create a new JSON file in `src/i18n/`
2. Add the language in `src/utils/i18n.ts`
3. Translate all the content following the existing structure

## 📝 License

[MIT](./LICENSE)

## 🙏 Acknowledgments

Based on the designs of [Bartosz Jarocki](https://github.com/BartoszJarocki/cv) and the ideas of [Miguel Ángel Durán](https://github.com/midudev)
