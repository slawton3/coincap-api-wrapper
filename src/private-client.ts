import PublicClient from "./public-client";
import { IAccounts, IAccount } from "./types/interfaces";
const fs = require('fs');


class PrivateClient extends PublicClient {
    
    public username: string;
    public accountsObj: IAccounts;
    public account: IAccount;
    private formatter: any;

    constructor(username: string) {
        super();
        this.username = username;
        if(!fs.existsSync('db.json')){
            let accountsObj: IAccounts = { "accounts": [] };
            let account: IAccount = {"username": username, "assets": []};
            accountsObj.accounts.push(account);
            this.writeToFile(accountsObj);
            this.accountsObj = this.getAccountsObject();
            this.account = account;
        }
        else {
            this.accountsObj = this.getAccountsObject();
            let account: any = this.getAccount(this.username);
            this.account = account;
        }
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
        
    }

    private getAccount(username: string) {
        for(let i of this.accountsObj["accounts"]) {
            if(i.username === username){
                return i;
            }
        }        
    }

    private getAccountsObject(): IAccounts {
        const account = fs.readFileSync('db.json', 'utf-8',  (err: any, data: any) => {
            if(err) {
                console.log(err);
            }
            const parsedJson = JSON.parse(data);
            return parsedJson;
        })

        return JSON.parse(account);
    }

    private writeToFile(obj: IAccounts) {
        fs.writeFileSync('db.json', JSON.stringify(obj), (err: any) => {
            if(err){
                console.log(err);
            }
            else{
                console.log("File updated.");
            }
        })
    }

    public addAccount(username: string) {
        const account = this.getAccount(username);
        if(account == null) {
            this.accountsObj.accounts.push({"username": username, "assets": []});
            this.writeToFile(this.accountsObj);
        }
        else{
            console.log("Error, account already exists.");
            return "Error, account already exists.";
        }
    }

    public switchAccount(username: string){
        let account: any = this.getAccount(username);
        this.account = account;
    }

    public getAccountAssets() {
        return this.account.assets;
    }

    public getAssetBalance(asset: string) {
        if(this.account.assets != null) {
            for(let i = 0; i < this.account.assets?.length; i++) {
                if(this.account.assets[i].asset_id === asset){
                    return {"balance": this.account.assets[i].balance, "index": i};
                }
            }
        }
        return null;
    }

    public addAsset(asset: string, balance: string) {
        let tempBalance = this.getAssetBalance(asset);
        if(tempBalance == null){
            for(let i = 0; i < this.accountsObj.accounts.length; i++) {
                if(this.accountsObj.accounts[i].username === this.account.username){
                    this.accountsObj.accounts[i].assets.push({ "asset_id": asset, "balance": balance });
                    this.writeToFile(this.accountsObj);
                    return "Asset has been added.";
                }
            }
        }
        else{
            for(let i = 0; i < this.accountsObj.accounts.length; i++) {
                if(this.accountsObj.accounts[i].username === this.account.username){
                    let newBal = parseInt(tempBalance.balance) + parseInt(balance);
                    let idx = tempBalance.index
                    this.accountsObj.accounts[i].assets[idx].balance = newBal.toString();
                    this.writeToFile(this.accountsObj);
                    console.log("Asset has been added.");
                    return "Asset has been added.";
                }
            }
        }
    }

    public removeAsset(asset: string, balance: string) {
        let tempBalance = this.getAssetBalance(asset);
        let obj: any = this.accountsObj;
        
        if(tempBalance == null){
            console.log("You have no assets that match => ", asset);
            return "You have no assets that match => " + asset;
        }
        else{
            for(let i = 0; i < this.accountsObj.accounts.length; i++) {
                if(this.accountsObj.accounts[i] === this.account){
                    let newBal = parseInt(tempBalance.balance) - parseInt(balance);
                    if(newBal < 0){
                        newBal = 0;
                    }
                    let idx = tempBalance.index
                    this.accountsObj.accounts[i].assets[idx].balance = newBal.toString();
                    this.writeToFile(this.accountsObj);
                    console.log("Asset has been decreased.");
                    return "Asset has been decreased.";
                }
            }
        }
    }

    public async getAccountAssetValue(asset: string) {
        for(let i = 0; i < this.account.assets.length; i++) {
            if(this.account.assets[i].asset_id === asset){
                let balance: any = this.account.assets[i].balance;
                let res: any = this.getRatesByAsset(asset);
                let rate: any = (await res).data.rateUsd;
                let value: any = parseInt(balance) * parseInt(rate);
                console.log("Asset value in USD => ", this.formatter.format(value));
                return "Asset value in USD => " + this.formatter.format(value);
            }
        }
    }

    public async getTotalAccountAssetValue() {
        var value: any = 0;
        for(let i = 0; i < this.account.assets.length; i++) {
            let balance: any = this.account.assets[i].balance;
            let asset: any = this.account.assets[i].asset_id;
            let res: any = this.getRatesByAsset(asset);
            let rate: any = (await res).data.rateUsd;
            value += parseInt(balance) * parseInt(rate);
        }
        console.log("Total account value in USD => ", this.formatter.format(value));
        return "Total account value in USD => " + this.formatter.format(value);
    }
}

export default PrivateClient;