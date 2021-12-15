import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    foto: string;
    localizacao: string;
    tema?: Tema| null
}

export default Postagem;