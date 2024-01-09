import express, { Request, Response} from 'express';
import NoticiaRepository from "../../dominio/Noticia.repository";
import NoticiaRepositoryMongo from "../db/Noticia.repository.mongo";

const router = express.Router();
const noticiaRepository: NoticiaRepository = new NoticiaRepositoryMongo();

router.get("/",async (req: Request, res: Response)=>{
    try{
        const noticias = await noticiaRepository.getAllNoticias();
        res.json(noticias);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});
export { router as routerNoticia}