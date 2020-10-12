import { Injectable } from '@angular/core';
import { StockHttpSerivce } from '../dao/stockhttpservice';

@Injectable({providedIn:'root'})
export class StockService{
      constructor(private httpService:StockHttpSerivce){}  

    addNewStock(stock){
        console.log("before",stock);
        return this.httpService.addNewStock(stock);
    }

    getStocksByVariantId(id){
        return this.httpService.getStocksByVariantId(id);
    }

}