import express, { Request, Response} from 'express';
import PeriodistaRepositoryPostgre from '../../infrastructure/db/periodista.repository.postgre';
import PeriodistaRepository from '../../domain/Periodista.repository';
import Periodista from '../../domain/Periodista';
import { PeriodistaUseCases } from '../../applicattion/Periodista.usecases';
import NoticiaRepositoryMongo from '../../../noticia/infrastructure/db/Noticia.repository.mongo';

const router = express.Router();
//const periodistaRepository:PeriodistaRepository = new PeriodistaRepositoryPostgre();
const periodistaUseCases : PeriodistaUseCases = new PeriodistaUseCases(new PeriodistaRepositoryPostgre(), new NoticiaRepositoryMongo());

router.get('/periodista/', async(req: Request, res: Response) =>{
    try {
        const periodistas = await periodistaUseCases.findAll();
        res.send(periodistas);
    } catch (error) {
        res.send(error);
    }
});

router.get('/periodista/:id', async(req: Request, res: Response) =>{
    try {
        const id = parseInt(req.params.id);
        const periodista = await periodistaUseCases.getPeriodistaById(id);
        if (periodista) {
            res.send(periodista);
        }else {
            res.status(404).json({ error: "Periodista not found" });
        }  
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post('/periodista/',async (req, res) => {
    try {
        const periodista:Periodista = req.body;
        const periodistaCreado = await periodistaUseCases.postPeriodista(periodista);
        res.json(periodistaCreado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.put('/periodista/:id',async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const periodista:Periodista = req.body;
        const periodistaActualizado = await periodistaUseCases.updatePeriodista(id,periodista);
        res.json(periodistaActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.delete('/periodista/:id',async(req, res) => {
    try{
        const id = parseInt(req.params.id);
        
        res.json(await periodistaUseCases.deletePeriodista(id));
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
export { router as routerPeriodista}