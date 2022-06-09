"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./connection"));
const moment_1 = __importDefault(require("moment"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
const createUser = (name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.insert({
        id: Date.now().toString(),
        name: name,
        nickname: nickname,
        email: email
    })
        .into("CriarUsuario");
});
app.put("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createUser(req.body.name, req.body.nickname, req.body.email);
        res.status(200).send("Usuário cadastrado com sucesso!");
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield connection_1.default.raw(`
            SELECT * FROM ToDoProjectUser
        `);
        return response[0];
    }
    catch (error) {
        console.log(error.message);
    }
});
app.get("/user/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield getAllUsers();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
const getUserById = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, connection_1.default)("ToDoProjectUser").where('id', UserId);
        if (response) {
            return response[0];
        }
    }
    catch (error) {
        console.log(error);
    }
});
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield getUserById(id);
        res.status(200).send({ Usuário: user });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
const updateUser = (UserId, userName, userNickName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.default)("ToDoProjectUser").update({
            name: userName,
            nickname: userNickName
        })
            .where("id", UserId);
    }
    catch (error) {
        console.log(error);
    }
});
app.post("/user/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.name.length !== 0 && req.body.nickname.length !== 0) {
            const id = req.params.id;
            yield updateUser(id, req.body.name, req.body.nickname);
            res.status(200).send({ message: "Usuário atualizado." });
        }
        else {
            res.status(400).send({ message: "Usuário e nickname precisam ser preenchidos" });
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
const createTask = (title, description, limitDate, creatorUserId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.insert({
        id: Date.now().toString(),
        title: title,
        description: description,
        status: "to_do",
        limit_date: (0, moment_1.default)(limitDate, "DD/MM/YYYY").toDate(),
        user_id: creatorUserId
    })
        .into("ToDoProjectTask");
});
app.put("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.title.length > 0 && req.body.description.length > 0 && req.body.limitDate.length > 0 && req.body.creatorUserId.length > 0) {
            yield createTask(req.body.title, req.body.description, req.body.limitDate, req.body.creatorUserId);
            res.status(200).send("Tarefa cadastrada com sucesso!");
        }
        else {
            res.status(400).send("Todos os campos precisam ser preenchidos!");
        }
    }
    catch (error) {
    }
}));
const getTaskById = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield connection_1.default.raw(`
        SELECT ToDoProjectTask.id as task_id, title, description, limit_date, status,ToDoProjectUser.id as creatorUserId, nickname
        FROM ToDoProjectUser
        JOIN ToDoProjectTask on ToDoProjectUser.id = ToDoProjectTask.user_id
        WHERE ToDoProjectTask.id = "${taskId}";
    `);
    if (response) {
        return {
            taskId: response[0][0].task_id,
            title: response[0][0].title,
            description: response[0][0].description,
            limitDate: (0, moment_1.default)(response[0][0].limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
            status: response[0][0].status,
            creatorUserId: response[0][0].creatorUserId,
            creatorUserNickname: response[0][0].nickname
        };
    }
});
const getTaskByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield connection_1.default.raw(`
        SELECT ToDoProjectTask.id as taskId, title, description, ToDoProjectTask.limit_date as limitDate, ToDoProjectTask.user_id as creatorUserId, status, nickname as creatoUserNickname
        FROM ToDoProjectUser
        JOIN ToDoProjectTask ON ToDoProjectUser.id = ToDoProjectTask.user_id
        WHERE ToDoProjectUser.id = "${userId}";
    `);
    return response[0].map((task) => {
        return {
            taskId: task.taskId,
            title: task.title,
            description: task.description,
            limitDate: (0, moment_1.default)(task.limitDate, "YYYY-MM-DD").format("DD/MM/YYYY"),
            creatorUserId: task.creatorUserId,
            status: task.status,
            creatorUserNickname: task.creatoUserNickname
        };
    });
});
app.get("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.creatorUserId;
        const response = yield getTaskByUserId(userId);
        res.status(200).send({ Tarefas: response });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
const getUser = (nickname) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield connection_1.default.raw(`
        SELECT id, nickname
        FROM ToDoProjectUser
        WHERE name LIKE "%${nickname}%" OR nickname LIKE "%${nickname}%";
    `);
    return {
        users: response[0].map((user) => {
            return {
                id: user.id,
                nickname: user.nickname
            };
        })
    };
});
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.query;
        if (query.length > 0) {
            const response = yield getUser(query);
            res.status(200).send(response);
        }
        else {
            res.status(400).send({ message: "Informe algum parâmetro para busca." });
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
const designateResponsible = (taskId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.default)("ToDoProjectResponsibleTaskUser")
        .insert({
        task_id: taskId,
        user_id: userId
    });
});
//# sourceMappingURL=index.js.map