import Periodista from "./Periodista";

export default interface PeriodistaRepository{
    findAll(): Promise<Periodista[] | undefined>;
}