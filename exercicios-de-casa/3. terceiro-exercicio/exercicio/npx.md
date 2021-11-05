##NPX

NPX é um package runner do NPM. Ele executa as bibliotecas que podem ser baixadas do site npmjs. Essas bibliotecas ficam em um banco de dados chamado NPM Registry, que também podem ser baixadas via CLI com npm ou yarn e com npx.

Quando se executa um pacote usando NPX, ele procura o pacote no registro local e global e, em seguida, executa o pacote.

Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salvá-los.
