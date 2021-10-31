import { Materials, Sizes } from '../../types/manHole';
import { getSize } from '../../utils/checkers';
import { generateId } from '../../utils/generators';
import ManHoleInterface from '../interfaces/ManHole.interface';


export default class ManHoleEntity implements ManHoleInterface {
    GUID?: number;
    radio: number;
    material: Materials;
    decoration: boolean;
    size?: Sizes

    constructor(radio: number, material: Materials, decoration: boolean) {
        this.GUID = generateId();
        this.radio = radio;
        this.material = material;
        this.decoration = decoration;
        this.size = getSize(radio) as Sizes;
    }

    toJSON() {
        return {
            GUID: this.GUID,
            radio: this.radio,
            material: this.material,
            decoration: this.decoration,
            size: this.size
        };
    }
}
