import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Variant } from 'src/app/shared/model/variant.model';
import { VaraintService } from 'src/app/shared/service/variantService';
import { StockService } from 'src/app/shared/service/stock.service';
import {Stock} from 'src/app/shared/model/stock.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-variant-list',
  templateUrl: './variant-list.component.html',
  styleUrls: ['./variant-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VariantListComponent implements OnInit {

  constructor(private variantService:VaraintService,private stockService:StockService
    ,private route:ActivatedRoute,private router:Router) { }
  units;
  inStock:boolean;
  ngOnInit() {
    this.getAllvariants();
  }

  dataSource :Variant[]= [];
  columnsToDisplay = ['name', 'color', 'size', 'price'];
  expandedElement: Variant ;

  getAllvariants(){
    this.variantService.getAllVariants()
    .subscribe((data:Variant[])=>{
      console.log("dataaa",data)
      this.dataSource=data;
    });
  }
  
  getStocks(id){
      this.stockService.getStocksByVariantId(id)
      .subscribe((data:Stock)=>{
        console.log(data.units);
        this.units=data.units;
        if(+data.units>0){
          this.inStock=true;
        }
      })
  }

  addNewStock(id){
    this.router.navigate(['../newStock',id],{relativeTo:this.route});
  }
}


