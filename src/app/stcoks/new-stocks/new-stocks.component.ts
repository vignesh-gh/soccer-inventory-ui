import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/shared/service/stock.service';
import { Stock } from 'src/app/shared/model/stock.model';
import { ActivatedRoute } from '@angular/router';
import { VaraintService } from 'src/app/shared/service/variantService';
import { Variant } from 'src/app/shared/model/variant.model';
import {ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-stocks',
  templateUrl: './new-stocks.component.html',
  styleUrls: ['./new-stocks.component.css']
})
export class NewStocksComponent implements OnInit {
  @ViewChild('unit') unitIP: ElementRef;
  variantName;
  variantColor;
  unit;
  showStocks:boolean=false;
  variantId:number; 
  constructor(private stockService:StockService,private route:ActivatedRoute,
    private variantServie:VaraintService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log(params['id']);
      this.variantId=+params['id'];
    });
   this.getVariantById(this.variantId);
  }

  saveStock(value:string){
    console.log("value",value,this.variantId);
    var stock=new Stock(0,this.variantId,value,'','');
    this.stockService.addNewStock(stock)
    .subscribe((data:Stock)=>{
      this.showStocks=true;
      if(data!=null){
        this.unitIP.nativeElement.value='';
      }
    });
  }

  getVariantById(id){
    this.variantServie.getVariantById(id)
    .subscribe((data:Variant)=>{
      console.log(data);
      this.variantName=data.name;
      this.variantColor=data.color;
        console.log("variant",data.name,data.color); 
    });
  }

}
