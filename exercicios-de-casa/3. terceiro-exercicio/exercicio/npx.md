# NPX 👩‍💻

*O que é o NPX?* 

Ele é um Executor de pacotes do NPM.
Executa bibliotecas que podem ser baixadas do site npmjs. 
Essas bibliotecas ficam em um banco de dados cahamo NPM Registry, e também podem ser baixadas via CLI com _npn_ ou _yarn_ e com _npx_.

*Como ele funciona?*

Quando você executa um pacote usando NPX, ele procura o pacote no registro local e global e, em seguida, executa o pacote.
Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salvá-los.

*Porque usar o NPX?*

Ter o react-native cli ou create-react-app na máquina ocupa espaço e essas bibliotecas são atualizadas muito rápido, então não compensa ficar mantendo elas na máquina. O comando create-react-app, por exemplo, é feito uma vez e depois nunca mais, a menos que você comece outro projeto.

❯ du -sh react-native create-react-app 
306M	react-native
 28M	create-react-app

Olha ai o tanto de espaço que economiza na máquina: 334 Mb.

*Comandos básicos do npx*

Para usar NPX, você executaria um comando como este:
_npx some-package_

Uma ótima maneira de ver a rapidez com que o NPX funciona é criar um aplicativo de reação usando:
_$ npx create-react-app my-app_
O comando acima irá gerar um app react, denominado my-app, no caminho em que o comando foi executado usando o pacote create-react-app. O NPX então:

- Procura o pacote em seu ambiente locamente (node_modules do projeto).
- Se não for encontrado, procura o pacote em seu sistema (node_modules global).
- Se não for encontrado, o NPX baixa os arquivos e executa o comando para criar um novo app react, usando apenas aquela linha de comando.

#Referências:

https://qastack.com.br/programming/50605219/difference-between-npx-and-npm
https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/
https://pt.stackoverflow.com/questions/433378/qual-a-diferen%C3%A7a-entre-npm-e-npx