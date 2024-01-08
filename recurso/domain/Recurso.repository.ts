import Recurso from "./Recurso";

export default interface RecursoRepository{
    getRecursoById(id:number):Promise<Recurso | undefined>;
    deleteRecurso(id:number): Promise<Boolean|undefined>;
}