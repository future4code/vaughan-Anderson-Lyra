import { WalkInputDTO } from "../model/DogHeroWalking";
import { InputError } from "../error/BaseError";
import moment from "moment";
import { NotFoundError } from "../error/BaseError";
import { IdGenerator } from '../service/IdGenerator';
import { DogHeroDatabase } from './../data/DogHeroDatabase';

export class DogHeroBusiness {

    
    async createWalk(walk: WalkInputDTO) {


        if(!walk.dateWalk || !walk.startWalk || !walk.time || !walk.latitude || !walk.longitude || !walk.quantityDogs || !walk.idTutor){
            throw new InputError("Preencha todos os campos para registro do walk.")
        }

        const dateDiff= moment(walk.dateWalk, 'DD/MM/YYYY').add(1, 'days').unix() - moment().unix()

        if(dateDiff < 0){
            throw new Error("'dateWalk' não pode ser ser anterior a data atual!")
        }

        if(walk.time === '30' || walk.time === '60'){

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();
    
            if(walk.time <= "30"){
                 const price = 25 + (walk.quantityDogs - 1) * 15
    
                const walkDatabase = new DogHeroDatabase();
                await walkDatabase.createWalk(id, walk.dateWalk, walk.startWalk, walk.finishWalk, walk.time, walk.latitude, walk.longitude, walk.quantityDogs, walk.idTutor, price);
                
            } else{
                const price = 35 + (walk.quantityDogs - 1) * 20
                const walkDatabase = new DogHeroDatabase();
                await walkDatabase.createWalk(id, walk.dateWalk, walk.startWalk, walk.finishWalk, walk.time, walk.latitude, walk.longitude, walk.quantityDogs, walk.idTutor, price);
            }
        }else{
            throw new Error("O tempo (time) de duração do passeio é de 30min ou 60min")
        }

    }

    async getWalkScheduled(index: any, offset: number){


        const wbd = new DogHeroDatabase();
        const result = wbd.getWalkByDate(index, offset);
        
        return result
    }

    

    async getShowWalk(id: string){

        if(!id){
            throw new NotFoundError("Not found")
        }

        const wbd = new DogHeroDatabase();
        const result = await wbd.getShowWalk(id);
       
        return result

    }

    async getWalkByTutor(idTutor: string){

        if(!idTutor){
            throw new NotFoundError("Não há passeios marcados por esse tutor")
        }

        const wbd = new DogHeroDatabase();
        const result = await wbd.getWalkByTutor(idTutor);

        return result
    }
   
}