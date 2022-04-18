import PrivateClient from "./private-client";

const client = new PrivateClient("test");

console.log(client.addAccount("other-user"));

console.log(client.addAsset("ethereum", "30"));

console.log(client.switchAccount("other-user"));

console.log(client.addAsset("ethereum", "30"));

console.log(client.addAsset("bitcoin", "30"));

console.log(client.getAccountAssets());