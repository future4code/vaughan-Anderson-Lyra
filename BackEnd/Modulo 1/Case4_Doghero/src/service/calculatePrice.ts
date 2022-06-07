import { DogHeroWalkingDTO } from '../model/DogHeroWalkingDTO';

export class calculatePrice {

    public calculation = async (duration: Number, numberOfPets: any): Promise<any> => {
        if (duration === 30) {
            (numberOfPets === 1)
            {
                return 25
            } else {
                return 25 + 15 * (numberOfPets - 1)
            }
        } else if (duration === 60) {
            (numberOfPets === 1)
            {
                return 35
            } else {
            return 35 + 20 * (numberOfPets - 1)
        }
    };
}
}



