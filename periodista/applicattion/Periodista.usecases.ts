import Periodista from "../domain/Periodista";
import PeriodistaRepository from "../domain/Periodista.repository";

export class PeriodistaUseCases{
    private periodistaRepository: PeriodistaRepository;

    constructor(periodistaRepository: PeriodistaRepository){
        this.periodistaRepository=periodistaRepository;
    }
    async findAll(){
        return await this.periodistaRepository.findAll();
    } 
    async getPeriodistaById(id: number) {
        return await this.periodistaRepository.getPeriodistaById(id);
  }
  async postPeriodista(periodista:Periodista){
    return await this.periodistaRepository.postPeriodista(periodista);
  }
  async updatePeriodista(id:number,periodista:Periodista){
    return await this.periodistaRepository.updatePeriodista(id,periodista);
  }
  async deletePeriodista(id:number){
    return await this.periodistaRepository.deletePeriodista(id);
  }
}