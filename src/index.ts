import { criarTabelas } from "./database/createTable";
import { inserirUsuarioController } from "./controllers/userController";
import {
    adicionarEventoController,
    listarTodosEventosController,
    listarEventoPorIdController,
    deletarEventoController
} from "./controllers/eventController";
import { listarLogsController } from "./controllers/logController";

// Função para iniciar o fluxo da aplicação
function iniciarApp() {
    // Cria as tabelas: usuários, eventos e logs
    criarTabelas();

    // Inserir um usuário (dados validados no controller)
    inserirUsuarioController({ nome: "João Silva", email: "joao@example.com", senha: "123456" });

    // Aguarda um curto período para garantir a inserção do usuário (simulando ambiente assíncrono)
    setTimeout(() => {
        // Adiciona um evento com base no usuário inserido
        adicionarEventoController({ nome: "Evento de Teste", data: "2025-03-01", usuario_id: 1 });

        // Aguarda para que o evento seja inserido e depois lista os eventos
        setTimeout(() => {
            listarTodosEventosController();
            listarEventoPorIdController(1);

            // Deleta o evento, validando os dados no controller
            deletarEventoController({ id: 1, usuario_id: 1 });

            // Aguarda para então listar os logs registrados
            setTimeout(() => {
                listarLogsController();
            }, 1000);

        }, 1000);

    }, 1000);
}

// Inicia a aplicação
iniciarApp();