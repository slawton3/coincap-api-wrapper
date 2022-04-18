export interface IAssets {
    data: [
      {
        id: string;
        rank: string;
        symbol: string;
        name: string;
        supply: string;
        maxSupply: string;
        marketCapUsd: string;
        volumeUsd24Hr: string;
        priceUsd: string;
        changePercent24Hr: string;
        vwap24Hr: string;
      }
    ];
    timestamp: Date;
  }

  export interface IAsset {
    data:
      {
        id: string;
        rank: string;
        symbol: string;
        name: string;
        supply: string;
        maxSupply: string;
        marketCapUsd: string;
        volumeUsd24Hr: string;
        priceUsd: string;
        changePercent24Hr: string;
        vwap24Hr: string;
      },
    timestamp: Date;
  }

  export interface IHistory {
      data: [
          {
              priceUsd: string;
              time: Date;
          }
      ]
  }

  export interface IAssetMarket {
    "data": [
      {
        "exchangeId": string;
        "baseId": string;
        "quoteId": string;
        "baseSymbol": string;
        "quoteSymbol": string;
        "volumeUsd24Hr": string;
        "priceUsd": string;
        "volumePercent": string;
      }
    ]
  }

  export interface IRates {
      "data": [
          {
             "id": string;
             "symbol": string;
             "currencySymbol": string;
             "type": string;
             "rateUsd": string;
          }
      ]
  }

  export interface IRate {
    "data": {
        "id": string;
        "symbol": string;
        "currencySymbol": string;
        "type": string;
        "rateUsd": string;
    }
}

export interface IExchanges {
    "data": [
        {
          "id": string;
          "name": string;
          "rank": string;
          "percentTotalVolume": string;
          "volumeUsd": string;
          "tradingPairs": string;
          "socket": boolean,
          "exchangeUrl": string;
          "updated": Date
        }
    ]
}

export interface IExchange {
    "data": {
        "id": string;
        "name": string;
        "rank": string;
        "percentTotalVolume": string;
        "volumeUsd": string;
        "tradingPairs": string;
        "socket": boolean,
        "exchangeUrl": string;
        "updated": Date
    }
}

export interface IMarkets {
    "data": [
        {
          "exchangeId": string;
          "rank": string;
          "baseSymbol": string;
          "baseId": string;
          "quoteSymbol": string;
          "quoteId": string;
          "priceQuote": string;
          "priceUsd": string;
          "volumeUsd24Hr": string;
          "percentExchangeVolume": string;
          "tradesCount24Hr": string;
          "updated": Date;
        }
    ]
}

export interface ICandles {
    "data": [
        {
            "open": string;
            "high": string;
            "low": string;
            "close": string;
            "volume": string;
            "period": Date;
        }
    ]
}

export interface IAccounts {
    "accounts": Array<IAccount>;
}

export interface IAccount {
  "username": string;
  "assets": Array<any>;
}