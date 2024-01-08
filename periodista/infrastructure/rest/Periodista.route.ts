import express, { Request, Response} from 'express';
import PeriodistaRepositoryPostgre from '../../infrastructure/db/periodista.repository.postgre';
import PeriodistaRepository from '../../domain/Periodista.repository';
import Periodista from '../../domain/Periodista';

const router = express.Router();
const periodistaRepository:PeriodistaRepository = new PeriodistaRepositoryPostgre();

router.get('/', async(req: Request, res: Response) =>{
    try {
        const periodistas = await periodistaRepository.findAll();
        res.send(periodistas);
    } catch (error) {
        res.send(error);
    }
});

router.get('/:id', async(req: Request, res: Response) =>{
    try {
        const id = parseInt(req.params.id);
        const periodista = await periodistaRepository.getPeriodistaById(id);
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

router.post('/',async (req, res) => {
    try {
        const periodista:Periodista = req.body;
        const periodistaCreado = await periodistaRepository.postPeriodista(periodista);
        res.json(periodistaCreado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.put('/:id',async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const periodista:Periodista = req.body;
        const periodistaActualizado = await periodistaRepository.updatePeriodista(id,periodista);
        res.json(periodistaActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.delete('/:id',async(req, res) => {
    try{
        const id = parseInt(req.params.id);
        
        res.json(await periodistaRepository.deletePeriodista(id));
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
export { router as routerPeriodista}