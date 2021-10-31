"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkers_1 = require("../../utils/checkers");
const generators_1 = require("../../utils/generators");
class ManHoleEntity {
    constructor(radio, material, decoration) {
        this.GUID = (0, generators_1.generateId)();
        this.radio = radio;
        this.material = material;
        this.decoration = decoration;
        this.size = (0, checkers_1.getSize)(radio);
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
exports.default = ManHoleEntity;
//# sourceMappingURL=ManHole.entity.js.map