"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.getSizeRangeForRadio = void 0;
const sizes_1 = require("../constants/sizes");
function getSizeRangeForRadio(radio) {
    return Object.values(sizes_1.SIZES_MAP).map(sizes => sizes.indexOf(radio)).findIndex(size => size > -1);
}
exports.getSizeRangeForRadio = getSizeRangeForRadio;
function getSize(radio) {
    if (radio < sizes_1.MIN_RADIO) {
        throw Error('It is not possible to build manhole covers with radio less than 10');
    }
    const size = getSizeRangeForRadio(radio);
    return Object.keys(sizes_1.SIZES_MAP)[size];
}
exports.getSize = getSize;
//# sourceMappingURL=checkers.js.map