import PrivateClient from "../private-client";

describe("test add asset", () => {
    it("should add asset", () => {
        let client = new PrivateClient("test");
        expect(client.addAsset("bitcoin", "10")).toBe("Asset has been added.");
    })
})


describe("test add account already created", () => {
    it("should not add account", () => {
        let client = new PrivateClient("test");
        expect(client.addAccount("test")).toBe("Error, account already exists.");
    })
})

describe("test remove asset", () => {
    it("should remove asset", () => {
        let client = new PrivateClient("test");
        client.addAsset("bitcoin", "10");
        expect(client.removeAsset("bitcoin", "10")).toBe("Asset has been decreased.");
    })
})

describe("test asset value", () => {
    it("should return asset value in USD", async () => {
        let client = new PrivateClient("test");
        let res = await client.getAccountAssetValue("bitcoin");
        expect(res).toContain("Asset value in USD => ");
    })
})

describe("test account value",  () => {
    it("should return account total value", async () => {
        let client = new PrivateClient("test");
        let res = await client.getTotalAccountAssetValue();
        expect(res).toContain("Total account value in USD => ");
    })
})

