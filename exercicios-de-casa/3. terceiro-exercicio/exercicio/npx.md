# Lição de casa: `npx`

## Instruções para a realização do exercício:

Pesquisem sobre o  `npx` e escrevam no arquivo `npx.md` uma documentação sobre o tema, englobando:

**O que é o npx?**

O *npx* é um package runner - um executor de pacotes - do NPM. Por ser um executor de pacotes, temos *x* ao final de sua sigla (eXecute). O npx, assim como o npm, faz parte do ecossistema de *Node.js* e está disponível no npm a partir da versão 5.2

É possível instalar o *npx* sem precisar instalar o npm, para tanto, é necessário instalar o npx como um pacote *standalone*.


**Como ele funciona?**

O seu uso permite instalar, remover e atualizar pacotes de um projeto ou da máquina. Com ele é possível executar um pacote local como se fosse um pacote global. Sendo assim, é possível  instalar as bibliotecas de maneira local por projeto, e então cada projeto passa a ter uma *node_modules* de acordo com a versão da biblioteca.


**Quais os motivos para utilizá-lo?**

Dentre as vantagens de usar o npx podemos citar:

* Rodar comandos locais com mais facilidade;

* Executar comandos sem instalação: capacidade de executar um pacote que não foi instalado anteriormente, sendo possível também  rodar diferentes versões do mesmo comando, usando a sintaxe @version;

* Rodar códigos diretamente de uma URL: o npx não se limita aos pacotes publicados nos registros do npm. Ele busca de dentro da node_modules do projeto ou até mesmo na node_modules global antes de ir na Internet buscar a bibioteca e executar.

* Executa comandos diretamente de um repositório do github ou mesmo de um gist

*
**Comandos básicos do npx**

## Instalação
npm install -g npx

## Criar um projeto com React
npx create-react-app MyWebApp

## Criar um projeto com React Native
npx react-native init MyApp

## Criar um projeto React Native com Typescript
npx react-native init MyApp --template react-native-template-typescript


## Especificar uma versão do Node para executar scripts npm (ou qualquer outra coisa)
npx -p node@8 npm run build





