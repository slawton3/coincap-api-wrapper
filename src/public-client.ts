import axios from "axios";
import { IAssets, IAsset, IHistory, IAssetMarket, IRates, IRate, IExchange, IExchanges, IMarkets, ICandles } from './types/interfaces';

//wrapper client class
class PublicClient {
    public baseURL: string; //base API URL

    constructor() {
        this.baseURL = "https://api.coincap.io/v2/";
    }

    public async getAllAssets() {
        console.log(this.baseURL);
        try {
            const res: IAssets = await axios.get(`${this.baseURL}assets`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getAsset(asset: string) {
        try {
            const res: IAsset = await axios.get(`${this.baseURL}assets/${asset}`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getAssetHistory(asset: string, interval: string) {
        try {
            const res: IHistory = await axios.get(`${this.baseURL}assets/${asset}?interval=${interval}`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getAssetMarket(asset: string) {
        try {
            const res: IAssetMarket = await axios.get(`${this.baseURL}assets/${asset}/markets`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getRates() {
        try {
            const res: IRates = await axios.get(`${this.baseURL}rates`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getRatesByAsset(asset: string) {
        try {
            const res: IRate = await axios.get(`${this.baseURL}rates/${asset}`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getExchanges() {
        try {
            const res: IExchanges = await axios.get(`${this.baseURL}exchanges`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getExchangeByName(exchange: string) {
        try {
            const res: IExchange = await axios.get(`${this.baseURL}exchanges/${exchange}`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getMarkets() {
        try {
            const res: IMarkets = await axios.get(`${this.baseURL}markets`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    public async getCandles(exchange: string, interval: string, baseId: string, quoteId: string) {
        try {
            const res: ICandles = await axios.get(`${this.baseURL}candles?exchange=${exchange}&interval=${interval}&baseId=${baseId}&quoteId=${quoteId}`)
            console.log(res.data);
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }
}

export default PublicClient;