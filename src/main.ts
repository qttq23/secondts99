

// import etc, {Account} from "./etc";
import * as etc from "./etc";
console.log(new etc.Account('', 2));


import {Car} from './model/Car';
console.log(new Car(88, 'carxs'));


import * as randomstring from 'randomstring';
console.log(randomstring.generate());