# 🥊 UFC Fighters Database

<div align="center">

![UFC Fighters](./public/images/logo.png)

**Uma aplicação web moderna para explorar o mundo dos lutadores de UFC**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.27.3-0170FE?style=for-the-badge&logo=antdesign)](https://ant.design/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-✓-1572B6?style=for-the-badge&logo=css3)](https://github.com/css-modules/css-modules)

[🚀 Demo Live](#) • [📱 Screenshots](#screenshots) • [🛠️ Instalação](#instalação) • [📖 Documentação](#documentação)

</div>

---

## 📋 Índice

- [📖 Sobre o Projeto](#sobre-o-projeto)
- [✨ Funcionalidades](#funcionalidades)
- [🛠️ Tecnologias](#tecnologias)
- [🚀 Instalação](#instalação)
- [📱 Como Usar](#como-usar)
- [📸 Screenshots](#screenshots)
- [🏗️ Estrutura do Projeto](#estrutura-do-projeto)
- [🎨 Design System](#design-system)
- [📱 Responsividade](#responsividade)
- [🔧 Scripts Disponíveis](#scripts-disponíveis)
- [🤝 Contribuição](#contribuição)
- [📄 Licença](#licença)
- [👨‍💻 Autor](#autor)

---

## 📖 Sobre o Projeto

O **UFC Fighters Database** é uma aplicação web moderna e responsiva que oferece uma experiência completa para explorar informações detalhadas sobre lutadores do Ultimate Fighting Championship (UFC). Desenvolvido com as mais recentes tecnologias do ecossistema React/Next.js, o projeto combina design moderno, performance otimizada e funcionalidades avançadas.

### 🎯 Objetivos

- **🔍 Pesquisa Inteligente**: Sistema de busca avançado por nome e categoria
- **📊 Informações Detalhadas**: Perfis completos dos lutadores com estatísticas
- **🎨 Design Moderno**: Interface elegante com efeitos glassmorphism
- **📱 Totalmente Responsivo**: Experiência otimizada em todos os dispositivos
- **⚡ Performance**: Carregamento rápido e navegação fluida

---

## ✨ Funcionalidades

### 🏠 Página Inicial
- Design impactante com hero section
- Navegação intuitiva
- Cards de destaque dos lutadores

### 🥊 Página de Lutadores
- **Sistema de Busca Avançado**
  - Pesquisa por nome em tempo real
  - Filtro por categoria de peso
  - Botão de limpar filtros
- **Grid Responsivo** de cards dos lutadores
- **Paginação** para melhor performance
- **Loading States** durante carregamento

### 👤 Perfil do Lutador
- Informações detalhadas do lutador
- Estatísticas de luta
- Histórico de confrontos
- Design responsivo

### ℹ️ Sobre
- Apresentação do desenvolvedor
- Seção de motivações do projeto
- Timeline de experiência profissional
- Showcase de tecnologias utilizadas
- Portfólio de projetos

### 📞 Contato
- Formulário funcional de contato
- Validação de campos em tempo real
- Cards informativos de contato
- Links para redes sociais

---

## 🛠️ Tecnologias

### Frontend
- **[Next.js 15.5.3](https://nextjs.org/)** - Framework React com SSR
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca para construção de interfaces
- **[Ant Design 5.27.3](https://ant.design/)** - Biblioteca de componentes UI
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Estilização modular
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Axios 1.12.2](https://axios-http.com/)** - Cliente HTTP
- **[React Toastify 11.0.5](https://fkhadra.github.io/react-toastify/)** - Notificações

### Características Técnicas
- ⚡ **Server-Side Rendering (SSR)**
- 🔄 **Static Site Generation (SSG)**
- 📱 **Progressive Web App (PWA) Ready**
- 🎨 **CSS-in-JS com CSS Modules**
- 🔍 **SEO Otimizado**
- ♿ **Acessibilidade (a11y)**

---

## 🚀 Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Bernardo1401/projeto_front.git
   ```

2. **Navegue até o diretório**
   ```bash
   cd projeto_front
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure as variáveis de ambiente** (opcional)
   ```bash
   cp .env.example .env.local
   ```

5. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

---

## 📱 Como Usar

### 🔍 Navegação Principal

1. **Home** - Página inicial com visão geral
2. **Lutadores** - Explore todos os lutadores com busca e filtros
3. **Sobre** - Conheça o desenvolvedor e as motivações do projeto
4. **Contato** - Entre em contato através do formulário

### 🥊 Explorando Lutadores

1. **Busca por Nome**
   - Digite o nome do lutador na barra de pesquisa
   - Resultados aparecem em tempo real

2. **Filtro por Categoria**
   - Use o dropdown para selecionar uma categoria específica
   - Combine com a busca por nome para resultados precisos

3. **Limpeza de Filtros**
   - Clique em "Limpar Filtros" para resetar todas as buscas

4. **Visualização de Perfil**
   - Clique em qualquer card de lutador para ver detalhes completos

### 📝 Formulário de Contato

1. Preencha todos os campos obrigatórios
2. O sistema validará os dados em tempo real
3. Clique em "Enviar Dúvida" para submeter
4. Receba confirmação visual do envio

---

## 📸 Screenshots

<div align="center">

### 🏠 Página Inicial
![Home Page](./docs/screenshots/home.png)

### 🥊 Lista de Lutadores
![Fighters Page](./docs/screenshots/fighters.png)

### 👤 Perfil do Lutador
![Fighter Profile](./docs/screenshots/fighter-profile.png)

### ℹ️ Página Sobre
![About Page](./docs/screenshots/about.png)

### 📞 Página de Contato
![Contact Page](./docs/screenshots/contact.png)

</div>

---

## 🏗️ Estrutura do Projeto

```
projeto_front/
├── 📁 public/
│   ├── 📁 images/          # Imagens estáticas
│   │   ├── logo.png
│   │   ├── silva_noc.jpg
│   │   └── image0 (2).jpeg
│   └── favicon.ico
├── 📁 src/
│   ├── 📁 app/             # App Router (Next.js 13+)
│   │   ├── 📁 contato/     # Página de contato
│   │   │   ├── page.jsx
│   │   │   └── contato.module.css
│   │   ├── 📁 lutadores/   # Página de lutadores
│   │   │   ├── page.jsx
│   │   │   ├── lutador.module.css
│   │   │   └── 📁 [id]/    # Rota dinâmica
│   │   │       ├── page.jsx
│   │   │       └── id.module.css
│   │   ├── 📁 sobre/       # Página sobre
│   │   │   ├── page.jsx
│   │   │   └── sobre.module.css
│   │   ├── globals.css     # Estilos globais
│   │   ├── layout.js       # Layout raiz
│   │   ├── page.jsx        # Página inicial
│   │   └── page.module.css
│   └── 📁 components/      # Componentes reutilizáveis
│       ├── Header.jsx
│       └── Header.module.css
├── 📄 package.json         # Dependências e scripts
├── 📄 next.config.mjs      # Configuração do Next.js
├── 📄 eslint.config.mjs    # Configuração do ESLint
├── 📄 postcss.config.mjs   # Configuração do PostCSS
├── 📄 jsconfig.json        # Configuração do JavaScript
└── 📄 README.md           # Este arquivo
```

---

## 🎨 Design System

### 🎨 Paleta de Cores

```css
/* Cores Primárias */
--primary-red: #dc2626;      /* UFC Red */
--primary-dark: #8b0000;     /* Dark Red */
--accent-orange: #ff4500;    /* Orange Red */

/* Cores de Fundo */
--bg-primary: rgba(0, 0, 0, 0.8);
--bg-secondary: rgba(20, 20, 20, 0.9);
--bg-glass: rgba(0, 0, 0, 0.6);

/* Cores de Texto */
--text-primary: #ffffff;
--text-secondary: #e5e5e5;
--text-muted: rgba(255, 255, 255, 0.7);
```

### 🔤 Tipografia

- **Font Family**: System fonts (SF Pro, Segoe UI, Roboto)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive Scale**: 0.8rem - 4rem

### 🎭 Efeitos Visuais

- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Gradientes**: Linear e radial gradients
- **Sombras**: Box-shadows multicamada
- **Animações**: Hover states e transitions suaves

---

## 📱 Responsividade

### 📊 Breakpoints

```css
/* Mobile First Approach */
Mobile:    320px - 768px   /* 1 coluna */
Tablet:    768px - 1024px  /* 2 colunas */
Desktop:   1024px - 1400px /* 3-4 colunas */
Large:     1400px+         /* Layout expandido */
```

### 🔧 Técnicas Utilizadas

- **CSS Grid**: Layouts responsivos adaptativos
- **Flexbox**: Alinhamento e distribuição
- **Media Queries**: Breakpoints customizados
- **Viewport Units**: vw, vh para responsividade
- **Container Queries**: Componentes adaptativos

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Gera build otimizado
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas automaticamente

# Análise
npm run analyze      # Analisa bundle size
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos abaixo:

### 🚀 Como Contribuir

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit** suas mudanças
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push** para a branch
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Abra** um Pull Request

### 📝 Diretrizes

- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use commits semânticos

### 🐛 Reportando Bugs

1. Verifique se o bug já foi reportado
2. Use o template de issue apropriado
3. Inclua screenshots quando relevante
4. Descreva passos para reproduzir

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 Bernardo Marques

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Autor

<div align="center">

### **Bernardo Marques**
*Desenvolvedor Full Stack*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Bernardo1401)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:bernardo.marques@aluno.senai.br)

</div>

### 💼 Experiência

- **Desenvolvedor Full Stack** especializado em React/Next.js
- **3+ anos** de experiência em desenvolvimento web
- **Apaixonado** por tecnologia e artes marciais mistas
- **Focado** em criar experiências digitais excepcionais

### 🎯 Especialidades

- **Frontend**: React, Next.js, TypeScript, CSS Modules
- **Backend**: Node.js, Express, PostgreSQL
- **Tools**: Git, ESLint, Webpack, Vite
- **Design**: Figma, Adobe XD, Responsive Design

---

## 🙏 Agradecimentos

- **[Next.js Team](https://nextjs.org/)** - Pelo framework incrível
- **[Ant Design](https://ant.design/)** - Pelos componentes elegantes
- **[React Icons](https://react-icons.github.io/)** - Pela biblioteca de ícones
- **[UFC](https://www.ufc.com/)** - Pela inspiração e dados dos lutadores
- **Comunidade Open Source** - Por tornar tudo isso possível

---

<div align="center">

**⭐ Não esqueça de dar uma estrela se este projeto te ajudou! ⭐**

**Feito com ❤️ e ☕ por [Bernardo Marques](https://github.com/Bernardo1401)**

</div>
