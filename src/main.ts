

// import etc, {Account} from "./etc";
import * as etc from "./etc";
console.log(new etc.Account('', 2));


import { Car } from './model/Car';
console.log(new Car(88, 'carxs'));


import * as randomstring from 'randomstring';
console.log(randomstring.generate());


function combine(): string {
    return '' + new etc.Account('', 2) + new Car(88, 'carxs') + randomstring.generate();
}
export {
    combine
}