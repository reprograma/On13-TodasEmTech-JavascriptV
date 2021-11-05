# Entendendo NPX!

**NPX** é um _package runner_ do NPM. Ele **executa as bibliotecas** que podem ser baixadas do site [**npmjs**](https://www.npmjs.com/). Essas bibliotecas ficam em um banco de dados chamado **[NPM Registry](https://docs.npmjs.com/about-the-public-npm-registry)**.

O **NPX** foi desenvolvido pela [Kat Marcán](https://github.com/zkat), atualmente é mantido pelo [NPM](https://github.com/npm/npx), que foi comprado recentemente pelo [Github](https://github.blog/2020-04-15-npm-has-joined-github/). O NPX é um **binário** que está presente no NPM desde a versão 5.2.


1.  _Já instalou algum pacote global e precisou usá-lo pouquíssimas vezes?_
2.  _Já teve problemas de incompatibilidade com pacotes globais por diferença de versões em múltiplos projetos?_
3.  _Já sentiu que sua máquina está poluída por diversos pacotes globais?_

Se você passou por esses pontos, uma boa solução é usar o npx.
# Como funciona e quais motivos para utilizá-lo

`npx`  executa o comando de um pacote sem instalá-lo explicitamente.

Casos de uso:

-   Você não quer instalar pacotes nem globalmente nem localmente.
-   Você não tem permissão para instalá-lo globalmente.
-   Só quero testar alguns comandos.

 # **npm vs. npx**

O NPM é um gerenciador de pacotes, você pode instalar pacotes node.js usando NPM
O NPX é uma ferramenta para executar pacotes node.js.
Não importa se você instalou esse pacote globalmente ou localmente. O NPX irá instalá-lo temporariamente e executá-lo. O NPM também pode executar pacotes se você configurar um arquivo package.json e incluí-lo na seção de script.


# Conheça os comandos básicos

A dica é: sempre que for **criar um projeto**  **_react_** ou **_react native_** utilize o npx:

**Criar um projeto com React:**

```bash
npx create-react-app MyWebApp

```

Criar um projeto com  **React Native:**

```bash
npx react-native init MyApp

```

Criar um projeto com  **React Native com Typescript:**

```bash
npx react-native init MyApp --template react-native-template-typescript
```

Fontes: 
- https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
- https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/
- https://www.linkedin.com/pulse/npx-uma-alternativa-para-pacotes-globais-e-outras-angelo-medeiros/?originalSubdomain=pt