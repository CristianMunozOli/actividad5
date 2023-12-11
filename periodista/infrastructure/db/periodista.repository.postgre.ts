import Periodista from "../../domain/Periodista";
import PeriodistaRepository from "../../domain/Periodista.repository";
import executeQuery from "../../../context/postgres.connector";

export default class PeriodistaRepositoryPostgre implements PeriodistaRepository{
    async findAll(): Promise<Periodista[]>{
        const sql = 'select * from periodistas';
        try {
            const periodistasFromDatabase : Periodista[] = await executeQuery(sql);
            return periodistasFromDatabase;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

}