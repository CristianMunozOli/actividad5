import RecursoRepository from "../domain/Recurso.repository";

export class RecursoUseCases{
    private recursoRepository: RecursoRepository;

    constructor(recursoRepository: RecursoRepository){
        this.recursoRepository=recursoRepository;
    }
    async getRecursoById(id: number) {
        return await this.recursoRepository.getRecursoById(id);
  }

  async deleteRecurso(id:number){
    return await this.recursoRepository.deleteRecurso(id);
  }
}