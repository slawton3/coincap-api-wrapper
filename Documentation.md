These are examples of how to use the public and private clients.

PublicClient
```
import PublicClient from "./public-client";

let client = new PublicClient();

client.getAsset("bitcoin");

client.getRates();

client.getMarkets();

```



PrivateClient
```
import PrivateClient from "./private-client";

const client = new PrivateClient("test");

client.addAccount("other-user");

client.addAsset("ethereum", "30");

client.switchAccount("other-user");

client.addAsset("ethereum", "30");

client.addAsset("bitcoin", "30");

client.getAccountAssets();
```