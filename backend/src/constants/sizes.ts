import { sizeOptions } from '../types/manHole';

export const SMALL_RANGES = [10, 11, 12, 13, 14] as number[];
export const MEDIUM_RANGES = [15, 16, 17, 18, 19] as number[];
export const LARGE_RANGES = [20, 21, 22, 23, 24] as number[];
export const EXTRA_LARGE_RANGES = [25, 26] as number[];

export const SIZES_MAP: sizeOptions = {
    S: SMALL_RANGES,
    M: MEDIUM_RANGES,
    L: LARGE_RANGES,
    XL: EXTRA_LARGE_RANGES
}

export const MIN_RADIO = 10 as number;
