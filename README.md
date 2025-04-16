Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) para um desafio de uma vaga.

## Como Executar o Projeto

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página se atualiza automaticamente à medida que você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a fonte [Geist](https://vercel.com/font), uma nova família de fontes para a Vercel.

## Melhorias Possíveis

Embora o projeto esteja funcional, há várias melhorias que podem ser feitas, como a adição de um carrossel para exibir conteúdo dinâmico. No entanto, essa funcionalidade foi considerada opcional e não foi implementada devido a restrições de tempo, tam´bem podemos quebrar algumas outros components em components menores para fim de otimização. Também foi adicionado muito valores px/rem manualmente, o ideal é criar um design system no tailwind com os tokens conforme o Figma. Adicionar um eslint mais elaborado com prettier é uam boa ideia também!
