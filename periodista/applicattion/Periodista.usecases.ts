import Periodista from "../domain/Periodista";
import PeriodistaRepository from "../domain/Periodista.repository";

export class PeriodistaUseCases{
    private periodistaRepository: PeriodistaRepository;

    constructor(periodistaRepository: PeriodistaRepository){
        this.periodistaRepository=periodistaRepository;
    }
    async getAllPeriodistas(){
        return await this.periodistaRepository.getAllPeriodistas();
    }
}