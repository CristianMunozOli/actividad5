import express, { Request, Response} from 'express';
import PeriodistaRepositoryPostgre from '../../infrastructure/db/periodista.repository.postgre';
import PeriodistaRepository from '../../domain/Periodista.repository';

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

export { router as routerPeriodista}