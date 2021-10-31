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
const manHole_json_1 = __importDefault(require("../../mongo/manHoleApp/manHole.json"));
const mongoConf_1 = require("../constants/mongoConf");
const ManHole_entity_1 = __importDefault(require("../core/entities/ManHole.entity"));
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const getConnectionOrDefault = (db, collectionName = mongoConf_1.MONGO_CONF.DEFAULT_COLLECTION) => {
    return db.collection(collectionName);
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
        return manHole.toJSON();
        ;
    }
    saveOnDB(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const manHoleCollection = yield this.getCollection();
            yield manHoleCollection.insertOne(obj);
        });
    }
    clearDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const manHoleCollection = yield this.getCollection();
            yield manHoleCollection.deleteMany({});
        });
    }
    seedDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const manHoleCollection = yield this.getCollection();
            yield manHoleCollection.insertMany(manHole_json_1.default);
        });
    }
    getCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                this.client = yield mongodb_1.MongoClient.connect(mongoConf_1.MONGO_CONF.MONGO_URL, mongodbOptions);
            }
            this.db = this.client.db(mongoConf_1.MONGO_CONF.DEFAULT_DATABASE);
            return getConnectionOrDefault(this.db);
        });
    }
}
exports.default = ManHoleMongo;
//# sourceMappingURL=manHoleMongo.source.js.map