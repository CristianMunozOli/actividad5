import Noticia from "../../dominio/Noticia";
import NoticiaRepository from "../../dominio/Noticia.repository";
import { collections } from "../../../context/MongoConnection";
import { ObjectId } from "mongodb";
import PeriodistaRepositoryPostgre from "../../../periodista/infrastructure/db/periodista.repository.postgre";
import PeriodistaRepository from "../../../periodista/domain/Periodista.repository";

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
    async getNoticiaByID(id: string): Promise<Noticia | undefined> {
        const objectId = new ObjectId(id);
        const noticiaFromDB = await collections.proyecto.findOne({ _id: objectId });
        if (!noticiaFromDB) return undefined;
        const noticia: Noticia = {
            id: String(noticiaFromDB._id),
            titulo: noticiaFromDB.titulo,
            texto: noticiaFromDB.texto,
            periodistas: noticiaFromDB.periodistas,
            recursos: noticiaFromDB.recursos
        };
        return noticia;
    }
    async getNoticiaByPeriodistaID(id: number): Promise<Noticia[] | undefined> {
        const objectId = new ObjectId(id);
        const noticiasFromDB = await collections.noticia.find({ 'periodistas.id': id }).toArray();
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
    async postNoticia(noticia: Noticia): Promise<Noticia | undefined> {
        const result = await collections.noticia.insertOne(noticia);
        const id = String(result.insertedId);
        return await this.getNoticiaByID(id);
    }
    async deleteNoticia(id: String): Promise<Boolean | undefined> {
        throw new Error("Method not implemented.");
    }

}