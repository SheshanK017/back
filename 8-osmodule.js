const { log } = require('console');
const os=require('os')

//info about user
const user=os.userInfo();
console.log(user)

//method returns the system uptime in seconds
console.log(`the systemuptime is ${os.uptime()} seconds`);

const currentos={
    name:os.type(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    release:os.release()
}
console.log(currentos)
