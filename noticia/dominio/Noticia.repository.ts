import Noticia from "./Noticia";

export default interface NoticiaRepository{
    getAllNoticias():Promise<Noticia[] | undefined>;
    getNoticiaByID(id:String):Promise<Noticia | undefined>;
    getNoticiaByPeriodistaID(id:String):Promise<Noticia | undefined>;
    postNoticia(noticia:Noticia):Promise<Noticia | undefined>;
    deleteNoticia(id:String):Promise<Boolean | undefined>; 
}