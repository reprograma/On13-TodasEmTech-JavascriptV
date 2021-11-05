
# NPX

## Sobre o NPX

-É um executor de pacote NPM. Ele executa as bibliotecas que podem ser baixadas do site npmjs. Essas bibliotecas ficam em um banco de dados chamado NPM Registry. Se o NPM é um gerenciador (manager) de pacotes, o NPX é um executor, por isso o X no final da sigla.

## Como funciona

Quando você executa um pacote usando NPX, ele procura o pacote no registro local e global e, em seguida, executa o pacote.

Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salvá-los, ou seja, ele executa o comando e depois remove a biblioteca da máquina, ela não fica na node_modules global.

## Motivos para utilizar o NPX

Ter o react-native cli ou create-react-app na máquina ocupa espaço e essas bibliotecas são atualizadas muito rápido, então não compensa ficar mantendo elas na máquina. O comando create-react-app, por exemplo, é feito uma vez e depois nunca mais, a menos que você comece outro projeto.
Com o NPX, em vez de instalar localmente ou globalmente, você pode ir direto para a execuçao dos pacotes.

## Comandos básicos do NPX

-Para instalar usa o comando: 

npm install -g npx

-Para usar executa o comando:

npx some-package

#Referências

-https://pt.stackoverflow.com/questions/433378/qual-a-diferen%C3%A7a-entre-npm-e-npx

-https://www.npmjs.com/package/npx

-https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/


