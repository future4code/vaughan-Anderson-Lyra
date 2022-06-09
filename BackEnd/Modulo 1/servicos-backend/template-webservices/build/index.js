"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app_1.default.post('/users/signup', createUser_1.default);
