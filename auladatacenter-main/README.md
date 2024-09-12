### Exercício Docker Compose:

Você foi designado para construir o ambiente de uma aplicação web que consiste em um frontend escrito em JavaScript, um backend desenvolvido em Python (usando FastAPI), e um banco de dados Postgres. Sua tarefa é utilizar o Docker Compose para orquestrar todos os serviços da aplicação.

A aplicação deve atender aos seguintes requisitos:

1. **Frontend:**
   - O frontend deve ser servido por um contêiner `nginx` que entrega um arquivo HTML estático contendo um formulário de cadastro de usuários.
   - O frontend deve se comunicar com o backend para enviar os dados de cadastro e listar os usuários cadastrados.

2. **Backend:**
   - O backend deve ser implementado usando FastAPI e configurado para rodar no contêiner.
   - O backend deve se conectar a um banco de dados Postgres, realizando operações CRUD (criar e ler usuários).
   - Deve ser utilizado um banco de dados Postgres para armazenar as informações dos usuários cadastrados.
   - O FastAPI deve permitir requisições CORS para que o frontend consiga fazer chamadas à API.
   
3. **Banco de Dados:**
   - O banco de dados Postgres deve rodar em um contêiner separado e expor a porta 5432.
   - O backend deve se conectar ao banco de dados usando as credenciais adequadas e executar a migração do schema para criar a tabela de usuários.

4. **Orquestração com Docker Compose:**
   - O arquivo `docker-compose.yml` deve ser configurado para iniciar os serviços `frontend`, `backend` e `db` (Postgres).
   - Cada serviço deve rodar em seu próprio contêiner.
   - O backend deve ser exposto na porta `8000` e o frontend na porta `8080`.
   - O banco de dados deve ser persistido usando volumes do Docker para manter os dados entre execuções.
   - Todos os serviços devem ser inicializados juntos ao rodar o comando `docker-compose up`.

### Tarefa:

Construa o arquivo `docker-compose.yml` que atenda aos requisitos acima. Inclua as definições para os serviços `frontend`, `backend`, e `db`, e faça as configurações necessárias para que a aplicação funcione corretamente ao rodar o comando `docker-compose up`.

### Critérios de Avaliação:
- O arquivo `docker-compose.yml` deve estar corretamente configurado para iniciar todos os serviços.
- O frontend deve estar acessível em `http://localhost:8080`.
- O backend deve estar acessível em `http://localhost:8000`.
- O backend deve se conectar corretamente ao banco de dados Postgres.
- O banco de dados Postgres deve estar configurado com credenciais adequadas.
- A persistência dos dados no banco de dados deve ser garantida entre execuções através do uso de volumes.

### Entrega
- Crie uma Branch com o seu nome e faça o commit do docker compose.
- Prazo: `13/09/2024`