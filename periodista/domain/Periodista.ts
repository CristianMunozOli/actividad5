import Noticia from "../../noticia/dominio/Noticia";

export default interface Periodista{
    id: number;
    nombre: string;
    fechaNacimiento?: Date;
    noticias?:Noticia[];
}