"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const BuildManholeCover_controller_1 = __importDefault(require("./src/controllers/BuildManholeCover.controller"));
const PORT = 8080;
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
// tslint:disable-next-line: no-console
app.get('/api/manhole_cover/build', BuildManholeCover_controller_1.default);
// tslint:disable-next-line: only-arrow-functions
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map