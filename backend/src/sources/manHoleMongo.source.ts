import { MongoClient, MongoOptions } from 'mongodb';
import ManHole from '../core/entities/ManHole.entity';
import ManHoleInterface from '../core/interfaces/ManHole.interface';
import ManHoleRepository from '../core/repositories/manHole.repository';
import { Materials } from '../types/manHole';

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as unknown as MongoOptions

class ManHoleMongo implements ManHoleRepository {
    public async getByGUID(id: string): Promise<ManHoleInterface> {
        const collection = await this.getCollection();
        const manHole = await collection.findOne({ id });

        return manHole as ManHoleInterface;
    }

    public async create(radio: number, material: Materials, decoration: boolean): Promise<ManHoleInterface> {
        const manHole = new ManHole(radio, material, decoration);

        return manHole;
    }

    /// COllection per request
    private async getCollection() {
        const url = 'mongodb://localhost:27017';
        const client = await MongoClient.connect(url, mongodbOptions);

        const db = client.db('manHoleApp');
        return db.collection('manHole');
    }
}

export default ManHoleMongo;
