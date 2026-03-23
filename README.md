# Consultório — Dra. Isabela Piran

Site em React (Vite) + Tailwind CSS para o portfólio da **Dra. Isabela Piran**.

## Scripts

| Comando        | Descrição              |
| -------------- | ---------------------- |
| `npm run dev`    | Servidor de desenvolvimento |
| `npm run build`  | Build de produção      |
| `npm run preview`| Preview do build       |
| `npm run lint`   | ESLint                 |

## Estrutura do projeto

```
src/
├── App.jsx                 # Página principal (composição das seções)
├── main.jsx
├── index.css               # Tailwind + animações globais (ex.: marquee)
├── content/
│   └── site.js             # Textos e dados do site (nome da doutora, serviços, etc.)
├── components/
│   ├── sections/           # Seções (Hero, Sobre, Letreiro, Serviços, Depoimentos, etc.)
│   └── three/              # Canvas 3D (dente na seção Contato)
├── hooks/
│   └── useHomeAnimations.js # Animações GSAP da home
└── utils/
    └── serviceCardBorder.js # Efeito de borda que segue o mouse nos cards
```

### Conteúdo

- Edite **`src/content/site.js`** para alterar textos, títulos e listas sem mexer no layout.
- Imagens estáticas ficam em **`public/`** (ex.: `imagem-doutora.png`, `consulta1.jpg`).
- **Modelo 3D na seção Contato:** arquivo em **`public/`** (ex.: **`tooth_3d.obj`**), caminho em `contactSection.model3d.modelPath`. Veja **`docs/MODELO-3D.md`**.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion + GSAP
- Three.js + React Three Fiber (modelo 3D na seção Contato)
