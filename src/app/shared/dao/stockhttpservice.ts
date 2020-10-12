import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})
export class StockHttpSerivce{

    constructor(private http:HttpClient){}

    addNewStock(stock){
        return this.http.post('http://localhost:8080/inventory/addNewStock',stock);
    }

    getStocksByVariantId(id){
        return this.http.get('http://localhost:8080/inventory/getStock/'+id);
    }
}