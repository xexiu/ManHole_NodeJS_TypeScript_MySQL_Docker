"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manHoleMongo_source_1 = __importDefault(require("../../sources/manHoleMongo.source"));
const saveManholeCover_interactor_1 = __importDefault(require("../interactors/saveManholeCover.interactor"));
const manholeRepository = new manHoleMongo_source_1.default();
console.log('Mongo', manholeRepository);
exports.default = (0, saveManholeCover_interactor_1.default)(manholeRepository);
//# sourceMappingURL=index.js.map