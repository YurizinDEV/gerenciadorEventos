//Defina uma interface Evento com os campos: id, nome, data e usuário que criou o evento.

export interface Evento {
    id: string;
    nome : string;
    data: Date;
    criadoPor: string;
}