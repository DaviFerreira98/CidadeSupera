import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: Date;
    foto: string;
    localizacao: string;
    tema?: Tema| null
}

export default Postagem;