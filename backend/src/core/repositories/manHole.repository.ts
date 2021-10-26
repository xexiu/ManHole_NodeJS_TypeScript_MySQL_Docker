import ManHole from '../interfaces/ManHole.interface';
import { Materials } from '../../types/manHole';

interface ManHoleRepository {
    getByGUID?(id: string): Promise<ManHole>;
    create?(radio: number, material: Materials, decoration: boolean): ManHole;
}
export default ManHoleRepository;
