# Green Cart Haven Microfrontend

Este projeto é uma aplicação de e-commerce construída com arquitetura de microfrontends utilizando React, Vite, Redux Toolkit e TailwindCSS.

## Estrutura do Projeto

```
.
├── app-shell/   # Container principal da aplicação
├── header/      # Microfrontend do cabeçalho
├── cards/       # Microfrontend de listagem de produtos
├── footer/      # Microfrontend do rodapé
├── shared/      # Componentes e store Redux compartilhados
├── docs/        # Documentação e assets de design
├── package.json # Configuração de workspaces e scripts globais
└── ...
```

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Module Federation (Vite Plugin Federation)](https://github.com/originjs/vite-plugin-federation)
- [TypeScript](https://www.typescriptlang.org/)

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repo>
   cd teste-fcamara-vr-microfrontend
   ```

2. **Instale as dependências de todos os workspaces:**
   ```sh
   npm install
   ```

## Scripts Disponíveis

- `npm run dev`  
  Inicia todos os microfrontends e o app-shell em modo desenvolvimento (cada um em sua porta).

- `npm run build`  
  Gera o build de produção de todos os microfrontends e do app-shell.

- `npm run clean`  
  Remove todas as pastas `node_modules` e `dist` dos projetos.

## Como Rodar

1. **Desenvolvimento:**
   ```sh
   npm run dev
   ```
   - Acesse o app principal em [http://localhost:3000](http://localhost:3000)
   - Os microfrontends rodam nas portas 3001 (header), 3002 (cards), 3003 (footer).

2. **Build de Produção:**
   ```sh
   npm run build
   ```

## Estrutura dos Microfrontends

- **app-shell:**  
  Responsável por orquestrar os microfrontends e fornecer o estado global (Redux).

- **header:**  
  Exibe o cabeçalho e o carrinho de compras.

- **cards:**  
  Lista produtos, permite filtragem por categoria e adicionar ao carrinho.

- **footer:**  
  Exibe informações institucionais e links.

- **shared:**  
  Contém componentes reutilizáveis e a store Redux compartilhada.

## Observações

- O projeto utiliza [Module Federation](https://github.com/originjs/vite-plugin-federation) para compartilhar código entre os microfrontends.
- O estado do carrinho e dos produtos é global e compartilhado via Redux Toolkit.
- O design baseia-se no arquivo Figma disponível em `/docs`.

## Créditos

Desenvolvido para o teste prático FCamara.

---

> Para dúvidas ou sugestões, consulte a documentação ou abra uma