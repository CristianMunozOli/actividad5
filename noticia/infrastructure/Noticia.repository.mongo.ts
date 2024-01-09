import Noticia from "../dominio/Noticia";
import NoticiaRepository from "../dominio/Noticia.repository";
import { collections } from "../../context/MongoConnection";

export default class NoticiaRepositoryMongo implements NoticiaRepository {
    async getAllNoticias(): Promise<Noticia[] | undefined> {
        const noticiasFromDB = await collections.noticia.find().toArray();
        if (!noticiasFromDB) return undefined;
            const noticias: Noticia[] = noticiasFromDB.map((noticiaFromDB) => {
            const noticia: Noticia = {
                id: String(noticiaFromDB._id),
                titulo: noticiaFromDB.titulo,
                texto: noticiaFromDB.texto,
                periodistas: noticiaFromDB.periodistas,
                recursos: noticiaFromDB.recursos
            };
            return noticia;
        });
        return noticias;
    }
    async getNoticiaByID(id: String): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }
    async getNoticiaByPeriodistaID(id: String): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }
    async postNoticia(noticia: Noticia): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }
    async deleteNoticia(id: String): Promise<Boolean | undefined> {
        throw new Error("Method not implemented.");
    }

}