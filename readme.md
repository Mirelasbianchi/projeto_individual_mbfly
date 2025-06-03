# ✈️ Projeto Individual - MBFly

<div align="center">
  <sub>Logo Mbfly</sub><br>
  <img src="./assets/logo.png" width="100%" alt="Logo"><br>
  <sup>Fonte: Desenvolvido por Mirela Bianchi</sup>
</div>

<br>

## 👩‍🎓 Autora:
- <a href="https://www.linkedin.com/in/mirela-bianchi-608601254/">Mirela Bianchi</a>

---

## 📜 Descrição do Sistema

O sistema MBFly é uma aplicação desenvolvida com arquitetura MVC que tem como objetivo gerenciar usuários e suas informações em uma interface simples e funcional. Ele será um gerenciador de tarefas online voltado à organização pessoal e aumento da produtividade de pilotos de avião. De forma simples e intuitiva, permitirá ao usuário criar tarefas, definir prazos, organizá-las por categorias como voos, estudos, checagens e escalas, além de acompanhar seu progresso.

---

## 📁 Estrutura de Pastas e Arquivos

A estrutura do projeto está organizada da seguinte forma:
```
projeto_individual_mbfly/
│
├── assets/              # Imagens e recursos não estruturados
├── controllers/         # Lógica das rotas e manipulação de requisições
├── documentos/          # Documentação do projeto
├── views/               # Camada de visualização do projeto 
├── scripts/             # Camada de scripts do projeto
├── models/              # Modelos de dados utilizados pelo sistema
├── routes/              # Definição das rotas da aplicação
├── services/            # Camada de regras de negócio
├── tests/               # Camada de testes do projeto
├── config/              # Configurações do projeto
├── .gitignore           # Arquivos ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
├── README.md            # Documentação do projeto (este arquivo)
└── server.js            # Ponto de entrada da aplicação
```


## 🔧 Como Executar o Projeto Localmente

Antes de iniciar, certifique-se de ter instalado:

- [Node.js (versão mais recente)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Um editor de código como [Visual Studio Code](https://code.visualstudio.com/)

### 🚀 Passo a passo:

1. **Clone o repositório:**

```bash
git clone https://github.com/Mirelasbianchi/projeto_individual_mbfly.git
```

2. **Entre na pasta do projeto:**

```bash
cd projeto_individual_mbfly
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto:**

```bash
npm start
```

5. **Acesse a aplicação no navegador:**

```
http://localhost:3000
```

---

## 📦 Configuração do Banco de Dados
Para configurar o banco de dados PostgreSQL, primeiro crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario_postgres
DB_PASSWORD=sua_senha_postgres
DB_NAME=nome_do_banco
DB_SSL=false
```

Após configurar o arquivo .env, execute o script de inicialização do banco de dados com o comando:

```bash
npm run init-db
```

Este comando irá executar o arquivo init.sql que contém toda a estrutura inicial das tabelas, incluindo as tabelas de usuários e tarefas com seus relacionamentos.

🔄 Migrações do Banco de Dados
O arquivo init.sql contém as migrações necessárias para criar a estrutura completa do banco. 
Para executar manualmente as migrações (caso necessário), utilize:

```bash
psql -U seu_usuario -d nome_do_banco -f scripts/init.sql
```

## 🚀 Testando a API
A API oferece endpoints RESTful para todas as operações CRUD. Você pode testá-los:

Com Postman
Importe a coleção de requisições disponível em docs/api_collection.json

Exemplos básicos:
Criar tarefa:

```bash
curl -X POST http://localhost:3001/api/tarefas \
-H "Content-Type: application/json" \
-d '{"titulo":"Reunião com cliente", "descricao":"Discutir requisitos", "usuario_id":1}'
Listar tarefas:
```


```bash
curl -X GET http://localhost:3001/api/tarefas
```

Testes automatizados:

```bash
npm test
```


## 📋 Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
