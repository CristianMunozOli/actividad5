import Periodista from "../../domain/Periodista";
import PeriodistaRepository from "../../domain/Periodista.repository";
import executeQuery from "../../../context/postgres.connector";
import { collections } from "../../../context/MongoConnection";

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
    async getPeriodistaById(id: number): Promise<Periodista | undefined> {
        const sql = `select * from periodistas where id=${id}`;
        try {
            const periodistaFromDatabase : any[] = await executeQuery(sql);
            const periodistaData: any = periodistaFromDatabase[0];
            const periodista: Periodista = {
                id: periodistaData.id,
                nombre: periodistaData.nombre,
                fechaNacimiento: periodistaData.fechanacimiento,
            }
            console.log(periodista);
            return periodista;
        } catch (error) {
            console.error(error);
            return ;
        }
    }
    async postPeriodista(periodista: Periodista): Promise<Periodista | undefined> {
       const sql = `insert into periodistas (nombre, fechanacimiento) VALUES ('${periodista.nombre}','${periodista.fechaNacimiento}')`
       try {
        if(periodista.nombre && periodista.fechaNacimiento)
            await executeQuery(sql);
       } catch (error) {
        console.error(error);
       }
       return periodista;
    }
    async updatePeriodista(id: number, periodista: Periodista): Promise<Periodista | undefined> {
        const sql=`update periodistas set nombre='${periodista.nombre}',fechanacimiento='${periodista.fechaNacimiento}' where id=${id}`;
        try {
                await executeQuery(sql);
           } catch (error) {
            console.error(error);
           }
           return periodista;
    }
    async deletePeriodista(id: number): Promise<Boolean | undefined> {
        const sql=`delete from periodistas where id=${id}`;
        try {
            await executeQuery(sql);
            return true;
            
        } catch (error) {
            console.error(error);
            return false;
        }
        
    }
}