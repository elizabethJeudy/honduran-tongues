# 📖 Diccionario Hondureño

> A living digital dictionary preserving the languages and dialects of Honduras — from Caliche street slang to indigenous languages spoken for centuries.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?logo=tailwind-css)

---

## 🌎 About

**Diccionario Hondureño** is an open, community-driven dictionary dedicated to preserving the linguistic heritage of Honduras. It covers:

| Language | Description |
|----------|-------------|
| 🇭🇳 **Caliche** | Honduran street slang and everyday colloquialisms |
| 🌊 **Miskito** | Language of the Miskito people of the Caribbean coast |
| 🥁 **Garífuna** | Afro-indigenous language of the Garífuna people |
| 🌿 **Pech** | Ancient language of the Pech people of Olancho |
| 🏔️ **Lenca** | Language of the Lenca, Honduras's largest indigenous group |
| 🌳 **Tawahka** | Language of the Tawahka people of the Patuca river region |
| 🦅 **Tolupán** | Language of the Tolupán (Jicaque) people |

With **255+ entries** and growing, each word includes:
- Spanish & English translations
- Example sentences
- Pronunciation guides
- Cultural notes & context

---

## ✨ Features

- 🔍 **Full-text search** — search by word, translation, category, or example
- 🗂️ **Language filter** — browse by specific language or all at once
- ➕ **Community contributions** — submit new words to be reviewed and added
- 📱 **Responsive design** — works beautifully on mobile and desktop
- ⚡ **Fast & smooth** — animated UI with Framer Motion

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Backend**: Supabase (database + RLS security)
- **Forms**: React Hook Form + Zod validation

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/diccionario-hondureno.git

# Navigate into the project
cd diccionario-hondureno

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── AddWordForm.tsx  # Community word submission form
│   ├── DictionaryCard.tsx
│   ├── DictionaryHeader.tsx
│   ├── LanguageFilter.tsx
│   └── SearchBar.tsx
├── data/                # Dictionary word data
│   ├── calicheData.ts   # 100+ Caliche entries
│   ├── indigenousData.ts # 150+ indigenous language entries
│   └── types.ts
├── pages/
│   └── Index.tsx        # Main dictionary page
└── integrations/
    └── supabase/        # Database client & types
```

---

## 🤝 Contributing

Contributions are warmly welcome! You can:

1. **Submit a word via the app** — click "Agregar Palabra" on the main page
2. **Open a Pull Request** — add words directly to the data files
3. **Report issues** — if you spot an error in a translation or pronunciation

### Adding words via code

Words are typed as `DictionaryEntry` objects:

```typescript
{
  id: 'unique-id',
  word: 'Catracho',
  language: 'caliche',
  category: 'Identidad',
  spanishTranslation: 'Hondureño',
  englishTranslation: 'Honduran person',
  example: 'Soy catracho hasta los huesos.',
  pronunciation: 'ka-TRA-cho',
  notes: 'Term of pride used by Hondurans to refer to themselves.'
}
```

---

## 📜 Languages at Risk

Several languages in this dictionary are considered **endangered**. Projects like this one aim to raise awareness and help document vocabulary before it is lost:

- **Tawahka** — fewer than 1,000 speakers
- **Tolupán** — critically endangered
- **Pech** — fewer than 3,000 speakers

If you are a native speaker or have knowledge of these languages, your contributions are especially valuable.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

This project was built out of love for Honduras and its incredible cultural diversity. Special thanks to the communities who keep these languages alive.

> *"Un idioma es un dialecto con ejército y marina."* — Max Weinreich
>
> *"A language is a dialect with an army and a navy."*
