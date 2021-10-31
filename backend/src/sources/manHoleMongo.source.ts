import { Db, MongoClient, MongoOptions } from 'mongodb';
import mockManHole from '../../mongo/manHoleApp/manHole.json';
import { MONGO_CONF } from '../constants/mongoConf';
import ManHole from '../core/entities/ManHole.entity';
import ManHoleInterface from '../core/interfaces/ManHole.interface';
import ManHoleRepository from '../core/repositories/manHole.repository';
import { Materials } from '../types/manHole';

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as unknown as MongoOptions

const getConnectionOrDefault = (db: Db, collectionName = MONGO_CONF.DEFAULT_COLLECTION) => {
    return db.collection(collectionName);
}

export default class ManHoleMongo implements ManHoleRepository {
    client: MongoClient;
    db: Db;

    public async getByGUID(id: string): Promise<ManHoleInterface> {
        const collection = await this.getCollection();
        const manHole = await collection.findOne({ id });

        return manHole as ManHoleInterface;
    }

    public create(radio: number, material: Materials, decoration: boolean) {
        const manHole = new ManHole(radio, material, decoration);

        return manHole.toJSON();;
    }

    public async saveOnDB(obj: ManHoleInterface) {
        const manHoleCollection = await this.getCollection();
        await manHoleCollection.insertOne(obj);
    }

    public async clearDB() {
        const manHoleCollection = await this.getCollection();
        await manHoleCollection.deleteMany({});
    }

    public async seedDB() {
        const manHoleCollection = await this.getCollection();
        await manHoleCollection.insertMany(mockManHole);
    }

    public async getCollection() {
        if (!this.client) {
            this.client = await MongoClient.connect(MONGO_CONF.MONGO_URL, mongodbOptions);
        }
        this.db = this.client.db(MONGO_CONF.DEFAULT_DATABASE);

        return getConnectionOrDefault(this.db);
    }
}
