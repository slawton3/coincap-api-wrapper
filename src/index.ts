import PrivateClient from "./private-client";

const client = new PrivateClient("test");

client.addAccount("other-user");

client.addAsset("ethereum", "30");

client.switchAccount("other-user");

client.addAsset("ethereum", "30");

client.addAsset("bitcoin", "30");

client.getAccountAssets();