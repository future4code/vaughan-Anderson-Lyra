import { character, GENDER, movie2 } from "./types";


export let moveis: movie2[] = [
    {
        id: 1,
        title: "Avengers: Endgame",
        year: 2019
    },
    {
        id: 2,
        title: "X-men: O filme",
        year: 2000
    },
    {
        id: 3,
        title: "Deadpool",
        year: 2016
    }
]



export let characters: character[] = [
    {
        id: 1,
        name: "Storm",
        gender: GENDER.FAMALE

    },
    {
        id: 3,
        name: "Deadpool",
        gender: GENDER.OTHER,
        description: "Sexy motherf***"

    },
    {
        id: 2,
        name: "Colossus",
        gender: GENDER.MALE

    }
]
