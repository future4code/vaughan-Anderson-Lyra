"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
];
//a) GET
//b) 
app.get('/users', (req, res) => {
    res.status(200).send(users);
});
app.get('/users', (req, res) => {
    let codeError = 400;
    try {
        const name = req.query.name;
        const user = users.find((user) => user.name === name);
        if (!user) {
            codeError = 404;
            throw new Error('User not found');
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address();
            console.log(`Server is running in http://localhost: ${address.port}`);
        }
        else {
            console.error(`Failure upon starting server.`);
        }
    });
});
