import { MIN_RADIO, SIZES_MAP } from '../constants/sizes';

export function getSizeRangeForRadio(radio: number) {
    return Object.values(SIZES_MAP).map(sizes => sizes.indexOf(radio)).findIndex(size => size > -1);
}

export function getSize(radio: number): string {
    if (radio < MIN_RADIO) {
        throw Error('It is not possible to build manhole covers with radio less than 10');
    }
    const size = getSizeRangeForRadio(radio);

    return Object.keys(SIZES_MAP)[size];
}
