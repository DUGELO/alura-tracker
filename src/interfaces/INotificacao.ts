export enum TipoNotificacao {
    SUCESSO,
    ATENCAO,
    FALHA
}

export interface INotificacao {
    titulo: string;
    texto: string;
    tipo: TipoNotificacao;
    id: number
}