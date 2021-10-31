import { Materials, Sizes } from '../../types/manHole';

export default interface ManHoleInterface {
    GUID?: number,
    radio: number,
    material: Materials,
    decoration: boolean,
    size?: Sizes
}
