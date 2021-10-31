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
const mongodb_1 = require("mongodb");
const ManHole_entity_1 = __importDefault(require("../core/entities/ManHole.entity"));
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
class ManHoleMongo {
    getByGUID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.getCollection();
            const manHole = yield collection.findOne({ id });
            return manHole;
        });
    }
    create(radio, material, decoration) {
        const manHole = new ManHole_entity_1.default(radio, material, decoration);
        return manHole;
    }
    /// COllection per request
    getCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://localhost:27017';
            if (!this.client) {
                this.client = yield mongodb_1.MongoClient.connect(url, mongodbOptions);
            }
            const db = this.client.db('manHoleApp');
            return db.collection('manHole');
        });
    }
}
exports.default = ManHoleMongo;
//# sourceMappingURL=manHoleMongo.source.js.map