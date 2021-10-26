import { Materials, Sizes } from '../../types/manHole';
import ManHoleInterface from '../interfaces/ManHole.interface';


export default class ManHoleEntity implements ManHoleInterface {
    GUID: number;
    radio: number;
    material: Materials;
    decoration: boolean;
    size: Sizes

    constructor(radio: number, material: Materials, decoration: boolean) {
        this.radio = radio;
        this.material = material;
        this.decoration = decoration;
    }
}
