import express, { Request, Response} from 'express';
import NoticiaRepository from "../../dominio/Noticia.repository";
import NoticiaRepositoryMongo from "../db/Noticia.repository.mongo";

const router = express.Router();
const noticiaRepository: NoticiaRepository = new NoticiaRepositoryMongo();

router.get("/noticia/",async (req: Request, res: Response)=>{
    try{
        const noticias = await noticiaRepository.getAllNoticias();
        res.json(noticias);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});


router.post("/noticia/", async (req, res) => {
    try {
      const newNoticia = req.body;
      const createNoticia = await noticiaRepository.postNoticia(newNoticia);
      
      res.status(201).json(createNoticia);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.get("/noticia/:id",async (req: Request, res: Response)=>{
    try{
        const id = parseInt(req.params.id);
        const noticias = await noticiaRepository.getNoticiaByPeriodistaID(id);
        res.json(noticias);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.get('/web', async (req,res) => {
  const noticias = await noticiaRepository.getAllNoticias();
  res.render('noticias',{noticias});
})
export { router as routerNoticia}