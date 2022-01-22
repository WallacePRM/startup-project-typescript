# Uso

Execute ```npm start``` para iniciar o servidor de desenvolvimento.
Execute ```npm run build``` para gerar os arquivos para publicação.

# Como o projeto foi criado

- Cria uma pasta myapp
- Abra um terminal na pasta
- Execute: ```npm init -y``` para configurar o projeto para usar o npm.
- Execute: ```npm install --save-dev webpack webpack-cli``` para instalar o webpack.
- Execute: ```npm install --save-dev typescript ts-loader``` para instalar o typescript e o loader.
- Execute: ```npm install --save-dev html-webpack-plugin``` para instalar gerador html para webpack.
- Execute: ```npm install --save-dev webpack-dev-server``` para instalar o servidor para servir o site para desenvolvimento.
- Execute: ```npm install --save-dev style-loader css-loader mini-css-extract-plugin``` para instalar o loader css para importar css.
- Criar o arquivo de configuração do webpack na raiz do projeto: **webpack.config.js**.
- Criar o arquivo de configuração o typescript na raiz do projeto: **tsconfig.json**.
- Criar uma pasta **src** na raiz do projeto para salvar seu código.
- Criar um arquivo index.ts na pasta **src**.
- Criar um arquivo index.html na pasta **src**.

O projeto está configurado.


# Referências
- https://webpack.js.org/guides/typescript/