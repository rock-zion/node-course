const OS = require("os");

// info about current user
const user = OS.userInfo();
console.log(user);

// get system uptime in seconds
console.log(`the system uptime is ${OS.uptime()} seconds`);
const currentOS = {
  name: OS.type(),
  release: OS.release(),
  totalMemory: OS.totalmem(),
  freeMemory: OS.freemem(),
};

console.log(currentOS);
