import { Injectable } from '@angular/core';
import {VariantHttpService} from 'src/app/shared/dao/variantHttpService';
import { ProductService } from './productservice';

@Injectable({providedIn:'root'})
export class VaraintService{

    constructor(private httpService:VariantHttpService,private prodService:ProductService){
    }

    getVariantColorList(id){
        return this.httpService.getVariantColorList(id);
    }

    getVariantSizeList(id){
        return this.httpService.getVariantSizeList(id);

    }

    addNewVariant(variant){
       return  this.httpService.addNewVariants(variant);
    }

    getAllVariants(){
        return  this.httpService.getAllVariants();
    }

    getVariantById(id){
        return this.httpService.getVariantById(id);
    }


}