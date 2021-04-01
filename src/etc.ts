interface User {
    tname: string;
    tid: number;
}

class Account {
    tname: string;
    tid: number;

    constructor(name: string, id: number) {
        this.tname = name;
        this.tid = id;
    }
}

function doSth(myu: User): Account {


    return new Account('', 2);
}
doSth(new Account('bui', 32));

let x = new Account('', 2);
x.tid = 20;
// x.tname = null;


let a1: Array<string> = ["23", "4554"];

 
function help(): string{
    return 'this is help';
}


export {Account, help};
// export default Account;
