# O que é o npx?

É um package runner do NPM. Ele executa as bibliotecas que podem ser baixadas do site npmjs.
Essas bibliotecas ficam em um banco de dados chamado NPM Registry, que também podem ser baixadas via CLI com npm ou yarn e com npx.
NPM é um gerenciador de pacotes e o NPX um executor, dos pacotes sem instalar.

# Como ele funciona?

O NPX busca a biblioteca na Registry do NPM, instala em uma pasta temporária, executa o comando e depois remove a biblioteca da máquina, ela não fica na node_modules global.

O mesmo não só busca no site do npmjs, como busca de dentro da node_modules do projeto também ou até mesmo na node_modules global antes de ir na internet buscar a lib e executar.

# Quais os motivos para utiliza-lo? 

Antes do NPX era necessário a instalação dos pacotes do npm na máquina de maneira global, causando problemas se caso enviasse para outro dev que não teria acesso as bibliotecas de maneira local, sendo necessário instalar a biblioteca global na máquina, com o NPX não é mais necessário essa instalação.

# Comandos básicos do npx?

-Rodar diferentes versões do mesmo comando, usando a sintaxe : @version

- Demonstrar o uso do npx através do comando: "cowsay"

- Rodar CLI do vue para criar novas aplicações: npx @vue/cli create my-vue-app

- Criar uma aplicação react: create-react-app: npx creat-react-appmy-react-app