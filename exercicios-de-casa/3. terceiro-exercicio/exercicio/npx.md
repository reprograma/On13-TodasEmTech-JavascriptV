## __NPX__
#
### 1. __O que é:__
O npx é uma ferramenta CLI cujo objetivo é facilitar a instalação e gerenciamento de dependências hospedadas no registro npm.

É muito fácil executar qualquer tipo de node.js executável baseado que você normalmente instalaria via npm.

Você pode executar o seguinte comando para ver se ele já está instalado para a sua versão npm atual:

```
$ which npx
```

Se não estiver instalado, você pode instalá-lo utilizando:
```
$ npm install -g npx
```
#
### 2. __Como funciona?__

#### 2.1. __Executando um pacote instalado localmente__:
Se você deseja executar um pacote instalado localmente, tudo o que você precisa fazer é digitar:
```
$ npx your-package
```

npx verificará se existe ou se existem nos binários do projeto local, e se assim ele irá executá-lo.
```
<command><package>$PATH
```

#### 2.2. __Execute pacotes que não estão instalados anteriormente__:
Outra grande vantagem é a capacidade de executar um pacote que não foi instalado anteriormente.

Você pode testar utilizando:
```
$ npx cowsay wow	
```
#
### 3. __Por que utilizá-lo?__
O npx nos ajuda a evitar versionamentos, problemas de dependência e instalação de pacotes desnecessários que só queremos experimentar.

Ele também fornece uma maneira clara e fácil de executar pacotes, comandos, módulos e até mesmo gists e repositórios do GitHub.
#
### 4. __Comandos básicos__:
```
$ npm i -D webpack
$ npx webpack ...
```
```
$ npm rm webpack
$ npx webpack -- ...
$ cat package.json
...webpack not in "devDependencies"...
```
```
$ npx github:piuccio/cowsay
...or...
$ npx git+ssh://my.hosted.git:cowsay.git#semver:^1
...etc...
```