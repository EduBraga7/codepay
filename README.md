# CodePay

Interface web para organização e acompanhamento de carteiras de investimentos.

O projeto usa uma estrutura nativa do Next.js App Router, em TypeScript estrito. React continua responsável pela interface e pelas interações no cliente, enquanto páginas e componentes estáticos são renderizados no servidor sempre que possível.

## Stack atual

- Next.js 14 com App Router
- React 18
- TypeScript
- Tailwind CSS 3
- Lucide React
- Recharts

O estágio atual é um protótipo de front-end com dados locais. Autenticação, banco de dados e integrações externas ainda não fazem parte desta base.

## Executar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm start
```

## Estrutura

```text
codepay/
├── app/
│   ├── (auth)/                 # Grupo das rotas /login e /cadastro
│   ├── (dashboard)/            # Grupo das páginas internas
│   ├── sobre/                  # Rota /sobre
│   ├── _components/            # Componentes compartilhados; não cria rota
│   │   ├── modals/
│   │   └── ui/
│   ├── _data/                  # Dados locais tipados; não cria rota
│   ├── _types/                 # Tipos compartilhados; não cria rota
│   ├── _utils/                 # Funções utilitárias; não cria rota
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx                # Rota /
├── public/                     # Arquivos estáticos e identidade visual
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

Pastas iniciadas por `_` são privadas para o roteador. Código específico de uma rota deve ser colocalizado nela usando convenções como `_components`, `_actions`, `_data` e `_utils`. Uma pasta `_actions` deve ser criada somente quando houver Server Actions reais para aquela área.

## Rotas disponíveis

- `/`
- `/sobre`
- `/login`
- `/cadastro`
- `/dashboard`
- `/ativos`
- `/ativos/[ticker]`
- `/carteiras`
- `/transacoes`
- `/simulacoes`

## Convenções

- Arquivos internos em kebab-case.
- Páginas e layouts usam os nomes reservados do App Router (`page.tsx`, `layout.tsx`, `loading.tsx` e `not-found.tsx`).
- Componentes são Server Components por padrão.
- `use client` aparece somente onde existem estado, eventos ou APIs do navegador.
- Imports internos usam o alias `@/` a partir da raiz do projeto.
- TypeScript opera em modo `strict`, sem JavaScript legado em `app/`.
