import Noticia from "../dominio/Noticia";
import NoticiaRepository from "../dominio/Noticia.repository";

export class NoticiaUseCases{
    private noticiaRepository: NoticiaRepository;

    constructor(noticiaRepository: NoticiaRepository){
        this.noticiaRepository=noticiaRepository;
    }
    async getAllNoticias() {
        return await this.noticiaRepository.getAllNoticias();
    }

    async getNoticiaById(id:String){
        return await this.noticiaRepository.getNoticiaByID(id);
    }

    async getNoticiaByPeriodistaID(id:String){
        return await this.getNoticiaByPeriodistaID(id);
    }

    async postNoticia(noticia:Noticia){
        return await this.postNoticia(noticia);
    }

    async deleteNoticia(id:String){
        return await this.deleteNoticia(id);
    }

}