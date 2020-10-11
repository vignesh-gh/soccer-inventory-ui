import { Injectable } from '@angular/core';
import {VariantHttpService} from 'src/app/shared/dao/variantHttpService';
import { ProductService } from './productservice';

@Injectable({providedIn:'root'})
export class VaraintService{

    constructor(private httpService:VariantHttpService,private prodService:ProductService){
    }

    getVariantColorList(name,brand){
        return this.httpService.getVariantColorList(name,brand);
    }

    getVariantSizeList(name,brand){
        return this.httpService.getVariantSizeList(name,brand);

    }

    addNewVariant(variant){
       return  this.httpService.addNewVariants(variant);
    }


}