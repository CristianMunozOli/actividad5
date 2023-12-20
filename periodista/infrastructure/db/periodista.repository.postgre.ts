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
            const periodistaFromDatabase : Periodista = await executeQuery(sql);
            return periodistaFromDatabase;
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
    async deletePeriodista(id: number): Promise<Periodista> | undefined {
        throw new Error("Method not implemented.");
    }
}