- O que é o npx;

NPX é um executor de pacote NPM que torna realmente fácil instalar qualquer tipo de executável de nó que normalmente teria sido instalado usando NPM. 

Como o npm é o gerenciador de pacotes node, ele irá instalar na sua máquina um pacote para que você possa utiliza-lo em outros projetos sem precisar baixar novamente.

já o npx irá usar o pacote sem precisar baixar em sua máquina, sendo assim você irá instalar um pacote no seu projeto ou até mesmo usar esse pacote, sem baixar os arquivos em sua máquina

- Como ele funciona;

Quando você executa um pacote usando NPX, ele procura o pacote no registro local e global e, em seguida, executa o pacote.

Se o pacote ainda não estiver instalado, o NPX baixa os arquivos do pacote e instala o pacote, mas apenas armazenará os arquivos em cache em vez de salvá-los.

- Quais os motivos para utiliza-lo;

NPM- Gerencia pacotes, mas não facilita a execução de nenhum.
NPX- Uma ferramenta para executar pacotes de nós.

- Comandos básicos do npx;

Criar um projeto com React: 
    npx create-react-app MyWebApp

Criar um projeto com React Native:
    npx react-native init MyApp

Criar um projeto com React Native com Typescript:
    npx react-native init MyApp --template react-native-template-typescript