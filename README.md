# CodePay 📈
### Sistema de Controle e Análise de Investimentos

[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 🎓 Contexto Acadêmico

- **Curso**: Análise e Desenvolvimento de Sistemas (ADS)
- **Instituição**: Centro Universitário Módulo
- **Disciplina**: Análise e Projeto de Sistemas II
- **Orientador**: Prof. Cristiano S. Negrão

---

## 🎯 Sobre o Projeto & Problema Resolvido

O **CodePay** é uma plataforma web centralizada para gestão de carteiras de investimentos voltada a investidores pessoa física. 

Muitos investidores iniciantes e intermediários enfrentam dificuldades para acompanhar a evolução real do seu patrimônio devido à dispersão de dados entre corretoras e o uso de planilhas manuais complexas e propensas a erros.

O **CodePay** resolve esse problema ao automatizar:
- 📊 **Cálculo de Preço Médio** automático para operações de Renda Variável e Renda Fixa.
- 📈 **Acompanhamento Patrimonial** em tempo real com dashboards dinâmicos.
- 💼 **Consolidação de Carteiras** por tipos de ativos (Ações, FIIs, Tesouro Direto, etc.).
- 🔄 **Simulação e Histórico de Transações** simplificado.

---

## 🏗️ Arquitetura & Tecnologias

A aplicação segue uma arquitetura moderna Full-stack com **Next.js (App Router)**, utilizando Server Components para renderização de alta performance e Server Actions para manipulação de dados integrados ao banco PostgreSQL via Prisma ORM.

```mermaid
flowchart TD
    Client["💻 Cliente (Navegador / React)"]
    Clerk["🔐 Clerk Auth Service"]
    NextApp["🚀 Next.js App Router (Server Actions & Components)"]
    Prisma["💎 Prisma ORM"]
    Postgres[("🐘 Banco de Dados PostgreSQL")]

    Client -->|Autenticação| Clerk
    Client -->|HTTP Requests / Actions| NextApp
    NextApp -->|Verifica Sessão| Clerk
    NextApp -->|Queries & Mutations| Prisma
    Prisma -->|SQL Native Driver| Postgres
```

### Stack Tecnológica

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework Full-stack** | Next.js (App Router) | Server Components, Server Actions e Routing baseado em arquivos |
| **Autenticação** | Clerk | Gestão completa de usuários, sessões e fluxos de Login/Cadastro |
| **Estilização & UI** | Tailwind CSS + Shadcn UI | Design System moderno, responsivo e acessível |
| **ORM** | Prisma ORM | Modelagem de dados, migrações e queries tipadas |
| **Banco de Dados** | PostgreSQL | Banco de dados relacional para persistência de dados |
| **Controle de Versão** | Git & GitHub | Gerenciamento de código fonte e colaboração em equipe |

---

## ⚡ Recursos do Sistema (MVP)

- 🔒 **Autenticação Segura (Clerk)**: Login social e por e-mail com gerenciamento completo de sessão.
- 📊 **Dashboard & Analytics**: Painel intuitivo com evolução patrimonial gráfica, distribuição percentual por classe e resumo de indicadores.
- 💼 **Gestão de Carteiras & Ativos**: Organização por tipos de ativos (Ações, FIIs, Renda Fixa e Criptoativos).
- 📜 **Histórico de Transações**: Lançamento rápido de compras e vendas com cálculo automático de preço médio.
- 🧮 **Simulador de Investimentos**: Calculadora de projeção de juros compostos para planejamento financeiro de longo prazo.

---

## ⚙️ Configuração do Ambiente Local

Siga os passos abaixo para clonar e rodar o projeto na sua máquina:

### 1. Pré-requisitos
- Node.js `v18.x` ou superior
- npm ou yarn
- Instância do PostgreSQL rodando localmente ou em nuvem (ex: NeonDB, Supabase, Docker)

### 2. Clonar o Repositório
```bash
git clone https://github.com/EduBraga7/codepay.git
cd codepay
```

### 3. Instalar Dependências
```bash
npm install
```

### 4. Configurar Variáveis de Ambiente (`.env`)
Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
# Banco de Dados PostgreSQL (Prisma)
DATABASE_URL="postgresql://usuario:senha@localhost:5432/codepay?schema=public"

# Autenticação Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/cadastro
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 5. Executar Migrações do Banco de Dados
```bash
npx prisma db push
```

### 6. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

---

## 📁 Estrutura do Projeto

```text
codepay/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── (auth)/             # Rotas de Login e Cadastro
│   │   ├── (dashboard)/        # Rotas autenticadas (Dashboard, Carteiras, Ativos, etc.)
│   │   ├── globals.css         # Estilos globais e CSS Tokens
│   │   ├── layout.jsx          # Root Layout
│   │   └── page.jsx            # Redirecionamento da rota raiz (/)
│   ├── components/             # Componentes de UI e Layout
│   │   └── ui/                 # Componentes reutilizáveis
│   └── data/                   # Mocks e utilitários de dados
├── prisma/                     # Schema e migrações do banco de dados
├── public/                     # Arquivos estáticos e imagens
├── next.config.mjs             # Configurações do Next.js
├── jsconfig.json               # Configurações de Path Alias (@/*)
├── package.json                # Dependências e scripts do projeto
└── README.md                   # Documentação do repositório
```

---

## 👥 Equipe do Projeto

| Membro | Papel / Responsabilidades |
| :--- | :--- |
| **Eduardo Braga do Prado** | Dev Front-end / UX |
| **Marcos** | Dev Back-end / Banco de Dados |
| **Paulo Henrique Bispo Alves** | Product Owner / Requisitos |
| **Raquel Medeiros Cavalcanti** | QA / Testes / Documentação |
| **Tiago de Souza Santana** | Arquitetura / DevOps |
| **Vitor** | Dev Full-stack / Validação |

---

## 📜 Licença

Este projeto é desenvolvido para fins acadêmicos como parte da graduação em ADS no Módulo Centro Universitário e está sob a licença [MIT](LICENSE).
