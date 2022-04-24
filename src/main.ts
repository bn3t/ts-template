import { helloWorld, helloWorldAsync } from ".";

console.log(helloWorld());

helloWorldAsync().then(console.log);
