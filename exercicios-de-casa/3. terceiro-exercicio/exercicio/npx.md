NPX

npm serve para você gerenciar os pacotes, instalando localmente, globalmente ou removendo-os, o npx serve para você executar sem instalar,o NPX é um executor, por isso o X no final da sigla.
O NPX busca a biblioteca na Registry do NPM, instala em uma pasta temporária, executa o comando e depois remove a biblioteca da máquina, ela não fica na node_modules global.
NPX não só busca no site do npmjs, como busca de dentro da node_modules do projeto também,Uma nova ferramenta incluída no NPM 5.2, npx é Um pequeno utilitário que é inteligente o suficiente para executar o aplicativo certo quando É chamado de dentro de um projeto.
Para usar NPX, você executaria um comando como este:

npx some-package

Uma ótima maneira de ver a rapidez com que o NPX funciona é criar um aplicativo de reação usando:

$ npx create-react-app my-app

O comando acima irá gerar um app react, denominado my-app, no caminho em que o comando foi executado usando o pacote create-react-app. O NPX então:

Procura o pacote em seu ambiente locamente (node_modules do projeto).
Se não for encontrado, procura o pacote em seu sistema (node_modules global).
Se não for encontrado, o NPX baixa os arquivos e executa o comando para criar um novo app react, usando apenas aquela linha de comando.
Como mostrado acima, NPX não só busca no site do npmjs, como busca de dentro da node_modules do projeto também ou até mesmo na node_modules global antes de ir na Internet buscar os pacotes e executar.

No exemplo do react, ter o react-native cli ou create-react-app na máquina ocupa espaço e essas bibliotecas são atualizadas muito rápido, então não compensa ficar mantendo elas na máquina. O comando create-react-app, por exemplo, é feito uma vez e depois nunca mais, a menos que você comece outro projeto.
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
https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/
https://pt.stackoverflow.com/questions/433378/qual-a-diferen%C3%A7a-entre-npm-e-npx
https://www.ti-enxame.com/pt/javascript/diferenca-entre-npx-e-npm/838393291/