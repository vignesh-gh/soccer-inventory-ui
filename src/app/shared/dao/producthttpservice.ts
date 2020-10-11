import { Product } from '../model/productmodel';
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class ProdcutHttpService{
    constructor(private http:HttpClient){};
    listOfProducts:Product[]=[];
    // listOfProducts:Product[]=[
    //     new Product(1,'T-shirt','Male','Nike'),
    //     new Product(1,'shoes','Female','puma'),
    //     new Product(1,'bottle','All','Nike'),
    //     new Product(1,'Ball','Male','Nike'),
    //     new Product(1,'pant','Male','Nike'),
    // ];


    getListOfProducts(){
     return this.http.get('http://localhost:8080/inventory/getAllProducts');      

    }

    onAddNewProduct(product){
       return  this.http.post('http://localhost:8080/inventory/addProduct',product);
    }

    getProductById(id){
        return this.http.get('http://localhost:8080/inventory/getProduct/'+id);
    }

    getAllProducts(){
        return this.http.get('http://localhost:8080/inventory/getAllProducts');
    }

    getProductByName(name){
        let reqparams = new HttpParams();
        reqparams= reqparams.append('name',name);        
        return this.http.get('http://localhost:8080/inventory/getProduct',{params:reqparams});
    }
}