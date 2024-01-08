import executeQuery from "../../../context/postgres.connector";
import Recurso from "../../domain/Recurso";
import RecursoRepository from "../../domain/Recurso.repository";

export default class RecursoRepositoryPostgree implements RecursoRepository{
    async getRecursoById(id: number): Promise<Recurso | undefined> {
        const sql=`select * from recurso where id=${id}`;
        try {
            const recursoFromDatabase : Recurso = await executeQuery(sql);
            return recursoFromDatabase;
        } catch (error) {
            console.error(error);
            return ;
        }
    }
    async deleteRecurso(id: number): Promise<Boolean | undefined> {
        throw new Error("Method not implemented.");
    }

}