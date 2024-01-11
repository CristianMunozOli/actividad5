import { error } from "console";
import NoticiaRepository from "../../noticia/dominio/Noticia.repository";
import Periodista from "../domain/Periodista";
import PeriodistaRepository from "../domain/Periodista.repository";

export class PeriodistaUseCases{
    private periodistaRepository: PeriodistaRepository;
    private noticiaRepository: NoticiaRepository;

    constructor(periodistaRepository: PeriodistaRepository,noticiaRepository: NoticiaRepository){
        this.periodistaRepository=periodistaRepository;
        this.noticiaRepository=noticiaRepository;
    }
    async findAll(){
        return await this.periodistaRepository.findAll();
    } 
    async getPeriodistaById(id: number) {
      try{
      const noticias = await this.noticiaRepository.getNoticiaByPeriodistaID(id);
      const periodista= await this.periodistaRepository.getPeriodistaById(id);
      if(periodista && noticias){
          periodista.noticias=noticias;
        }
      
      return periodista;
      }catch(error){
        return;
      }
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