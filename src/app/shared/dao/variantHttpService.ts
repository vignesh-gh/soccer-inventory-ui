import { Variant} from '../model/variant.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class VariantHttpService{
    constructor(private http:HttpClient){}

    getVariantColorList(id){

       return this.http.get(
           'http://localhost:8080/inventory/getAllColors/'+id);
    }

    getVariantSizeList(id){ 
       return this.http.get(
           'http://localhost:8080/inventory/getAllSizes/'+id);
    }

    addNewVariants(variant){
         return this.http.post('http://localhost:8080/inventory/addVariant',variant);
    }   

    getAllVariants(){
        return this.http.get('http://localhost:8080/inventory/getAllVariants');
    }

    getVariantById(id){
        return this.http.get('http://localhost:8080/inventory/getVariant/'+id);
    }

 
    
}