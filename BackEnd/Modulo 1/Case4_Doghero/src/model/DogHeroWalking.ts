

export class DogHeroWalking {
    constructor(
        private id: string,
        private status: string,
        private dateShedule: Date,
        private price: number,
        private latitude: string,
        private longitude: string,
        private numberOfPets: number,
        private duration: number,
        private startTime: string,
        private endTime: string
        
    ) { }
        
public getId(): string {
    return this.id;
}

    public getStatus(): string {
        return this.status;
    }

    public getDateShedule(): Date {
        return this.dateShedule;
    }

    public getPrice(): number {
        return this.price;
    }

    public getLatitude(): string {
        return this.latitude;
    }

    public getLongitude(): string {
        return this.longitude;
    }

    public getNumberOfPets(): number {
        return this.numberOfPets;
    }

    public getDuration(): number {
        return this.duration;
    }

    public getStartTime(): string {
        return this.startTime;
    }

    public getEndTime(): string {
        return this.endTime;
    }

}

export interface DogHeroWalkingDTO {
    id: string;
    duration: number;
    latitude: string;
    longitude: string;
    numberOfPets: number;
    startTime: string;
    endTime: string;
}