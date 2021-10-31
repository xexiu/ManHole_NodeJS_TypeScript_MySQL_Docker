import { Materials } from '../../types/manHole';
import ManHoleInterface from '../interfaces/ManHole.interface';

export default interface ManHoleRepository {
    getByGUID(id: string): Promise<ManHoleInterface>;
    create(radio: number, material: Materials, decoration: boolean): ManHoleInterface;
    saveOnDB(obj: ManHoleInterface): void;
    clearDB(): void;
    seedDB(): void;
}
