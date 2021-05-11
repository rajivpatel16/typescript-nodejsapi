"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = express_1.default();
const origin = {
    // origin: isProduction ? 'https://dddforum.com' : '*',
    origin: "*"
};
console.log(UserRoutes_1.default);
app.use(UserRoutes_1.default);
app.use(body_parser_1.default.json());
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors(origin))
//app.use(helmet())
app.listen(5000, () => console.log("Server start"));
