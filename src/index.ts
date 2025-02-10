/*
1) Gerenciamento de Eventos
Crie um sistema que exiba informações sobre eventos.
Defina uma interface Evento com os campos: id, nome, data e usuário que criou o evento.
Crie funções para gerenciar eventos (adicionar, listar, listar um específico e deletar) em um banco de dados SQLite.
Será necessário que o sistema gerencie os Usuarios  com os campos: id, nome, email e senha.
Também será necessário uma tabela para registrar os Logs do sistema (ações que acontecem, como inserir, alterar, deletar, nas tabelas do banco de dados e qual usuário executou em qual data e horário).
Crie uma estrutura de pastas adequada para as responsabilidades das funções.
*/

//criarTabelaUsuareios();
//inserirUsuario("João", "joao@gmail.com", "123");
//listarTodosOsUsuarios();
//listarUsuariosPorId(1);
//deletarUsuario(1);
//atualizarUsuario(1, "Joãozinho", "joaozinho@gmail.com", "123");

import { criarTabelas } from "./database/createTable";
import { inserirUsuario, listarTodosOsUsuarios } from "./controllers/userController";
import { adicionarEvento, listarTodosEventos, listarEventoPorId, deletarEvento } from "./controllers/eventController";
import { listarLogs } from "./controllers/logController";

// Cria as tabelas (usuarios, eventos e logs)
criarTabelas();

// Exemplo de uso (atenção à ordem e à existência de registros)

// Inserir um novo usuário
inserirUsuario("João Silva", "joao@example.com", "123456");

// Aguarda um curto período para garantir que o usuário seja inserido e, em seguida, insere um evento
setTimeout(() => {
    // Exemplo: criar um evento com usuário_id 1 (certifique-se de que o usuário com id 1 exista)
    adicionarEvento("Evento de Teste", "2025-03-01", 1);

    // Listar os eventos após um curto tempo
    setTimeout(() => {
        listarTodosEventos();
        listarEventoPorId(1);
        // Excluir o evento e registrar log da ação  
        deletarEvento(1, 1);

        setTimeout(() => {
            listarLogs();
        }, 1000);
    }, 1000);

}, 1000);