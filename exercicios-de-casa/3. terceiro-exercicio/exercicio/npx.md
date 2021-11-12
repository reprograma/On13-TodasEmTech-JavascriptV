## __NPX__

# 1. O que é:
O npx é uma ferramenta CLI cujo objetivo é facilitar a instalação e gerenciamento de dependências baixadas no site npmjs.

Essas bibliotecas ficam em um banco de dados chamado NPM Registry, que também podem ser baixadas via CLI com npm ou yarn e com npx

Você pode executar o seguinte comando para ver se ele já está instalado para a sua versão npm atual:


$ which npx


Se não estiver instalado, você pode instalá-lo utilizando:

$ npm install -g npx

#
# 2. Como funciona?

## 2.1. Executando um pacote instalado localmente:
Se você quer executar um pacote instalado localmente, tudo o que você precisa fazer é digitar:

$ npx your-package


npx verificará se existe ou se existem nos binários do projeto local, e se assim ele irá executá-lo.

<command><package>$PATH


## 2.2. Execute pacotes que não estavam instalados anteriormente:
Outra grande vantagem é a capacidade de executar um pacote que não foi instalado anteriormente.

Você pode testar utilizando:

$ npx cowsay wow	

#
# 3. Por que utilizar?
O npx nos ajuda a evitar versionamentos, problemas de dependência e instalação de pacotes desnecessários que só queremos experimentar.

Ele também fornece uma maneira clara e fácil de executar pacotes, comandos, módulos e até mesmo gists e repositórios do GitHub.
#
# 4. Comandos básicos:

$ npm i -D webpack
$ npx webpack ...


$ npm rm webpack
$ npx webpack -- ...
$ cat package.json
...webpack not in "devDependencies"...


$ npx github:piuccio/cowsay
ou
$ npx git+ssh://my.hosted.git:cowsay.git#semver:^1
