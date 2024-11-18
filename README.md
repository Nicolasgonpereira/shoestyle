# ShoeStyle

ShoeStyle é um e-commerce focado na venda de calçados. Ele oferece funcionalidades como carrinho de compras, barra de busca, filtros personalizados, página de marcas e informações detalhadas sobre os produtos.


## Tecnologias Utilizadas

- **Next.js**: Framework React para SSR (Server-Side Rendering).
~~- **Styled-Components**: Estilização baseada em componentes.~~
- **CSS Module**: A estilização foi realizada utilizando CSS Modules do Next.js. A escolha pelo CSS Module foi motivada pela sua integração nativa com o Next.js, que facilita a renderização no lado do servidor (SSR), sem a necessidade de plugins auxiliares ou técnicas adicionais. Em contraste, o styled-components exige configuração extra para garantir o funcionamento adequado da renderização no servidor.
- **PostgreSQL**: Banco de dados relacional.
- **Normalize.css**: Estilização global visando manter consistência visual entre diversos navegadores (cross-browser).


## Funcionalidades

- **Carrinho de Compras**: Adicione e remova produtos do carrinho.
- **Barra de Busca**: Pesquise produtos diretamente pelo nome.
- **Filtros**: Filtre produtos por categorias e outras características.
- **Página de Marcas**: Veja todos os produtos de uma marca específica.
- **Informações Detalhadas**: Descrição completa dos produtos na página de detalhes.


## Coming Soon

- **Criação de conta**: A funcionalidade de criação de conta será adicionada em breve, permitindo que os usuários se registrem.
- **Busca de produtos pelo nome**: Em breve, será possível pesquisar produtos por nome, facilitando a navegação e a localização dos itens desejados.
- **Página de produtos por marca**: Uma página de busca por marca será implementada, permitindo aos usuários filtrar os produtos por suas marcas.
- **Filtros**: Filtros adicionais para refinar a pesquisa por preço, tamanho, etc., serão adicionados para melhorar a experiência de compra.


## Deploy

O projeto está hospedado na [Vercel](https://vercel.com), uma plataforma de deploy otimizada para Next.js.

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/shoestyle.git
   ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Acesse o projeto em [http://localhost:3000](http://localhost:3000).