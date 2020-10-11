import {ProdcutHttpService} from 'src/app/shared/dao/producthttpservice';
import {Product} from 'src/app/shared/model/productmodel';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class ProductService{
    ListOfProducts:Product[]=[]
    constructor(private httpService:ProdcutHttpService){}

    getListOfProduct(){
      return  this.httpService.getListOfProducts();       
    }

    onAddNewProduct(product){
        return this.httpService.onAddNewProduct(product);
    }

    getProductById(id){
      return  this.httpService.getProductById(id);
  }

    getAllProducts(){
      return  this.httpService.getAllProducts();
  }

  getProductByName(name){
      return  this.httpService.getProductByName(name);
  }
}