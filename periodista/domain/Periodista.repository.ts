import Periodista from "./Periodista";

export default interface PeriodistaRepository{
    getAllPeriodistas(): Promise<Periodista[] | undefined>;
}