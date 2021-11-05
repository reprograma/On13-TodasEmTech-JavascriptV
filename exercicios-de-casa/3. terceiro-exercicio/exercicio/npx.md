
# Conhecendo o NPX

NPX é um package runner do NPM. Ele executa as bibliotecas que podem ser baixadas do site npmjs.




## Documentation

[npx](https://www.npmjs.com/package/npx)




## FAQ

#### Como ele funciona?

O NPX busca a biblioteca na Registry do NPM, instala em uma pasta temporária, executa o comando e depois remove a biblioteca da máquina, ela não fica na node_modules global.


#### Quais os motivos para utiliza-lo?

NPX não só busca no site do npmjs, como busca de dentro da node_modules do projeto também ou até mesmo na node_modules global antes de ir na Internet buscar a lib e executar.
Ter o react-native cli ou create-react-app na máquina ocupa espaço e essas bibliotecas são atualizadas muito rápido, então não compensa ficar mantendo elas na máquina. O comando create-react-app, por exemplo, é feito uma vez e depois nunca mais, a menos que você comece outro projeto.


#### Comandos

npm install -g npx
