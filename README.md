# Sistema de Gerenciamento de Eventos em TypeScript

Este é um projeto de exemplo para gerenciar eventos, usuários e logs em **TypeScript**, utilizando um banco de dados **SQLite** sem expor nenhuma API externa (sem uso de HTTP). Todas as operações podem ser realizadas diretamente por meio das funções disponibilizadas pelo projeto.

---

## Sumário

1. [Objetivo](#objetivo)  
2. [Arquitetura do Projeto](#arquitetura-do-projeto)  
3. [Requisitos](#requisitos)  
4. [Instalação e Configuração](#instalação-e-configuração)  
5. [Estrutura de Pastas](#estrutura-de-pastas)  
6. [Funcionalidades](#funcionalidades)  
   - [Interface Evento](#interface-evento)  
   - [Interface Usuário](#interface-usuário)  
   - [Tabela de Logs](#tabela-de-logs)  
7. [Compilação e Execução](#compilação-e-execução)  
8. [Como Contribuir](#como-contribuir)  
9. [Licença](#licença)

---

## Objetivo

O objetivo é demonstrar operações de inclusão, listagem, busca individual e exclusão nas tabelas de **Eventos** e **Usuários**, além de registrar **Logs** de cada ação executada. Este sistema não expõe nenhuma rota HTTP; todo gerenciamento é feito internamente nas funções do projeto ou via CLI (caso seja configurado).

---

## Arquitetura do Projeto

- **Banco de Dados**: **SQLite** (arquivo local).
- **Linguagem**: **TypeScript** no ambiente Node.js.
- **Conexão**: Utiliza a biblioteca `sqlite3` (ou similar) para manipular o banco de dados.
- **Organização**: As funcionalidades são divididas em módulos (pastas) de acordo com a responsabilidade (Eventos, Usuários, Logs).

---

## Requisitos

- **Node.js** (versão LTS ou superior).  
- **npm** ou **yarn** (gerenciador de pacotes).  
- **TypeScript** instalado globalmente (opcional, mas recomendado).  
- **SQLite** (para uso do banco de dados local).  

Instale a biblioteca `sqlite3` (ou `better-sqlite3`) para manusear o banco dentro do projeto:

```bash
npm install sqlite3
# ou
yarn add sqlite3
```

---

## Instalação e Configuração

1. **Clone este repositório**  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Configure o banco de dados**  
   - Verifique se existe um arquivo `database.sqlite` na pasta `db` (caso esta seja a estrutura utilizada).  
   - Se não existir, você pode criar manualmente ou executar um script de inicialização (caso fornecido).

---

## Estrutura de Pastas

A estrutura abaixo é apenas uma sugestão; ajuste conforme sua preferência ou necessidade:

```
└─ src
   ├─ config
   │  └─ db.ts               # Configuração e conexão com o SQLite
   ├─ controllers
   │  ├─ eventController.ts  # Métodos CRUD de Eventos
   │  ├─ userController.ts   # Métodos CRUD de Usuários
   │  └─ logController.ts    # Registro de Logs
   ├─ models
   │  ├─ IEvento.ts          # Interface do Evento
   │  ├─ IUsuario.ts         # Interface do Usuário
   │  └─ ILog.ts             # Interface do Log
   ├─ services
   │  ├─ eventService.ts     # Funções de negócio relacionadas a Eventos
   │  ├─ userService.ts      # Funções de negócio relacionadas a Usuários
   │  └─ logService.ts       # Funções de negócio relacionadas a Logs
   ├─ main.ts                # Arquivo principal de entrada/testes (se for usado CLI)
   └─ ...
└─ tsconfig.json
└─ package.json
└─ README.md
```

---

## Funcionalidades

### Interface Evento

A interface **IEvento** contém:
- **id**: number ou string (UUID).  
- **nome**: string.  
- **data**: string ou Date (dependendo do tipo suportado).  
- **usuarioCriador**: ID do usuário que criou o evento.

**Funções relacionadas**:  
- `criarEvento(evento: IEvento)`: Cadastra um novo evento.  
- `listarEventos()`: Lista todos os eventos cadastrados.  
- `buscarEvento(id: number | string)`: Retorna o evento pelo ID.  
- `deletarEvento(id: number | string)`: Remove o evento do banco.

### Interface Usuário

A interface **IUsuario** contém:  
- **id**: number ou string (UUID).  
- **nome**: string.  
- **email**: string.  
- **senha**: string.

**Funções relacionadas**:  
- `criarUsuario(usuario: IUsuario)`: Cadastra um novo usuário.  
- `listarUsuarios()`: Lista todos os usuários.  
- `buscarUsuario(id: number | string)`: Retorna o usuário pelo ID.  
- `deletarUsuario(id: number | string)`: Remove o usuário do banco.

### Tabela de Logs

A tabela de logs registra as ações executadas no sistema. Cada log deve conter:  
- **id**: number ou string (UUID).  
- **acao**: string (ex.: *INSERT*, *UPDATE*, *DELETE*).  
- **tabelaAfetada**: string (ex.: *Eventos*, *Usuarios*).  
- **dataHora**: string ou Date.  
- **usuarioId**: ID do usuário que executou a ação.

**Funções relacionadas**:  
- `registrarLog( logData: ILog )`: Cria um registro de log a cada ação em **Eventos** ou **Usuários**.  
- `listarLogs()`: Lista todos os registros de logs.

---

## Compilação e Execução

Considerando que este projeto não expõe nenhuma API, a **interação** com o sistema pode ser feita por scripts ou entrada de console no arquivo `main.ts` ou equivalente.

1. **Compilar o projeto**  
   ```bash
   npm run build
   # ou
   yarn build
   ```
   - O TypeScript vai gerar a pasta `dist` com o código JavaScript compilado.

2. **Executar via Node**  
   ```bash
   node dist/main.js
   ```
   - Caso queira usar o `ts-node` diretamente (sem compilar), faça:
     ```bash
     npx ts-node src/main.ts
     ```
3. **Testar as funcionalidades**  
   - Dentro de `main.ts`, você pode chamar as funções de criação, listagem, etc. para verificar o funcionamento do sistema.

---

## Como Contribuir

1. Faça um fork do repositório.  
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).  
3. Faça commit das suas alterações (`git commit -m 'Minha nova feature'`).  
4. Faça push para a branch (`git push origin minha-feature`).  
5. Abra um pull request neste repositório.

---

## Licença

Este projeto está sob a [MIT License](https://opensource.org/licenses/MIT).  
Sinta-se à vontade para usar, modificar e compartilhar.

**Prazo de entrega: 10/02/2025**

Bom desenvolvimento!
