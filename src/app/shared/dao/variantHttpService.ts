import { Variant} from '../model/variant.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class VariantHttpService{
    constructor(private http:HttpClient){}

    getVariantColorList(name,brand){
        let reqparams = new HttpParams();
        reqparams= reqparams.append('name',name);
        reqparams=reqparams.append('brand',brand);
       return this.http.get(
           'http://localhost:8080/inventory/getAllColors', {params:reqparams}
       );
    }

    getVariantSizeList(name,brand){
        let reqparams = new HttpParams();
        reqparams= reqparams.append('name',name);
        reqparams=reqparams.append('brand',brand);
       return this.http.get(
           'http://localhost:8080/inventory/getAllSizes', {params:reqparams}
       );
    }

    addNewVariants(variant){
         return this.http.post('http://localhost:8080/inventory/addVariant',variant);
    }   

 
    
}