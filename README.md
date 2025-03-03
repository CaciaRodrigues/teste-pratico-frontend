# Teste Prático Front-end

Este projeto é uma aplicação front-end desenvolvida como parte do Teste Técnico em Front-end da Be.

## Sobre o Projeto

A aplicação consiste em uma tabela responsiva que exibe uma lista de funcionários. Na versão desktop, todas as informações são apresentadas em uma única linha para cada funcionário. Na versão mobile, ao clicar no botão de expansão, detalhes adicionais do funcionário são exibidos.
Também é possível pesquisar os funcionários por nome, cargo ou telefone. A pesquisa modifica a exibição da tabela de funcionários para apresentar apenas os que estão dentro dos parâmentros da pesquisa.

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- **Node.js**: Versão LTS recomendada. ([Download Node.js](https://nodejs.org/))
- **npm** (gerenciador de pacotes do Node.js) ou **Yarn**: Para instalar as dependências do projeto.
- O browser de sua escolha.
- a IDE de sua escolha, recomenda-se o **VSCode**.

## Como Rodar a Aplicação

Siga os passos abaixo para configurar e executar a aplicação localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/CaciaRodrigues/teste-pratico-frontend.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd teste-pratico-frontend
   ```

3. **Instale as dependências**:

   Se estiver utilizando npm:

   ```bash
   npm install
   ```

   Ou, se preferir Yarn:

   ```bash
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento**:

   Com npm:

   ```bash
   npm run dev
   ```

   Ou com Yarn:

   ```bash
   yarn dev
   ```

5. **Acesse a aplicação**:

   Digite o comando **o + enter** ou **crtl + clique** no link exibido para visualizar a aplicação em execução.

## Estrutura do Projeto

A estrutura principal do projeto é a seguinte:

```
teste-pratico-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.tsx
│   │   └── table/
│   │       └── Table.tsx
│   ├── App.tsx
│   └── main.tsx
├── db.json
├── package.json
└── README.md
```

- **public/**: Contém o arquivo HTML principal.
- **src/**: Diretório principal do código-fonte.
  - **components/**: Contém os componentes React utilizados na aplicação.
- **db.json**: Arquivo JSON simulando uma base de dados de funcionários.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build rápida para projetos front-end modernos.
- **Tailwind CSS**: Framework CSS utilitário para estilização.

## Bibliotecas Extras:
- **HeroIcons**: Uma biblioteca de código aberto desenvolvida pelos criadores de Tailwind CSS, utilizada para os ícones da aplicação. 

### Aplicação desenvolvida por <a href="https://github.com/CaciaRodrigues">Cacia Rodrigues</a>, conecte-se comigo no <a href="https://www.linkedin.com/in/caciarodrigues/">LinkedIn</a>!

