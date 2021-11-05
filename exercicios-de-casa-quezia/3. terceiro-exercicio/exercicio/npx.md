1 - O que é o npx;

NPX é um package runner do NPM. Ele executa as bibliotecas que podem ser baixadas do site npmjs. Essas bibliotecas ficam em um banco de dados chamado NPM Registry, que também podem ser baixadas via CLI com npm ou yarn e com npx como veremos a seguir.

NPM é um gerenciador de pacotes que já estamos acostumados a usar junto com o Node.js. Com NPM instalamos e desinstalamos as bibliotecas de um projeto ou da máquina. Com Yarn é a mesma coisa na prática.

Se o NPM é um gerenciador (manager) de pacotes, o NPX é um executor, por isso o X no final da sigla.

2 - Como ele funciona;

Se você usar npx, não terá que criar um script npm para rodar binários locais.
Para atingir um comportamento semelhante ao do ponto anterior, ou seja, instalar pacotes como dependências de desenvolvimento locais em vez de globais, até agora se quiséssemos executar o pacote que tínhamos que incluir na seção de scripts de nosso package.json  a instrução para executar ou colocar no terminal o caminho do pacote dentro de node_modules.

...
  "scripts": {
    "test": "jest --watch"
  },
...
Agora com o npx, já vimos que isso não é necessário, embora seja sempre bom ter nossa seção de scripts para ajudar outros companheiros de equipe ou a nós mesmos a lembrar os comandos que precisaremos desenvolver confortavelmente.

 

Se você usar npx, poderá executar comandos descartáveis.
O que quero dizer com isso é: não aconteceu com você que quando você vai iniciar um novo projeto, a CLI que o gera já tem uma nova versão? A desvantagem disso é que isso pode acontecer sem você saber que existe uma nova versão. Bem, outra vantagem do npx é que você pode executar qualquer pacote npm sem tê-lo instalado!  Portanto, não precisamos instalar o pacote create-react-app  localmente para poder gerar um projeto. Com o npx podemos executar $ npx create-react-app e ele irá baixar o pacote em sua versão mais recente, que faz o seu trabalho para finalmente removê-lo de nosso sistema , isso também é perfeito para testar se uma ferramenta pode atendê-lo ou não rapidamente, fantástico!


3 - Quais os motivos para utiliza-lo;


Existem várias maneiras de instalar pacotes do Node.js, você pode colocá-los localmente (local para o projeto) ou instalar globalmente (no ambiente do usuário).

Às vezes, em vez de usar um dos dois métodos de instalação acima, você pode apenas usar o pacote e pronto.

Às vezes, você pode querer apenas experimentar uma lista de pacotes, pois pode não saber exatamente o que precisa.

Nesses casos, em vez de instalar localmente ou globalmente, você pode ir direto para a execução desses pacotes com NPX.



Comandos básicos do npx;

instalar
npm install -g

desistalar
npm unistall consay -g

executa o react-native
npx react-native init MyApp-- template react-native-template-typescript


Gerenciamento de versão
npx node@version <comand>
npx https://gist.github.com/tgmarinho/cbf45688de3c7a721785ccb4efbb10ca
O comando acima vai ler o arquivo package.json, instalar as bibliotecas de forma temporária, executar o script que está no "bin" do package.json.



Fonte Pesquisa
https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/#:~:text=NPX%20%C3%A9%20um%20package%20runner,ser%20baixadas%20do%20site%20npmjs.&text=NPM%20%C3%A9%20um%20gerenciador%20de,usar%20junto%20com%20o%20Node.

https://pt.stackoverflow.com/questions/433378/qual-a-diferen%C3%A7a-entre-npm-e-npx




