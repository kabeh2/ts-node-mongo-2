"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
const port = process.env.PORT;
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.static("public"));
server.listen(port, () => console.log(`Server is listening on port ${port}...`));
