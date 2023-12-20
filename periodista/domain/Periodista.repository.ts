import Periodista from "./Periodista";

export default interface PeriodistaRepository{
    findAll(): Promise<Periodista[] | undefined>;
    getPeriodistaById(id:number):Promise<Periodista | undefined>;
    postPeriodista(periodista:Periodista): Promise<Periodista|undefined>;
    updatePeriodista(id:number,periodista:Periodista): Promise<Periodista|undefined>;
    deletePeriodista(id:number): Promise<Periodista>|undefined;
}