import { BaseDatabase } from "./BaseDatabase";
import { DogHeroWalking } from "../model/DogHeroWalking";

export class DogHeroDatabase extends BaseDatabase {

    protected tableName: string = "DOGHERO";

    private toDogHeroWalking(dbModel?: any): DogHeroWalking | undefined {
        return dbModel && new DogHeroWalking(
            dbModel.id,
            dbModel.status,
            dbModel.dateShedule,
            dbModel.price,
            dbModel.latitude,
            dbModel.longitude,
            dbModel.numberOfPets,
            dbModel.duration,
            dbModel.startTime,
            dbModel.endTime
        );
    }

    public async create(walking: DogHeroWalking): Promise<void> {
        await BaseDatabase.connection.raw(`
            INSERT INTO ${this.tableName} (
                id,
                status,
                date_shedule,
                price,
                latitude,
                longitude,
                number_of_pets,
                duration,
                start_time,
                end_time
            ) VALUES (
                '${walking.getId()}',
                '${walking.getStatus()}',
                '${walking.getDateShedule()}',
                '${walking.getPrice()}',
                '${walking.getLatitude()}',
                '${walking.getLongitude()}',
                '${walking.getNumberOfPets()}',
                '${walking.getDuration()}',
                '${walking.getStartTime()}',
                '${walking.getEndTime()}'
            );
        `);
    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
    }
}



