import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/shared/service/productservice';
import { Product } from 'src/app/shared/model/productmodel';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { VaraintService } from 'src/app/shared/service/variantService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService,private varaiantService:VaraintService,
    private router:Router,private route:ActivatedRoute) { }
  listOfProducts:Product[]=[];
  dataSource:Product[]=[];;
  variantColors=[];
  varaiantSize=[];

  ngOnInit() {
   this.getAllProducts();
  }

  columnsToDisplay = ['name', 'gender', 'brand'];
  expandedElement: Product;
  

  loadVariant(element){
    console.log("element",element);
    this.varaiantService.getVariantColorList(element.name,element.brand)
    .subscribe((data:string[])=>{
      this.variantColors=data;
      console.log(data.length);

    }); 
  
    this.varaiantService.getVariantSizeList(element.name,element.brand)
    .subscribe((data:string[])=>{
      this.varaiantSize=data;
    });

    
  
  }

  onAddNewProduct(){
    this.router.navigate(['../newProduct'],{relativeTo:this.route});
  }

  getAllProducts(){     
   this.productService.getListOfProduct()
   .subscribe((data:Product[])=>{
    this.dataSource=data;
   });    
  }

  onNavVariant(id){   
    this.router.navigate(['../variant',id],{relativeTo:this.route})
}

}


