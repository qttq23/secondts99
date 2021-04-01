"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
// import etc, {Account} from "./etc";
var etc = require("./etc");
console.log(new etc.Account('', 2));
var Car_1 = require("./model/Car");
console.log(new Car_1.Car(88, 'carxs'));
var randomstring = require("randomstring");
console.log(randomstring.generate());
function combine() {
    return '' + new etc.Account('', 2) + new Car_1.Car(88, 'carxs') + randomstring.generate();
}
exports.combine = combine;
