import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./data/eventos.db");

export function criarTabelaUsuareios() {
    const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    nome    TEXT,
    email   TEXT,
    senha   TEXT)
`
    db.run(query, (erro) => {
        if (erro) {
            console.log(`Erro ao criar a tabela: ${erro}`);
        } else {
            console.log(`Tabela criada com sucesso!`);
        }
    })
}

export function inserirUsuario(nome: string, email: string, senha: string) {
    const query = `
    INSERT INTO usuarios (nome, email, senha) 
    VALUES (?,?,?)
    `
    db.run(query, [nome, email, senha], function (erro) {
        if (erro) {
            console.log(`Erro ao inserir dados: ${erro}`);
        } else {
            console.log(`Usuário ${this.lastID} cadastrado com sucesso!`);
        }
    })
}

export function listarTodosOsUsuarios() {

    const query = `SELECT * FROM usuarios`
    db.all(query, (erro, linhas) => {
        if (erro) {
            console.log(`Erro ao listar dados: ${erro}`);
        } else {
            console.log(linhas);
        }
    })

}

export function listarUsuariosPorId(id: number) {
    const query = `SELECT * FROM usuarios WHERE id =?`
    db.get(query, [id], (erro, linhas) => {
        if (erro) {
            console.log(`Erro ao listar dados: ${erro}`);
        } else if (linhas) {
            console.log(linhas);
        }
        else {
            console.log(`Nenhum usuário encontrado com o id ${id}`);
        }
    })
}

export function deletarUsuario (id: number) {
    const query = `DELETE FROM usuarios WHERE id =?`
    db.run(query, [id],function (erro) {
        if (erro) {
            console.log(`Erro ao deletar dados: ${erro}`);
        } else {
            console.log(`Usuário com id ${id} deletado com sucesso!`);
        }
    })
}

export function atualizarUsuario(id: number, novoNome: string, novoEmail: string, novaSenha: string) {
    const query = `UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id =?`
    db.run(query, [novoNome, novoEmail, novaSenha, id], function (erro){
        if (erro) {
            console.log(`Erro ao atualizar dados: ${erro}`);
        } 
        else if (this.changes === 0) {
            console.log(`Nenhum usuário encontrado com o id ${id}`);
        }  else {
            console.log(`Usuário com id ${id} atualizado com sucesso!`);
        }
    });
    }