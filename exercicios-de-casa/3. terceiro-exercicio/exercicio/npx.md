# NPX

# O que é?

NPX é um executor de pacote NPM. Se o NPM é um gerenciador (manager) de pacotes, o NPX é um executor, por isso o X no final da sigla, de eXecutor

# Como funciona?

Quando você executa um pacote usando NPX, ele procura o pacote no registro local e global e, em seguida, executa o pacote.

Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salvá-los

# Quais os motivos para utiliza-lo?


Existem várias maneiras de instalar pacotes do Node.js, você pode colocá-los localmente (local para o projeto) ou instalar globalmente (no ambiente do usuário).

Às vezes, em vez de usar um dos dois métodos de instalação acima, você pode apenas usar o pacote e pronto.

Às vezes, você pode querer apenas experimentar uma lista de pacotes, pois pode não saber exatamente o que precisa.

Nesses casos, em vez de instalar localmente ou globalmente, você pode ir direto para a execução desses pacotes com NPX.

Exemplo: 

Ter o react-native cli ou create-react-app na máquina ocupa espaço e essas bibliotecas são atualizadas muito rápido, então não compensa ficar mantendo elas na máquina. O comando create-react-app, por exemplo, é feito uma vez e depois nunca mais, a menos que você comece outro projeto.


# Comandos básicos do npx

npx <command