## Desafio SIP-Digital

Projeto:

- Login com autenticação JWT;
- Cadastro de produtos, com imagem, nome e valor;
- Express e Sequelize
- Frontend em Next

## Rodando aplicação

Após clonar o projeto, é preciso que o arquivo de configuração do servidor (.env) seja criado dentro da pasta ./SERVER e corretamente configurado com os seguintes parâmetros:

```bash
# Porta padrão de acesso ao servidor local.
APP_PORT=3001

# Nome do banco de dados local.
DB_NAME=YOUR_DB_NAME

# Usuário do banco de dados local.
DB_USER=YOUR_DB_USER

# Senha do banco de dados local.
DB_PASSWORD=YOUR_DB_PASSWORD

# Auth secret utilizada para gerar o token e descodificar o mesmo.
LOCAL_AUTH_SECRET="123hjg5213j4g1h234jh156g1jh6"

# Acess key do aws.
AWS_ACCESS_KEY_ID=YOUR_AWS_KEY

# Secret Acess key do aws.
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_KEY

# Região onde se localiza seu servidor bucket.
AWS_DEFAULT_REGION=YOUR_AWS_REGION

# Região onde se localiza seu servidor bucket.
AWS_REGION ="YOUR_AWS_REGION"

# Nome do seu servidor bucket.
DEVELOPMENT_BUCKET=YOUR_BUCKET_NAME

```

Tendo configurado a (.env) do servidor, execute os seguintes códigos no terminal da pasta ./SERVER:

```bash
#Para instalar as dependências.
yarn

#Para rodar as Migrations do banco de dados.
yarn sequelize db:migrate

#Para iniciar o servidor.
yarn start

```

Após o servidor ser inicializado, abra outro terminal e entre na pasta ./CLIENT, execute os seguintes comandos:

```bash
#Para instalar todas as dependências.
yarn

#Para iniciar o client.
yarn start

```

Com o cliente e servidor iniciado, em seu navegador abra o endereço http://localhost:3000/ para visualizar a aplicação.
