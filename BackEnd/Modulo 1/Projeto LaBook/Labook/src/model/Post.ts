import { TYPE } from "../types/Types";

export default class Post {
    constructor(
        public id: number,
        public photo: string,
        public description: string,
        type: TYPE,
        created_at: string,
        public author: string,
        user_id: string

        
    ) { }
}