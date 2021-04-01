"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, id) {
        this.tname = name;
        this.tid = id;
    }
    return Account;
}());
exports.Account = Account;
function doSth(myu) {
    return new Account('', 2);
}
doSth(new Account('bui', 32));
var x = new Account('', 2);
x.tid = 20;
// x.tname = null;
var a1 = ["23", "4554"];
function help() {
    return 'this is help';
}
exports.help = help;
// export default Account;
