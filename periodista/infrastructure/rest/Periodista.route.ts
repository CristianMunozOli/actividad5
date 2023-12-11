import express, { Request, Response} from 'express';
import Periodista from '../../domain/Periodista';
import PeriodistaRepositoryPostgre from '../../infrastructure/db/periodista.repository.postgre';

const router = express.Router();
const periodistaRepository = new PeriodistaRepositoryPostgre();

router.get('/', async(req: Request, res: Response) =>{
    try {
        const periodistas = await periodistaRepository.findAll();
        res.send(periodistas);
    } catch (error) {
        res.send(error);
    }
});

export { router as routerPeriodista}