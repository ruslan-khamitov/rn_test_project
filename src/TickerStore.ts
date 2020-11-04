import {makeAutoObservable, runInAction} from 'mobx';
import {CorrectResponse, ErrorResponse, HandledTicker, ServerResponse} from './types/Ticker';

export enum TickerStoreState {
  Init,
  Loading,
  Loaded,
  Error,
}

export default class TickerStore {
  private data: CorrectResponse = {};
  private _state = TickerStoreState.Init;

  constructor() {
    makeAutoObservable(this);
  }

  get isEmpty() {
    return Object.keys(this.data).length === 0;
  }

  get isError() {
    return this._state === TickerStoreState.Error;
  }

  get handledData(): HandledTicker[] {
    const {data} = this;
    return Object.keys(data).map((key) => ({ticker: key, ...data[key]}));
  }

  async updateData() {
    this._state = TickerStoreState.Loading;
    try {
      const json: ServerResponse = await fetch(
        'https://poloniex.com/public?command=returnTicker',
      ).then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка при выполнении запроса');
        }
        return res.json();
      });
      if (json.error) {
        throw new Error((json as ErrorResponse).error);
      }
      // const json: UnhandledTickerObj = {
      //   APPL: {
      //     baseVolume: '1',
      //     high24hr: '1',
      //     highestBid: '2',
      //     id: 1,
      //     isFrozen: '1',
      //     last: '1',
      //     low24hr: '2',
      //     lowestAsk: '3',
      //     percentChange: '4',
      //     quoteVolume: '5',
      //   },
      // };
      runInAction(() => {
        this.data = json as CorrectResponse;
        this._state = TickerStoreState.Loaded;
      });
    } catch (err) {
      runInAction(() => {
        this._state = TickerStoreState.Error;
      });
      console.error(err);
    }
  }
}
